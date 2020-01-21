window.onload = function(){
    const camera = document.getElementById('js--camera');
    const table1 = document.getElementById('js--werkbank1');
    const table2 = document.getElementById('js--werkbank2');
    const table3 = document.getElementById('js--werkbank3');
    const oven = document.getElementById('js--oven');

    const pickup = document.getElementById('js--pickup');
    const pickup2 = document.getElementById('js--pickup-test');
    const scene = document.getElementById("js--scene");
    const scene2 = document.getElementById("js--scene2");

    // krijtbordcheck
    const doughfase1 = document.getElementById('js--fase1');
    let img1 = document.getElementById('js--kruisje1');
    const audio = new Audio("../media/sounds/krijtbordsound.mp3")

    //text
    const opdracht1 = document.getElementById('js--optie1');
    const opdracht2 = document.getElementById('js--optie2');
    const opdracht3 = document.getElementById('js--optie3');
    const opdracht4 = document.getElementById('js--optie4');
    const opdracht5 = document.getElementById('js--optie5');
    const opdracht6 = document.getElementById('js--optie6');
    const opdracht7 = document.getElementById('js--optie7');
    const opdracht8 = document.getElementById('js--optie8');


    var cameratxt = document.getElementById('js--cameratxt');

    //state veranderen oven
    const ovenstate1 = document.getElementById('js--oven');
    const ovenstate2 = document.getElementById("js--oven2")
    const doughfase2 = document.getElementById('js--fase2');

    //ovenstarten
    const ovenbtn = document.getElementById('js--ovenbtn');

    // var getstate1 = ovenstate1.getAttribute("visible");
    // console.log(getstate1);
    const i = 0

    test = true;

    const deegbal = document.getElementById("deegbal1");

    const tomatensaus = document.getElementById("js--tomatensaus");
    const lepel = document.getElementById("js--lepel");


    //kraanwater

    const sink = document.getElementById("js--sink");
    var waterdruppels = document.getElementsByClassName('js--waterdruppels');
    kraanAan = false;




    const teleport = document.getElementsByClassName('js--teleport');
    const test2 = document.getElementsByClassName('js--pizzaTest');



    //list met alle ingredienten
    const ananas = document.getElementById("js--ananas_pizza");
    const cheese = document.getElementById("js--cheese_pizza");



    var ingredientsList = [[cheese, true], [ananas, true]]

    const holdPizza = document.getElementById("js--holdPizza");
    const pizzaOnTable = document.getElementById("js--pizzaOnTable");

    this.console.log(pizzaOnTable)
    this.console.log(holdPizza)



    addListeners();

    var hold = false;
    var holdLepel = false;

    var currentpizza = "#deegbal_fase_3-glb";
    var soeplepel_saus = "#soeplepel_saus-glb";

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
            console.log("table1");
            holdPizza.setAttribute("visible",false);
            pizzaOnTable.setAttribute("visible",true);
            pizzaOnTable.setAttribute("position", event.detail.intersection.point);
            makePizza();
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
            // let child = makeObject("js--pizzaOnTable", "a-circle", event.detail.intersection.point, "0.25", scene, true, currentpizza);
            // child.setAttribute("scale", ".2 .2 .2");
            // child.setAttribute("rotation", "0 0 0");
            // document.getElementById("js--holdPizza").remove();
            holdPizza.setAttribute("visible",false);
            pizzaOnTable.setAttribute("visible",true);
            pizzaOnTable.setAttribute("position", event.detail.intersection.point);

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
            holdPizza.setAttribute("visible",false);
            pizzaOnTable.setAttribute("visible",true);
            pizzaOnTable.setAttribute("position", event.detail.intersection.point);
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
            document.getElementById("js--holdPizza").setAttribute("visible",false);;
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

    makePizza = () => {
        for(let i = 0; i < ingredientsList.length; i++){
            test2[i].setAttribute("visible",true);
            // if(ingredientsList[i][1]){
            //     element = ingredientsList[i][0];
            //     test2.setAttribute("visible",true);
            // }
        };
    }


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
        pizzaOnTable.onclick = (event) => {
            if(holdLepel){
              pizza = document.getElementById('js--pizzaOnTable');

              pizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus_fase_1.glb");
              setTimeout((event) => {
                pizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus_fase_2.glb");
              }, 1000)
              setTimeout((event) => {
              pizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus_fase_3.glb");
              }, 2000)
              setTimeout((event) => {
              pizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus.glb");
              holdPizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus.glb");
              }, 3000)
            }
            if(!hold){
                // let object = makeObject("js--holdPizza", "a-circle", "0 -0.5 -1.2", "0.25", camera, true, currentpizza);
                // object.setAttribute("scale", ".25 .25 .25");
                holdPizza.setAttribute("visible",true);
                pizzaOnTable.setAttribute("visible",false);
                cheese.setAttribute("visible",true);
                makePizza();
                //document.getElementById('js--pizzaOnTable').remove();
                table1.setAttribute("class", "clickable");
                table2.setAttribute("class", "clickable");
                table3.setAttribute("class", "clickable");
                oven.setAttribute("class", "clickable");
                hold = true;
            }
        };
    }

    tomatensaus.onclick = (event) => {
      if(!hold){
        let object = makeObject("js--holdPizza", "a-circle", ".5 -0.5 -1.2", "0.25", camera, true, soeplepel_saus);
        object.setAttribute("scale", ".12 .12 .12");
        object.setAttribute("rotation", "0 0 20");
        lepel.remove();
        table1.setAttribute("class", "clickable");
        table2.setAttribute("class", "clickable");
        table3.setAttribute("class", "clickable");
        oven.setAttribute("class", "clickable");
        hold = true;
        holdLepel = true;
      }
    };

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

//functie die ervoor zorgt dat er feedback over de hygiëne wordt gezien
    function hygeniëVoltooid(){
      img1.setAttribute("src", "../media/krijtbord/krijtbordimg5.png");
      opdracht1.setAttribute("opacity","1");
      opdracht2.setAttribute("opacity","5");
      cameratxt.setAttribute("value","U bent hygenisch te werkgegaan");
      audio.play();
      setTimeout(function(){
      cameratxt.setAttribute("value","");
    },5000);
    }

    doughfase1.onclick= () => {
      hygeniëVoltooid();
    }

    ovenbtn.onclick = () => {
      timeout();
      cameratxt.setAttribute("value", "Oven gestart!");
      setTimeout(function(){
      cameratxt.setAttribute("value","");
    },3000);

    }

//de oven functioneren
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

//In het begin zorgen dat de welkomst text 8sec gezien wordt
    setTimeout(function(){
    cameratxt.setAttribute("value","");
  },8000);


  function switchScene(){
      scene.setAttribute("visible", true);
      scene2.setAttribute("visible", false);
  }


  sink.onclick = () => {
    functioneerKraan();
  }

  function functioneerKraan(){
    kraanAan = true;
    waterdruppels[0].setAttribute("visible",true);
    waterdruppels[1].setAttribute("visible",true);
    waterdruppels[2].setAttribute("visible",true);

    if (kraanAan == true) {
      sink.onclick = () => {
        kraanAan = false;
        waterdruppels[0].setAttribute("visible",false);
        waterdruppels[1].setAttribute("visible",false);
        waterdruppels[2].setAttribute("visible",false);
      }
    }
  }

}
