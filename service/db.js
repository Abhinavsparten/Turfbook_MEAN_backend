//import mongoose
const mongoose=require('mongoose')

mongoose.connect(process.env.DATABASE,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("...Mongodb atlas connected ");
}).catch((error)=>{
    console.log("connection error"+error);
})
 //modal
 const User=mongoose.model('User',
 {
    uid:Number,
    uname:String,
    psw:String,
    profile:[]

 })
 const Turf=mongoose.model('Turf',
 {
 
courtid:Number,
courtname:String,
place:String,
district:String,
pin:String,
fee:Number,
courtimage:String,
propname:String,
contactno:String,
status:Boolean,
userid:Number,
accno:Number


 })
 const Bank=mongoose.model('Bank',
 {
    acno:Number,
    bankname:String,
    pass:String,
    balance:Number,
    userid:Number

 })
 const Booking=mongoose.model('Booking',
 {
   courtid:Number,
   uid:Number,
   user:String,
   st:Number,
   et:Number,
   date:Date,
   courtname:String



 })

//export
module.exports={
    User,Turf,Bank,Booking
}
