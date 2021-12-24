let shoeCargo = document.querySelector('.shoeCargo')

let shoes = [
    {
        img: 'https://wisperwindoxas.github.io/sneaker/img/sneakers/sneakers1.png',
        info: 'Nike Blazer Mid Suede Mens Trainers',
        price: 12999 
    },
    {
        img: 'https://wisperwindoxas.github.io/sneaker/img/sneakers/sneakers2.png',
        info: 'Nike Air Max 270 Mens Trainers',
        price: 8499 
    },
    {
        img: 'https://wisperwindoxas.github.io/sneaker/img/sneakers/sneakers3.png',
        info: 'Nike Blazer Mid Suede Mens Trainers',
        price: 8999 
    },
    {
        img: 'https://wisperwindoxas.github.io/sneaker/img/sneakers/sneakers4.png',
        info: 'Puma X Aka Boku Future Rider Trainers',
        price: 12999 
    },
    {
        img: 'https://wisperwindoxas.github.io/sneaker/img/sneakers/sneakers5.png',
        info: 'Under Armor Curry 8 Sneakers for Men',
        price: 15199 
    },
    {
        img: 'https://wisperwindoxas.github.io/sneaker/img/sneakers/image5.png',
        info: 'Nike Kyrie 7 Mens Trainers',
        price: 11299 
    },
    {
        img: 'https://wisperwindoxas.github.io/sneaker/img/sneakers/image5-2.png',
        info: 'Jordan Air Jordan 11 Trainers',
        price: 10799 
    },
    {
        img: 'https://wisperwindoxas.github.io/sneaker/img/sneakers/image5-3.png',
        info: 'Nike LeBron XVIII Mens Trainers',
        price: 16499 
    },
    {
        img: 'https://wisperwindoxas.github.io/sneaker/img/sneakers/image5-4.png',
        info: 'Nike Lebron XVIII Low Trainers',
        price: 13499 
    },
    {
        img: 'https://wisperwindoxas.github.io/sneaker/img/sneakers/image5-5.png',
        info: 'Nike Blazer Mid Suede Mens Trainers',
        price: 8499 
    },
    {
        img: 'https://wisperwindoxas.github.io/sneaker/img/sneakers/image5-6.png',
        info: 'Puma X Aka Boku Future Rider Trainers',
        price: 8999 
    },
    {
        img: 'https://wisperwindoxas.github.io/sneaker/img/sneakers/image5-1.png',
        info: 'Nike Kyrie Flytrap IV Mens Trainers',
        price: 11299
    }
]

for (let i = 0; i < 12; i++) {
    let shoeShopBox = document.createElement('div')
    let unlikeBtn = document.createElement('img')
    let divLike = document.createElement('div')
    unlikeBtn.setAttribute('src', 'https://wisperwindoxas.github.io/sneaker/img/heart-unliked.svg')
    divLike.appendChild(unlikeBtn)
    shoeShopBox.appendChild(divLike)
    let shoeImg = document.createElement('img')
    shoeImg.setAttribute('src', shoes[i].img)
    let h5Text = document.createElement('h5')
    h5Text.innerHTML = shoes[i].info
    shoeShopBox.appendChild(shoeImg)
    shoeShopBox.appendChild(h5Text)
    let priceBox = document.createElement('div')
    let littleBox = document.createElement('div')
    let p = document.createElement('p')
    p.textContent = 'Price'
    let b = document.createElement('b')
    b.innerHTML = shoes[i].price
    let rub = document.createElement('span')
    rub.textContent = ' rub'
    b.appendChild(rub)
    littleBox.appendChild(p)
    littleBox.appendChild(b)
    priceBox.appendChild(littleBox)
    let addShoe = document.createElement('div')
    let addImg = document.createElement('img')
    addImg.setAttribute('src', 'https://wisperwindoxas.github.io/sneaker/img/plus.svg')
    addShoe.appendChild(addImg)
    priceBox.appendChild(addShoe)
    shoeShopBox.appendChild(priceBox)
    shoeShopBox.classList.add('shoeShopBox')
    unlikeBtn.classList.add('unlikeBtn')
    shoeImg.classList.add('shoeImg')
    h5Text.classList.add('infoNike')
    priceBox.classList.add('priceBox')
    littleBox.classList.add('littleBox')
    addShoe.classList.add('addShoe')

    shoeCargo.appendChild(shoeShopBox)

    divLike.addEventListener('click', (e) => {
        // unlikeBtn.style.display = 'none'
        // let like = document.createElement('img')
        // like.setAttribute('src', 'https://wisperwindoxas.github.io/sneaker/img/heart-liked.svg')
        // like.classList.add('unlikeBtn')
        // divLike.appendChild(like)
        unlikeBtn.setAttribute('src', 'https://wisperwindoxas.github.io/sneaker/img/heart-liked.svg')

    })

    addShoe.addEventListener('click', () => {
        addImg.setAttribute('src', 'https://wisperwindoxas.github.io/sneaker/img/btn-plus.svg')
    })

}



