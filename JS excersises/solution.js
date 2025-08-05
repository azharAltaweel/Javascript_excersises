// ***** Question 1 *****
function swapProducts(){
const product1=document.getElementById('1');
const product2=document.getElementById('2');
let x=product1.textContent;
product1.textContent=product2.textContent;
product2.textContent=x;
}

// ***** Question 2 *****
function EvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Section A (Even)";
    } else {
        return "Section B (Odd)";
    }
}

// ***** Question 3 *****
function fact(x) {
    if (x < 0) 
        return "Factorial not defined for negative numbers";
    if (x === 0 || x === 1) 
        return 1;
    return x * fact(x - 1);
}

// ***** Question 4 *****
function isPalindrome(str){
    let cleaned=str.replace(/[^a-z0-9]/g, ''); //Phrases (ignoring spaces and punctuation)
        let reversed = cleaned.split('').reverse().join('');
return cleaned==reversed;
}

// ***** Question 5 *****
function LargestSalesNumber(reg1,reg2,reg3){
let largest;
if( reg1>=reg2 && reg1>=reg3)
    largest=reg1;
else if( reg2>=reg1 && reg2>=reg3)
    largest=reg2; 
else if( reg3>=reg1 && reg3>=reg2)
    largest=reg3; 
return largest;
}

// ***** Question 6 *****
function motivationalTracker(days){
    let fib=[]
    if(days<=0)
        fib=[0];
    else if(days===1)
        fib=[0,1];
    else{
        fib=[0,1];
        for(let i = 2; i < days; i++ )
             fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

// ***** Question 7 *****
function sumOfDigits(purchaseID){
let sum=0;
while (purchaseID > 0){
    sum+=purchaseID % 10; // Get last digit
purchaseID= Math.floor(number / 10); // Remove last digit
}
return sum;
}

// ***** Question 8 *****
function isPrime(x){
    if(x<=1) 
        return false;
    for(let i=2; i < x; i++){
        if(x % i ===0)
            return false; }
    return true;
}

// ***** Question 9 *****
function reverseSring(word){
    let reversed=""
    for(let i=word.length-1; i>=0; i--){
        reversed+=word[i];
    }
return reversed;
}

// ***** Question 10  *****
function factorial(x){
    fac=1;
    for(let i=1; i<=x; i++)
        fac*=i; 
    return fac;
}

// ***** Question 11  *****
function GCD(x,y){
let gcd=1;
let smaller=Math.min(x,y);
for(let i=1; i<=smaller; i++){
    if(x%i===0 && y%i===0)
        gcd=i;
}
return gcd;
}

// ***** Question 12  *****
function isPerfect(x){
      if (x <= 1) 
        return false;

    let sum=0;
    for(let i=1; i<x; i++){//x\2 for  make it faster
        if(x%i===0)
            sum+=i;
    }
    return sum===x;
}

// ***** Question 13  *****
function LCM(x,y){
   return Math.abs(x*y)/GCD(x,y);

}

// ***** Question 14  *****
function removeDuplicate(numbers){
    let cleanArr=[];
     for (let num of numbers) {
    if (!cleanArr.includes(num)) {
      unique.push(num);
    }
  }

  return unique;
}

// ***** Question 15  *****
function totalPrice(cart) {
    let sum = 0;
    for (const element of cart){
        sum += element;}

    return sum;
}

// ***** Question 16  *****
function findMax(steps){
   let largest=steps[0];
    for(let i=1;i<steps.length; i++){
        if(steps[i]>largest)
            largest=steps[i];
    }
return largest;
}

// ***** Question 17  *****
function findMin(expenses){
   let smallest=expenses[0];
    for(let i=1;i<expenses.length; i++){
        if(expenses[i]<smallest)
            smallest=expenses[i];
    }
return smallest;
}

// ***** Question 18  *****
function commonMovies(list1,list2){
    let common=[];

        for(let i=0; i<list1.length;i++){
        for(let j=0; j<list2.length;j++){
            if(list1[i]===list2[j])
                common.push(list1[i]);
        }
    }
    return common;
}

// ***** Question 19  *****
function repeatNo(arr,product_ID){
   let count=0;
        for(const element of arr){
            if(element==product_ID)
                 count++
        } 
        return count;
}

// ***** Question 20  *****
function search(arr, song){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===song)
            return i;
    }
    return -1 // if not found 
}

// ***** Question 21  *****
function sort(arr){
        for(let i=0; i<arr.length; i++){
             let min=i;
             for( let j=i+1; j<arr.length; j++){
                if(arr[j]< arr[i])
                    min=j;// compare with other elements 
                }
                if(min!==i){
                    let temp=arr[i];
                    arr[i]=arr[min];
                    arr[min]=temp;//نبدل 
                }
        }
return arr;
}

// ***** Question 22  *****
function stringToArray(str){
    let arr=[];
    for(let i=0;i<str.length;i++){
       arr.push(str[i]);
    }
return arr;
}

// ***** Question 23  *****
function arrayToString(arr){
    let str="";
        for(let i=0;i<arr.length;i++)
            str+=arr[i];
return str;
}

// ***** Question 24  *****
function strLength(str){
    return str.length;
}

// ***** Question 25  *****
function upperStr(str){
    return str.toUpperCase();
}

// ***** Question 26  *****
function lowerStr(str){
    return str.toLowerCase();
}

// ***** Question 27  *****
function isContain(str,subStr){
        return str.includes(subStr);
}

// ***** Question 28  *****
function removeAroundSpace(str){
     return str.trim();
}

// ***** Question 29  *****
function getChar(str,index){
    return str[index];
}

// ***** Question 30  *****
function strStart(str,substr){
    return str.startsWith();
}

// ***** Question 31  *****
function strEnd(str,substr){
    return str.endsWith();
}

// ***** Question 32  *****
function getStrBegin(str,len){
    return str.subString(0,len);//or slice
}

// ***** Question 33  *****
function countdownTimer(seconds){//تنازلي
 let timeLeft = seconds;

    let timer = setInterval(() => {//يتكرر الكود كل ثانية
        console.log(timeLeft); // عرض الوقت المتبقي
        timeLeft--;

        if (timeLeft < 0) { 
            clearInterval(timer); // إيقاف المؤقت
            console.log("انتهى الوقت ⏳");
        }
    }, 1000); // 1000 = ثانية واحدة
}

// ***** Question 34  *****
function RandomNo(min, max) {
    let range = max - min + 1;
    let random = Math.random() * range;
    return min + parseInt(random);
}

// ***** Question 35  *****
function numToStr(num){
    return  num.toSring();// or string(num)
}

// ***** Question 36  *****
function strtoNum(str){
    return  parseInt(str);// or Number(str) or parseFloat(str)
}

// ***** Question 37  *****
function getCurrentDateTime() {
    const now = new Date();
    return now.toString(); // Full date and time as a string
}

// ***** Question 38  *****
function getDayOfWeek() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    return days[now.getDay()];
}

// ***** Question 39  *****
function containsElement(arr, x) {
    return arr.includes(x);
}

// ***** Question 40  *****
function Arraylength(arr) {
    return arr.length;
}




