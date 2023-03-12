const Persons = [
  { id: "ID01", name: "abul vai", age: 23 },
  { id: "ID02", name: "babul vai", age: 43 },
  { id: "ID03", name: "habul vai", age: 54 },
  { id: "ID04", name: "jabul vai", age: 29 },
];

const info = {};

Persons.map (p => {
    const id = p.id;
    const value = p.name;

    info[id] = value;
})

console.log(info);
// console.log(info.ID02);