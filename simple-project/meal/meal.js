const loadMeal = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayMeals(data.meals))
        .catch(error => {
            console.log(error);
        });
    
    // async await 
    // const loadMealDetails2 = async (idMeal) => {
    //     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    //     try {
    //         const res = await fetch(url);
    //         const data = awain res.json();
    //         displayMealDetails(data.meals)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
};
const displayMeals = (meals) => {
    const mealsContainer = document.getElementById("meals-container");
    mealsContainer.innerText = "";
    meals.forEach((meal) => {
        console.log(meal);
        const mealDiv = document.createElement("div");
        mealDiv.classList.add("col");
        mealDiv.innerHTML = `
         <div class="card h-100">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">A meal is an eating occasion that takes place at a certain time and includes consumption of food. The names used for specific meals in English vary, depending on the speaker's culture, the time of day, or the size of the meal.</p>

                            <!-- Button trigger modal -->
                            <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                            View Recipe
                            </button>
                        </div>
                    </div>
        `;
        mealsContainer.appendChild(mealDiv);
    });
};

// search food
const searchMeals = () => {
    const searchText = document.getElementById("search-field").value;
    // console.log(searchText);
    loadMeal(searchText);
};

const loadMealDetails = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals[0]));

  console.log(idMeal);
};

const displayMealDetails = meal => {
    document.getElementById("mealDetailsLabel").innerText = meal.strMeal;
    document.getElementById("mead-body").innerText = meal.strInstructions;
}

loadMeal(" ");
