const product = [
    {id: 0, image:"img/mobile.avif", title:"I Phone 14 | Mobile", price:130},
    {id: 1, image:"img/bt_earphone.avif", title:"Warles Earphone ", price:13},
    {id: 2, image:"img/camera.avif", title:"DSLR Camera | Full HD 4k", price:160},
    {id: 3, image:"img/headphones.avif", title:"Headphone | Comfotble", price:7.5},
    {id: 4, image:"img/mouse-pad.avif", title:"Beautyfull Mouse pad |", price:0.8},
    {id: 5, image:"img/table-fan.jpg", title:"Wanderfull Table Fan", price:27}
];


const categories = [...new Set(product.map((item) => {return item}))];

let i = 0 ;

document.querySelector(".root").innerHTML = categories.map((item) => {
    var {image, title, price} = item;
    return(`
        <div class="box">
            <div class="img_box">
                <img src=${image} alt="" class="images">
             </div>
             <div class="bottom">
               <p>${title}</p>
               <h2>$ ${price}.00</h2> ` +
               '<button onclick="addtocart('+(i++)+')">Add to cart</button>' + `
             </div>
        </div>
    `)
}).join('');


var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
};

function displaycart(a) {
    let j = 0 , total = 0;

    document.getElementById("count").innerHTML = cart.length;

    document.getElementById("total").innerHTML ="$ " +0+ ".00";

    if(cart.length == 0) {
        document.querySelector(".cartItem").innerHTML ="Your Cart Is Empty";
    }else{
        document.querySelector(".cartItem").innerHTML = cart.map((items) => {
            var {image, title, price} = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$" +total+ ".00";

            return (`
                <div class="cart_item">
                    <div class="row_img">
                         <img src="${image}" alt="img">
                    </div>
                <p style="font-size:12px;">${title}</p>
                <h2 style="font-size:12px;">$ ${price}.00</h2> ` + 
                "<i class='fa fa-trash'onclick='delelement("+ (j++) + ")'></i></div>")
        }).join('');
    };
};


function delelement(a){
    cart.splice(a, 1);
    displaycart();
};