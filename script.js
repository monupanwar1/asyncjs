// async js started lets start




// setTimeout(function(){


// console.log("hey3");


// },1000)



// setTimeout(()=>{


// console.log("hey panwar")


// },1000)

// second is setTimeinterval

// setInterval(function(){


//     console.log("kunal");
// },2000)


// setInterval(()=>{  


//     console.log("kunal");
// },2000)



//  for stop the set interal we needs to do so clear interval
  //var count =1;
  //const interal =setInterval(()=>{

    //  ++count;
     // console.log(count);
     // if(count==5)clearInterval (interal);




  //},1000)
// third one is fetch api
// fetch asyn js ka part as we already know that fetch is used to fetch something we want
//  let consider a site is slow to get data and wait a lot
// example a bird we send for the sending letter to the love
// and what if bird fall love with other and never came back



// fetch('https://randomuser.me/api/')
// .then(raw=>raw.json())
// .then(read=>console.log(read.results[0].age));


// fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then(raw=>raw.json())
// .then(read=>console.log(read))


// axios is developer friendly and in this only one then is used
// axios.get('https://randomuser.me/api/')
// .then(result=>console.log(result))


// promisses in js it is a code which is  async it run after the main stack as we alredy know other thing is that this result will be never show  on the code
// it this two things are present one is if data run smmothly the try chalge then iski bad catch chalega  



// aman ne ragav ko food lene ke liye bhej diya sath hi use ek parhi de di ki jab vo food le kar aayega to pata chl jayega  
// agar ragav na aya tha rejected and food le kr aay to resolve


    


 const parchi =    new Promise(function(resolve,rejected){
    fetch('https://randomuser.me/api/')
    .then(raw=>raw.json())
    .then(result=>{

        if(result.results[0].gender=="male") resolve();
        else rejected();

    });







});
parchi.then(function(){
    console.log("harabutton");
})
.catch(function(){
    console.log("red button");
})









// these all are required when some time is requried for the code
//
//
//
//
////
//
//
//
//
//
//
//
//
//
//
//
//
//
