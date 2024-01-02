// union type 1
// let mobile: string | number | boolean | undefined = "samsung"
// mobile = 11111111111
// mobile = true 
// mobile = undefined
// console.log(mobile)
//InterFace 2
// interface objType{
// firstName: string
// lastName: string
// age: number
// }
// let obj:objType ={
//     firstName:"Muhammad",
//     lastName:"Bilal",
//     age: 23
// }
// console.log(obj)
// narrowing 3
// let a : string | number | boolean
// a = 2  // narrowing
// console.log(a)
// a = "syed"  // rarrowing 
// a = true
// Ternary operator 4
// syntax
// condition or conditions ? code 1 : code 2
// let userName ="Bilal"
// let password = 123
// if(userName == "Bilal"){
//     console.log("you are logged in")
// }
// else{
//     console.log("invalid userName")
// }
// userName == "Bilal " ?  console.log("you are logged in") : console.log("invalid userName") // True
// userName == "Bilal Ahmed " ?  console.log("you are logged in") : console.log("invalid userName") //False
// userName == "Bilal" && password==123 ?  console.log("you are logged in.") : console.log("invalid userName or password") // True
// userName == "Bilal Ahmed " ?  console.log("you are logged in") : console.log("invalid userName") //False
// Literal Operator 5
// let unionType: string | number
// let LiteralType: "bilal" | 123 | "muhammad"
// LiteralType= "bilal"  
//Type 6
// type idType = number
// type nameType = string
// type ageType = number
// let id:idType = 22
// let name1:nameType = "syed"
// let age: ageType = 23
// let employer = {
//     employerId:id,
//     employerName: name1,
//     employerAge: age
// }
// console.log(employer)
// Exercise # 1
// export const a = "Syed"
// let a: string | number | boolean = "syed"
// a = 26
// a = false
// let age: number = 23
// console.log(age.toFixed(3))
// Exercise # 2
// let firstName:string = "bilal"
// firstName.toLowerCase()
// let age: string | number
// age = 22
// age.toFixed(2)  // narrowing
// age = 55
// Exercise # 3
// let age: string| number = "25"
// console.log(typeof age)
// let c: string| number| boolean = 123
// console.log(typeof c)
// let d: string| number| boolean = true
// console.log(typeof d)
// Exercise # 4
var age = 2;
var tube = { diameter: 12, length: 3 };
console.log(tube);
