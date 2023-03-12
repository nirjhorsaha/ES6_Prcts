const element = [2, 4, 6, 9, 3, 5];
// console.log(element);

const calculate = element.map(function (item) {
    const itemsquare = item ** 2;

    console.log(itemsquare);

    // const sumOFSquare = itemsquare.reduce((a, b)=> a + b);

    // return sumOFSquare;
})

// const sumOFSquare = element.reduce((a, b) => a + b);

// console.log(sumOFSquare);