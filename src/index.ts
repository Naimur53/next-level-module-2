
type User = {
    readonly name: string;
    id?: User,
    age: number,
    best?: Best

}
type Best = User & {
    who: String,
    img: String,
    age: number
}
const arr: (string | number)[] = ['sai', 34343, 333,]

const aboutNaimur: User = {
    name: 'sadi',
    id: { name: 'a', age: 1 },
    best: {
        name: 'sadi',
        id: { name: 'a', age: 1 },
        age: 3,
        who: 'sadi',
        img: 'd',
    },
    age: 3,

}

// const a =():(){}=>{

//     console.log("hi");
//     return null
// }
type Ex = (b: number) => string
const myFun = (a: number): Ex => {

    return (b: number) => {
        return `dfd ad  ${b * 4}`
    }
}
const a = myFun(2)
console.log(a(3));

