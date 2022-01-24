/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
window.addEventListener("load", (e) => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        createCards(data);
        style();
      });
  });
  function createCards(cars) {
    cars.forEach((cars) => {
      const newBrand = createDivBrand(cars.brand);
      const newModels = createDivModel(cars.models);
      const newCard = createDivCard();
      newCard.appendChild(newBrand);
      newCard.appendChild(newModels);
      document.getElementById("output").appendChild(newCard);
    });
  }
  function createDivCard() {
    const divCard = document.createElement("div");
    divCard.classList.add("carCard");
    return divCard;
  }
  function createDivBrand(textContent) {
    const divBrand = document.createElement("div");
    divBrand.classList.add("carBrand");
    divBrand.textContent = textContent;
    return divBrand;
  }
  function createDivModel(textContent) {
    const divModel = document.createElement("div");
    divModel.classList.add("carModel");
    divModel.textContent = textContent;
    return divModel;
  }
  function style() {
    const carCardStyle = document.getElementsByClassName("carCard");
    for (var i = 0; i < carCardStyle.length; i++) {
      carCardStyle[i].style.padding = "0.5rem";
      carCardStyle[i].style.border = "0.2rem solid white";
    }
    const carBrandStyle = document.getElementsByClassName("carBrand");
    for (var i = 0; i < carBrandStyle.length; i++) {
      carBrandStyle[i].style.textAlign = "center";
      carBrandStyle[i].style.paddingBottom = "1rem";
      carBrandStyle[i].style.fontWeight = "bold";
      carBrandStyle[i].style.fontSize = "150%";
      carBrandStyle[i].style.margin = "1rem";
    }
    const carModelStyle = document.getElementsByClassName("carModel");
    for (var i = 0; i < carModelStyle.length; i++) {
      carModelStyle[i].style.margin = "1rem";
    }
  }