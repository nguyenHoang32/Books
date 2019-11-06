let listBooksLocal = JSON.parse(localStorage.getItem('listBooksLocal'));
let container = document.getElementById('container');
let display = '';
let name = document.getElementsByClassName('name');
let price = document.getElementsByClassName('price');
let subCategoryValue = localStorage.getItem('subcategoryName');
let subCategoryList = listBooksLocal.filter(function(book){
    return book.subCategory == subCategoryValue;
})

for(let i = 0; i < subCategoryList.length; i++){
    display+= `<a href = "./sanpham.html" class="item" onclick="myFunction(this)" title="${subCategoryList[i].name}"><div>`;
    display+= `<img src='${subCategoryList[i].srcImg}'><br>`;
    display+= `<span class="name">${subCategoryList[i].name}</span><br><p class="price">${numberWithCommas(subCategoryList[i].price)} đ</p>`;
    display+= '</div></a>';
}
console.log(subCategoryList);
container.innerHTML = display;
function filter(){
    display = '';
    let index = select.selectedIndex;
    let newList = [];
    if(index == 0){
        newList = subCategoryList;
    }
    if(index == 1){
            newList = subCategoryList.sort(function(a, b){
                let c = a.name.toUpperCase()
                let d = b.name.toUpperCase()
                if(c > d) return 1;
                if(c < d) return -1;
                return 0;
                
            })
        }
    if(index == 2){
        newList = subCategoryList.sort(function(a, b){
                let c = a.name.toUpperCase()
                let d = b.name.toUpperCase()
                if(c < d) return 1;
                if(c > d) return -1;
                return 0;
            })
        }
    if(index == 3){
        newList = subCategoryList.sort(function(a, b){
            return a.price - b.price;
        });
    }
    if(index == 4){
        newList = subCategoryList.sort(function(a, b){
            return b.price - a.price;
        });
    }
    
    for(let i = 0; i < newList.length; i++){
        display+= `<a href = "./sanpham.html" class="item" title="${newList[i].name}"><div>`;
        display+= `<img src='${newList[i].srcImg}'><br>`;
        display+= `<span class="name">${newList[i].name}</span><br><span class="price">${numberWithCommas(newList[i].price)} đ</span>`;
        display+= '</div></a>';
    }
    container.innerHTML = display;
}
let item = document.getElementsByClassName('item');
function myFunction(a){
    let itemValue = a.getElementsByTagName('span')[0].innerHTML;
    localStorage.setItem('itemName', itemValue);
}
function goToSubCategory(a){
    let subcategoryValue = a.innerHTML;
    localStorage.setItem('subcategoryName', subcategoryValue);

}
function goToCategory(a){
    let categoryValue = a.innerText;
    localStorage.setItem('categoryName', categoryValue);
}
function searchBook(){
    let value = input.value;
    localStorage.setItem('searchName', value);
    window.open('./timkiem.html');
  }
  let categoryName = document.getElementById('category-name');
  categoryName.innerHTML = subCategoryValue;
// -----------------------------------
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
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