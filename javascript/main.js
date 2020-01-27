window.onload = function(){
    //line gefixt voor api
    // getRecipe(1)

    //basic declarations

    const table1 = document.getElementById('js--werkbank1');
    const table2 = document.getElementById('js--werkbank2');
    const table3 = document.getElementById('js--werkbank3');
    const tables = this.document.getElementsByClassName("js--werkbank");
    const oven = document.getElementById('js--oven');
    const teleport = document.getElementsByClassName('js--teleport');
    const vuilnisbak = this.document.getElementById("js--vuilnisbak");

    //game declarations
    const camera = document.getElementById('js--camera');
    const scene = document.getElementById("js--scene");
    var cameratxt = document.getElementById('js--cameratxt');
    const holdPizza = document.getElementById("js--holdPizza");
    const pizzaOnTable = document.getElementById("js--pizzaOnTable");
    const checkButton = document.getElementById("js--button");

    //Developer mode
    var developer_mode = true;

    //teleportstart
    var bigteleportOn = true;
    const bigteleport = document.getElementById("js--bigteleport");


    //Pizzasnijder
    const pizzasnijder = document.getElementById('js--pizzasnijder');
    const gesnedenPizza = document.getElementById('js--gesneden');
    const lijn1 = document.getElementById("js--gesneden1");
    const lijn2 = document.getElementById("js--gesneden2");
    const lijn3 = document.getElementById("js--gesneden3");
    const lijn4 = document.getElementById("js--gesneden4");



    // krijtbordcheck
    const doughfase1 = document.getElementById('js--fase1');

    var positiedeeg = doughfase1.getAttribute("position");
    console.log(positiedeeg);
    const kruisjes = [document.getElementById('js--kruisje1'), document.getElementById('js--kruisje2'), document.getElementById('js--kruisje3'), document.getElementById('js--kruisje4')];

    const krijtlijn = document.getElementsByClassName("krijtlijn");
    const krijtlijnen = [];

    var pizzaStatus = "";
    const audio = new Audio("../media/sounds/krijtbordsound.mp3")

    //text
    const opdracht1 = document.getElementById('js--optie1');
    const opdracht2 = document.getElementById('js--optie2');
    const opdracht3 = document.getElementById('js--optie3');
    const opdracht4 = document.getElementById('js--optie4');
    const opdracht5 = document.getElementById('js--optie5');

    const titel1 = document.getElementById("js--titel1");
    const titel2 = document.getElementById("js--titel2");
    const titel3 = document.getElementById("js--titel3");
    const titel4 = document.getElementById("js--titel4");
    const titel5 = document.getElementById("js--titel5");

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
    const sausfles_bbq = document.getElementById("js--sausfles_bbq");


    //list met alle ingrediente
    const cheese = document.getElementsByClassName('js--pizzaTest');
    const ananas = document.getElementsByClassName('js--ananasClass');
    const salami = document.getElementsByClassName('js--salamiClass');
    const shoarma = document.getElementsByClassName('js--shoarmaClass');
    const tomaat = document.getElementsByClassName('js--tomaatClass');
    const ham = document.getElementsByClassName('js--hamClass');
    const champignon = document.getElementsByClassName('js--champignonClass');
    const mozzarella = document.getElementsByClassName('js--mozzarellaClass');

    const knoflook = document.getElementsByClassName('js--knoflookSausClass');
    const bbq = document.getElementsByClassName('js--bbqSausClass');


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
    const txt1 = document.getElementById('js--ingredient0');
    const txt2 = document.getElementById('js--ingredient1');
    const txt3 = document.getElementById('js--ingredient2');
    const txt4 = document.getElementById('js--ingredient3');
    const txt5 = document.getElementById('js--ingredient4');

    //kruisje monitor

    const kruisjeDesktop1 = document.getElementById("js--kruisje-desk1");
    const kruisjeDesktop2 = document.getElementById("js--kruisje-desk2");
    const kruisjeDesktop3 = document.getElementById("js--kruisje-desk3");
    const kruisjeDesktop4 = document.getElementById("js--kruisje-desk4");

    //Opdracht array
    var opdrachten1 = [false, false, false, false];
    var opdrachten2 = [false, false, false, false];
    var opdrachten3 = [false, false, false, false];
    var opdrachten4 = [false, false, false, false];

    var opdracht1Voltooid = false;
    var opdracht2Voltooid = false;
    var opdracht3Voltooid = false;
    var opdracht4Voltooid = false;

    const entityStart = document.getElementById("js--fixopacity");
    const startbtn = document.getElementById("js--startgame");
    const startSchermEntity = document.getElementById("js--startschermMode");
    var blinkingtxt = document.getElementById("js--blinking");
    const modal1 = document.getElementById("js--uitleg");
    const modal2 = document.getElementById("js--extra");
    const uitlegbtn = document.getElementById("js--uitlegbtn");
    const infobtn = document.getElementById("js--infobtn");
    const kruisjeUitleg = document.getElementById("js--kruisjeuitleg");
    const kruisjeInfo = document.getElementById("js--kruisjeinfo");
    const dominostarting = document.getElementById("js--dominostarting");


    var ingredientsList = [cheese, ananas, salami,  shoarma, ham, champignon, mozzarella, tomaat, knoflook, bbq];
    const ingredientenBakjes = document.getElementsByClassName("ingredienten_bakje");
    const flessen_bakje = document.getElementById("js--bakje_sausflessen");

    const pizzaMargherita = ["Pizza Margerita", "tomatensaus", "kaas", "mozzarella"];
    const pizzaShoarma = ["Pizza Shoarma", "tomatensaus", "kaas", "shoarma", "knoflooksaus"];
    const pizzaSalamis = ["Pizza Salami", "tomatensaus", "kaas", "salami"];

    var pizzaRecept;


    var pizzaGemaakt = {
      ingredients: [],
      model: "#pizzabodem_saus-glb",
    }

    const verschillendepizza = [pizzaMargherita, pizzaShoarma, pizzaSalamis];
    // Variabelen pickup objecten
    var hold = false;
    var holdLepel = false;
    var holdSausflesKnoflook = false;
    var holdSausflesBbq = false;
    var holdSnijder = false;

    let checkCount = 0;

    // GLB models
    var soeplepel_saus = "#soeplepel_saus-glb";
    var soeplepel = "#lepel-glb";
    var sausfles_knoflook_glb = "#sausfles_knoflook-glb";
    var sausfles_bbq_glb = "#sausfles_bbq-glb";
    var pizzasnijderglb = "#pizzasnijder-glb";

    //test vars hier
    const pizzaDoos = document.getElementById("js--pizzaDoos");
    this.console.log(pizzaDoos);

    startscherm();
    addListeners();
    holdPizzaSnijder();



    loadIngredients = () =>{
      for(let i = 0; i < ingredientsList.length; i++){
        this.console.log(ingredientsList[3][i]);
        ingredientsList[i][i].setAttribute("visible",true);
      };
    }
    removeIngredients = () =>{
        for(let i = 0; i < ingredientsList.length; i++){
            this.console.log(ingredientsList[3][0][i]);
            ingredientsList[i][0][i].setAttribute("visible",false);
          };
    }


    oven.onclick = (event) => {
      if(opdracht3Voltooid || developer_mode == true){
        if(hold){
          krijtlijnen[12].setAttribute("visible", "true");
          holdPizza.setAttribute("visible",false);
          pizzaOnTable.setAttribute("visible",true);
          hold = false;
          pizzaOnTable.setAttribute("position", "8.245 1.22 -.6");
          let att = document.createAttribute("animation");
          att.value = "property: position; easing: linear; dur: 5000; to: 4.5 1.22 -0.701";
          pizzaOnTable.setAttribute('animation', att.value);
          removeClickAble();
          addListeners();
          setTimeout( (event) => {
            pizzaOnTable.removeAttribute("gltf-model");
            pizzaOnTable.setAttribute("gltf-model", "#pizzabodem_saus-glb");
            holdPizza.removeAttribute("gltf-model");
            holdPizza.setAttribute("gltf-model", "#pizzabodem_saus-glb");
            pizzaStatus = "gekookt";
          },1000);
        }
      }
    };

    vuilnisbak.onclick = () => {
      if(hold){
        holdPizza.setAttribute("visible",false);
        pizzaOnTable.setAttribute("visible",true);
        pizzaOnTable.setAttribute("position", "30 1.05 -5.14");
        doughfase1.setAttribute("position", "1 1.05 -5.14");
        hold = false;
        removeClickAble();
      }
    }

    for(let i = 0; i < krijtlijn.length; i++){
      krijtlijnen.push(krijtlijn[i]);
    }

    for(let i = 0; i < tables.length; i++){
        tables[i].onclick = (event) => {
            console.log(tables);
            if(holdLepel){
              return;
            }
            if(hold){
                console.log("table3");
                holdPizza.setAttribute("visible",false);
                pizzaOnTable.setAttribute("visible",true);
                let posi = event.detail.intersection.point.x + " 1.085 " + event.detail.intersection.point.z;
                pizzaOnTable.setAttribute("position", posi);
                hold = false;
                removeClickAble();
                oven.removeAttribute("class");
                addListeners();
            }
        };
    };

    for(let i = 0; i < teleport.length; i++){
        teleport[i].onclick = (event) => {
            let att = document.createAttribute("animation");
            let posi = teleport[i].getAttribute('position').x + " 1.8 " + teleport[i].getAttribute('position').z;
            att.value = "property: position; easing: linear; dur: 1000; to: " + posi;
            document.getElementById("rig").setAttribute('animation', att.value);
        };
    };


        bigteleport.onclick = (event) => {
            bigteleport.setAttribute("scale", ".3 .3 .3")
            let att = document.createAttribute("animation");
            let posi = bigteleport.getAttribute('position').x + " 1.8 " + bigteleport.getAttribute('position').z;
            att.value = "property: position; easing: linear; dur: 1000; to: " + posi;
            document.getElementById("rig").setAttribute('animation', att.value);
        };

    for(let i = 0; i < ingredientenBakjes.length; i++){
        ingredientenBakjes[i].onclick = (event) => {
          if( (opdracht1Voltooid && opdracht2Voltooid) || developer_mode == true){
            ingredient = ingredientenBakjes[i].id;
            switch(ingredient) {
                case "bakje_kaas":
                    for(let i = 0; i < 2; i++){
                        this.console.log(ingredientsList[0][i]);
                        ingredientsList[0][i].setAttribute("visible",true);
                        //feedback op de kaas
                        if(!pizzaGemaakt.ingredients.includes("kaas")){
                          pizzaGemaakt.ingredients.push("kaas");
                      }
                      audio.play();
                    };
                    break;
                case "bakje_ananas":
                        for(let i = 0; i < 2; i++){
                          this.console.log(ingredientsList[1][i]);
                          ingredientsList[1][i].setAttribute("visible",true);
                          if(!pizzaGemaakt.ingredients.includes("ananas")){
                            pizzaGemaakt.ingredients.push("ananas");
                        }
                      };
                      break;
                case "bakje_salami":
                          for(let i = 0; i < 2; i++){
                            this.console.log(ingredientsList[2][i]);
                            ingredientsList[2][i].setAttribute("visible",true);
                            if(!pizzaGemaakt.ingredients.includes("salami")){
                              pizzaGemaakt.ingredients.push("salami");
                          }
                        };
                        break;
                case "bakje_shoarma":
                          for(let i = 0; i < 2; i++){
                            this.console.log(ingredientsList[3][i]);
                            ingredientsList[3][i].setAttribute("visible",true);
                            if(!pizzaGemaakt.ingredients.includes("shoarma")){
                              pizzaGemaakt.ingredients.push("shoarma");
                          }
                        };
                        break;
                case "bakje_ham":
                          for(let i = 0; i < 2; i++){
                            this.console.log(ingredientsList[4][i]);
                            ingredientsList[4][i].setAttribute("visible",true);
                            if(!pizzaGemaakt.ingredients.includes("ham")){
                              pizzaGemaakt.ingredients.push("ham");
                          }
                        };
                        break;
                case "bakje_champignon":
                          for(let i = 0; i < 2; i++){
                            this.console.log(ingredientsList[5][i]);
                            ingredientsList[5][i].setAttribute("visible",true);
                            if(!pizzaGemaakt.ingredients.includes("champignon")){
                              pizzaGemaakt.ingredients.push("champignon");
                          }
                        };
                        break;
                case "bakje_mozzarella":
                          for(let i = 0; i < 2; i++){
                            this.console.log(ingredientsList[6][i]);
                            ingredientsList[6][i].setAttribute("visible",true);
                            if(!pizzaGemaakt.ingredients.includes("mozzarella")){
                              pizzaGemaakt.ingredients.push("mozzarella");
                          }
                        };
                        break;
                case "bakje_tomaat":
                          for(let i = 0; i < 2; i++){
                            this.console.log(ingredientsList[7][i]);
                            ingredientsList[7][i].setAttribute("visible",true);
                            if(!pizzaGemaakt.ingredients.includes("tomaat")){
                              pizzaGemaakt.ingredients.push("tomaat");
                          }
                        };
                        break;
            };
          };
        };
    };

    var clickedPizza = 0;

  //   function holdPizzaSnijder(){
  //     pizzasnijder.onclick = () => {
  //       if(!hold){
  //           let object = makeObject("js--pizzasnijder", "a-circle", ".9 0 -1.2", "0.25", camera, true, pizzasnijderglb);
  //           object.setAttribute("scale", "0.1 0.1 0.1");
  //           object.setAttribute("rotation", "0 0 -20");
  //           pizzasnijder.setAttribute("visible",false);
  //           holdSnijder = true;
  //       }
  //
  //       if (holdSnijder == true && pizzaOnTable.getAttribute("position").x === 0.9 && pizzaOnTable.getAttribute("position").y === 1.162 && pizzaOnTable.getAttribute("position").z === -0.646 && clickedPizza === 0) {
  //           pizzaOnTable.onclick = (event) => {
  //               gesnedenPizza.setAttribute("visible", true);
  //               lijn1.setAttribute("visible", true);
  //               clickedPizza += 1;
  //               console.log(clickedPizza);
  //
  //       }
  //     }
  //
  //       else if (holdSnijder == true && pizzaOnTable.getAttribute("position").x === 0.9 && pizzaOnTable.getAttribute("position").y === 1.162 && pizzaOnTable.getAttribute("position").z === -0.646 && clickedPizza === 1) {
  //         console.log("test");
  //         pizzaOnTable.onclick = (event) => {
  //             gesnedenPizza.setAttribute("visible", true);
  //             lijn2.setAttribute("visible", true);
  //             clickedPizza += 1;
  //
  //       }
  //     }
  //   }
  // }

  function holdPizzaSnijder(){
    pizzasnijder.onclick = () => {
      if(!holdSnijder){
          var pizzasnijderHold = makeObject("js--pizzasnijderHold", "a-circle", ".9 0 -1.2", "0.25", camera, true, pizzasnijderglb);
          pizzasnijderHold.setAttribute("scale", "0.1 0.1 0.1");
          pizzasnijderHold.setAttribute("rotation", "0 0 -20");
          pizzasnijder.setAttribute("visible",false);
          setTimeout(() => {
            holdSnijder = true;
          }, 200)
      }
      if (holdSnijder == true) {
        pizzasnijder.setAttribute("visible",true);
        pizzasnijderHold.setAttribute("visible",false);
        // pizzasnijderHold.remove();
        setTimeout(() => {
          holdSnijder = false;
        }, 200)
      }
    }
  }

      // var coordinaatx = pizzasnijder.getAttribute("rotation").x - 90;
      // var coordinaaty = pizzasnijder.getAttribute("rotation").y;
      // var coordinaatz = pizzasnijder.getAttribute("rotation").z;

    function addListeners(){
        pizzaOnTable.onclick = (event) => {
          if(opdracht1Voltooid  || developer_mode == true){
            if(holdLepel){
              if(!pizzaGemaakt.ingredients.includes("tomatensaus")){
                pizzaGemaakt.ingredients.push("tomatensaus");
                krijtlijnen[6].setAttribute("visible", "true");
              }
              deegbal_bereid = true;
              pizza = document.getElementById('js--pizzaOnTable');
              pizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus_fase_1.glb");
              setTimeout((event) => {
                pizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus_fase_2.glb");
              }, 1000);
              setTimeout((event) => {
              pizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus_fase_3.glb");
              }, 2000);
              setTimeout((event) => {
              pizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus.glb");
              holdPizza.setAttribute("gltf-model", "../media/pizzabodem_rauw_saus/pizzabodem_rauw_saus.glb");
              }, 3000);

            }
            if(holdSausflesKnoflook){
              let saus = document.getElementById("js--knoflook_saus_pizza");
              saus.setAttribute("visible" ,false);
              console.log(saus);

              for(let i = 0; i < 2; i++){
                  ingredientsList[8][i].setAttribute("visible",true);
                  if(!pizzaGemaakt.ingredients.includes("knoflooksaus")){
                    pizzaGemaakt.ingredients.push("knoflooksaus");
              };
            };
            }
            if(holdSausflesBbq){
              let saus = document.getElementById("js--bbq_saus_pizza");
              saus.setAttribute("visible" ,false);
              console.log(saus);

              for(let i = 0; i < 2; i++){
                  ingredientsList[9][i].setAttribute("visible",true);
                  if(!pizzaGemaakt.ingredients.includes("bbqsaus")){
                    pizzaGemaakt.ingredients.push("bbqsaus");
              };
            };
            }
            if(!hold && !holdSnijder){
              if(opdracht2Voltooid == true){
                krijtlijnen[8].setAttribute("visible", "true");
                krijtlijnen[9].setAttribute("visible", "true");
              }
              if(pizzaStatus == "gekookt"){
                krijtlijnen[13].setAttribute("visible", "true");
              }
              holdPizza.setAttribute("visible",true);
              pizzaOnTable.setAttribute("visible",false);
              pizzaOnTable.setAttribute("position", "20 20 20");
              setClickAble();
              hold = true;
            }
            if ((holdSnijder == true && pizzaOnTable.getAttribute("position").x === 0.9 && pizzaOnTable.getAttribute("position").y === 1.162 && pizzaOnTable.getAttribute("position").z === -0.646 && clickedPizza === 0 && opdracht3Voltooid == true) || developer_mode) {
              console.log("hjecgiuehlwe");
              // gesnedenPizza.setAttribute("visible", true);
              lijn1.setAttribute("visible", true);
              document.getElementById("js--pizzasnijderHold").remove();
              pizzasnijder.setAttribute("position", "0.894 1.186 -0.380");
              pizzasnijder.setAttribute("visible", true);
              pizzasnijder.setAttribute("rotation", "0 260 " + lijn1.getAttribute("rotation").z);
              pizzasnijder.setAttribute("animation","property: position; to: 0.894 1.186 -0.821; dur: 2000; easing: linear;")

              clickedPizza += 1;
            }

            else if ((holdSnijder == true && pizzaOnTable.getAttribute("position").x === 0.9 && pizzaOnTable.getAttribute("position").y === 1.162 && pizzaOnTable.getAttribute("position").z === -0.646 && clickedPizza === 1 && opdracht3Voltooid == true) || developer_mode) {
              // gesnedenPizza.setAttribute("visible", true);
              lijn2.setAttribute("visible", true);
              pizzasnijder.setAttribute("position", "0.771 1.186 -0.574");
              console.log(lijn2.getAttribute("position"));
              pizzasnijder.setAttribute("visible", true);
              pizzasnijder.setAttribute("rotation", "0 30 -40");
              pizzasnijder.setAttribute("animation","property: position; to: 1.066 1.186 -0.750; dur: 2000; easing: linear;")
              clickedPizza += 1;

            }

            else if ((holdSnijder == true && pizzaOnTable.getAttribute("position").x === 0.9 && pizzaOnTable.getAttribute("position").y === 1.162 && pizzaOnTable.getAttribute("position").z === -0.646 && clickedPizza === 2 && opdracht3Voltooid == true) || developer_mode) {
              // gesnedenPizza.setAttribute("visible", true);
              lijn3.setAttribute("visible", true);
              pizzasnijder.setAttribute("position", "0.730 1.186 -0.638");
              pizzasnijder.setAttribute("visible", true);
              pizzasnijder.setAttribute("rotation", "0 0 -40");
              pizzasnijder.setAttribute("animation","property: position; to: 1.167 1.186 -0.638; dur: 2000; easing: linear;")
              clickedPizza += 1;
            }
            else if ((holdSnijder == true && pizzaOnTable.getAttribute("position").x === 0.9 && pizzaOnTable.getAttribute("position").y === 1.162 && pizzaOnTable.getAttribute("position").z === -0.646 && clickedPizza === 3 && opdracht3Voltooid == true) || developer_mode){

                // gesnedenPizza.setAttribute("visible", true);
                // opdrachtVoltooid4();
                lijn4.setAttribute("visible", true);
                pizzasnijder.setAttribute("position", "1.022 1.186 -0.515");
                pizzasnijder.setAttribute("visible", true);
                pizzasnijder.setAttribute("rotation", "0 140 -40");
                pizzasnijder.setAttribute("animation","property: position; to:0.725 1.186 -0.807 ; dur: 2000; easing: linear;");
                clickedPizza += 1;

            }
          }
        };
    }

    checkButton.onclick = () => {
      console.log(pizzaGemaakt.ingredients);
      console.log(pizzaRecept);
      let counter = 1;
      if(pizzaRecept.length <= pizzaGemaakt.ingredients.length){
        let teveel = pizzaGemaakt.ingredients.length - (pizzaRecept.length - 1);
        for(let i = 1; i < pizzaRecept.length; i++){
          document.getElementById('js--ingredient'+ i).setAttribute("value", "");
          document.getElementById("js--kruisje-desk" + i).setAttribute("src","");
        }
        document.getElementById('js--ingredient2').setAttribute("value", "Je hebt " + teveel + " ingredienten teveel. \n gooi de pizza in de prullebak \n en maak een nieuwe");
        return;
      }
      for(let i = 1; i < pizzaRecept.length; i++){
          document.getElementById('js--ingredient'+ i).setAttribute("value", pizzaRecept[i]);
      }
      for(let i = 1; i < pizzaRecept.length; i++){
        this.console.log(pizzaRecept[i])
        if(pizzaGemaakt.ingredients.includes(pizzaRecept[i])){
          this.console.log('dit werkt');
          counter++;
          document.getElementById("js--kruisje-desk" + i).setAttribute("src","../media/krijtbord/krijtbordimg5.png");
        }
      }
      this.console.log(counter);
      console.log(pizzaRecept.length);

      if(counter == pizzaRecept.length){
        opdrachtVoltooid3();
        this.console.log("je hebt alles goed");
      }
    }

    tomatensaus.onclick = (event) => {
      if(opdracht1Voltooid || developer_mode == true){
        if(holdLepel === true){

          //monitor veranderen zodra lepel terug is gezet
          audio.play();

          //krijtbord fucntioneren
          if(deegbal_bereid === true){
            opdracht2Voltooid = true;
            opdrachtVoltooid2();
          }

          //Maken van lepel in pot
          let saus_lepel = document.getElementById("js--holdLepel");
          let object = makeObject("js--lepel", "a-circle", "2.435 1.175 -5.25", "0.08", scene, true, soeplepel);
          object.setAttribute("scale", "0.08 0.08 0.08");
          object.setAttribute("rotation", "0 0 10");
          saus_lepel.remove();

          setTimeout( (event) => {
            hold = false;
            holdLepel = false;
          },200)
        }
        if(!hold){
          krijtlijnen[5].setAttribute("visible", "true");
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
      }
    };

    document.getElementById("js--sausfles_knoflook").onclick = () => {
      console.log("Knoflook werkt");
      if((opdracht1Voltooid && opdracht2Voltooid) || developer_mode == true){
        if(!hold){
          let static_object = document.getElementById("js--sausfles_knoflook");
          let camera_object = makeObject("js--hold_sausfles_knoflook", "a-circle", ".5 -0.5 -1.2", "0.25", camera, true, sausfles_knoflook_glb);
          camera_object.setAttribute("scale", "0.3 0.3 0.3");
          static_object.remove();
          hold = true;
          holdSausflesKnoflook = true;

        };
      };
    };

    document.getElementById("js--sausfles_bbq").onclick = () => {
      console.log("Bbq werkt");
      if((opdracht1Voltooid && opdracht2Voltooid) || developer_mode == true){
        if(!hold){
          let static_object = document.getElementById("js--sausfles_bbq");
          let camera_object = makeObject("js--hold_sausfles_bbq", "a-circle", ".5 -0.5 -1.2", "0.25", camera, true, sausfles_bbq_glb);
          camera_object.setAttribute("scale", "0.3 0.3 0.3");
          static_object.remove();
          hold = true;
          holdSausflesBbq = true;

        };
      };
    };

    flessen_bakje.onclick = () => {
      if(holdSausflesKnoflook === true){
        let holdObject = document.getElementById("js--hold_sausfles_knoflook");
        let static_object = makeObject("js--sausfles_knoflook", "a-circle", "6.9 1 -5.84", "0.08", scene, true, sausfles_knoflook_glb);
        static_object.setAttribute("scale", "0.3 0.3 0.3");
        static_object.setAttribute("class", "clickable");
        holdObject.remove();
        setTimeout( () => {
          hold = false;
          holdSausflesKnoflook = false;
        },200)
      }
      if(holdSausflesBbq === true){
        let holdObject = document.getElementById("js--hold_sausfles_bbq");
        let static_object = makeObject("js--sausfles_bbq", "a-circle", "7.1 1 -5.665", "0.08", scene, true, sausfles_bbq_glb);
        static_object.setAttribute("scale", "0.3 0.3 0.3");
        static_object.setAttribute("class", "clickable");
        holdObject.remove();
        setTimeout( () => {
          hold = false;
          holdSausflesBbq = false;
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

//Functie die ervoor zorgt dat er feedback over de opdrachten gebeuren
    function opdrachtVoltooid(){
      if(opdrachten1.every( i => i === true)){
        krijtlijnen[3].setAttribute("visible", "true");
        kruisjes[0].setAttribute("visible", "true");
        setTimeout(() => {
          kruisjes[0].setAttribute("visible", "false");
          titel1.setAttribute("visible", false);
          opdracht1.setAttribute("visible",false);
          titel2.setAttribute("visible", true);
          opdracht2.setAttribute("visible",true);
          krijtlijnen[0].setAttribute("visible", "false");
          krijtlijnen[1].setAttribute("visible", "false");
          krijtlijnen[2].setAttribute("visible", "false");
          krijtlijnen[3].setAttribute("visible", "false");
        },2000);
        audio.play();
        opdracht1Voltooid = true;
      }
    }

    function opdrachtVoltooid2(){
      kruisjes[1].setAttribute("visible", "true");
      krijtlijnen[7].setAttribute("visible", "true");
      setTimeout(() => {
        kruisjes[1].setAttribute("visible", "false");
        titel2.setAttribute("visible", false);
        opdracht2.setAttribute("visible",false);
        titel3.setAttribute("visible", true);
        opdracht3.setAttribute("visible",true);
        krijtlijnen[4].setAttribute("visible", "false");
        krijtlijnen[5].setAttribute("visible", "false");
        krijtlijnen[6].setAttribute("visible", "false");
        krijtlijnen[7].setAttribute("visible", "false");
      },2000);
      audio.play();
      opdracht2Voltooid = true;
    }

    function opdrachtVoltooid3(){
      kruisjes[2].setAttribute("visible", "true");
      krijtlijnen[10].setAttribute("visible", "true");
      krijtlijnen[11].setAttribute("visible", "true");
      setTimeout(() => {
        kruisjes[2].setAttribute("visible", "false");
        titel3.setAttribute("visible", false);
        opdracht3.setAttribute("visible",false);
        titel4.setAttribute("visible", true);
        opdracht4.setAttribute("visible",true);
        krijtlijnen[8].setAttribute("visible", "false");
        krijtlijnen[9].setAttribute("visible", "false");
        krijtlijnen[10].setAttribute("visible", "false");
        krijtlijnen[11].setAttribute("visible", "false");
      },2000)
      audio.play();
      opdracht3Voltooid = true;
    }

    function opdrachtVoltooid4(){
      kruisjes[3].setAttribute("visible", "true");
      krijtlijnen[15].setAttribute("visible", "true");
      setTimeout(() => {
        krijtlijnen[15].setAttribute("visible", "false");
        kruisjes[3].setAttribute("visible", "false");
        titel4.setAttribute("visible", false);
        opdracht4.setAttribute("visible",false);
      },4000)
      audio.play();
      opdracht4Voltooid = true;
    }

    doughfase1.onclick= () => {
      if(opdracht1Voltooid || developer_mode == true){
      //text op de monitor showen
        krijtlijnen[4].setAttribute("visible", "true");
        let randomVar = Math.floor(Math.random() * 2);
        pizzaRecept =  verschillendepizza[randomVar];

        document.getElementById('js--ingredient0').setAttribute("value", pizzaRecept[0]);

        // for(let i = 0; i < verschillendepizza[randomVar].length; i++){
        //     this.console.log(pizzarecept);
        //     document.getElementById('js--ingredient'+ i).setAttribute("value", verschillendepizza[randomVar][i]);
        // }
        // txt1.setAttribute("value", verschillendepizza[][verschillendepizza[1].length-1]);
        // txt2.setAttribute("value", verschillendepizza[1][0]);
        // txt3.setAttribute("value", verschillendepizza[1][1]);
        // txt4.setAttribute("value", verschillendepizza[1][2]);
        // txt5.setAttribute("value", verschillendepizza[1][3]);


      doughfase1.setAttribute("gltf-model", "../media/deegbal_fases/deegbal_fase_1.glb");
      let att = document.createAttribute("animation__turning");
      att.value = "property: rotation; to: 0 360 0; loop: false; dur: 2000";
      doughfase1.setAttribute('animation', att.value);

      setTimeout(() => {
        doughfase1.setAttribute("gltf-model", "../media/deegbal_fases/deegbal_fase_2.glb");
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
        doughfase1.setAttribute("position", "1 1.05 -9.14");
        pizzaOnTable.setAttribute("position", "1 1.05 -5.14");
      }, 6000)
    },1)
  }
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

  // setText("Welkom bij de oefenmodus, de stappen staan uitgelegd op het krijtbord. Succes!", 8000);


  const pizzaSalami = [true, false, true, false, true];
  // const pizzaMargherita = [true, false, false, false, true];
  // var receptenLijst = [pizzaSalami, pizzaMargherita];
  // console.log(receptenLijst[1]);




  pizzaDoos.onclick = () => {
    if(opdracht3Voltooid || developer_mode == true){
      if(hold){
          krijtlijnen[14].setAttribute("visible", "true");
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
      }
    }
  };

  removeClickAble = () => {
    table1.removeAttribute("class");
    table2.removeAttribute("class");
    table3.removeAttribute("class");
    oven.removeAttribute("class");
  }
  setClickAble = () => {
    table1.setAttribute("class", "clickable");
    table2.setAttribute("class", "clickable");
    table3.setAttribute("class", "clickable");
    oven.setAttribute("class", "clickable");
  }

  function startscherm(){
    entityStart.setAttribute("visible", false);
    startbtn.onclick = ()=> {
      entityStart.setAttribute("visible", true);
      startSchermEntity.setAttribute("visible", false);
    }

    uitlegbtn.onclick = ()=> {
      modal1.setAttribute("visible", true);
      dominostarting.setAttribute("visible", false);
    }

    infobtn.onclick = () => {
      modal2.setAttribute("visible", true);
      dominostarting.setAttribute("visible", false);
    }

    kruisjeUitleg.onclick = () => {
      modal1.setAttribute("visible", false);
      dominostarting.setAttribute("visible", true);
    }

    kruisjeInfo.onclick = () => {
      modal2.setAttribute("visible", false);
      dominostarting.setAttribute("visible", true);
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
    opdrachten1[1] = true;
    krijtlijnen[1].setAttribute("visible", "true");
  }

  function kraanUit(){
    waterdruppels[0].setAttribute("visible",false);
    waterdruppels[1].setAttribute("visible",false);
    waterdruppels[2].setAttribute("visible",false);
    opdrachten1[2] = true;
    krijtlijnen[2].setAttribute("visible", "true");
  }

  function gebruikHandschoenen(){
    opdrachten1[3] = true;
  }

  zeep.onclick = () => {
    opdrachten1[0] = true;
    krijtlijnen[0].setAttribute("visible", "true");
  }

  sink.onclick = () => {
    if (opdrachten1[1] == false && opdrachten1[0] == true) {
      kraanAan();
    } else {
      kraanUit();
    }
  }

  handschoenen.onclick = () => {
    if (opdrachten1[2] == true) {
      gebruikHandschoenen();
      opdrachtVoltooid();
    }
  }
}

    // else if (kraanBezig == true && zeepGebruikt == true && kraanuitgezetnawassen == false) {
    //     setText("Zet de kraan eerst uit!", 4000);
    // }
    //
    // else if (kraanBezig == false && zeepGebruikt == true && kraanuitgezetnawassen == false) {
    //   setText("Was eerst de handen!", 4000);
    // }
    //
    // else if (kraanBezig == false && zeepGebruikt == false && kraanuitgezetnawassen == false) {
    //   setText("Stop zeep op de handen en was ze daarna!", 4000);
    // }


  // bigteleport.onclick = () => {
  //   if (bigteleportOn === true) {
  //     console.log("clicked");
  //     bigteleport.setAttribute("scale",".3 .3 .3");
  //     bigteleportOn = false
  //   }
  // }

  // pizzasnijder.onclick = () => {
  //   gesnedenPizza.setAttribute("visible", true);
  // }
