const languageBtn = document.getElementById("language");
const contact = document.getElementById("contact");
const order = document.getElementById("order");
const services = document.getElementById("services");
const price = document.getElementById("price");
const flavor = document.getElementById("flavor");
const fruit = document.getElementById("fruit");
const coffee = document.getElementById("coffee");
const strawberry = document.querySelectorAll(".strawberry");

languageBtn.addEventListener("click", () => {
  let language = languageBtn.dataset.language;
  if (language === "Spanish") {
    language = languageBtn.setAttribute("data-language", "English");
    languageBtn.innerText = "Espańol";
    contact.innerText = "Contact";
    order.innerText =
      "If you have a question or you would like to place an order, you can call or text me. Texting is preferred my English is not the best";
      services.innerText= 'Services'
      price.innerText = 'Price: $15 per dozen'
      flavor.innerText= 'Flavors'
      coffee.innerText='Coffee'
      fruit.innerText= 'Fruit'
      strawberry.forEach(straw=>{
        straw.innerText = 'Strawberry'
      })

  } else {
    language = languageBtn.setAttribute("data-language", "Spanish");
    console.log("speak English");
    languageBtn.innerText = "English";
    window.location.reload();
  }
});
