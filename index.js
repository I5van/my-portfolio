// let m =  Number (prompt('Введите число денег Даши'));
// let n = Number (prompt ('Введите число денег Маши'));
// let k = (m - n)/2;
// let f = (n - m)/2;
// if(m > n){
//     alert(`Даша даст Маше ${k} рублей, и у обеих девочек станет ${m-k} рублей.`)
// }
// else{
//     alert(`Маша даст Даше ${f} рублей, и у обеих девочек станет ${n-f} рублей.`)
// }

// доделать

// Math.floor(Math.random()*100)
// let i=0;

// while(i<10){
//    let n= Math.floor(Math.random()*100)
//     console.log(n)
//     i+=1;
      
// }
// let k=n/10
//     console.log ( )

let n = Number(prompt("Введите шестизначное число"));
let a = Math.floor(n/100000);
let b = Math.floor(n/10000)%10;
let c = Math.floor(n/1000)%10;
let d = Math.floor(n/100)%10;
let e = Math.floor(n/10);
let f = n%10;
alert(`${a} ${b} ${c} ${d} ${e} ${f}`)

