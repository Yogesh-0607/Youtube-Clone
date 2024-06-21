// let obj ={
//     name: 'Yogesh'

// }
// let user = obj;
// user.name = 'baba';
// console.log(obj);
// console.log(user);
// when be console the obj than it output should be Yogesh but it is showing baba ,So avoid this problem we  used the shallow copy.

// let obj ={
//     name: 'yogesh'
// }
// let user = Object.assign({},obj);
// // by using this Object.assign({},ObjectName) method be can avoid the problem.
// user.name = 'baba';
// console.log(obj);
// console.log(user);


let obj  = {

    name: 'Yogesh'
}

let user = {...obj}
console.log(user)

