window.onload = function(){

    const camera = document.getElementById('js--camera');
    const table = document.getElementById('js--table');
    const pickup = document.getElementById('js--pickup');
    const pickup2 = document.getElementById('js--pickup-test');
    const scene = document.getElementById("js--scene");
    var qwerty = 1;



    addListeners();


    var hold = false;

    table.onmouseenter = (event) => {
        if(hold){
            console.log("je hovered over de tafel");
            makeObject("js--pizzaOnTable", "a-circle", "0 1.024 -2", "0.25", scene, "-90 0 0");
            document.getElementById("js--holdPizza").remove();
            hold = false;
            addListeners();
        }
    };
    
    

    function addListeners(){
        document.getElementById('js--pizzaOnTable').onmouseenter = (event) => {
            if(!hold){
                makeObject("js--holdPizza", "a-circle", "0 -0.5 -1.2", "0.25", camera, "0 0 0");
                document.getElementById('js--pizzaOnTable').remove();
                setTimeout(function(){
                    hold = true;
                }, 100);
            }
        };
    }

    function makeObject(id, entity, position, size, parent , rotation){
        console.log("object wordt aangemaakt");        
        let child = document.createElement(entity);
        child.setAttribute("id", id);
        child.setAttribute("position", position);
        child.setAttribute("radius", size);
        child.setAttribute("rotation", rotation);
        parent.appendChild(child);

    }
}
  
