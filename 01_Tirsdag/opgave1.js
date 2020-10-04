var names = ["Hassan", "Jan", "Peter", "Boline", "Frederik"];

//1A
const filterNames = names.filter(name => name.includes("a")).join(", ");
console.log("1A: " + filterNames);

//1B
const reversedNames = names.map(name => name).reverse().join(", ");
console.log("1B: " + reversedNames);

//2A
function myFilter(arr, query) {
    return arr.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    }).join(", ")
}
console.log("2A: " + myFilter(names, "a"));

//2B
function myMap(arr) {
    var myReversedNames = [];
    for(var i = names.length - 1; i >= 0; i--) {
        myReversedNames.push(arr[i]);
    }
    return myReversedNames.join(", ");
}
console.log("2B: " + myMap(names));

//3A
var numbers = [1, 3, 5, 10, 11];
var numbers2 = [];
var save = [];
function myTest(){
for(var i = numbers.length - 1; i >= 0; i--) {
    numbers.shift();
    numbers2.shift(numbers[i]);
    save = numbers[i];
    numbers2.shift(numbers[i] + save);
}}

var sum = numbers.map(function(num) {
    return num + numbers2;
})

console.log("3A: " + sum);

//3B
const hrefs = names.map(name => {
    return "<a href=””>" + name + "</a>" + "\n";
});
const joined = hrefs.join("");
console.log("3B:\n" + "<nav>\n" + joined + "</nav>");

//3C
var persons = [
{name:"Hassan",phone:"1234567"}, 
{name: "Peter",phone: "675843"}, 
{name: "Jan", phone: "98547"},
{name: "Boline", phone: "79345"}
];

var personTable = persons.map(person => {
    return "<tr><td>" + "Name: " + person.name + "</td> <td>" + "Phone: " + person.phone + "</td></tr>\n";
});
console.log("3C:\n" + personTable.join(""));

//4A
var all= ["Hassan", "Peter", "Carla", "Boline"];
console.log("4A: " + all.join("#"));

//4B
const numbers1 = [2, 3, 67, 33];
function totalSum(total, num) {
    return total + num;
}
console.log("4B: " + numbers1.reduce(totalSum));

//4C
const members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}]
const membersAge = members.map(a => {
    return a.age;
});

function averageAge(num) {
    var total = membersAge.reduce((acc, c) => acc + c, 0);
    return total / membersAge.length;
}
var average = averageAge(membersAge);
console.log("4C: " + average);

/*
//Anden løsning
function average1(accumulator, member, index, members) {
    if(index === members.length-1){
        accumulator += member.age;
        return accumulator / members.length;
    }
    return accumulator + member.age;
}
console.log(members.reduce(average, 0));
*/

//5A
var car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };
var getCarBrand = car.getBrand;
getCarBrand();
console.log("this, er default sat som 'window' i browseren.")