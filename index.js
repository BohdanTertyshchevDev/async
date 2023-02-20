const API_BASE = 'https://fakestoreapi.com/products';

const iphone = {
    title: "Iphone 13",
    price: 100500,
    description: 'lorem ipsum set',
    image: 'https://i.pravator.cc',
    category: 'electronic'
}

const options = {
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(iphone)
}

fetch(API_BASE, options)
.then((response) => response.json())
.then((data) => console.log(data));