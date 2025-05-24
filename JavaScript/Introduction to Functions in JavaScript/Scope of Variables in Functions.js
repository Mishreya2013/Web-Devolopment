var b=5; //global variables are printed outside or inside the function.
function Myfunctions() {
    var a= 4; //local variables are printed only inside the function.
    console.log(a)
}
Myfunctions()
//console.log(a);
console.log(b);