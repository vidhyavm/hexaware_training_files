function myfunc(){

    console.log('normal function')
}

myfunc();

var arrowFunc=(a,b)=>{
    return a+b;
}

console.log(arrowFunc(5,5))


const anonymous=function(){

    console.log('anonymous func')
}

anonymous();


function test(arrowFunc){//here myfunc parameter as call back function

}

function mul(a,b=2){
    return a*b;

}
//console.log(mul(5,3));
console.log(mul(3));


function sum(name,...n){

    console.log(n[0]);
    console.log(n[1]);
    console.log(name);
    return n.length;
}

var arr1=[2,3,4];
var arr2=[4,8,5];
console.log(sum("javeed",arr1,arr2));

