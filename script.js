//GET
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food')
    .then((res) => res.json())
    .then((data) =>{
        console.log(data);
        const html = data.map((food) =>{
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
        }).join("");
        document
            .querySelector("#menu")
            .insertAdjacentHTML("afterbegin", html);
    } )
//POST
const addFood = (object) => {
    console.log(object);
    console.log("ADD")
    const Add = document.getElementById("add").value;
    
fetch("https://ptf-web-dizajn-2022.azurewebsites.net/api/Food", {
    method: "POST",
    headers: new Headers({"content-type": "application/json"}),
    body: JSON.stringify(object),
})
.then((res) => {
    console.log(res);
});
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
/*
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
}; */


const updateMeal = (object) => {
  fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Food`, {
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(object),
  }).then((response) => {
    console.log(response);
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
let deleteBtn = document.querySelector(".delete");
let formaId = 0;
let deleteModalNep = document.querySelectorAll(".deleteModalNep");
overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
});

closeButton.addEventListener("click", () => {
  /* kad se pritisne na close u formi da se forma ugasi i nestane*/
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
});

add.addEventListener("click", () => {
  /*Kad se pritisne na dugme add new da ti prikaze modal i formu*/
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
  deleteModalNep.forEach((doc) => {
    doc.classList.remove("hidden");
  });
  formaId = 0;
});
update.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
  formaId = 1;
  deleteModalNep.forEach((doc) => {
    doc.classList.remove("hidden");
  });
});
deleteBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
  formaId = 2;
  deleteModalNep.forEach((doc) => {
    doc.classList.add("hidden");
  });
});
/*
 INPUT POLJA (korak 1)
*/
const id = document.querySelector("#id");
const nameR = document.querySelector("#name");
const price = document.querySelector("#price");
const image = document.querySelector("#image");

form.addEventListener("submit", (event) => {
  event.preventDefault(); //da se stranica ne reloada (default kad submitas formu je da se citava stranica reloada sto ti ne treba pa sam ugasio sa ovim)
  console.log(id.value);
  console.log(nameR.value);
  console.log(price.value);
  console.log(image.value);
  if (formaId === 0) {
    console.log("POST");
    addFood({
      id: id.value,
      name: nameR.value,
      price: price.value,
      imageUrl: image.value,
    });
    formaId = 0;
    id.value = "";
    nameR.value = "";
    price.value = "";
    image.value = "";
  } else if (formaId === 1) {
    console.log("PUT");
    updateMeal({
      id: id.value,
      name: nameR.value,
      price: price.value,
      imageUrl: image.value,
    });
    formaId = 0;
    id.value = "";
    nameR.value = "";
    price.value = "";
    image.value = "";
  } else if (formaId === 2) {
    console.log("DELETE");
    deleteMeal(id.value);
  }
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
});


