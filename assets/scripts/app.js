const productsList ={

  products : [
    {
      title:"A Pallow",
      imageUrl: "https://www.vencasa.co.za/wp-content/uploads/2021/06/comfort-cloud_0000_Pillow-Hug_Comfort-Cloud-pillow_Original-lux-1.jpg",
      price: 19.99,
      description: "a soft pillow"
    },
    {
      title:"A carpet",
      imageUrl: "https://assets-global.website-files.com/5e96bcc5e521f9c598e4a72d/606321f4baf4ac3ed32f4af1_belgotex-carpets-conqueror-hero.jpeg",
      price: 19.99,
      description: "A carpet which you might like or not"
    }
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
 productsList.render();
