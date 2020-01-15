window.onload = function(){

    const camera = document.getElementById('js--camera');
    const table = document.getElementById('js--werkbank1');
    const teleport = document.getElementsByClassName('js--teleport');

    const pickup = document.getElementById('js--pickup');
    const pickup2 = document.getElementById('js--pickup-test');
    const scene = document.getElementById("js--scene");



    addListeners();


    var hold = false;

    table.onclick = (event) => {
        if(hold){
            console.log("je hovered over de tafel");
            let child = makeObject("js--pizzaOnTable", "a-circle", "4.4 1.2 -5", "0.25", scene, true, "#deegbal_fase_3-glb");
            child.setAttribute("scale", ".2 .2 .2");
            child.setAttribute("rotation", "0 0 0");
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
                let object = makeObject("js--holdPizza", "a-circle", "0 -0.5 -1.2", "0.25", camera, true, "#deegbal_fase_3-glb");
                object.setAttribute("scale", ".25 .25 .25");
                document.getElementById('js--pizzaOnTable').remove();
                table.setAttribute("class", "clickable");
                hold = true;
            }
        };
    }

    function makeObject(id, entity, position, size, parent, pickup, gltf){
        console.log("object wordt aangemaakt");        
        let child = document.createElement(entity);
        child.setAttribute("id", id);
        child.setAttribute("position", position);
        if(gltf){
            child.setAttribute("gltf-model", gltf)        }
        if(pickup){
            child.setAttribute("class", "clickable");
        }
        parent.appendChild(child);
        return child;
    }
}
  
