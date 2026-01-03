let products = {
    data : [
        {
            productName :"Regular White T-shirt",
            category : "Topwear",
            price : "180" ,
            image : "images/white-tshirt.jpg"
        },
        {
            productName :"Beige Short Skirt",
            category : "Bottomwear",
            price : "180" ,
            image : "images/short-skirt.jpg"
        },
        {
            productName :"Sporty Smartwatch",
            category : "Watch",
            price : "180" ,
            image : "images/sporty-smartwatch.jpg"
        },
        {
            productName :"Basic Knitted Top",
            category : "Topwear",
            price : "180" ,
            image : "images/Knitted-top.jpg"
        },
        {
            productName :"Black Leather Jacket",
            category : "Jacket",
            price : "180" ,
            image : "images/black-leather-jacket.jpg"
        },
        {
            productName :"Stylish Pink Trouser",
            category : "Bottomwear",
            price : "180" ,
            image : "images/pink-trousers.jpg"
        },
        {
            productName :"Brown Mens Jacket",
            category : "Jacket",
            price : "180" ,
            image : "images/brown-jacket.jpg"
        },
        {
            productName :"Comfy Gray Pants",
            category : "Bottomwear",
            price : "180" ,
            image : "images/comfy-gray-pants.jpg"
        },
    ],
};

for(let i of products.data){

   let card = document.createElement("div");
   card.classList.add("card",i.category,"hide");

   let imageContainer = document.createElement("div");
   imageContainer.classList.add("image-container");

   let image = document.createElement("img");
   image.setAttribute("src",i.image);

   imageContainer.appendChild(image);
   card.appendChild(imageContainer);

   let container = document.createElement("div");
   container.classList.add("container");

   let name = document.createElement("h5");
   name.classList.add("product-name");
   name.innerText = i.productName.toUpperCase() ;
   container.appendChild(name);

   let price = document.createElement("h6");
   price.innerText = "$"+i.price ;
   container.appendChild(price);

   card.appendChild(container);

   document.getElementById("products").appendChild(card);
}


function filterProduct(value){
let buttons = document.querySelectorAll('.button-value');

buttons.forEach((button)=>{
    if(value.toUpperCase() == button.innerText.toUpperCase()){
        button.classList.add('active');
    }
    else {
        button.classList.remove('active');
    }
});

    let elements = document.querySelectorAll('.card');

    elements.forEach((element)=>{

        if(value.toUpperCase() == 'ALL'){
            element.classList.remove('hide');
        }
        else {
            if(element.classList.contains(value)){
                element.classList.remove('hide');
            }
            else {
                element.classList.add('hide');
            }
        }
    })
}

// Search button click
document.querySelector("#search").addEventListener(("click"),()=>{

   let searchInput = document.querySelector("#search-input").value ;

   let elements = document.querySelectorAll(".product-name");

   let cards = document.querySelectorAll(".card") ;

   elements.forEach((element,index)=>{

        if(element.innerText.includes(searchInput.toUpperCase())){
             cards[index].classList.remove('hide') ;
        }
        else {
            cards[index].classList.add('hide') ;
        }
   })
})

//initially display all products
window.onload = ()=>{
    filterProduct('All');
}
