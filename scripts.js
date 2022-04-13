
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
    new Photo("1", "Bird", "$10", "https://raw.githubusercontent.com/Takahir-O/recursion-project2/master/images/bird.jpg"),
    new Photo("2", "Building", "$9", "https://raw.githubusercontent.com/Takahir-O/recursion-project2/master/images/building.jpg"),
    new Photo("3", "Coffee", "$5", "https://raw.githubusercontent.com/Takahir-O/recursion-project2/master/images/coffee.jpg"),
    new Photo("4", "Dog", "$3", "https://raw.githubusercontent.com/Takahir-O/recursion-project2/master/images/dog.jpg"),
    new Photo("5", "Flower", "$8", "https://raw.githubusercontent.com/Takahir-O/recursion-project2/master/images/flower.jpg"),
    new Photo("6", "Lion", "$2", "https://raw.githubusercontent.com/Takahir-O/recursion-project2/master/images/lion.jpg"),
    new Photo("7", "Mountain", "$11", "https://raw.githubusercontent.com/Takahir-O/recursion-project2/master/images/mountain.jpg"),
    new Photo("8", "Sea", "$15", "https://raw.githubusercontent.com/Takahir-O/recursion-project2/master/images/sea.jpg"),
    new Photo("9", "Shoes", "$1", "https://raw.githubusercontent.com/Takahir-O/recursion-project2/master/images/shoes.jpg"),
    new Photo("10", "Watch", "$30", "https://raw.githubusercontent.com/Takahir-O/recursion-project2/master/images/watch.jpg")
]

// 初期表示する写真の設定
let photoStr = `<img src="${photo[0].imgURL}" class="photo-size" alt="error">`;
let photoImage = document.getElementById("photo-image");

// htmlにphotoの数だけタグを追加する
for (let i = 0; i < photo.length; i++) {
    photoStr += `<img src="${photo[i].imgURL}" class="slider-item photo-size" alt="error">`;
}

photoImage.innerHTML = photoStr;

// 初期表示情報の設定
let itemName = document.getElementById("item-Name");
let itemPrice = document.getElementById("item-price");

itemName.innerHTML = `${photo[0].name}`;
itemPrice.innerHTML = `${photo[0].price}`;

// 商品情報の表示
function itemInfo(i){
    itemName.innerHTML = `${photo[i].name}`;
    itemPrice.innerHTML = `${photo[i].price}`;
}

// ボタンの作成
class Panel {
    static makeButtons() {
        let htmlStr = "";
        for (let i = 0; i < photo.length; i++) {
            htmlStr += `<div class ="col-md-3 col-6 py-2 px-2"><button id="item${i}" class ="btn btn-light col-12">${i+1}</button></div>`;
        }
        setting.btnController.innerHTML = `<div class ="col-12 d-flex flex-wrap">${htmlStr}</div>`;
    }
}

// スライダー部分
const sliderItems = document.querySelectorAll(`.slider-item`);
let target = document.getElementById("target");
let sliderShow=document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

sliderShow.classList.add("d-flex","h-100","justify-content-center");
main.classList.add("main","d-flex","justify-content-center");
extra.classList.add("extra","d-flex","justify-content-center");

main.append(sliderItems[0]);
sliderShow.append(main);
sliderShow.append(extra);
target.append(sliderShow);

main.setAttribute("data-index","0");

function slideJump(steps){
    let index = parseInt(main.getAttribute("data-index"));
    let currentElement = sliderItems.item(index);

    let nextElement = sliderItems[steps];
    main.setAttribute("data-index",steps.toString());
    
    let direction = steps-index;
    let animationType = "";

    animationType=direction>0?"right":"left";
    if(direction===0)animationType="none";

    animationMain(currentElement,nextElement,animationType);
}

function animationMain(currentElement,nextElement,animationType){
    main.innerHTML="";
    main.append(nextElement);

    extra.innerHTML="";
    extra.append(currentElement);

    main.classList.add("expand-animation");
    extra.classList.add("deplete-animation");

    if(animationType==="none"){
        sliderShow.innerHTML="";
        extra.classList.remove("deplete-animation");
        sliderShow.append(extra);
    }
    if(animationType==="right"){
        sliderShow.innerHTML="";
        sliderShow.append(extra);
        sliderShow.append(main);
    }
    else if(animationType==="left"){
        sliderShow.innerHTML="";
        sliderShow.append(main);
        sliderShow.append(extra);
    }

}

Panel.makeButtons();

for(let i=0;i<photo.length;i++){
    let clickBtn = document.getElementById(`item${i}`);
    clickBtn.addEventListener("click",function(){
        slideJump(i);
        itemInfo(i);
    });
}
