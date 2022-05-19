//GET
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food')
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        const html = data.map(food =>{
            return `
            <div class="meals">
                <div class="mealPic">
                    <img src="${food.imageUrl}" alt="picture">
                </div>
                <div class="description">
                    <h3> Meal Name: ${food.name} <br></h3>
                    <p> ID: ${food.id} <br>
                     Price: ${food.price}</p>
                </div>
            </div>
            `;
        }).join('');
        document
            .querySelector('#menu')
            .insertAdjacentHTML("afterbegin", html);
    } )
//POST
const addFood = (object) => {
    console.log(object);
    console.log("ADD")
    const Add = document.getElementById('add').value;
    
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food', {
    method: 'POST',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify( object)
})
.then(res => {
    console.log(res);
})
}
//DELETE
const deleteMeal = (id) => {
    console.log("DELETE");
    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food/${id}`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
    });
  };

//PUT
const updateFood = (elementId) => {
    const element = meals.find((element) => element.id === elementId);
    const mealFormId = document.getElementById("meal-id");
    const mealFormName = document.getElementById("meal-name");
    const mealFormPrice = document.getElementById("meal-price");
    const mealFormURL = document.getElementById("meal-url");
  
    mealFormId.value = element.id;
    mealFormName.value = element.name;
    mealFormPrice.value = element.price;
    mealFormURL.value = element.imageUrl;
  };
  
  const updateMeal = () => {
    const mealFormId = document.getElementById("meal-id").value;
    const mealFormName = document.getElementById("meal-name").value;
    const mealFormPrice = document.getElementById("meal-price").value;
    const mealFormURL = document.getElementById("meal-url").value;
  
    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        id: mealFormId,
        name: mealFormName,
        price: mealFormPrice,
        imageUrl: mealFormURL,
      }),
    }).then((response) => {
      if (!response.ok) {
        alert("[ERROR]");
      }
    });
  };

let closeButton = document.querySelector(".closeBtn");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let form = document.querySelector(".form");
let addBtn = document.querySelector(".add");
let update = document.querySelector(".update");
let formaID = 0;
let deleteModalNep = document.querySelector(".deleteMOdalNep");

overlay.addEventListener("click", () =>{
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
})

