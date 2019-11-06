
let name = document.getElementById('name');
let number = document.getElementById('number');
let address = document.getElementById('address');
let nameError = document.getElementById("name-error");
let numberError = document.getElementById("number-error");
let addressError = document.getElementById("address-error");
let selectError = document.getElementById('select-error');
let isNameError = false;
let isNumberError = false;
let isAddressError = false;
let isSelectError = false;
function validate1(){
    let regexName = /[a-zA-Z]{3,}/;
    if(name.value == ''){
        nameError.innerHTML = '<br>Bạn chưa điền tên';
        
       }
    else if(!regexName.test(name.value)){
    nameError.innerHTML = '<br>Tên không hợp lệ (phải từ 2 kí tự trở lên và chỉ chứa chữ)';
    
   }
   else{
    nameError.innerHTML = '<i class="fa fa-check" style="color:green;"></i>';
    isNameError = true;
   }
}
function validate2(){
    let regexPhone = /0[0-9]{7,11}/;
    if(number.value == ''){
        numberError.innerHTML = '<br>Bạn chưa điền số điện thoại';
       }
    else if(!regexPhone.test(number.value)){
            numberError.innerHTML = '<br>Số điện thoại không hợp lệ';
        }
    else{
           numberError.innerHTML = '<i class="fa fa-check" style="color:green;"></i>';
           isNumberError = true;
           }
       
      
}
function validate3(){
    let index = select.selectedIndex;
    if(index == 0){
        selectError.innerHTML = '<br>Bạn chưa chọn thành phố';
    }
    else{
        selectError.innerHTML = '<i class="fa fa-check" style="color:green;"></i>';
        isSelectError = true;
    }
}
function validate4(){
    if(address.value == ''){
        addressError.innerHTML = '<br>Bạn chưa điền địa chỉ';
       }
       else{
        addressError.innerHTML = '<i class="fa fa-check" style="color:green;"></i>';
        isAddressError = true;
       }
    }
let content = document.getElementById('content');
let tfoot = document.getElementsByTagName('tfoot');
let contentText = '';
let totalMoney = 0;
let totalQuality = 0;
let boxValue = JSON.parse(localStorage.getItem('boxName'));
for(let i = 0; i < boxValue.length; i++){
    contentText += `<tr><td>${boxValue[i].name}</td>`;
    contentText += `<td>${boxValue[i].quality}</td>`;
    let a = boxValue[i].quality * boxValue[i].price;
    contentText += `<td>${numberWithCommas(a)}đ</td><tr>`;
    totalMoney += boxValue[i].quality * boxValue[i].price;
    totalQuality += Number(boxValue[i].quality);
}

tfoot[0].innerHTML = `<tr><td>Tổng: </td><td>${totalQuality}</td><td>${numberWithCommas(totalMoney)} đ</td></tr>`;
content.innerHTML = contentText;
let isDisplay = false;
function confirm(isDisplay){
    if(isAddressError && isNameError && isSelectError && isNumberError && name.value != '' && number.value != '' && address.value && select.selectedIndex != 0 ){
        isDisplay = true;
        setTimeout(function(){
            window.location = "./index.html";
        },5000);
    }
    validate1();
    validate2();
    validate3();
    validate4();
    
    return isDisplay;
    
}
// //////////////////////////////////////
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function abcd() {
    if(confirm(isDisplay)){
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
// Thêm amount vào giỏ hàng
let amountCart = document.getElementById('amount-cart');
boxValue = JSON.parse(localStorage.getItem('boxName'));
let amount = 0;
for(let i = 0; i < boxValue.length; i++){
    amount += Number(boxValue[i].quality);
}
amountCart.innerText = amount;
// 