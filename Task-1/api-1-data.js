const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
};

const body = document.getElementById('container');
const createSection = document.createElement('div');
createSection.innerHTML = `
<h1 class="text-center text-3xl mt-12">${person.message}</h1>
    <section class="text-gray-600 body-font ">
        <div class="container px-5 py-12 mx-auto ">
            <div class="flex flex-wrap m-4">
                <div class="p-4  md:w-1/2">
                    <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                        <div
                            class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">${person.result[0].name.fullName[0]} ${person.result[0].name.fullName[1]}</h2>
                            <p class="leading-relaxed text-base">Age: ${person.result[0].age}</p>
                            <p class="leading-relaxed text-base">Address: ${person.result[1].address.street} ${person.result[1].address.house}</p>
                        </div>
                    </div>
                </div>
                <div class="p-4  md:w-1/2">
                    <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                        <div
                            class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">${person.result[1].name.fullName[0]} ${person.result[1].name.fullName[1]}</h2>
                            <p class="leading-relaxed text-base">Age: ${person.result[0].age}</p>
                            <p class="leading-relaxed text-base">Address: ${person.result[1].address.street} ${person.result[1].address.house}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
body.appendChild(createSection);