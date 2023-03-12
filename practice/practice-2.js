let data = [
  {
    pHeroCourses: {
      "course-x": "web development",
    },
  },
  {
    pHeroCourses: {
      "course-y": "phitron",
    },
  },
  {
    pHeroCourses: {
      "course-z": "acc",
    },
  },
  {
    pHeroCourses: {
      "course-xyz": "level-2",
    },
    locationField: {
      "en-US": {
        lat: 19.28563,
        lon: 72.8691,
      },
    },
  },
];

/* 
How will you get the output [Advanced - uses 2D matrix
concept]
a) level-2
b) 72.8621
*/

// console.log(data[3].pHeroCourses);
const accessLevel = data[3].pHeroCourses["course-xyz"];
console.log(accessLevel);

// console.log(data[3].locationField['en-US']);
// console.log(data[3].locationField['en-US'].lon);

const lon = data[3].locationField["en-US"].lon;
console.log(lon);