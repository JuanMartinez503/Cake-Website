const languageBtn = document.getElementById("language");
const contact = document.getElementById("contact");
const order = document.getElementById("order");
const services = document.getElementById("services");
const price = document.getElementById("price");
const flavor = document.getElementById("flavor");
const example = document.getElementById("example");
const peach = document.getElementById("peach");
const grape = document.getElementById("grape");
const variety = document.getElementById("variety");
const coffee = document.getElementById("coffee");
const cake = document.getElementById("cake");
const fruit = document.getElementById("fruit");
const strawberries = document.querySelectorAll(".strawberry");

languageBtn.addEventListener("click", () => {
  let language = languageBtn.dataset.language;
  if (language === "Spanish") {
    language = languageBtn.setAttribute("data-language", "English");
    languageBtn.innerText = "Espańol";
    contact.innerText = "Contact";
    order.innerText =
      "If you have a question or you would like to place an order, you can call or text me. Texting is preferred my English is not the best";
    services.innerText = "Services";
    price.innerText = "Price: $35";
    coffee.innerText = "Coffee";
    flavor.innerText = "Flavors";
    cake.innerText = 'Cake'
    example.innerText = "More Photos!";
    strawberries.forEach((strawberry) => {
      strawberry.innerText = "Strawberry";
    });
    peach.innerText = "Peach";
    grape.innerText = "Grapes";
    variety.innerText = "And more variety..";
  } else {
    language = languageBtn.setAttribute("data-language", "Spanish");
    console.log("speak English");
    languageBtn.innerText = "English";
    window.location.reload();
  }
});
