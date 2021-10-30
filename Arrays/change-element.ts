// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test
{let numbers:number[]=[1, 2, 3, 8, 5, 6];
numbers = numbers.map(function(item,index) { return index==3 ? 4 :item ; });
/*numbers = numbers.map(function(item,index) { 
    if (index==3) { 
        return 4
    } 
    else{
        return item
    }
 });*/
console.log(numbers);
}
