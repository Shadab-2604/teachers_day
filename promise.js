// var a = new Promise(function (resolve,reject){
//     if(false){
        
//         return resolve()
//     }
//     else{
//         return reject()
//     }
// })


// a
//     .then(function(){
//         console.log('Success')
//     })
//     .catch(function(){
//         console.log('Error')
//     })

// user will ask for a nuber btn 0 seh 9 and if the number is below 5 reslove if not reject


// var ans = new Promise((res,rej,pen)=>{
//     var n = Math.floor(Math.random()*10)

//     if(n<5){
//         res(n);
//     }
//     else{
//         rej(n);
       
//     }
// })

// ans
//  .then(function(e){
//     console.log('Success: The number is less than 5',e);
//  })
//  .catch(function(err){
//     console.log('Error: The number is greater than or equal to 5',err);
//  })



// var ans = new Promise(function(res,rej){
//     return res("Sabse seh phely ghar par aaao")
// })

// var p2=ans.then(function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         return res("gate kholo aur ghar mein aaho")
//     })
// })

// var p3=p2.then(function(data){
//     console.log(data);
//     return new Promise((res,rej)=>{
//         return res("khane ke liye aaho")
//     })   
// })

// p3.then(function(data){
//     console.log(data);
// })


//fetch asyn 

// function abcd(){
//     fetch(`https://randomuser.me/api/`)
//     .then((raw)=>{
//         // console.log(data.json)
//         return raw.json()
//     })
//     .then((data)=>{
//         // console.log(data.json)
//         console.log(data)
//     })

// }
// abcd()

// now without usong then

async function abcd(){
    let raw = await fetch(`https://randomuser.me/api/`)
    let ans=  await raw.json()
    console.log(ans)
// jab bho koyi code asyn hai toh us ke liye wait kar na pad ta hai
}
abcd()