

const express = require('express')
const client = require('./connection')
const jwt = require('jsonwebtoken');
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
    const server = express()
    server.use(express.json());
    server.use('/user', require('./api/user'))
    let otp_list = [ ]
   


    // authenticatio
    server.post('/authentication', (req, res)=>{  
        const { phonenumber } = req.body
        const user = otp_list.find( item =>{return item.phonenumber === phonenumber })
        if(user === undefined){
            otp_list.push({
                otp:Math.floor(100000 + Math.random() * 900000),
                phonenumber:phonenumber,
                inital_date:new Date(),
                counterTimer:0,
            })
            res.json( { status:200, message:'کد تایید برای شما فرستاده شد'})
        }else{
            res.json( { status:205, message:`برای تلاش مجدد با شماره ${phonenumber} یک دقیقه دیگر تلاش کنید`})
        }
    })


    // otp
    server.post('/otp', (req, res)=>{  
        const { phonenumber , otp } = req.body
        const user = otp_list.find( item =>{return item.phonenumber === phonenumber })
       
        if(user !== undefined){
            // too many attend
            if(user.counterTimer === 2){
                otp_list = otp_list.filter (item=>item.phonenumber !== phonenumber)
                res.json( { status:205, message:'بیشتر از تعداد مجاز تلاش کرده اید لطفا دوباره وارد شوید'})
    
            }
            // success
            if(user.otp === parseInt(otp) && user.phonenumber === phonenumber){
                // remove otp from otp_list
                otp_list = otp_list.filter (item=>item.phonenumber !== phonenumber)
                 // generate token
                const token = jwt.sign(
                    { phonenumber: phonenumber }
                    , process.env.OTP_SECRET_KEY , { expiresIn: '10m' });
                
                //check user authority
                client.query(`select * from users where phone_number ='${phonenumber}'` , (err,result)=>{
                    // user already signup so forward to profile with his data
                    if(result.rows.length === 1){
                        res.json( { status:200, message:'کد تایید  شما تایید شد' , token:token , state:'registered',data:result.rows[0]})
                    }   
                    //user does'nt exist forward user to signup form
                    else if (result.rows.length === 0){
                        res.json( { status:200, message:'کد تایید  شما تایید شد' , token:token , state:'unkown'})
                    }else{
                        console.log('duplicate user phonenumber in database')
                        res.json( { status:200, message:'سرور ارور' , token:token , state:'duplicate'})
                    }
                })
            }
            // wrong password
            else{
                otp_list = otp_list.map(item=>{
                    if(item.phonenumber === phonenumber){
                        return {
                            ...item,
                            counterTimer:item.counterTimer+1
                        }
                    }else{
                        return item
                    }
                })
           
                res.json( { status:210, message:'کد تایید  شما اشتباه است '})
            }
        }else{
            res.json( { status:205, message:'مهلت ورود شما تمام شده دوباره تلاش کنید'})
        }
    })


    // romve expiredDate otp:
    setInterval(() => {
      
        const now = new Date()
        otp_list= otp_list.filter(item=>{
            const diff= Math.floor(Math.abs( item.inital_date - now ) / 60000 )
            return diff < 1
        })
       console.log('otp_list:',otp_list)
    },2000); 








    server.all('*', (req, res) => {
        return handle(req, res);
    })
    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
    })
})