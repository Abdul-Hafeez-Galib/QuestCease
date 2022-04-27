const {TwitterApi}=require('twitter-api-v2');
const Sentiment=require('sentiment');
const sentiment=new Sentiment();

const express =require('express');
const bodyParser=require("body-parser");
const app=express();
var PORT=process.env.PORT || 5000;
const router=express.Router();
app.use(bodyParser.urlencoded({extended: true}));
const cors = require('cors');
app.use(cors());

const client=new TwitterApi({
    appKey:'xxxxxxxxxxxxxx',
    appSecret:'xxxxxxxxxxxx',
    accessToken:'xxxxxxxxxxxx',
    accessSecret:'xxxxxxxxxxxxxx'
})

var id;


app.get('/get/username/:id',(req,res)=>{
    let t;
    const tweet=async()=>{
    try{
        const d=await client.v2.userByUsername(req.params.id);
        res.send(d);
        
    }
    catch(e){
        console.error(e);
    }

    }
    tweet();
    

})
app.get('/tweets/:id2',(req,res)=>{
    const tweet2=async()=>{
    try{
        const h=await client.v2.get('users/'+req.params.id2+'/tweets');
        res.send(h);
        
    }
    catch(e){
        console.error(e);
    }
    }
    tweet2();
})

app.get('/sentiment/:word',(req,res)=>{
    let {score}=sentiment.analyze(req.params.word);
    res.send({score});
})

app.listen(PORT,(req,res)=>{
    console.log("started");
})

