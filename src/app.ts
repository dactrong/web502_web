export { };
type Product = {
    id: number;
    name: string;
    price: number
    
}
type Product2 = {
    id: number,
    name: string,
    status: boolean
}
type MergeType = Product | Product2;
const a: number = 10;
const b: number = 20;

const myName: string | number = "Nguyễn Đắc Trọng";
const myAge: number = 21;
const myStatus: boolean = true;
const myObj:  Product = { id: 1, name: "trong", price: 21 };
const arrNumber: number[] = [1, 2, 3, 4];
const arString: string[] = ["a", "b", "c"];
const arObj: MergeType[] = [
    { id: 1, name: "trong", price:23 },
    { id: 1, name: "trong", status:true }
]



function sum(numA: number, numB: number) {
    return numA + numB;
}
console.log(sum(10, 20));