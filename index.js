//console.log("Hello I am using JS")

//Function as an expression
/*const sum = function(a,b){
    x=Math.sqrt(a);
    y=Math.sqrt(b);
    return x+y;
}
console.log(sum(4,9));*/

//Arrow Function
/*const sum=(a,b)=>a+b;
console.log(sum(2,3));*/

//IIFE
/*(()=>{
    console.log("Heyyy...using IIFE")
})();*/

//Difference between let and var
/*let a=23
if(a>20){
    let a=40;
    console.log("Value of a inside block="+a)
}
console.log("Value of a outside block="+a);*/
/*var a=23
if(a>20){
    var a=40;
    console.log("Value of a inside block="+a)
}
console.log("Value of a outside block="+a);*/

//Callback
/*function sum(a,b){
    return a+b;
}
function msgWithSum(clbk,msg){
    const result=clbk(40,50);
    console.log("Hiii,"+msg+" and your result="+result)
}
msgWithSum(sum,"Rahul")*/

/*function login(error,msg){
    if(error){
        console.log("Error is:"+error)
    }
    else{
        console.log(msg);
    }
}
function loginHandler(username,password,clbk){
    if(username=="RiddhimaAgarwal28" && password=="Ridd@2006"){
        clbk(null,"Login Successful")
    }else{
        clbk("Username or password is incorrect", null)
    }
}
loginHandler("RiddhimaAgarwal28","Ridd@2006",login)*/
