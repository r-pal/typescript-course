enum Role2 { ADMIN = "hello", READ_ONLY = 200, CREATOR };

const person1: {
    name: string;
    age: number; 
    hobbies: string[]; //array of strings
    role1: [number, string]; //tuple
} = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role1: [2, "author"]
};

console.log(person1.name);