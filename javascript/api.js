window.onload = () => {
    const BASEURL = "https://my-json-server.typicode.com/florisflorisw/demo/pizzas";
    const getRecipe = (random) => {
        fetch(BASEURL)
        .then((data) => {
            return data.json();
        })
        .then((response) => {
            console.log(response);
            let chooosenPizza = response[random];
            console.log(chooosenPizza);
        });
    }
    let randInt = Math.floor(Math.random() * 2);
    console.log(randInt);


    // getRecipe(randInt);
}
