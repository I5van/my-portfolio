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

// let n = Number(prompt("Введите шестизначное число"));
// let a = Math.floor(n/100000);
// let b = Math.floor(n/10000)%10;
// let c = Math.floor(n/1000)%10;
// let d = Math.floor(n/100)%10;
// let e = Math.floor(n/10)%10;
// let f = n%10;
// // alert(`${a} ${b} ${c} ${d} ${e} ${f}`)
// if((a+b+c)==(d+e+f)){
//     alert("Число счастливое")
// }
// else{
//     alert("Число несчастливое")
// }

// let k = Number(prompt("Введите число"));
// let i = k-10;
// let f = k+11;
//     while(i<f){
//     i+=1
//     console.log(i);
// }
// let s = Number(prompt("Введите сумму"));
// let k = Number(prompt("Введите время"));
// let p = Number(prompt("Введите проценты годовых"));// 
// let i = 0;
// while(i<k){
// s=s+(s/100*p)

//  i+=1


 
// }
// console.log(s)


// let n = Number(prompt("Введите число"));
//  i=0;
//  let s =Number(prompt("Введите число"));
// while( i<n+60){
//     i+=1;
//     console.log(i);
//  доделать на уроке
// }

// let n = Number(prompt("Введите число"));
// let m = Number(prompt("Введите число"));
// if(m>n){
//     i=n
// }
// else{
//     i=m
// }
//  while(m % i !=0 && n % i != 0){
//     i+=1
//  }
//  console.log(i)

// let n = Number(prompt("Введите число"));
// let m = Number(prompt("Введите число"));
// i = 0;
// if(m>n){
//     i=m
// }
// else{
//     i=n
// }
// while(i % m !=0 && i % n != 0){
//     i+=1
//  }
//  console.log(i);
// let a = Number(prompt("Введите большее число"));
// let b = Number(prompt("Введите меньшее число"));
// i=b
// j=0
// while(i<a){
//     i+=1
//     j+=1
// }
// console.log(j)
//  let s = 10
//  let t = 7
//  m=s

//  for(let i = 0; i<6; i++){
//     s=s+3/100*s
//     m +=s
//  }
//  console.log(m)

// let s1= prompt("Введите страну")
// let s2 = prompt("Введите ее столицу")
// alert("Столица государства " + s1 + " - город " + s2)
// let word= prompt("Введите слово")
// let index = prompt("Введите символ")
// // console.log(word [index-1])


// let n =prompt("Введите слово")
// let a = n.length-1
// console.log(a)
// let i = 0
// while(i<a){
//     console.log(n[i])
//     i+=1
// }
// let n =prompt("Введите слово")
// let i = n.length -1
// console.log(i)


// while(i>=0){
//     console.log(n[i])
//     i-=1
   
// }

// let word = prompt("Введите слово из 4 букв")
// if(word[0]== word[3] && word[1]==word[2]){
//     alert("это слово палиндром")
// }
// else{
//     alert("это слово не является палиндромом")
// }
// let word = prompt("Введите слово")
// let length = word.length
// let isPolindrom = true
// i=0
// while(i<length/2){
//     if(word [i]== word [length-i-1]){
//         isPolindrom = true

//     }
//     else{
//         isPolindrom = false
//     }
//     i+=1
    
// }
// if(isPolindrom==true){
//     alert("Это слово палиндром")
// }
// else {
//     alert("Это слово не палиндром")
// }
// let str = prompt("Введите информацию")
// let count0= 0
// let count1= 0
// for(let i = 0;i<str.length; i++){
//     if(str[i]=="0"){
//         count0++
//     }
//     else{
//         count1++
//     }
// }
// alert(`Количество цифр 1 = ${count1}`)
// alert(`Количество цифр 0 = ${count0}`)
// let word = prompt("Введите предложение ")
// console.log(word.indexOf(`Наполеон`))
let word = prompt("Введите почтовый ящик ")
if(word.indexOf(`@`)==-1){
    alert("Почтовый адрес неправильный")
}
else{
    alert("Почтовый адрес правильный")
}