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
