// Function OverLloading
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: number | string, b: number | string): number | string {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a + b;
//     } else if (typeof a === 'string' && typeof b === 'string') {
//         return a + b; 
//     }
//     throw new Error('Invalid arguments.');   
// }
// Generics
// function getAge <T>(age : T):T {
//     return age;
// }
// getAge <string> ("20");
// getAge <number> (20);
// type userDetail ={
//     name: string;
//     age: number;
// }
// type admin ={
//     name: string;
//     role: string;
// }
// const userDetail ={
//     name: "Midhun",
//     age:20
// };
// const adminDetail ={
//     name:"Admin",
//     role:"admin"
// }
// function getDetails <T> (details:T ):T{
//     return details;
// }
// const userValue = getDetails<userDetail>(userDetail);
// const adminValue = getDetails<admin>(adminDetail);
// userValue.name;
// adminValue.name;
// Enums
var StatusType;
(function (StatusType) {
    StatusType[StatusType["PENDING"] = 0] = "PENDING";
    StatusType[StatusType["COMPLETED"] = 1] = "COMPLETED";
    StatusType[StatusType["FAILED"] = 2] = "FAILED";
})(StatusType || (StatusType = {}));
function getStatus(message, status) {
    console.log(message, "==", status);
}
getStatus("12345", StatusType.COMPLETED);
