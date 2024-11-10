const { default: axios } = require('axios');
const express = require('express');
const app =express();
const client=require('./client');

app.get('/',async(req,res)=>{

    const cashedData= await client.get('recipes');

    if(cashedData){
        return res.json(JSON.parse(cashedData));
    }
    const {data}=await axios.get('https://dummyjson.com/recipes');

    await client.set('recipes',JSON.stringify(data));
    await client.expire('recipes',1000);

    try{
        return res.json(data);
    }
    catch{
        console.log('Error Occure');
    }
    
})

app.listen(9000,()=>{
    console.log("Connection Established");
})

