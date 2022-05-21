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
        let htmlString = ``
    }
}

get_dugme.addEventListener("click",() => {
    getFunction();
});