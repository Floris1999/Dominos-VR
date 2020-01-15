window.onload = function(){

    const camera = document.getElementById('js--camera');
    const table = document.getElementById('js--table');
    const teleport = document.getElementsByClassName('js--teleport');

    const pickup = document.getElementById('js--pickup');
    const pickup2 = document.getElementById('js--pickup-test');
    const scene = document.getElementById("js--scene");



    addListeners();


    var hold = false;

    table.onclick = (event) => {
        if(hold){
            console.log("je hovered over de tafel");
            child = makeObject("js--pizzaOnTable", "a-circle", "0 1.024 -2", "0.25", scene, true);
            child.setAttribute("rotation", "-90 0 0");
            document.getElementById("js--holdPizza").remove();
            hold = false;
            table.removeAttribute("class");
            addListeners();
        }
    };



    for(let i = 0; i < teleport.length; i++){
        teleport[i].onclick = (event) => {
            let att = document.createAttribute("animation");
            att.value = "property: position; easing: linear; dur: 1000; to: " + teleport[i].getAttribute('position').x + " 1.6 " + teleport[i].getAttribute('position').z;
            camera.setAttribute('animation', att.value);
        };
    };
    
    

    function addListeners(){
        document.getElementById('js--pizzaOnTable').onclick = (event) => {
            if(!hold){
                makeObject("js--holdPizza", "a-circle", "0 -0.5 -1.2", "0.25", camera, true);
                document.getElementById('js--pizzaOnTable').remove();
                table.setAttribute("class", "clickable");
                hold = true;
            }
        };
    }

    function makeObject(id, entity, position, size, parent, pickup){
        console.log("object wordt aangemaakt");        
        let child = document.createElement(entity);
        child.setAttribute("id", id);
        child.setAttribute("position", position);
        child.setAttribute("radius", size);
        if(pickup){
            child.setAttribute("class", "clickable");
        }
        parent.appendChild(child);
        return child;
    }
}
  
