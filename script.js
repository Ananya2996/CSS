// var person={
//     name: 'ramesh',
//     age:30,
//     married:true,
//     addess:{
//         street:'vijay nagar',
//         flatno:201
//     }

// };
// console.log(person);
// var person2=new Oject();
// person2.name='ria';
// person2.age=23;
// person2.married=true;
// person2.address={};
// person2.address.street="nagar road";
// console.log(person2);
// person2['address']['flatno']=23;
// document.write("<br>");
// console.log("person2.name");
// function show() {
//     var a = "a is a local outer variable";
//     document.write(a + "<br>");
//     function disk() {
//         var b = "bis local inner variable";
//         docuemnt.write(b + "<br>");
//     }
//     disk();
// }
// show();
var a = 10;
function functionA() {
    console.log("start function A");
    function functionB() {
        console.log("in function B");
    }
    functionB();
}
functionA();
console.log("global content");