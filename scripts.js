
const setting = {
    btnController: document.getElementById("item-btn"),
    infoController: document.getElementById("item-info"),

}

class Photo {
    constructor(number, name, price, imgURL) {
        this.number = number;
        this.name = name;
        this.price = price;
        this.imgURL = imgURL;
    }
}

const photo = [
    new Photo("1", "Bird", "$10", "https://github.com/Takahir-O/recursion-project2/blob/f87739a22ebc9ff644f96399cfc690c733e26837/images/bird.jpg"),
    new Photo("2", "Building", "$9", "https://github.com/Takahir-O/recursion-project2/blob/master/images/building.jpg"),
    new Photo("3", "Coffee", "$5", "https://github.com/Takahir-O/recursion-project2/blob/master/images/coffee.jpg"),
    new Photo("4", "Dog", "$3", "https://github.com/Takahir-O/recursion-project2/blob/master/images/dog.jpg"),
    new Photo("5", "Flower", "$8", "https://github.com/Takahir-O/recursion-project2/blob/master/images/flower.jpg"),
    new Photo("6", "Lion", "$2", "https://github.com/Takahir-O/recursion-project2/blob/master/images/lion.jpg"),
    new Photo("7", "Mountain", "$11", "https://github.com/Takahir-O/recursion-project2/blob/master/images/mountain.jpg"),
    new Photo("8", "Sea", "$15", "https://github.com/Takahir-O/recursion-project2/blob/master/images/sea.jpg"),
    new Photo("9", "Shoes", "$1", "https://github.com/Takahir-O/recursion-project2/blob/master/images/shoes.jpg"),
    new Photo("10", "Watch", "$30", "https://github.com/Takahir-O/recursion-project2/blob/master/images/watch.jpg")
]

// 初期表示する写真の設定
let photoStr = `<img src="${photo[0].imgURL}">`;
let photoImage = document.getElementById("photo-image");

photoImage.innerHTML = photoStr;

// 初期表示情報の設定
let itemName = document.getElementById("item-Name");
let itemPrice = document.getElementById("item-price");

itemName.innerHTML = `${photo[0].name}`;
itemPrice.innerHTML = `${photo[0].price}`;


// ボタンの作成
class Panel {
    static makeButtons() {
        let htmlStr = "";
        for (let i = 1; i <= photo.length; i++) {
            htmlStr += `<div class ="col-md-3 col-6 py-2 px-2"><button class ="btn btn-light col-12">${i}</button></div>`;
        }
        setting.btnController.innerHTML = `<div class ="col-12 d-flex flex-wrap">${htmlStr}</div>`;
    }
}

Panel.makeButtons();