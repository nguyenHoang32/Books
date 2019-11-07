
localStorage.setItem('listBooksLocal', JSON.stringify(list));
let containerSach = document.getElementsByClassName('container-sach');
let containerKyNang = document.getElementById('container-kynang');
let containerVanHoc = document.getElementById('container-vanhoc');
let containerKinhTe = document.getElementById('container-kinhte');
// Thêm amount vào giỏ hàng
let amountCart = document.getElementById('amount-cart');
let boxValue = JSON.parse(localStorage.getItem('boxName'));
if(boxValue == null){
    boxValue = [];
}
let amount = 0;
for(let i = 0; i < boxValue.length; i++){
    amount += boxValue[i].quality;
}
amountCart.innerText = amount;
// 
let display = '';
let listBooksLocal = JSON.parse(localStorage.getItem('listBooksLocal'));
function show(theloai) {
    display = '';
    let newList = [];
    for (let i = 0; i < listBooksLocal.length; i++) {
        if (listBooksLocal[i].Category == theloai) newList.push(listBooksLocal[i]);
    }
    for (let i = 0; i < 8; i++) {
        display += `<a href = "./sanpham.html" class="item" onclick="myFunction(this)" title="${newList[i].name}"><div>`;
        display += `<img src="${newList[i].srcImg}"><br>`;
        let priceSale = newList[i].price - (newList[i].price * newList[i].isSale)/100;
        display += `<span class="name" style="color:black;">${newList[i].name}</span><br><span class="price" style="color:black;font-weight:bold">${numberWithCommas(priceSale)} đ</span><span style="margin-left:3%;color:grey;">-${newList[i].isSale}%</span><p style="color:grey"><strike>${numberWithCommas(newList[i].price)} đ</strike></p> `;
        display += '</div></a>';

    }
    return display;
}

containerKyNang.innerHTML = show('Kỹ năng');
containerVanHoc.innerHTML = show('Văn học');
containerKinhTe.innerHTML = show('Kinh tế');
function myFunction(a) {
    let itemValue = a.getElementsByTagName('span')[0].innerHTML;
    localStorage.setItem('itemName', itemValue);
}
let input = document.getElementById('input');

function searchBook() {
    let value = input.value;
    localStorage.setItem('searchName', value);
    
    window.open('./timkiem.html');
}
function goToSubCategory(a) {
    let subcategoryValue = a.innerHTML;
    localStorage.setItem('subcategoryName', subcategoryValue);

}
function goToCategory(a) {  
    let categoryValue = a.innerText;
    localStorage.setItem('categoryName', categoryValue);
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function readmore1(btn) {
    localStorage.setItem('categoryName','Kỹ năng');
    window.location = './category.html';
}
function readmore2(btn) {
    localStorage.setItem('categoryName','Văn học');
    window.location = './category.html';
    }
function readmore3(btn) {
        localStorage.setItem('categoryName','Kinh tế');
        window.location = './category.html';
    }