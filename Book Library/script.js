let container = document.querySelector(".container");
let inp = document.getElementById("inp");
let cards = document.getElementsByClassName("card");
let getBooks = async () => {
  const response = await fetch("./books.json");
  const data = await response.json();
  return data;
};


getBooks().then((data) => {
  data.forEach((e) => {
    //create card
    const card = document.createElement("div");
    card.classList.add("card");
    //create content
    const content = document.createElement("div");
    content.classList.add("content");
    card.append(content);
    //create img
    const img = document.createElement("img");
    img.src = e.image;
    content.append(img);
    //create title
    const title = document.createElement("h2");
    title.innerHTML = e.name;
    content.append(title);
    //create author name
    const author = document.createElement("h4");
    author.innerHTML = e.author;
    content.append(author);
    //create category
    const category = document.createElement("h6");
    category.innerHTML = e.category;
    content.append(category);
    //create description area
    const desArea = document.createElement("div");
    desArea.classList.add("description");
    card.append(desArea);
    //create description paragraph
    const desPar = document.createElement("p");
    desPar.innerHTML = e.discription;
    desArea.append(desPar);
    //create price rating area
    const PriceRating = document.createElement("div");
    PriceRating.classList.add("price-rating");
    card.append(PriceRating);
    //create price and rating
    const rating = document.createElement("p");
    rating.innerHTML = e.rating;
    PriceRating.append(rating);
    const price = document.createElement("p");
    price.innerHTML = e.price + "$";
    PriceRating.append(price);

    container.append(card);
  });


  
  inp.oninput = () => {
    Array.from(cards).forEach((e) => {
      e.style.display = "none";
    });
    Array.from(cards).forEach((e) => {
      if (e.firstElementChild.children[1].innerHTML.toUpperCase().includes(inp.value.toUpperCase())){
        e.style.display = "block";
      }
    });
  };
});