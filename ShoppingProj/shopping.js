function _id(name) {
    return document.getElementById(name);


}

let ordersArr = [];
function CustomerOrder(name,discription,price,img) {
    this.Productname=name;
    this.Productdiscrptn=discription;
    this.productprice=price;
this.image=img;
}




// let Arr2=[];
let inptimg = _id("product-image");
let productname = _id("product-name");
let productdiscription = _id("product-description");
let productprice = _id("product-price");


//show in div after click
let selected_img = _id("pro-img");
let selected_name = _id("pro-name");
let selected_descr = _id("pro-descrip");
let selected_price = _id("pro-price");
let regex = /^[A-Z a-z]+$/;

let i=0;



inptimg.addEventListener("change", () => {
    preview.src = URL.createObjectURL(inptimg.files[0]);
}

)
_id("submit-btn").addEventListener("click", Addlist)
_id("submit-btn").addEventListener("click", (e) => {
    e.preventDefault();
})
// to add product and details below
function Addlist() {
    // alert("run")
    if ((productname.value.length == 0)) {
        window.alert(" Please enter all product information ")
        return false;
    }
   
    else if ((!regex.test(productname.value ))) {
        window.alert(" Please enter a valid product name without numbers");
        return false;

    }
    else if ((productname.value.length < 5)) {
        window.alert(" Please enter product name greater than 5 ")
        return false;
    }

    else if ((productdiscription.value.length == 0)) {
        window.alert("Please enter all product information");
        return false;

    }
    
    else if ((!regex.test(productdiscription.value ))) {
        window.alert(" Please enter a valid discription name without numbers");
        return false;

    }
    else if ((productdiscription.value.length < 5)) {
        window.alert(" Please enter product name greater than 5 ")
        return false;
    }
    else if ((productprice.value.length == 0)) {
        window.alert(" Please enter all product information");
        return false;

    }
   
    else if ((isNaN(productprice.value ))) {
        window.alert("Please enter a valid price without alphabets");
        return false;

    }

    // selected_img.src=URL.createObjectURL(_id("pro-img").files[0]);
    // console.log(productname.value);
    // console.log(  selected_name.innerHTML);

    else {
        //create obj
        let obj = new CustomerOrder(productname.value,productdiscription.value,productprice.value,preview.src);
      
        //push into array
        ordersArr.push(obj);

      xyz(obj,i);
        _id("product-form").reset();
        function xyz(ob,index){
            console.log("before row"+index);
            _id("products").innerHTML+=` <div class="content">
            <img src="${ordersArr[index].image}" class="product-image img" id="pro-img">
            <h3 class="product-name" id="pro-name">${ordersArr[index].Productname} </h3>
            <p class="product-description" style="margin-bottom:0rem;" id="pro-descrip">${ ordersArr[index].Productdiscrptn}</p>
            <p class="product-price" style="margin-bottom:0rem;" id="pro-price">${ordersArr[index].productprice}</p>
            <div class="product-quantity"
                style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
                <input type="button" class='buy add-to-cart mt-2' id="addto-cart" value="Add to Cart" onclick="SHOWORDER(${index})">
            </div>`;

// document.querySelector("#addto-cart").addEventListener("click",)
 
i = i+ 1;
console.log("after i ="+i);
console.log("after index ="+index);


        }


       
         // ;

    


    }}



       // show the list  of order in table 
       function SHOWORDER(index){
 document.getElementById("cart").style.display="block";
        // alert("run");
    let targetelm = _id("cart-items");
    let  newRow = ` <tr>
    <td> <img src="${ordersArr[index].image}" class="" id="" style="height: 50px;width: 50px;"></td>
    <td>${ordersArr[index].Productname}</td>
    <td>${ordersArr[index].productprice}</td>
    <td> <input type="number" value="1" id="quantity-val"  onchange="double(event)"></td>
    <td id="qpric">${ordersArr[index].productprice}</td></tr>`
    targetelm.insertAdjacentHTML("beforeend",newRow);
    
 

    }

let myint ;

// onchanging the product count
function double(event){
console.log(productprice.value);
    let v =  event.target.value;
  
   
    let arr=[];
    console.log(event.target.parentElement.previousElementSibling.innerHTML);
 for(i=1 ; i<=v ; i++){
    arr.push(event.target.parentElement.previousElementSibling.innerHTML)
 }
console.log(arr
    );
    let sum = 0 ;
arr.forEach( (n)=>{
  sum +=  Number(n);

});
console.log(sum);
event.target.parentElement.nextElementSibling.innerHTML=sum;



let targetfortotal = _id("cart-items").children;
console.log(targetfortotal);

let x = 0 ;
for(let i =0 ; i<targetfortotal.length ; i++){
  x += Number(targetfortotal[i].lastElementChild.innerText) ;
}
// [0].lastElementChild.innerHTML;
// console.log(x);


// Arr2.push(x);
// let alltotal = 0;
// Arr2.forEach(n => {
//     alltotal += Number(n);
// })


_id("total").innerText= x;


// calculating the final price select the coupon 

_id("couponselect").addEventListener("change",(event)=>{
 let discount= event.target.value;
 let amount =_id("total").innerText;
  let discamt=Number(amount)  * Number(discount)/ 100 ;
let pay=Number(amount)-Number(discamt);
_id("finalPrice").innerHTML=Math.floor(pay)  ;
window.sessionStorage.setItem("finalprice",Math.floor(pay) )
});




}


// add the coupon discount
 _id("for-coupon").addEventListener("click",AddCOUPON);

 let c_code = _id("Coupon_code");
 let c_discount = _id("Coupon_percentage");
let valid = /^[A-Z]+$/
function AddCOUPON() {
    if ( c_code.value.length == 0 ){
        alert("The coupon code should  not be empty");

        return false;
    }


   else if ( !valid.test(c_code.value) ){
        alert("The coupon code  must be in uppercase, as well have no number.");

        return false;
    }
    else if ( c_code.value.length != 5 ){
        alert("The coupon code should have exactly 5 characters.");

        return false;
    }
  else  if ( c_discount.value.length == 0 ){
        alert("The coupon percentage should not be empty .");

        return false;
    }

   else  if ( isNaN(c_discount.value) ){
        alert("The coupon percentage should be a number");

        return false;
    }
    

    else{
 
    let newoption = ` <option value="${c_discount.value}">${c_code.value}_${c_discount.value}</option>`;
    let target = _id("couponselect");
    target.insertAdjacentHTML("beforeend",newoption);
  
  
    if(XMLHttpRequest.responseText==1){
        _id("succeccdisable").style.display="block";
    }
    else{
        _id("succeccdisable").style.display="block";
        setTimeout(() => {
            _id("succeccdisable").style.display="none";
        }, 2000);
    }

  
    c_code.value="";
    c_discount.value="";
 

    
return true;
    }


   
}

// localStorage.setItem("PRICE")

