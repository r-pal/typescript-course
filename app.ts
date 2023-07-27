const person: {
    name: string;
    age: number; 
    hobbies: string[]; //array of strings
    role: [number, string]; //tuple
} = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};

console.log(person.name);