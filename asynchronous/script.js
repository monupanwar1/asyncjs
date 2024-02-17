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
// function* printnumber(){
//     console.log("started");
//     yield 1;
//     console.log("1st chala")
//     yield 2;
//     console.log("2nd chala");
//     yield 3;
//     console.log("3rd chala")


// }
// const ans =printnumber();
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);





//
//
// things to  know before the react js 
// arrays,oobjects import and export
//map,filter,rteduce also we need to learn about the arrow fnc,which is the most imoprrtant among them

//arrays are dyanmic in nature in js
//array is a data structure which contain more than one type of the element
//[1,"kunal",function(){},etch ]
//


// var arr =[1,2,3,4]
// var b =arr.pop();
// console.log(b);
//  raarct js me me ek state hota jo mutable nhi hota hain mtlb vo not changable hota hain directly  



//know we learn how to  change state;


// var state=[1,2,3,4];
// state=[1,2,3];



// var state =[1,2,3];
// var copy =[...state];
// copy.pop();


// var state ={
//   name:"harsh",age:24
// }
// var copy={...state};
// copy.name="harshita";


// state=copy;

//destructring used to whren we want to acees obj then




// var obj ={
//   name:"kunal",age:20
// }

// const {age}=obj; 
// age;

// example secon to try


// var arr =[12,function(){}];
// var[first,sec]=arr;
// first;
// sec;



//
//  import and export in react ,there are comoponents in site in our langauage we called it hisa and har components ko alag  alag components ko bind karna padta hain taki ek website ban sake

var cartexport =()=>{
  console.log("hello i am exported");

}

//for multiple improt and expoert at a time we uses export function with before each
// function nameexporting it


//export default cart; for single 
////import ,import from cart and then file name/
//import more than one file at a time imprt{f1,f2} from file name;


// arrow function ,function ka bada bhai hota hain

// var b =()=>{
//   console.log("hii panwar");
// }
// b();
// var b =(val)=>{
//   console.log(val);
// }
// b(12);
// var b =val=>{
//   console.log(val);
// }
// b(12);

//fat arrow function;



// var b =()=>{
//   console.log("hii panwar");
// }
// b();
// var b =()=>{
//   console.log("hii panwar");
// }
// b();

/// let take one or more example 
// const abc=()=>"kunal";

// console.log(abc()+"panwar");
//answer of this is kunalpanwar;
// what if we use the brackets{}then return is compulsary for it
//  let abc =()=>{
//   return "kunal";
//  }
// console.log(abc()+"panwar");



///  now try with objects
//  const abc =()=>{
//   name:"kunal";

//  }; console.log(abc());

//dont show anything bcs it treated {} as the body of the function not the object now what to do a question arise
// const abc =()=>({
//   name:"kunal"

//  });
//   console.log(abc());
  
 

/// now we discuss about map filter map filter basically bap hota hain jo dono array par chlta hain dono ka kaam ka arraya pr kuch kam karna or ek new array return karta

// bole to map,filter new array generates karte hain without chnaging the parrent of that data
//   var arr=[1,2,4,5];

//  const arr1= arr.map(val=>val*2);
//  console.log(arr);
// console.log(arr1);

/// map ke ander return karna compulsary hota hain
///agar return nhi  kiya to new array genrate nhi hoga


// practise some question on the map filter ;
// ek array hain jisme jitne bhi number 5 se bade h unme jod do and bakki to exactly return kar do

//
//  var state =[1,2,3,4,5,6,8,9,10];
//  const arr =state.map(elem=>elem>5 ? elem+5 :elem);
//  console.log(arr);


// map me jitne elemes ya nuber utne hi return karta but in in filtr we can reduce the number the of the total no of  the element
// var arr =[1,2,3,4,5,6,7,9,10];
// const ans =arr.filter(elem=>elem>4);
// console.log(ans);

  

// example no 2

// var arr =[
  
//     {name:"kunal",gender:"male"},
//     {name:"harsh",gender:"male"},
//     {name:"ishu",gender:"female"}
  
// ]
//  const ans =arr.filter(elem=>elem.gender==="male");
//  console.log(ans);
 
////
var arr =[
  {product:"iphone",price:"1200000"},
  {product:"ipad",price:"70000"},
  {product:"samsung",price:"30000"},
  {product:"magee",price:"12"}
]

const ans =arr.filter(elem=>elem.price<20);
console.log(ans);//

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
