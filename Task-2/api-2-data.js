const data = [
    {
      _id: "60795d4e0489a32f948c4167",
      name: "Honda Sedan",
      price: "132",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
      imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
      _id: "60795e440489a32f948c4168",
      name: "MitoSedan",
      price: "221",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
    {
      _id: "60795fc20489a32f948c4169",
      name: "Isuzu Tacoma",
      price: "105",
      description:
        "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },
    {
      _id: "6079615d0489a32f948c416a",
      name: "Chevrolet Crossover",
      price: "434",
      description:
        "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
      
    },
];
// console.log(data[0].imageURL);

const body = document.getElementById("container");
const div = document.createElement('div')
div.innerHTML = `
 <section class="text-gray-600 body-font ">
            <div class="container px-5 py-24 mx-auto ">
                <div class="flex flex-wrap -mx-4 -mb-10 text-center ">
                    <div class="sm:w-1/2 mb-10 px-4">
                        <div class="rounded-lg h-64 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-auto"
                                src="${data[0].imageURL}">
                        </div>
                        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">${data[0].name}</h2>
                        <p class="leading-relaxed text-base">${data[0].description}</p>
                        <button
                            class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Car Price: ${data[0].price}</button>
                    </div>
                    <div class="sm:w-1/2 mb-10 px-4">
                        <div class="rounded-lg h-64 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-auto"
                                src="${data[1].imageURL}">
                        </div>
                        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">${data[1].name}</h2>
                        <p class="leading-relaxed text-base">${data[1].description}</p>
                        <button
                            class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Car Price: ${data[1].price}</button>
                    </div>
                </div>
            </div>
        </section>
`;
body.appendChild(div);