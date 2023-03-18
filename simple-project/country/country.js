const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then (data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesContainer = document.getElementById("all-countries");
    countries.forEach(country => {
      console.log(country);
      const countryDiv = document.createElement("div");
      countryDiv.classList.add("country");
      countryDiv.innerHTML = `
        <h3> Name: ${country.name}</h3>
        <p> Capital: ${country.capital ? country.capital : "no capital"}</p>
        <button onclick="displayCountryDetails('${country.alpha2Code}')">Details</button>
        `;
      countriesContainer.appendChild(countryDiv);
    });
}
const displayCountryDetails = code => {
    const url = `https://restcountries.com/v2/alpha/${code}`;
    // console.log(url);    
    fetch(url)
      .then((res) => res.json())
      .then((data) => showCountryDetails(data));
}
const showCountryDetails = country => {
    const detailsContainer = document.getElementById('country-details')
    console.log(country);
    detailsContainer.innerHTML = `
    <h3> Name: ${country.name}</h3>
    <img src="${country.flags.png}">
    `;
}

loadCountries();