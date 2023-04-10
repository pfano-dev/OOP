class Product{

  title = "DEFAULT";
  imageUrl;
  description;
  price;

  constructor(title, image, desc, price){
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
    
  }

}



const productsList ={

  products : [
    new Product("A Pallow","https://www.vencasa.co.za/wp-content/uploads/2021/06/comfort-cloud_0000_Pillow-Hug_Comfort-Cloud-pillow_Original-lux-1.jpg",19.99,"a soft pillow"),
new Product("A carpet","https://assets-global.website-files.com/5e96bcc5e521f9c598e4a72d/606321f4baf4ac3ed32f4af1_belgotex-carpets-conqueror-hero.jpeg",19.99,"A carpet which you might like or not")
   ],
   render(){
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = 'product-list';

    for(const prod of this.products){
      const prodEl = document.createElement("li");
      prodEl.className = 'product-item';
      prodEl.innerHTML = `

        <div>
          <img src ="${prod.imageUrl}" alt = "${prod.title}">
          <div class = "product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to cart </button>
          </div>
        </div>

      `;
      prodList.append(prodEl);
    }
  
    renderHook.append(prodList);
   }
 }

 productsList.render();
 