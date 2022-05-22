const get_dugme = document.querySelector(".get_button");
const delete_dugme = document.querySelector(".delete_button");
const screen = document.querySelector(".screen");
const post_button = document.querySelector(".post_button");
const put_button = document.querySelector(".put_button");
const getFunction = async () =>{
    const podaci = await fetch(
        "https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars"
    )
    const gotovi_podaci = await podaci.json();
    console.log(gotovi_podaci);
    for (let i=0; i<gotovi_podaci.length; i++){
        let htmlString = `<div class="auto">
        <img src="${gotovi_podaci[i].imageUrl}" alt="slika"> 
    </div>
    <div class="auto-info">
        <h2>${gotovi_podaci[i].name}</h2>
        <h2>${gotovi_podaci[i].manufacturer}</h2>
        <h2>${gotovi_podaci[i].year}</h2>
        <h2>${gotovi_podaci[i].price}</h2>
    </div>`;
    screen.insertAdjacentHTML("beforeend", htmlString);
    }
}
const deleteFunction = async () => {
    const podaci = await fetch(
    "https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars"
    );
    const gotovi_podaci = await podaci.json();
    const id = gotovi_podaci[0].id;
    const odgovor = await fetch(
    `https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars/${id}`,
    {
        method: "DELETE",
    }
    );
    console.log(odgovor); //Odgovor delete
};
const postFunction = async () => {
    const response = await fetch(
    "https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars",
    {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        id: 10,
        name: "Passat 5+",
        manufacturer: "Volkswagen",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ultimatespecs.com%2Fcar-specs%2FVolkswagen%2F2964%2FVolkswagen-Passat-B55-19-TDI-130-6sp.html&psig=AOvVaw31QV4zteP88Kwn4b-DOq3L&ust=1653337065796000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMDt4tf28_cCFQAAAAAdAAAAABAK",
        price: 4500,
        year: 2003
        }),
    }
    );
    console.log(response);
};
const putFunction = async () => {
    const odgovor = await fetch(
    "https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars",
    {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        id: 4,
        name: "Polo",
        manufacturer: "Volkswagen",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.auto-data.net%2Fen%2Fvolkswagen-polo-iv-9n-facelift-2005-1.4-80hp-8412&psig=AOvVaw3ZJUnLfzWy9DP53GFSRVss&ust=1653339408840000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOi9y7X_8_cCFQAAAAAdAAAAABAO",
        price: 3500,
        year: 2005
        }),
    }
    );
    console.log(odgovor);
};
get_dugme.addEventListener("click",() => {
    getFunction();
});
delete_dugme.addEventListener("click", () => {
    deleteFunction();
});
post_button.addEventListener("click", () => {
    postFunction();
});
put_button.addEventListener("click", () =>{
    putFunction();
});
