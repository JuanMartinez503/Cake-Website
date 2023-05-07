const languageBtn = document.getElementById("language");
const infoBtn = document.querySelectorAll(".btn-primary");
const cake = document.getElementById("cake");
const cake2 = document.getElementById("cake2");
const cakeDef = document.getElementById("cakeDef");
const tresDef = document.getElementById("tresDef");
const cupDef = document.getElementById("cupDef");
const flanDef = document.getElementById("flanDef");
const contact = document.getElementById("contact");
const order = document.getElementById("order");
const services = document.getElementById("services");
const intro = document.getElementById("intro");

languageBtn.addEventListener("click", () => {
  let language = languageBtn.dataset.language;
  if (language === "Spanish") {
    console.log("hola guey");
    language = languageBtn.setAttribute("data-language", "English");
    languageBtn.innerText = "Espańol";
    infoBtn.forEach((btn) => {
      btn.innerText = "More Details!";
    });
    cake.innerText = "Cake";
    cake2.innerText = "Cake";
    cakeDef.innerText =
      "Regular cake or made with tres leches. Can be made with fruit filling. Perfect for a special occasion!";
    tresDef.innerText =
      "Legendary tres leches cake, extra wet and a pinch of cinnamon!";
    cupDef.innerText =
      "Fresh made delicious cupcakes. Comes in a variety of flavors!";
    flanDef.innerText =
      "Famous flan cake, very soft and creamy. It comes in a variety of flavors!";
    contact.innerText = "Contact";
    order.innerText =
      "If you have a question or you would like to place an order, you can call or text me. Texting is preferred my English is not the best";
    intro.innerText =
      "Delicious cakes made from scratch and personalize to your liking!";
  } else {
    language = languageBtn.setAttribute("data-language", "Spanish");
    console.log("speak English");
    languageBtn.innerText = "English";
    window.location.reload();
  }
});
