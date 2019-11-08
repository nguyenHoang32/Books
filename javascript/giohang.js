let boxValue = JSON.parse(localStorage.getItem('boxName'));

let display = '';
let total = 0;
let totalMoney = document.getElementById('total-money');
// Thêm amount vào giỏ hàng
let amountCart = document.getElementById('amount-cart');
let listItem = document.getElementById('list-item');
let amount = 0;
if (boxValue === null) {
    boxValue = [];
}

for (let i = 0; i < boxValue.length; i++) {
    amount += Number(boxValue[i].quality);
}
amountCart.innerText = amount;

// 

if (boxValue.length == 0) {
    
    display = '<p class="no-books">Không có sản phẩm nào trong giỏ hàng của bạn<br><a href="./index.html"><button class="continue-buy">Tiếp tục mua sắm<button></a></p>';

    document.getElementById('div-buy').style.display = 'none';

}
else {
    for (let i = 0; i < boxValue.length; i++) {
        display += '<div style="display: flex;background-color: white;padding: 2%;border-bottom: 1px solid #d8d0d0;">';
        display += `<img src = '${boxValue[i].srcImg}' style="height: 150px; width: 150px;">`;
        display += `<div style="width: 50%;margin-left:2%;">
                        <span class="name"><a style="text-decoration: none;" href = './sanpham.html' onclick="myFunction(this)">${boxValue[i].name}</a></span>
                        <br>
                        <span>Tác giả:<a href="" style="text-decoration: none;">${boxValue[i].author}</a></span>
                        </div>`;
        let salePrice = boxValue[i].price - (boxValue[i].price * boxValue[i].isSale)/100;
        display += `<div><span>${numberWithCommas(salePrice)}đ</span></div>`;
        display += `<div style="width: 20%">
                        <input onchange = "changed(this)" min = 1 type="number" value="${boxValue[i].quality}" style="width: 30%;margin-left:40%;text-align: center;">
                    </div>
                    <button class="delete" onclick="deleted(this)">Xóa</button>
                    </div>`;
        total += salePrice * Number(boxValue[i].quality);

    }
}


listItem.innerHTML = display;
totalMoney.innerText = numberWithCommas(total) + 'đ';

function changed(input) {
    if (input.value < 1) {
        input.value = 1;
    }
    total = 0;

    let name = input.parentNode.parentNode.getElementsByClassName('name')[0].innerText;
    for (let i = 0; i < boxValue.length; i++) {
        if (boxValue[i].name == name) {
            boxValue[i].quality = input.value;
        }
        let salePrice = boxValue[i].price - (boxValue[i].price * boxValue[i].isSale)/100;
        total += salePrice * Number(boxValue[i].quality);
    }
    localStorage.setItem('boxName', JSON.stringify(boxValue));
    totalMoney.innerHTML = numberWithCommas(total) + ' đ';
    boxValue = JSON.parse(localStorage.getItem('boxName'));
    amount = 0;
    for (let i = 0; i < boxValue.length; i++) {
        amount += Number(boxValue[i].quality);
    }
    amountCart.innerText = amount;
}

function deleted(button) {
    let name = button.parentNode.getElementsByClassName('name')[0].innerText;
    let index = boxValue.findIndex(function (a) {
        return a.name == name;
    })
    boxValue.splice(index, 1);
    localStorage.setItem('boxName', JSON.stringify(boxValue));
    boxValue = JSON.parse(localStorage.getItem('boxName'));
    if (boxValue === null) {
        boxValue = [];
    }
    display = '';
    total = 0;
    if (boxValue.length == 0) {
        display = '<p class="no-books">Không có sản phẩm nào trong giỏ hàng của bạn<br><a href="./index.html"><button class="continue-buy">Tiếp tục mua sắm<button></a></p>';
        document.getElementById('div-buy').style.display = 'none';
    }
    else {
        for (let i = 0; i < boxValue.length; i++) {
            display += '<div style="display: flex;background-color: white;padding: 2%;border-bottom: 1px solid #d8d0d0;">';
            display += `<img src = '${boxValue[i].srcImg}' style="height: 150px; width: 150px;">`;
            display += `<div style="width: 50%;margin-left:2%;">
                        <span class="name"><a style="text-decoration: none;" href = './sanpham.html' onclick="myFunction(this)">${boxValue[i].name}</a></span>
                        <br>
                        <span>Tác giả:<a href="" style="text-decoration: none;">${boxValue[i].author}</a></span>
                        </div>`;
            let salePrice = boxValue[i].price - (boxValue[i].price * boxValue[i].isSale)/100;
            display += `<div><span>${numberWithCommas(salePrice)}đ</span></div>`;
            display += `<div style="width: 20%">
                        <input onchange = "changed(this)" min = 1 type="number" value="${boxValue[i].quality}" style="width: 30%;margin-left:40%;text-align: center;">
                    </div>
                    <button class="delete" onclick="deleted(this)">Xóa</button>
                    </div>`;
            total += salePrice * Number(boxValue[i].quality);
            listItem.innerHTML = display;
        }
    }

    totalMoney.innerHTML = numberWithCommas(total) + ' đ';
    listItem.innerHTML = display;
    amount = 0;
    if(boxValue.length == 0){
        amount = 0;
    }
    else{
        for (let i = 0; i < boxValue.length; i++) {
            amount += Number(boxValue[i].quality);
        }
    }
    amountCart.innerText = amount;
}
function myFunction(a) {
    let itemValue = a.innerHTML;
    localStorage.setItem('itemName', itemValue);
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function searchBook() {
    let value = input.value;
    localStorage.setItem('searchName', value);
    window.open('./timkiem.html');
}

function goToSubCategory(a) {
    let subcategoryValue = a.innerHTML;
    let categoryBigValue = a.parentNode.parentNode.parentNode.getElementsByTagName('a')[1].innerText;
    localStorage.setItem('subcategoryName', subcategoryValue);
    localStorage.setItem('categoryBigName',categoryBigValue);
}
function goToCategory(a) {  
    let categoryValue = a.innerText;
    localStorage.setItem('categoryName', categoryValue);
}