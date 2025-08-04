// ***** Question 1 *****
function swapProducts(){
const product1=document.getElementById('1');
const product2=document.getElementById('2');
let x=product1.textContent;
product1.textContent=product2.textContent;
product2.textContent=x;

}


// ***** Question 2 *****
let ticket_no;
function classification(ticket_no){
    if(ticket_no%2===0)
        return "Section A"
    else
         return "Section A"
}// Testing
console.log(assignSection(24)); // Section A


// ***** Question 3 *****
// ***** Question 4 *****
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
}//testing 
console.log(LargestSalesNumber(1000,1200,800)); // 1200


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
}//testing
console.log(motivationalTracker(8)); //output: [0,1,1,2,3,5,8,13,21,34]


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
function computeGCD(x,y){
    
}



