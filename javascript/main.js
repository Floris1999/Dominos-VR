window.onload = function(){

    const camera = document.getElementById('js--camera');
    const table1 = document.getElementById('js--werkbank1');
    const table2 = document.getElementById('js--werkbank2');
    const table3 = document.getElementById('js--werkbank3');

    const oven = document.getElementById('js--oven');



    const teleport = document.getElementsByClassName('js--teleport');

    const pickup = document.getElementById('js--pickup');
    const pickup2 = document.getElementById('js--pickup-test');
    const scene = document.getElementById("js--scene");

    const deegbal = document.getElementById("deegbal1");



    addListeners();


    // deegbal.onclick = (event) => {
    //     console.log("je hovered over de tafel");

    //     var cursor = document.getElementById('js--cursor');
    //     //this.console.log();
    //     console.log(event.detail.intersection.point);
    //     //if (!cursor.components.intersectedEl) { return; }
    //     //var intersection = cursor.components.raycaster.getIntersection(cursor.components.intersectedEl);
    //     //var intersectionPosition = intersection.point;
        
    // };

    var hold = false;

    table1.onclick = (event) => {
        
        if(hold){
            this.console.log("bknaladbdbl");
            let child = makeObject("js--pizzaOnTable", "a-circle", event.detail.intersection.point, "0.25", scene, true, "#deegbal_fase_3-glb");
            console.log(event.detail.intersection.point);
            child.setAttribute("scale", ".2 .2 .2");
            child.setAttribute("rotation", "0 0 0");
            document.getElementById("js--holdPizza").remove();
            hold = false;
            table1.removeAttribute("class");
            table2.removeAttribute("class");
            table3.removeAttribute("class");
            oven.removeAttribute("class");
            addListeners();
        }
    };


    table2.onclick = (event) => {
        if(hold){
            console.log("table2");
            let child = makeObject("js--pizzaOnTable", "a-circle", event.detail.intersection.point, "0.25", scene, true, "#deegbal_fase_3-glb");
            child.setAttribute("scale", ".2 .2 .2");
            child.setAttribute("rotation", "0 0 0");
            document.getElementById("js--holdPizza").remove();
            hold = false;
            table1.removeAttribute("class");
            table2.removeAttribute("class");
            table3.removeAttribute("class");
            oven.removeAttribute("class");
            addListeners();
        }
    };

    table3.onclick = (event) => {
        console.log("test");
        if(hold){
            console.log("table3");
            let child = makeObject("js--pizzaOnTable", "a-circle", event.detail.intersection.point, "0.25", scene, true, "#deegbal_fase_3-glb");
            child.setAttribute("scale", ".2 .2 .2");
            child.setAttribute("rotation", "0 0 0");
            document.getElementById("js--holdPizza").remove();
            hold = false;
            table1.removeAttribute("class");
            table2.removeAttribute("class");
            table3.removeAttribute("class");
            oven.removeAttribute("class");
            addListeners();
        }
    };

    oven.onclick = (event) => {
        if(hold){
            let child = makeObject("js--pizzaOnTable", "a-circle", "8.133 1.260 -0.701", "0.25", scene, true, "#deegbal_fase_3-glb");
            child.setAttribute("scale", ".2 .2 .2");
            child.setAttribute("rotation", "0 0 0");
            document.getElementById("js--holdPizza").remove();
            hold = false;
            let att = document.createAttribute("animation");
            att.value = "property: position; easing: linear; dur: 1000; to: 4.84 1.26 -0.701";
            child.setAttribute('animation', att.value);
            table1.removeAttribute("class");
            table2.removeAttribute("class");
            table3.removeAttribute("class");
            oven.removeAttribute("class");
            addListeners();
        }
    };
    
    // for(let i = 0; i < tables.length; i++){
    //     tables[i].onclick = (event) => {
    //         if(hold){
    //             console.log("je hovered over de tafel");
    //             let child = makeObject("js--pizzaOnTable", "a-circle", "4.4 1.2 -5", "0.25", scene, true, "#deegbal_fase_3-glb");
    //             child.setAttribute("scale", ".2 .2 .2");
    //             child.setAttribute("rotation", "0 0 0");
    //             document.getElementById("js--holdPizza").remove();
    //             hold = false;
    //             tables[i].removeAttribute("class");
    //             addListeners();
    //         }
    //     };
    // };



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
                table1.setAttribute("class", "clickable");
                table2.setAttribute("class", "clickable");
                table3.setAttribute("class", "clickable");
                oven.setAttribute("class", "clickable");
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
  
