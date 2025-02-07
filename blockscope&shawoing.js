// let b = 100;
// {
//     var a = 10
//     let b = 20
//     const c = 30
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(b)


// undestanding the lexical block scope
const a = 10
{
    const a = 20
    {
        const a = 30
        console.log(a)
    }
}









// function example() {
//     if (true) {
//         let y = 20;    // y is declared and initialized here
//         const z = 30;  // z is declared and initialized here
//     }
//     console.log(y);  // ReferenceError: y is not defined
//     console.log(z);  // ReferenceError: z is not defined
// }