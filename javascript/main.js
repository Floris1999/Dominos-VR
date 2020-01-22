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
    const kruisjes = [document.getElementById('js--kruisje1'), document.getElementById('js--kruisje2'), document.getElementById('js--kruisje3'), document.getElementById('js--kruisje4'), document.getElementById('js--kruisje5'),document.getElementById('js--kruisje6')];
    const audio = new Audio("../media/sounds/krijtbordsound.mp3")

    //text
    const opdracht1 = document.getElementById('js--optie1');
    const opdracht2 = document.getElementById('js--optie2');
    const opdracht3 = document.getElementById('js--optie3');
    const opdracht4 = document.getElementById('js--optie4');
    const opdracht5 = document.getElementById('js--optie5');
    const opdracht6 = document.getElementById('js--optie6');
    const opdracht7 = document.getElementById('js--optie7');

    const titel1 = document.getElementById("js--titel1");
    const titel2 = document.getElementById("js--titel2");
    const titel3 = document.getElementById("js--titel3");

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
    const sausfles_knoflook = document.getElementById("js--sausfles_knoflook");


    //list met alle ingrediente
    const cheese = document.getElementsByClassName('js--pizzaTest');
    const ananas = document.getElementsByClassName('js--ananasClass');
    const salami = document.getElementsByClassName('js--salamiClass');
    const shoarma = document.getElementsByClassName('js--shoarmaClass');
    const tomaat = document.getElementsByClassName('js--tomaatClass');
    const ham = document.getElementsByClassName('js--hamClass');

    const knoflook = document.getElementsByClassName('js--knoflookSausClass');


    //kraanwater

    const sink = document.getElementById("js--sink");
    var waterdruppels = document.getElementsByClassName('js--waterdruppels');
    var kraanBezig = false;
    kraanuitgezetnawassen = false;


    //handschoenen

    const handschoenen = document.getElementById('js--handschoenen');
    var handschoenGebruikt = false;

    //States voor te doen bord
    var deegbal_bereid = false;

    //tekst monitor
    const txt1 = document.getElementById('js--ingredient1');
    const txt2 = document.getElementById('js--ingredient2');
    const txt3 = document.getElementById('js--ingredient3');
    const txt4 = document.getElementById('js--ingredient4');
    const txt5 = document.getElementById('js--ingredient5');

    //kruisje monitor

    const kruisjeDesktop1 = document.getElementById("js--kruisje-desk1");
    const kruisjeDesktop2 = document.getElementById("js--kruisje-desk2");
    const kruisjeDesktop3 = document.getElementById("js--kruisje-desk3");
    const kruisjeDesktop4 = document.getElementById("js--kruisje-desk4");



    var ingredientsList = [[cheese, false], [ananas, false], [salami, false] , [shoarma, false] , [ham, false] , [knoflook, false]];
    const ingredientenBakjes = document.getElementsByClassName("ingredienten_bakje");
    const flessen_bakje = document.getElementById("js--bakje_sausflessen");

    const pizzaMargherita = ["tomatensaus", "kaas","Pizza Margerita"];
    const pizzaShoarma = ["tomatensaus", "kaas", "Shoarma", "knoflooksaus", "Pizza Shoarma"];
    const pizzaSalamis = ["tomatensaus", "kaas", "salami", "Pizza Salami"];

    const verschillendepizza = [pizzaMargherita, pizzaShoarma, pizzaSalamis];





