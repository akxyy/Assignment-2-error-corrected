// 3.[1, 2, 3, 4, 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.

function main(){
    const array=[1, 2, 3, 4, 5, 6];
    function removeIndex(){
        array.splice(5,1);
        array.splice(2,1);
        console.log(array);
    }
    return removeIndex;
}
let newarray=main();
newarray();

//4.Use constructor method to console all elements of the passed array. (the array will be passed to the constructor method)
const array4=[15,62,53,75,97];
class arrayPrint{
    constructor(array4){
        array4.forEach(num => {
            console.log(num);
        });
    }
}
let new_array = new arrayPrint(array4);