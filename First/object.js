const person = {
    Name: "Krishna",
    
    Age: 25,
    Hobbies:{
        Game:"Cricket",
        Musis:"Not Interested",
        Name:"Lipu Vai",
        }
}
let x = person;


delete x.Age;
x.Age = 11
console.log(x.Age);
console.log(person.Name);

console.log(x.Hobbies.Musis);
console.log(x.Hobbies.Game);

