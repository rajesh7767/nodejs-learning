
// const error = new Error("something wents wrong");
// console.log(error.message);

// throw new Error("something was happened");

function doSomething(){
    console.log(Math.random());
}

// const promise = new Promise((resolve, reject) => {
//     if(true){
//         resolve(doSomething());
//     }else{
//         reject(doSomething());
//     }
// } );

// promise.then((val)=>{
//     console.log(val);
// }).catch((e) => {
//     console.log(e.message);
// })

process.on("uncaughtException", (error) => {
    console.log("hey man something wents wrong" + error.message);
    process.exit(1);
});

doSomething();

