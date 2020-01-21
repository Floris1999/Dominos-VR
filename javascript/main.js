window.onload = function(){

    //basic declarations
    const table1 = document.getElementById('js--werkbank1');
    const table2 = document.getElementById('js--werkbank2');
    const table3 = document.getElementById('js--werkbank3');
    const tables = this.document.getElementsByClassName("js--werkbank");
    const oven = document.getElementById('js--oven');
    const teleport = document.getElementsByClassName('js--teleport');

    //game declarations
    const camera = document.getElementById('js--camera');
    const scene = document.getElementById("js--scene");
    var cameratxt = document.getElementById('js--cameratxt');
    const holdPizza = document.getElementById("js--holdPizza");
    const pizzaOnTable = document.getElementById("js--pizzaOnTable");

    //alles tomatensaus

    //alles ingredienten


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

    //Zeep
    const zeep = document.getElementById('js--zeep');
    var zeepGebruikt = false;

    //state veranderen oven
    const ovenstate1 = document.getElementById('js--oven');
    const ovenstate2 = document.getElementById("js--oven2")
    const doughfase2 = document.getElementById('js--fase2');

    //ovenstarten
    const ovenbtn = document.getElementById('js--ovenbtn');

    // var getstate1 = ovenstate1.getAttribute("visible");
    // console.log(getstate1);


    const deegbal = document.getElementById("deegbal1");
    const tomatensaus = document.getElementById("js--tomatensaus");
    const lepel = document.getElementById("js--lepel");


    //list met alle ingrediente
    const cheese = document.getElementsByClassName('js--pizzaTest');
    const ananas = document.getElementsByClassName('js--ananasClass');
    const salami = document.getElementsByClassName('js--salamiClass');
    const shoarma = document.getElementsByClassName('js--shoarmaClass');
    const tomaat = document.getElementsByClassName('js--tomaatClass');

    //kraanwater

    const sink = document.getElementById("js--sink");
    var waterdruppels = document.getElementsByClassName('js--waterdruppels');
    var kraanBezig = false;
    kraanuitgezetnawassen = false;


    //handschoenen

    const handschoenen = document.getElementById('js--handschoenen');
    var handschoenGebruikt = false;



    var ingredientsList = [[cheese, false], [ananas, false], [salami, false] , [shoarma, false] , [tomaat, false]]
    const ingredientenBakjes = document.getElementsByClassName("ingredienten_bakje");



    var hold = false;
    var holdLepel = false;
    var soeplepel_saus = "#soeplepel_saus-glb";

    //test vars hier
    const pizzaDoos = document.getElementById("js--pizzaDoos");

    this.console.log(pizzaDoos);


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


    addListeners();


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




    for(let i = 0; i < tables.length; i++){
        tables[i].onclick = (event) => {
            console.log(tables);
            console.log(i);
            if(hold){
                console.log("table3");
                holdPizza.setAttribute("visible",false);
                pizzaOnTable.setAttribute("visible",true);
                let posi = event.detail.intersection.point.x + " 1.085 " + event.detail.intersection.point.z;
                pizzaOnTable.setAttribute("position", posi);

                hold = false;
                table1.removeAttribute("class");
                table2.removeAttribute("class");
                table3.removeAttribute("class");
                oven.removeAttribute("class");
                addListeners();
            }
        };
    };



    for(let i = 0; i < teleport.length; i++){
        teleport[i].onclick = (event) => {
            let att = document.createAttribute("animation");
            att.value = "property: position; easing: linear; dur: 1000; to: " + teleport[i].getAttribute('position').x + " -0.4 " + teleport[i].getAttribute('position').y;
            console.log( teleport[i].getAttribute('position').x + " -0.4 " + teleport[i].getAttribute('position').z);
            camera.setAttribute('animation', att.value);
        };
    };

    for(let i = 0; i < ingredientenBakjes.length; i++){
        ingredientenBakjes[i].onclick = (event) => {
            ingredient = ingredientenBakjes[i].id;
            switch(ingredient){
                case "bakje_kaas":
                    ingredientsList[0][1] = true;
                    for(let i = 0; i < ingredientsList.length; i++){
                        this.console.log(ingredientsList[0][0][i]);
                        ingredientsList[0][0][i].setAttribute("visible",true);
                    };
                    break;
                case "bakje_ananas":
                        ingredientsList[1][1] = true;
                        for(let i = 0; i < ingredientsList.length; i++){
                            this.console.log(ingredientsList[1][0][i]);
                            ingredientsList[1][0][i].setAttribute("visible",true);
                        };
                        break;
                case "bakje_salami":
                        ingredientsList[2][1] = true;
                        for(let i = 0; i < ingredientsList.length; i++){
                            this.console.log(ingredientsList[2][0][i]);
                            ingredientsList[2][0][i].setAttribute("visible",true);
                        };
                        break;
                case "bakje_shoarma":
                        ingredientsList[3][1] = true;
                        for(let i = 0; i < ingredientsList.length; i++){
                            this.console.log(ingredientsList[3][0][i]);
                            ingredientsList[3][0][i].setAttribute("visible",true);
                        };
                        break;
                case "bakje_tomaat":
                        ingredientsList[4][1] = true;
                        for(let i = 0; i < ingredientsList.length; i++){
                            this.console.log(ingredientsList[4][0][i]);
                            ingredientsList[4][0][i].setAttribute("visible",true);
                        };
                        break;
            }
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

                pizzaOnTable.setAttribute("position", "20 20 20");

                //cheese.setAttribute("visible",true);
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

    setText = (text, time) =>{
      cameratxt.setAttribute("value",text);
        setTimeout(function(){
            cameratxt.setAttribute("value","");
        },time);
    }

  setText("Welkom bij de oefenmodus, de stappen staan uitgelegd op het krijtbord. Succes!", 8000);



  pizzaSalami = [true, false, true, false, true];

  pizzaDoos.onclick = () => {
    if(hold){
        let fouten = 0;
        console.log("pizzadoos");
        holdPizza.setAttribute("visible",false);
        pizzaOnTable.setAttribute("visible",true);
        let posi = "0.9 1.162 -0.646";
        pizzaOnTable.setAttribute("position", posi);
        hold = false;
        table1.removeAttribute("class");
        table2.removeAttribute("class");
        table3.removeAttribute("class");
        oven.removeAttribute("class");


        for(var i = ingredientsList.length; i--;) {
            if(ingredientsList[i][1] !== pizzaSalami[i]){
                this.console.log(pizzaSalami[i]);
                this.console.log(ingredientsList[i][1])
                fouten++;
                this.console.log(fouten);
            }
        }

        if(fouten == 0){
            setText("Goed zo je hebt de pizza goed gemaakt", 8000);

        }
        if(fouten == 1){
            setText("Fout je hebt 1 ingredient verkeerd", 8000);

        }
        if(fouten > 1){
            setText("Fout je hebt "+ fouten + " ingredienten verkeerd", 8000);

        }


    }
  };

  removeClickAble = () => {
    for(let i = 0; i < tables.length; i++){
        tables[i].classList.remove("clickable");
    }
  }



//   function gebruikZeep(){
//         setText("Er is zeep op de handen gedaan, zet nu de kraan aan om de handen te wassen!", 8000);
//         zeepGebruikt = true;
//
//         if (zeepGebruikt == true) {
//           sink.onclick = () => {
//             functioneerKraan();
//           }
//         }
//
//         if (zeepGebruikt == false) {
//           sink.onclick = () => {
//             setText("Doe eerste zeep op de handen", 3000);
//           }
//         }
//   }
//
//   zeep.onclick = () => {
//     gebruikZeep();
//   }
//
// console.log(zeepGebruikt);



  function zeepTrue(){
    zeepGebruikt = true;
     setText("Er is zeep op de handen gedaan, zet nu de kraan aan om de handen te wassen!", 8000);
  }

  function kraanAan(){
    setText("De handen zijn gewassen, doe nu de kraan uit", 3000);
    waterdruppels[0].setAttribute("visible",true);
    waterdruppels[1].setAttribute("visible",true);
    waterdruppels[2].setAttribute("visible",true);
    kraanBezig = true;
  }

  function kraanUit(){
    setText("De kraan is uit doe de handschoenen aan", 3000);
    waterdruppels[0].setAttribute("visible",false);
    waterdruppels[1].setAttribute("visible",false);
    waterdruppels[2].setAttribute("visible",false);
    kraanBezig = false;
  }

  function gebruikHandschoenen(){
    setText("De handschoenen zijn aangetrokken", 2000);
    handschoenenGebruikt = true;
  }

  zeep.onclick = () => {
    zeepTrue();
  }

  sink.onclick = () => {
    console.log(zeepGebruikt);
    if (kraanBezig == false && zeepGebruikt == true) {
      kraanAan();
      console.log("de kraan is aan");
    }
    else if (kraanBezig == false && zeepGebruikt == false) {
      setText("Gebruik eerst zeep voordat de handen zijn gewassen!", 2000);
    } else {
      kraanUit();
      kraanuitgezetnawassen = true;
      console.log("de kraan is uit");
    }
  }

  handschoenen.onclick = () => {

    if (kraanBezig == false && zeepGebruikt == true && kraanuitgezetnawassen == true) {
      gebruikHandschoenen();
      hygeniëVoltooid();
    }
    else if (kraanBezig == true && zeepGebruikt == true && kraanuitgezetnawassen == false) {
        setText("Zet de kraan eerst uit!", 4000);
    }

    else if (kraanBezig == false && zeepGebruikt == true && kraanuitgezetnawassen == false) {
      setText("Was eerst de handen!", 4000);
    }

    else if (kraanBezig == false && zeepGebruikt == false && kraanuitgezetnawassen == false) {
      setText("Stop zeep op de handen en was ze daarna!", 4000);
    }
  }




  // function functioneerKraan(){
  //   kraanAan = true;
  //   setText("De handen zijn gewassen, doe nu de kraan uit", 3000);
  //   waterdruppels[0].setAttribute("visible",true);
  //   waterdruppels[1].setAttribute("visible",true);
  //   waterdruppels[2].setAttribute("visible",true);
  //
  //   if (kraanAan == true) {
  //     sink.onclick = () => {
  //       kraanAan = false;
  //       setText("De kraan is uit doe de handschoenen aan", 3000);
  //       waterdruppels[0].setAttribute("visible",false);
  //       waterdruppels[1].setAttribute("visible",false);
  //       waterdruppels[2].setAttribute("visible",false);
  //     }
  //   }
  // }

}



// niet nodige code weghalen als alles werkt
// table1.onclick = (event) => {
//     if(hold){
//         console.log("table1");
//         holdPizza.setAttribute("visible",false);
//         pizzaOnTable.setAttribute("visible",true);
//         let posi = event.detail.intersection.point.x + " 1.085 " + event.detail.intersection.point.z;
//         pizzaOnTable.setAttribute("position", posi);
//         //makePizza();
//         hold = false;
//         table1.removeAttribute("class");
//         table2.removeAttribute("class");
//         table3.removeAttribute("class");
//         oven.removeAttribute("class");
//         addListeners();
//     }
// };


// table2.onclick = (event) => {
//     if(hold){
//         console.log("table2");
//         // let child = makeObject("js--pizzaOnTable", "a-circle", event.detail.intersection.point, "0.25", scene, true, currentpizza);
//         // child.setAttribute("scale", ".2 .2 .2");
//         // child.setAttribute("rotation", "0 0 0");
//         // document.getElementById("js--holdPizza").remove();
//         holdPizza.setAttribute("visible",false);
//         pizzaOnTable.setAttribute("visible",true);
//         let posi = event.detail.intersection.point.x + " 1.085 " + event.detail.intersection.point.z;
//         pizzaOnTable.setAttribute("position", posi);

//         hold = false;
//         table1.removeAttribute("class");
//         table2.removeAttribute("class");
//         table3.removeAttribute("class");
//         oven.removeAttribute("class");
//         addListeners();
//     }
// };

// table3.onclick = (event) => {
//     console.log("test");
//     if(hold){
//         console.log("table3");
//         holdPizza.setAttribute("visible",false);
//         pizzaOnTable.setAttribute("visible",true);
//         let posi = event.detail.intersection.point.x + " 1.085 " + event.detail.intersection.point.z;
//         pizzaOnTable.setAttribute("position", posi);

//         hold = false;
//         table1.removeAttribute("class");
//         table2.removeAttribute("class");
//         table3.removeAttribute("class");
//         oven.removeAttribute("class");
//         addListeners();
//     }
// };
