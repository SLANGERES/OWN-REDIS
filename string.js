const client=require('./client')
async function init(){
    //Set the value in the string key value pair
    
    // await client.set('user:5','akansha')


    // time to live we can expire or set an expire to the value
    await client.expire('user:5',10);

    //getting values from the redis Database from keys
    const resuult=await client.get('user:5');

    console.log(resuult);
}

init();