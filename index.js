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
// let word = prompt("Введите почтовый ящик ")
// if(word.indexOf(`@`)==-1){
//     alert("Почтовый адрес неправильный")
// }
// else{
//     alert("Почтовый адрес правильный")
// }
// let word = prompt("Введите предложение ")
// console.log(word.indexOf(`бак`))
// let s = prompt("Введите предложение")
// let hasWord =false
// for(let i = 0; i<s.length-2; i++){
//     if(s[i]=="б"&& s[i+1]=="а"&& s[i+2]=="к"){
//         hasWord = true
//     }


// }
// console.log(`${hasWord}`)

// let s = prompt("Введите строку")
// let resultS = ""
// isFirstSpaces = true
// for(let i = 0; i<s.length; i++){
//     if(s[i] !=" " && isFirstSpaces==true
//     ){
//         isFirstSpaces = false
//     }
//     if(isFirstSpaces == false){
//         resultS= resultS+s[i]
//     }
// }
// console.log(`${resultS}`)
//  let s =prompt("Введите строку")
// let resultS = ""
// for(let i =0; i<s.length; i++){
//     if(s[i] != "а"){
//         resultS = resultS + s[i]
//     }
//     else{
//         resultS = resultS + "б"
//     }
// }
// console.log(resultS)
// let s = "яблоко"
// console.log(s.slice(1, 5))
// console.log (s.slice(3,6))

// let s = "Информатика"
// console.log(s.slice(2,7))
// console.log (s.slice(7,10))
// let s = "вертикаль"
// console.log(s.slice(3,5)+ s.slice(2,3))
// console.log (s.slice(0,2)+s.slice(3,4)+ s.slice(5,7))
// let s = prompt("Введите текст")
// isDigit = true 
// numbers = "0123456789"
// for(let i = 0; i <s.length; i++){
//     if(numbers.indexOff(s[i]) ){
//         isDigit = true
//     }
//     else{
//         isDigit = false;
//     }
// }
// let s = prompt("Введите текст")
// let n = 1
// for (let i = 0; i<s.length; i++){
//     if(s[i]==" "){
//         n=n+1
//     }
// }
// console.log(n)
// let s = prompt("Введите текст")
// let n = 0
// for (let i = 0; i<s.length; i++){
//     if(s[i]=="." || s[i]=="!" || s[i] == "?"){
//         n=n+1
//     }
// }
// console.log(n)
// let s =prompt("Введите текст")
// for(let i =0;s[i]!=" "; i++){
//     if(s[i]==" "){
//         console.log(s.slice(0,i))

//     }
//     for(let b = i; s [b] !=" "; b++){
//         console.log(s.slice(i+1,b))
//     }
// }
// let a = []
// for(let i=0; i<10; i++){
//     a.push([i]) 
// }
// console.log(a)
// let a = []
// for(let i=0; i<10; i++){
//     a.push([i*2]) 
// }
// console.log(a)
// let a = [1, 6, -7, 15, -86, 0]
// for(let i=0; i<10; i++){
//     a[i]=a[i]*-1
// }
// console.log(a)
// let a = [1, 6, -7, 15, -86, 0]
// let n = prompt("Введите число")
// let flag = false
// for(let i = 0; i<a.length; i++){
//     if(a[i]==n){
//         flag=true
//     }

// }
// if(flag==true){
//     console.log("число есть в массиве")
// }
// else{
//     console.log("числа нет в массиве")
// }
// let a = [1, 6, -7, 15, -86, 0]
// let even = 0
// let odd = 0
// for(let i= 0;i<a.length; i++){
//     if (a[i] % 2==0){
//         even = even+1
//     }
//     else{
//         odd = odd + 1
//     }
// }
// console.log(`${even}, ${odd}`)
// let a = [1, 6, -7, 15, -86, 0]
// let odd = []
// let even = []
// for(let i= 0;i<a.length; i++){
//     if (a[i] % 2==0){
//       even.push(a[i])
//     }
//     else{
//       odd.push(a[i])
//     }
// }
// console.log(`${even},${odd}`)
// let a = [-165,-170,-175,150,155,165]
// let countBoys = 0
// let countGirls = 0
// let amountBoys = 0
// let amountGirls = 0
//     for(let i = 0; i<a.length ; i++){
//         if(a[i]<0){
//             countBoys = countBoys+1
//             amountBoys = amountBoys + a[i]
//         }
//         else{
//             countGirls = countGirls +1
//             amountGirls = amountGirls + a[i]
//         }
//     }
//     console.log(amountGirls/countGirls)
//     console.log(amountBoys/countBoys*(-1))

