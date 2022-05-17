
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
        console.log(html);
        document
            .querySelector('#menu')
            .insertAdjacentHTML("afterbegin", html);
    } )
    

fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Food', {
        method : 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": 0,
            "name": "string",
            "price": 0,
            "imageUrl": "string"
        })
    })
    .then(res => {
        console.log(res);
    })
