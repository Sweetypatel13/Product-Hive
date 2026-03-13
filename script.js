let id = new URL(window.location.href).searchParams.get("id");
let products = [
    {
        id:"1",
        name:"Smart Watch",
        category:"Electronics",
        price:"2999",
        rating:"4.5"
    },
    {
        id:"2",
        name:"Wireless Earbuds",
        category: "Accessories",
        price:"1999",
        rating:"4.2"
    },
    {
        id:"3",
        name:"Gaming Mouse",
        category:"Gaming",
        price:"1499",
        rating:"4.6"
    },
    {
        id:"4",
        name:"Bluetooth Speaker",
        category:"Audio",
        price:"2499",
        rating:"4.4"
    }
];
let product=products.find(p=>p.id===id);
document.getElementById("id").innerText=product.id;
document.getElementById("name").innerText=product.name;
document.getElementById("category").innerText=product.category;
document.getElementById("price").innerText=product.price;
document.getElementById("rating").innerText=product.rating;
