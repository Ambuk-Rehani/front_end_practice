
/*
//console.log("Hello World");
const name = "Ambuk";
const age = 26;


//Using back ticks is the best way to write for a string
console.log(`My name is ${name} and my age is ${age}`)

//Javascript can have multiple datatypes in an array

const fruits = ['apple', 'fruits', 'oranges',10, false]
console.log(fruits)


const todos = [{
    id : 1, 
    text : `take out ${age}`,
    isCompleted : true
},
    {
        id : 2, 
        text : `take out ${name}`,
        isCompleted : false
    },
]

console.log(todos[1].text)

//for loop for arrays

for (let x of todos){
    console.log(x.isCompleted)
}

//High order array methods
todos.forEach(function(todo){
    console.log(todo.text)
});

todoText = todos.map(function(todo){
    return todo.text
})

console.log(todoText)

todoTextf = todos.filter(function(todo){
    return todo.isCompleted === true
}).map(function(todo){
    return todo.text
})

console.log(todoTextf)

function add(num1 = 1, num2 = 1){
    return num1 + num2;
}

console.log(add(2))

function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getFirstName = function(){
        return this.firstName;
    }
}

// Creating an object of the constructor

const person1 = new Person("Ambuk", "Rehani", '5-1-1996')

//defining functions inside a constructor
console.log(person1.getFirstName())

//We can also define a function using .prototype so that it is not 
//part of every object that is being created, in this case it is person1

Person.prototype.getLastName = function(){
    return this.lastName;
}

console.log(person1.getLastName())
*/

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const ul = document.querySelector('#users');

const btn = document.querySelector('.btn')
const msg = document.querySelector('.msg')

// const clickF = (e) =>{
    
// }
btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (nameInput.value === '' ||  emailInput.value === ''){
        msg.innerHTML = "Please enter all the values";
        msg.classList.add('error');

        setTimeout(() => msg.remove(), 3000);
    }

    else
    {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} and ${emailInput.value}`));
        ul.appendChild(li);

    }

    nameInput.value = '';
    emailInput.value = '';

} )