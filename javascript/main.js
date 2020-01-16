window.onload = function(){

    const camera = document.getElementById('js--camera');
    const table = document.getElementById('js--werkbank1');
    const teleport = document.getElementsByClassName('js--teleport');

    const pickup = document.getElementById('js--pickup');
    const pickup2 = document.getElementById('js--pickup-test');
    const scene = document.getElementById("js--scene");

    // krijtbordcheck
    const doughfase1 = document.getElementById('js--fase1');
    let img1 = document.getElementById('js--kruisje1');
    const audio = new Audio("../media/sounds/krijtbordsound.mp3")

    //state veranderen oven
    const ovenstate1 = document.getElementById('js--oven');
    const ovenstate2 = document.getElementById("js--oven2")
    const doughfase2 = document.getElementById('js--fase2');

    // var getstate1 = ovenstate1.getAttribute("visible");
    // console.log(getstate1);
    const i = 0

    test = true;





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

    doughfase1.onclick= () => {
      img1.setAttribute("src", "../media/krijtbord/krijtbordimg5.png");
      console.log("clicked");
      audio.play();
    }

    doughfase2.onclick = () => {
      timeout();

    }

    function timeout() {
    setTimeout(function () {
      var getstate1 = ovenstate1.getAttribute("visible");
      if(getstate1 == true){
        // ovenstate1.removeAttribute("visible");
        ovenstate1.setAttribute("visible", "false");
        ovenstate2.setAttribute("visible", "true");
        console.log("loop");
        console.log(getstate1);
      }if (getstate1 == false) {
        ovenstate1.setAttribute("visible", "true");
        ovenstate2.setAttribute("visible", "false");
      }

        timeout();
    }, 400);
}
}
