// //1-savolni javobi.
let q = 1;
let w = 10;

for (let i = 1; i <= w; i++) {
    q = q * i; 
    console.log(i  + q);
}
// //2-savol javobi.
for (let i = 1; i <= 10; i++) {
    console.log(`${2} x ${i} = ${2 * i}`);
    console.log(`${3} x ${i} = ${3 * i}`);
    console.log(`${4} x ${i} = ${4 * i}`);
    console.log(`${5} x ${i} = ${5 * i}`);
    console.log(`${6} x ${i} = ${6 * i}`);
    console.log(`${7} x ${i} = ${7 * i}`);
    console.log(`${8} x ${i} = ${8 * i}`);
    console.log(`${9} x ${i} = ${9 * i}`);
    console.log(`${10} x ${i} = ${10 * i}`);
}  
// // 3-savol javobi
t = 0;
for (let r = 1; r <= 10; r++){
    t = r*r;
    console.log(t);
}
// //4-savol javobi
for (let y = 1; y <=50; y++){
    if (y % 2 === 0){
        console.log(y);
    }
}
for (let y = 1; y <=50; y++){
    if (y % 2 === 1){
        console.log(y);
    }
}
// //5-savol javobi.
let u = +prompt("Xoxlagan bitta son kiriting")
if (u % 2 === 1){
    console.log("Kiritgan soninggiz tub son");
} else if (u = 2){
    console.log("Bu kiritgan soninggiz murakkab tub son");
    
}else if (u % 2 === 0){
    console.log("Bu kiritgan soninggiz boshqa sonlarga bolinadi");
} else{
    console.log("Bu son tub son emas");
}
// //6-savolni javobi.
for (let p =1; p<=100; p++){
    if (Math.trunc(p % 7 === .0)){
        console.log(p);
    }
}
// //7-savolni kiritng.
for (let a =1; a<=50; a++){
    if (Math.trunc(a % 3 === .0)){
        console.log(a);
    }
}for (let a =1; a<=50; a++){
    if (Math.trunc(a % 5 === .0)){
        console.log(a);
    }
}
//8-savol javobi.
let s = 0;
for (let b =1; b<=100; b++){
    if (b % 2 === 0){
        s = s+b;
        console.log( s );
    }
}
//9-savol javobi.
for (let d = 2; d<=5; d++){
    f = "";
     for (g =1; g<=d; g++ ){
        f += g;
        console.log(f);
        
     }
}
//10-savol javobi.
 for (let h = 1;  h<= 50; h++) {
    if (h%2===1 && h % 3 === 0){
        console.log(h);
        
    }
    
 }