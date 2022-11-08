// alert("Your computer has been infected by virus")
// console.log("Download our free antivirus to help disenfect")

// power = [1,2,3,4,5,6,7,8,9,10]

// for loop
// for (i=1 ;i <= 10;i++){
// console.log(Math.pow(2, i))
// }

// While loop
// let i = 1
// while(i<=10)
// {
//     console.log(Math.pow(2,i))
//     i++
// }

//do while

// let input =""
// do{
// input = prompt("What is your name?");
// }
// while(!isNaN(Number(input)));

// alert("Welcome " + input)
// alert(`Welcome ${input}`)

// let fruits = ["Apple", "Banana"]
// //adding Orange to array
// fruits.push("Orange");
// console.log(fruits);
// //removing last item to the array
// fruits.pop();
// console.log(fruits);
// //Adding Mango
// fruits.unshift("Mango");
// console.log(fruits);
// //Remove first item
// fruits.shift();
// console.log(fruits);


// for( let i = 0 ; i < fruits.length;i++)
// {

// }

// for (let item of fruits)
// {
//     console.log(item);
// }

// const person = {
// name: ['Bob','Smith'],
// age:32,
// gender:'male',
// interests:["music","skiing"]
// }
// console.log(`My name is ${person.name[0]} ${person.name[1]}. I'm Interested in ${person.interests[0]} and ${person.interests[1]}`)

// //access the keys
// for (let prop in person)
// {
// console.log({prop})
// }
// //Access the values of the keys you need string literal (backticks) to remove the string quotations
// for (let prop in person)
// {
// console.log(`${person[prop]}`)
// }

let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3]; 

let counter = 0;
for (let stud of students)
{
    if (stud.program === "CIT" && stud.GPA > 3.0)
    {
        counter++;
    }
    console.log(stud)
}
console.log(counter)