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
    //get metoda za dobijanje id-a prvog obroka. Potrebdno u delete metodi.
    const podaci = await fetch(
      "https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars"
    );
    const gotovi_podaci = await podaci.json();
    const id = gotovi_podaci[0].id;
  
    //delete fetch ocekuje parametar id kojeg dodajemo na kraj linka
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


get_dugme.addEventListener("click",() => {
    getFunction();
});
delete_dugme.addEventListener("click", () => {
    deleteFunction();
  });
  
  post_button.addEventListener("click", () => {
    postFunction();
  });
  
