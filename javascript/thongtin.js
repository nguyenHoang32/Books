
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
    let regexName = /^[a-zA-Z\s]{3,}$/;
    if(name.value == ''){
        nameError.innerHTML = '<br>Bạn chưa điền tên';
        
       }
    else if(!regexName.test(nonAccentVietnamese(name.value))){
    nameError.innerHTML = '<br>Tên không hợp lệ (phải từ 2 kí tự trở lên và chỉ chứa chữ)';
    
   }
   else{
    nameError.innerHTML = '<i class="fa fa-check" style="color:green;"></i>';
    isNameError = true;
   }
}
function validate2(){
    let regexPhone = /^0[0-9]{7,11}$/;
    if(number.value == ''){
        numberError.innerHTML = '<br>Bạn chưa điền số điện thoại';
       }
    else if(!regexPhone.test(number.value)){
            numberError.innerHTML = '<br>Số điện thoại không hợp lệ(từ 8 đến 12 chữ số)';
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
if(boxValue == null){
    boxValue = [];
}
// Thêm amount vào giỏ hàng
let amountCart = document.getElementById('amount-cart');
let amount = 0;
for(let i = 0; i < boxValue.length; i++){
    amount += Number(boxValue[i].quality);
}
amountCart.innerText = amount;
// 
for(let i = 0; i < boxValue.length; i++){
    contentText += `<tr><td>${boxValue[i].name}</td>`;
    contentText += `<td>${boxValue[i].quality}</td>`;
    let salePrice = boxValue[i].price - (boxValue[i].price * boxValue[i].isSale)/100;
    let a = boxValue[i].quality * salePrice;
    contentText += `<td>${numberWithCommas(a)}đ</td><tr>`;
    totalMoney += a;
    totalQuality += Number(boxValue[i].quality);
}

tfoot[0].innerHTML = `<tr><td>Tổng: </td><td>${totalQuality}</td><td style="color:red;">${numberWithCommas(totalMoney)} đ</td></tr>`;
content.innerHTML = contentText;
let isDisplay = false;
function confirm(isDisplay){
    if(isAddressError && isNameError && isSelectError && isNumberError && name.value != '' && number.value != '' && address.value && select.selectedIndex != 0 ){
        isDisplay = true;
        
        
        // setTimeout(function(){
        //     window.location = "./index.html";
        // },5000);
    }
    validate1();
    validate2();
    validate3();
    validate4();
    
    return isDisplay;
    
}
let number1 = 10;
function demNguoc(){
    
    number1=number1 - 1;
    if(number1 != 0){
        document.getElementById('main-body').innerHTML = `<div style="text-align: center;"><h2>ĐƠN HÀNG CỦA BẠN ĐÃ ĐƯỢC TIẾP NHẬN</h2><p style="color:#e25203;font-size: 35px;">Cảm ơn bạn đã mua hàng</p style="font-size:30px">Tự động quay lại trang chủ trong <span style="color:red">${number1} s</span></div>`;
        setTimeout(demNguoc,1000);
    }else{
        window.location = './index.html';
    }
    
}
function abcd() {
    if(confirm(isDisplay)){
        // modal.style.display = "block";
        let newBox = [];
        localStorage.setItem('boxName', JSON.stringify(newBox));
        amount = 0;
       
        amountCart.innerText = amount;
        demNguoc();
    }
}



function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function nonAccentVietnamese(str) {
    str = str.toLowerCase();
//     We can also use this instead of from line 11 to line 17
//     str = str.replace(/\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g, "a");
//     str = str.replace(/\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g, "e");
//     str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
//     str = str.replace(/\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g, "o");
//     str = str.replace(/\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g, "u");
//     str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
//     str = str.replace(/\u0111/g, "d");
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
}
console.log('Hello abc');