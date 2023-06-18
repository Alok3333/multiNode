let a= 10;
let b= 0;


let waitingDate = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 2000);
});

waitingDate.then((b) => {
    console.log(a+b);
});