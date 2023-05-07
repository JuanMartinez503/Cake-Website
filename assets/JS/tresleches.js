const languageBtn = document.getElementById("language");
const contact = document.getElementById("contact");
const order = document.getElementById("order");
const services = document.getElementById("services");
const flavor = document.getElementById("flavor");
const price = document.getElementById("price");

languageBtn.addEventListener("click", () => {
  let language = languageBtn.dataset.language;
  if (language === "Spanish") {
    language = languageBtn.setAttribute("data-language", "English");
    languageBtn.innerText = "Espańol";
    contact.innerText = "Contact";
    order.innerText =
      "If you have a question or you would like to place an order, you can call or text me. Texting is preferred my English is not the best";
      services.innerText= 'Services'
      flavor.innerText='Flavors'
      price.innerText= 'Price: $12-40 and more!'
  } else {
    language = languageBtn.setAttribute("data-language", "Spanish");
    console.log("speak English");
    languageBtn.innerText = "English";
    window.location.reload();
  }
});
