var btn =document.querySelector("#getuser");




btn.addEventListener("click",()=>{
   getnewuser();
})






getnewuser =()=>{

    fetch(`https://randomuser.me/api/`)
    .then(raw=>raw.json())
    .then(result=>{
    
       const {name,email,gender,picture}=(result.results[0]);
      document.querySelector("#parent").innerHTML+=
    
      `
    
            <div class="card h-96 w-64 bg-[#dadada] rounded-2xl border-2 border-[black] px-2 py-2">
            <div class=" h-24 w-24 rounded-3xl border-2 border-[black] mb-10 overflow-hidden">
                <img class="h-full w-full fit-cover" src="${picture.large}"></div>
           <div class="cards">
            <h1 class="font-bold">${name.first}</h1>
            <h3 class="font-semibold">${gender}</h3>
            <h3 class="font-semibold">${email}</h3>
            <p class="font-2xl opacity-90">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, accusantium?</p>
           </div>
          </div>`
    });
}






   
    








// var parent = document.querySelector("#parent");




//  var btn =document.querySelector("#getuser");

//  btn.addEventListener("click",()=>{
//     getnewuser();

//  })


// function getnewuser(){

//     fetch(`https://randomuser.me/api/`)
//     .then(raw => raw.json())
//     .then(result=>{
    
//        const {name,email,gender,picture}=result.results[0];
//       document.querySelector("#parent").innerHTML+=`
      
//       <div class="card h-96 w-64 bg-[#dadada] rounded-2xl border-2 border-[black] px-2 py-2">
//       <div class=" h-24 w-24 rounded-3xl border-2 border-[black] mb-10 overflow-hidden">
//           <img class="h-full w-full fit-cover" src="${picture.large}"></div>
//      <div class="cards">
//       <h1 class="font-bold">${name.first}</h1>
//       <h3 class="font-semibold">${gender}</h3>
//       <h3 class="font-semibold">${email}</h3>
//       <p class="font-2xl opacity-90">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, accusantium?</p>
//      </div>
//     </div>`
        
//     })


// }
