console.log(`Задание 1`)


let user = {
    name: "John",
    age: 30
    };
console.log('age' in user)

console.log(`Задание 2`)
let users = [
    {
        name: "John",
        age: 30
    },
    {
        name: "Bob",
        age: 21
    },
    {
        name: "Anna",
        age: 19
    }
]
    
console.log(users[1])

console.log(`Задание 3`)
 users =[
    {
        name: "John",
        age: 30
    },
    {
        name: "Bob",
        age: 21
    },
    {
        name: "Anna",
        age: 19
    }
  ]
  delete users[1]
console.log(users)

console.log(`Задание 4`)
let sort = users.sort((a, b) => a.age - b.age);
console.log(sort)

console.log(`Задание 5`)
const obj = {
    id: 5,
   token: 12343423
    };
    const {id} = obj;
console.log(id);

console.log(`Задание 6`)
const obj1 = {
    id: 5,
    token: 12343423
};
const {id: userld} = obj
console.log(userld)

