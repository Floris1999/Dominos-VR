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

    // krijtbordcheck
    // const doughfase1 = document.getElementById('js--fase1');
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

    const deegbal = document.getElementById("deegbal1");
    const pizzabodem_rauw = document.getElementById("js--pizzaOnTable");

    const tomatensaus = document.getElementById("js--tomatensaus");
    const lepel = document.getElementById("js--lepel");





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
    var holdLepel = false;
    var holdSausLepel = false;

    var currentpizza = "#deegbal_fase_3-glb";
    var lepelglb = "#soeplepel_saus-glb";

    // tomatensaus.onclick = (event) => {
    //     this.console.log("test");
    //     pizza = document.getElementById('js--pizzaOnTable');
    //     pizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus_fase_1.glb");
    //     setTimeout((event) => {
    //       pizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus_fase_2.glb");
    //     }, 1000)
    //     setTimeout((event) => {
    //     pizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus_fase_3.glb");
    //     }, 2000)
    //     setTimeout((event) => {
    //     pizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus.glb");
    //   }, 3000)
    //     currentpizza = "#pizzabodem_rauw_saus-glb"
    // };


    table1.onclick = (event) => {
        if(hold){
            this.console.log("bknaladbdbl");
            let child = makeObject("js--pizzaOnTable", "a-circle", event.detail.intersection.point, "0.25", scene, true, currentpizza);
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
            let child = makeObject("js--pizzaOnTable", "a-circle", event.detail.intersection.point, "0.25", scene, true, currentpizza);
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
            let child = makeObject("js--pizzaOnTable", "a-circle", event.detail.intersection.point, "0.25", scene, true, currentpizza);
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
            let child = makeObject("js--pizzaOnTable", "a-circle", "8.133 1.260 -0.701", "0.25", scene, true, "");
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
          console.log("werkt");
          if(holdLepel === true){
            let pizza = document.getElementById('js--pizzaOnTable');
            pizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus_fase_1.glb");
               setTimeout((event) => {
            pizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus_fase_2.glb");
            }, 1000)
            setTimeout((event) => {
            pizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus_fase_3.glb");
            }, 2000)
            setTimeout((event) => {
            pizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus.glb");
            }, 3000)
          };
          if(!hold){
            let object = makeObject("js--holdPizza", "a-circle", "0 -0.5 -1.2", "0.25", camera, true, currentpizza);
            object.setAttribute("scale", ".25 .25 .25");
            document.getElementById('js--pizzaOnTable').remove();
            table1.setAttribute("class", "clickable");
            table2.setAttribute("class", "clickable");
            table3.setAttribute("class", "clickable");
            oven.setAttribute("class", "clickable");
            hold = true;
          };

        };
    };

    function addListeners(){
        tomatensaus.onclick = (event) => {
          if(!hold){
              let object = makeObject("js--holdLepel", "a-circle", ".5 -0.5 -1.2", "0.25", camera, true, lepelglb);
              object.setAttribute("scale", ".12 .12 .12");
              object.setAttribute("rotation", "0 0 20");
              document.getElementById('js--lepel').remove();
              hold = true;
              holdLepel = true;
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

    // doughfase1.onclick= () => {
    //   img1.setAttribute("src", "../media/krijtbord/krijtbordimg5.png");
    //   console.log("clicked");
    //   audio.play();
    // }
    //
    // doughfase2.onclick = () => {
    //   timeout();
    //
    // }

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