console.log(verschillendepizza);
    // Variabelen pickup objecten
    var hold = false;
    var holdLepel = false;
    var holdSausflesKnoflook = false;

    // GLB models
    var soeplepel_saus = "#soeplepel_saus-glb";
    var soeplepel = "#lepel-glb";
    var sausfles_knoflook_glb = "#sausfles_knoflook-glb";

    //test vars hier
    const pizzaDoos = document.getElementById("js--pizzaDoos");

    this.console.log(pizzaDoos);

    addListeners();

    checkCamera = () => {
        posi = camera.getAttribute('position');
        posi = posi.x + " " + posi.y + " " + posi.z;
        this.console.log(posi);
        if( posi == "0 0 0"){
            this.console.log("test");
            camera.setAttribute('position', '-2 1.8 -3');
        }
    }

    //checkCamera();


    oven.onclick = (event) => {
        if(hold){
          holdPizza.setAttribute("visible",false);
          pizzaOnTable.setAttribute("visible",true);
          hold = false;
          pizzaOnTable.setAttribute("position", "8.245 1.22 -.6");
          let att = document.createAttribute("animation");
          att.value = "property: position; easing: linear; dur: 5000; to: 4.5 1.22 -0.701";
          pizzaOnTable.setAttribute('animation', att.value);
          table1.removeAttribute("class");
          table2.removeAttribute("class");
          table3.removeAttribute("class");
          oven.removeAttribute("class");
          addListeners();
          setTimeout( (event) => {
            pizzaOnTable.removeAttribute("gltf-model");
            pizzaOnTable.setAttribute("gltf-model", "#pizzabodem_saus-glb");
            holdPizza.removeAttribute("gltf-model");
            holdPizza.setAttribute("gltf-model", "#pizzabodem_saus-glb");
          },1000);
        }
    };




    for(let i = 0; i < tables.length; i++){
        tables[i].onclick = (event) => {
            console.log(tables);
            checkCamera();
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
            let posi = teleport[i].getAttribute('position').x + "0" + teleport[i].getAttribute('position').z;
            att.value = "property: position; easing: linear; dur: 1000; to: " + posi;
            document.getElementById("rig").setAttribute('animation', att.value);
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
                        //feedback op de kaas
                        kruisjeDesktop2.setAttribute("src","../media/krijtbord/krijtbordimg5.png");
                        audio.play();
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
                            //feedback shoarma
                            kruisjeDesktop3.setAttribute("src", "../media/krijtbord/krijtbordimg5.png");
                            audio.play();
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
              deegbal_bereid = true;
            }
            if(holdSausflesKnoflook){
              let saus = document.getElementById("js--knoflook_saus_pizza");
              saus.setAttribute("visible" ,false);
              console.log(saus);

              ingredientsList[5][1] = true;
              for(let i = 0; i < ingredientsList.length; i++){
                  this.console.log(ingredientsList[4][0][i]);
                  ingredientsList[5][0][i].setAttribute("visible",true);
              };
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
      if(holdLepel === true){

        //monitor veranderen zodra lepel terug is gezet
        kruisjeDesktop1.setAttribute("src", "../media/krijtbord/krijtbordimg5.png");
        audio.play();

        //krijtbord fucntioneren
        hygeniëVoltooid3();
        let saus_lepel = document.getElementById("js--holdLepel");
        let object = makeObject("js--lepel", "a-circle", "-0.264 1.218 -5.25", "0.08", scene, true, soeplepel);
        object.setAttribute("scale", "0.08 0.08 0.08");
        saus_lepel.remove();
        if(deegbal_bereid === true){
          titel2.setAttribute("visible", false);
          opdracht2.setAttribute("visible", false);
          titel3.setAttribute("visible", true);
          opdracht3.setAttribute("visible", true);
        }
        setTimeout( (event) => {
          hold = false;
          holdLepel = false;
        },200)
      }
      if(!hold){
        let lepel = document.getElementById("js--lepel");
        let object = makeObject("js--holdLepel", "a-circle", ".5 -0.5 -1.2", "0.25", camera, true, soeplepel_saus);
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

    sausfles_knoflook.onclick = (event) => {
      if(!hold){
        let static_object = document.getElementById("js--sausfles_knoflook");
        let camera_object = makeObject("js--hold_sausfles_knoflook", "a-circle", ".5 -0.5 -1.2", "0.25", camera, true, sausfles_knoflook_glb);
        camera_object.setAttribute("scale", "0.3 0.3 0.3");
        static_object.remove();
        hold = true;
        holdSausflesKnoflook = true;

        //feedback knoflookSaus
        kruisjeDesktop4.setAttribute("src","../media/krijtbord/krijtbordimg5.png");
        audio.play();
      };
    };

    flessen_bakje.onclick = (event) => {
      if(holdSausflesKnoflook === true){
        let holdObject = document.getElementById("js--hold_sausfles_knoflook");
        let static_object = makeObject("js--sausfles_knoflook", "a-circle", "6.467 1.1 -5.84", "0.08", scene, true, sausfles_knoflook_glb);
        static_object.setAttribute("scale", "0.3 0.3 0.3");
        holdObject.remove();
        setTimeout( (event) => {
          hold = false;
          holdSausflesKnoflook = false;
        },200)
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
      kruisjes[0].setAttribute("src", "../media/krijtbord/krijtbordimg5.png");
      opdracht1.setAttribute("opacity","1");
      opdracht2.setAttribute("opacity","5");
      titel1.setAttribute("visible", false);
      opdracht1.setAttribute("visible",false);
      titel2.setAttribute("visible", true);
      opdracht2.setAttribute("visible",true);
      cameratxt.setAttribute("value","U bent hygenisch te werkgegaan");
      audio.play();
      setTimeout(function(){
      cameratxt.setAttribute("value","");
    },5000);
    }

    function hygeniëVoltooid2(){
      kruisjes[1].setAttribute("src", "../media/krijtbord/krijtbordimg5.png");
      opdracht2.setAttribute("opacity","1");
      opdracht3.setAttribute("opacity","5");
      setText("De deegbal is gevormd!")
      audio.play();
    }

    function hygeniëVoltooid3(){
      kruisjes[2].setAttribute("src", "../media/krijtbord/krijtbordimg5.png");
      opdracht3.setAttribute("opacity","1");
      opdracht4.setAttribute("opacity","5");
      setText("De tomatensaus is verspreid over de bodem")
      audio.play();
    }

    doughfase1.onclick= () => {
      //text op de monitor showen
          hygeniëVoltooid2();
          txt1.setAttribute("value", verschillendepizza[1][verschillendepizza[1].length-1]);
          txt2.setAttribute("value", verschillendepizza[1][0]);
          txt3.setAttribute("value", verschillendepizza[1][1]);
          txt4.setAttribute("value", verschillendepizza[1][2]);
          txt5.setAttribute("value", verschillendepizza[1][3]);


      doughfase1.setAttribute("gltf-model", "../media/deegbal_fases/deegbal_fase_1.glb");
      let att = document.createAttribute("animation__turning");
      att.value = "property: rotation; to: 0 360 0; loop: false; dur: 2000";
      doughfase1.setAttribute('animation', att.value);

      setTimeout(() => {
        doughfase1.setAttribute("gltf-model", "../media/deegbal_fases/deegbal_fase_2.glb");
        doughfase1.setAttribute('animation', att.value);
      }, 2000)

      setTimeout(() => {
        doughfase1.setAttribute("gltf-model", "../media/deegbal_fases/deegbal_fase_3.glb");

        let size = document.createAttribute("animation__scale");
        size.value += "property: scale; to: .2 .2 .2; loop: false; dur: 2000";
        //doughfase1.setAttribute('animation__turning', att.value);
        doughfase1.setAttribute('animation', size.value);

      }, 4000)

      setTimeout(() => {
        doughfase1.remove();
        pizzaOnTable.setAttribute("position", "1 1.05 -5.14");
      }, 6000)
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


  const pizzaSalami = [true, false, true, false, true];
  // const pizzaMargherita = [true, false, false, false, true];
  // var receptenLijst = [pizzaSalami, pizzaMargherita];
  // console.log(receptenLijst[1]);




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
            setText("Goed zo je hebt je eerste pizza gemaakt", 8000);

        }
        if(fouten == 1){
            setText("Goed zo je hebt je eerste pizza gemaakt", 8000);

        }
        if(fouten > 1){
            setText("Goed zo je hebt je eerste pizza gemaakt", 8000);

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
  }

  function kraanAan(){
    waterdruppels[0].setAttribute("visible",true);
    waterdruppels[1].setAttribute("visible",true);
    waterdruppels[2].setAttribute("visible",true);
    kraanBezig = true;
  }

  function kraanUit(){
    waterdruppels[0].setAttribute("visible",false);
    waterdruppels[1].setAttribute("visible",false);
    waterdruppels[2].setAttribute("visible",false);
    kraanBezig = false;
  }

  function gebruikHandschoenen(){
    handschoenenGebruikt = true;
  }

  zeep.onclick = () => {
    zeepTrue();
  }

  sink.onclick = () => {
    if (kraanBezig == false && zeepGebruikt == true) {
      kraanAan();
    } else {
      kraanUit();
      kraanuitgezetnawassen = true;
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

  function pizzaRecept(){
    txt1.setAttribute("value", )
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
