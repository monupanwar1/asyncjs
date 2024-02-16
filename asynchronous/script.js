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


    


//  const parchi =    new Promise(function(resolve,rejected){
//     fetch('https://randomuser.me/api/')
//     .then(raw=>raw.json())
//     .then(result=>{

//         if(result.results[0].gender=="male") resolve();
//         else rejected();

//     });







// });
// parchi.then(function(){
//     console.log("harabutton");
// })
// .catch(function(){
//     console.log("red button");
// })

// call back hell callback ek function hain jo bas isme thoda special ise pass kiya jata hain as an argument 
//Jab particular function chll jata hain then function ki output ke liye callback krna padta hain


// var getData=((url,callback)=>{
//     fetch(url)
//     .then(raw=>raw.json())
//     .then(result=>{
//     callback(result)

//     })

// })
// getData("https://randomuser.me/api/",(result)=>{
//     console.log(result.results[0].name.first,
//         result.results[0].email,result.results[0].gender);
// })



//async await mtlb koi bhi function bana lo lekin asyns me jo line bad me likhte hain wo phala chalte hain
// kyoki jo code hain jo side stack par depend karta hain asyn await isko change kaar deta we use asyns code as like a sync code
//

// var async, a = async () => {
//     let response = await fetch("https://randomuser.me/api/");
//     let data = await response.json();
//     console.log(data); // assuming you want to log the data received
// };


// a(); 

//event loop



//CALLBACK VS PROMISSES VS ASYNC/AWAIT

// EK URL SE DATA LAO OR CONSOLE PAR SHOW KARO

// 


// var datafetch=((url,callback)=>{
//     fetch(url)
//     .then(raw=>raw.json())
//     .then(result=>{
//         callback(result);
//     })

// })  

// datafetch("https://randomuser.me/api/",(result)=>{
//     console.log(result);

// })


// now try to do this help of the prommisses

// var fetcher =((url)=>{
//     const parchi=new Promise((resolve, reject) => {
//         fetch(url)
//         .then(raw=>raw.json())
//         .then(result=>{
//             resolve(result);

//         })
        
//     })

// return parchi;

//     })
//     fetcher("https://randomuser.me/api/")
//     .then((result)=>{
//         console.log(result);
//     });







// NOW DO THIS BY HELP OF THE ASYNC AWAIT
// const asyncFetch = async (url) => {
//     let data = await fetch(url);
//     let result = await data.json();
//     return result;
//   };
  
//   var asyncf2 = async () => {
   
//       let result = await asyncFetch("https://randomuser.me/api/");
//       console.log(result);
    
//   };
  
//   asyncf2();
  
// GENERATORS ARE USED TO CHANGE THE FLOW OF THE CODE AND ALSO PAUSE THE EXEXUTION OF THE CODE
function* printnumber(){
    console.log("started");
    yield 1;
    console.log("1st chala")
    yield 2;
    console.log("2nd chala");
    yield 3;
    console.log("3rd chala")


}
const ans =printnumber();
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);





//
//
//
//
//
//
//
//
//
///
///
///
/////
///
//
//
//


//
////
//

///








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
