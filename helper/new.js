const sq = (x) => x*x

const arr = ["2", "3", "4", "5"]

const res = arr.map((x) => parseInt(x)).filter((el) => el % 2 == 1).reduce((res, next) => Math.max(res, next), 0)
//console.log(sq(3))
console.log(res)

const person = {
    name : {
        first : "Peter",
        last : "Smith",
    },
    age: 27
}

const {name : {first : firstName, last : lastName}} = person;

console.log(firstName, lastName);

function connect({
     host = 'localhost',
     port = 12345,
     user = 'usr'} = {}) {
        console.log(host, port, user)
     
}

connect({host : 'nonono'})