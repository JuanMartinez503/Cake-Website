const languageBtn = document.getElementById("language");
const contact = document.getElementById("contact");
const order = document.getElementById("order");
const services = document.getElementById("services");
const cake = document.getElementById("cake");
const price = document.getElementById("price");
const message = document.getElementById("message");
const flavor = document.getElementById("flavor");
const coffee = document.getElementById("coffee");
const peach = document.getElementById("peach");
const filling = document.getElementById("filling");
const oreo = document.getElementById("oreo");
const pineapple = document.getElementById("pineapple");
const strawberry = document.querySelectorAll("strawberry");


languageBtn.addEventListener("click", () => {
  let language = languageBtn.dataset.language;
  if (language === "Spanish") {
    language = languageBtn.setAttribute("data-language", "English");
    languageBtn.innerText = "Espańol";
    contact.innerText = "Contact";
    order.innerText =
      "If you have a question or you would like to place an order, you can call or text me. Texting is preferred my English is not the best";
      services.innerText= 'Services'
      cake.innerText= 'Cake'
      price.innerText= 'Price: $30-100 and more!'
      message.innerText= 'Personal messages and photos!'
      flavor.innerHTML='Flavors'
      coffee.innerText ='Coffee'
      peach.innerText = 'Peach'
      filling.innerText = 'Filling'
      oreo.innerText='Oreo and Nutella'
      pineapple.innerText ='Pineapple and Coconut'
      strawberry.forEach(straw=>{
        straw.innerText='Strawberry'
      })

  } else {
    language = languageBtn.setAttribute("data-language", "Spanish");
    console.log("speak English");
    languageBtn.innerText = "English";
    window.location.reload();
  }
});