// let a = [1, 6, -7, 15, -86, 0]
// max = a[0]
// for(let i =0; i<a.length; i++){
//     if(a[i] > max){
//         max=a[i]
//     }
// }
// console.log(`${max}`)
// let a = [1, 6, -7, 15, -86, 0]
// min = a[0]
// for(let i = 0; i<a.length; i++){
//     if(a[i]<min){
//         min=a[i]
//     }
// }
// console.log(`${min}`)
// let a = [1, 6, -7, 15, -86, 0]
// for(let i =0;i<a.length/2; i++){
//   let t = a[i] 
//   a[i] = a[a.length-i-1]
//   a[a.length-i-1] = t
// }
// console.log(`${a}`)
// let array = [3,1,4,2]
// let flag = true
// while(flag== true){
//     flag= false
//     for(let i = 1; i<array.length; i++){
//         if(array[i]<array[i-1]){
//             t = array[i]
//             array[i] = array[i-1]
//             array[i-1] = t
//             flag =true
//         }
//     }
// }
// console.log(`${array}`)
// let a = [1, 6, -7, 15, -86, 0]
// let max = a[0]
// let max2= a[0]
// for(let i = 0; i<a.length;i++){
//     if(a[i]>max){
//         max2=max
//         max=a[i]
//     }
// }
// console.log(`${max2}`)
// function isSimple(n){


//     let flag = true
//     for(let i = 2; i < n; i++){
//         if (n % i == 0){
//             flag = false
//         }

//     }
//     if(flag == true){
//         console.log(`Число ${n} - простое`)
//     }
//     else{
//         console.log (`Число ${n} - не простое`)
//     }
// }


// let a =[10,127,345,564,972]
// for(let i = 0 ; i<a.length; i++){
//     isSimple(a[i])
// }

// function reverse(n){
//     let strN = n.toString()
//     let arrayN = strN.split("")
//     arrayN.reverse()
//     strN = arrayN.join("")
//     n=Number(strN)
//     console.log(n)
// }
// let n = Number(prompt("Введите число"))
// reverse(n)
// function minus() {
//     return a - b
// }
// function plus() {
//     return a + b
// }
// function multiplication() {
//     return a * b
// }
// function division() {
//     return a / b
// }
// let a = Number(prompt("Введите число"))
// let b = Number(prompt("Введите число"))
// let sign = prompt("Введите знак")
// let answer = 0
// if (sign == "-") {
//     answer=minus()
// }
// if (sign == "+") {
//     answer=plus()
// }
// if (sign == "*") {
//     answer=multiplication()
// }
// if (sign == "/") {
//     if (b == 0) {
//         console.log("делить на ноль нельзя")
//     }
//     else {
//         answer=division()
//     }
// }
// if (sign != "-" && sign != "+" && sign != "* " && sign != "/") {
//     console.log("Некорректный знак")
// }

// console.log(`${answer}`)
// document.body.style.height = "2000px"

let head1 = document.querySelector("#graphic-design")

console.log(head1.innerHTML)
let head2= document.querySelector("#interior-design")
let head3 = document.querySelector("#UX-UI-design")
// 1 блок//
let firstHead = document.querySelector("#block1-title")
let firstDescription = document.querySelector("#block1-description")
// 2 блок//
let secondHead = document.querySelector("#block2-title")
let secondDescription = document.querySelector("#block2-description")
// 3 блок//
let thirdHead = document.querySelector("#block3-title")
let thirdDescription = document.querySelector("#block3-description")
let thirdBlock = document.querySelector("#block3")

head1.onclick=()=>{
    head1.style.opacity="100%"
    head2.style.opacity="50%"
    head3.style.opacity="50%"
}
head2.onclick=()=>{
    head1.style.opacity="50%"
    head2.style.opacity="100%"
    head3.style.opacity="50%"
    secondHead.innerHTML="studio set design"
    secondDescription.innerHTML="In order to create a welcoming set, curves are used to break the ice much needed to start a conversation with new guests."
    firstHead.innerHTML="exhibition design"
    firstDescription.innerHTML="When creating a new idea, I enjoy working with volumes, with my hands, going from crazy ideas to feasible easily. "
    thirdBlock.style.opacity="0%"
}
head3.onclick=()=>{
    head1.style.opacity="50%"
    head2.style.opacity="50%"
    head3.style.opacity="100%"
}
