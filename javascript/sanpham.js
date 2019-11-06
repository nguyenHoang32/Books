let listBooksLocal = JSON.parse(localStorage.getItem('listBooksLocal'));
let itemValue = localStorage.getItem('itemName');
let result = listBooksLocal.filter(function(item){
    return item.name === itemValue;
})
result = result[0];
let name = document.getElementById('name');
let price = document.getElementById('price');
let author = document.getElementById('author');
name.innerText = `${result.name}`;
price.innerText = `${numberWithCommas(result.price)} đ`;
author.innerText = `${result.author}`;
//infor
document.getElementById('infor-tacgia').innerText = result.author;
document.getElementById('infor-namxb').innerText = result.year;
document.getElementById('infor-loaibia').innerText = result.loaiBia;
document.getElementById('infor-sotrang').innerText = result.page;
document.getElementById('infor-nhaxb').innerText = result.NXB;
document.getElementById('infor-kichthuoc').innerText = result.kickThuoc;
//
// Thêm amount vào giỏ hàng
let amountCart = document.getElementById('amount-cart');
let boxValue = JSON.parse(localStorage.getItem('boxName'));
let amount = 0;
for(let i = 0; i < boxValue.length; i++){
    amount += boxValue[i].quality;
}
amountCart.innerText = amount;
// 
let quality = document.getElementById('quality');
let verify = document.getElementById('vertify');
let nxb = document.getElementById('nxb');
let intro = document.getElementById('intro');

let img = document.getElementById('img');
vertify.style.display = 'none';
let descripText = '';
for(let j = 0; j < 250; j++){
  descripText+=result.description[j];
}
intro.innerText = descripText;
nxb.innerText = result.NXB;
let inforText = '';
inforText+=`Số trang : ${result.page}<br>`;
inforText+=`Năm xuất bản : ${result.year}<br>`;
inforText+=`Tác giả : ${result.author}`;

img.src = result.srcImg;
img.title = result.name;
let dataString = localStorage.getItem('boxName');
let box; 
if(dataString){
  box = JSON.parse(dataString);
}
else {
  box = [];
}
function add(){
  let index = box.findIndex(function(e){
    return e.name == result.name;
  });
  if( index == -1 ){
    result.quality = Number(quality.value);
    box.push(result);
  }
  else {
    box[index].quality = Number(box[index].quality)
    box[index].quality += Number(quality.value);
  }
  boxValue = JSON.stringify(box);
  localStorage.setItem('boxName', boxValue);
  vertify.style.display = 'block';
  boxValue = JSON.parse(localStorage.getItem('boxName'));
  amount = 0;
for(let i = 0; i < boxValue.length; i++){
    amount += Number(boxValue[i].quality);
}
amountCart.innerText = amount;

}
function readmore(){
  let readmoreBtn = document.getElementById('readmore-btn')
  descripText = '';
  if(readmoreBtn.innerText == 'Xem tất cả'){
    readmoreBtn.innerText = 'Thu gọn';
    for(let j = 0; j < result.description.length; j++){
      descripText+=result.description[j];
    }
    intro.innerHTML = descripText;
  }
  else{
    readmoreBtn.innerText = 'Xem tất cả';
    for(let j = 0; j < 300; j++){
      descripText+=result.description[j];
    }
    intro.innerHTML = descripText;
  }
  
}
function changed(input){
  if(input.value < 1){
    input.value = 1;
  }
}

function searchBook(){
  let value = input.value;
  localStorage.setItem('searchName', value);
  window.open('./timkiem.html');
}
// --------------------------------------------------- add-to-cart-sucess
let divAddToCart = document.getElementById('add-to-cart-sucess');
// function addToCartSucess(){
  
//   divAddToCart.style.display = 'block';
//   setTimeout(function(){
//     divAddToCart.style.display = 'none';
//   },5000);
// }
// function closeDiv(){
//   divAddToCart.style.display = 'none';
// }
function goToSubCategory(a){
  let subcategoryValue = a.innerHTML;
  localStorage.setItem('subcategoryName', subcategoryValue);
}
function goToCategory(a){
  let categoryValue = a.innerText;
  localStorage.setItem('categoryName', categoryValue);
}
///////////////////////////////////
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
///////////////////////////////////////////////
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let randomContainer = document.getElementById('random-container');

let display = '';
let copyList = listBooksLocal.slice();
let randomList = [];
let index = 0;
for(let h = 0; h < 4; h++){
  index = getRandomInt(copyList.length);
  randomList.push(copyList[index]);
  copyList.splice(index, 1);
}
    for (let i = 0; i < randomList.length; i++) {
        display += `<a href = "./sanpham.html" class="item" onclick="myFunction(this)" title="${randomList[i].name}"><div>`;
        display += `<img src="${randomList[i].srcImg}"><br>`;

        display += `<span class="name">${randomList[i].name}</span><br><span class="price">${numberWithCommas(randomList[i].price)} đ</span> `;
        display += '</div></a>';
    }
    randomContainer.innerHTML = display;