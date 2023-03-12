let instructor = {
  name: "Jhankar Mahbub",
  entrepreneur: true,
  additionalData: {
    writer: true,
    favoriteHobbies: ["travelling", "Coding"],
    books: ["programming er bolod to bos", "programming er coddogosti"],
    moreDetails: {
      favoriteBasketballTeam: "XYZ",
      isYoungest: true,
      hometown: {
        city: "ABC",
        state: "VW",
      },
      countriesLivedIn: ["Bangladesh", "New York"],
    },
  },
};

/* 
How will you display
a) programming er coddogosti
b) VW
c) Bangladesh
*/

// console.log(instructor.additionalData.moreDetails.countriesLivedIn[0]);

const books = instructor.additionalData.books[1];
console.log(books);

const state = instructor.additionalData.moreDetails.hometown.state;
console.log(state);

const country = instructor.additionalData.moreDetails.countriesLivedIn[0];
console.log(country);