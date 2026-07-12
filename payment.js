function _id(name) {
    return document.getElementById(name);
    
}
_id("start-btn").addEventListener("click",()=>{
    if(_id("radio-collection").classList.contains("toggle")){
        _id("col-6").classList.remove("toggle");
        _id("radio-collection").classList.remove("toggle");
    }
  
    else{
        _id("radio-collection").classList.add("toggle");
        _id("col-6").classList.add("toggle");
    }
    
});

// "upi" ? "Credit card" :"Debit card":"others";

let radio = document.getElementsByName("radio1");
radio.forEach(elem => {
    elem.addEventListener("click",()=>{
       
   
        let elemval= elem.getAttribute("value");
        // console.log(elemval);
        let form = document.querySelector('.'+elemval);
        // console.log(form);
        let boxform= document.querySelectorAll(".box");
        // console.log(boxform);
        boxform.forEach((val) =>{
            if(val === form){
        
                val.style.display="block";
            }
            else{
                val.style.display="none";
             
            }
        })
    })
  
});
let numberarr = [ "8254637019",
    "9043681072",
    "7531208496",
    "6079356418",
    "2897503461",
    "4563872109",
    "3974610825",
    "7382965041",
    "2540187693",
    "9682735041"]
let AcName = _id("accountname");
let AcNum = _id("accountnumber");
let AcRnum = _id("reaccountnumber");
let Accode = _id("IfscCode");
let AcBranch = _id("Branch");
let Ac_cvv  =   _id("Accv");
let UpiNumber=_id("upinumber");
let UpiName=_id("upiname");
let cardnum= _id("cardnumber");
let cardname= _id("cardname");
let    upientercv = _id("cardnumber-Upi");
let cardtype= _id("cardtype");

let carddate= _id("cardexpiry");
let entercv = _id("cardnumber2")
carddate.valueAsDate = new Date();
let regexalpha = /^[A-Za-z]+$/;
let cardhold = null;
let Arr1 = [];
let Arr2 = [];
let Arr3 = [];
let obj1 = {};
let obj2 = {};
let obj3 = {};
//onchange selsect
cardtype.addEventListener("change",()=>{
    let val = cardtype.value;
    cardhold = val;
    // console.log(cardhold);
   

})

function cvvgeneration() {
    
        let cvv = Math.floor(Math.random()*900)+100;
    _id("card-error").classList.remove("text-danger");
    _id("card-error").classList.add("text-success");
    _id("card-error").innerHTML=  " "+cvv + " Enter cvv";
    _id("upi-error").innerHTML=  " "+cvv + " Enter cvv";
    _id("account-error").innerHTML=  " "+cvv + " Enter cvv";
    _id("upi-error").classList.remove("text-danger");
    _id("upi-error").classList.add("text-success");
    _id("account-error").classList.remove("text-danger");
    _id("account-error").classList.add("text-success");
        
    

    
    // matchcv(cvv);
_id("Save-Card").addEventListener("click",matchcv);
_id("SaveUpi").addEventListener("click",matchcv);

_id("AccountDetail").addEventListener("click",matchcv);

function matchcv(){

    if(entercv.value == cvv){
        _id("upi-error").innerHTML=  " ";
        _id("account-error").innerHTML=  " ";
        obj1.cardnum=_id('cardnumber').value;
        obj1.cardname=_id("cardname").value;
        // document.querySelector("input[name='radio1']:checked").value ==="card"?  cardname.value :document.querySelector("input[name='radio1']:checked").value ==="upi"?  UpiName.value : AcName.value;
        obj1.cardtype=cardhold;
obj1.cardexpiry=_id('cardexpiry').value;
obj1.paytype =document.querySelector("input[name='radio1']:checked").value ==="card"? "Credit/Debit Card":document.querySelector("input[name='radio1']:checked").value ==="upi"?  "upi " : "Account";  
Arr1.push(obj1);
console.log(Arr1);
    console.log(obj1);
    let row = ` <tr>
    <td>${obj1.cardname}</td>
    <td>${obj1.paytype}</td>
    <td><button class="btn btn-sm btn-secondary" onclick="record01()">Full Detail</button class="btn btn-secondary">
    </td>
    <td><button class="btn btn-sm btn-secondary" onclick="deleterow(this) ">Remove</button class="btn btn-secondary"></td>
</tr>`;
let target = _id("Records");
target.insertAdjacentHTML("beforeend",row);
_id("first-form").reset();
_id("cardnumber2")
carddate.valueAsDate = new Date();
_id("card-error").innerHTML=  " ";
_id("upi-error").innerHTML=  " ";
_id("account-error").innerHTML=  " ";

    }
    else if(upientercv.value == cvv){
        _id("card-error").innerHTML=  " ";
        _id("account-error").innerHTML=  " ";
        obj2.UpiNumber=_id("upinumber").value;
        obj2.UpiName=_id("upiname").value;
        obj2.cardtype=cardhold;
        obj2.cardexpiry=_id('cardexpiry').value;
        obj2.paytype =document.querySelector("input[name='radio1']:checked").value ==="card"? "Credit/Debit Card":document.querySelector("input[name='radio1']:checked").value ==="upi"?  "upi " : "Account";  
        Arr2.push(obj2);
        

console.log(Arr2);
    console.log(obj2);
    let row = ` <tr>
    <td>${obj2.UpiName}</td>
    <td>${obj2.paytype}</td>
    <td><button class="btn btn-sm btn-secondary" onclick="record02()">Full Detail</button class="btn btn-secondary">
    </td>
    <td><button class="btn btn-sm btn-secondary" onclick="deleterow(this) ">Remove</button class="btn btn-secondary"></td>
</tr>`;
let target = _id("Records");
target.insertAdjacentHTML("beforeend",row);
// _id("first-form").reset();
// _id("cardnumber2")

_id("cardnumber2")
carddate.valueAsDate = new Date();
_id("card-error").innerHTML=  " ";
_id("upi-error").innerHTML=  " ";
_id("account-error").innerHTML=  " ";

_id("second-form").reset();
    }
    else if(Acountcv.value == cvv){
        _id("card-error").innerHTML=  " ";
_id("upi-error").innerHTML=  " ";

obj3.acName= _id("accountname").value;
obj3.acNumber= _id("reaccountnumber").value;
obj3.Ifsc = _id("IfscCode").value;
obj3.Branch = _id("Branch").value;

// obj3.cardexpiry=_id('cardexpiry').value;
obj3.paytype =document.querySelector("input[name='radio1']:checked").value ==="card"? "Credit/Debit Card":document.querySelector("input[name='radio1']:checked").value ==="upi"?  "upi " : "Account";  
  
Arr3.push(obj3);
// console.log(   Object3.acName);
console.log(Arr3);
    console.log(obj3);
    let row = ` <tr>
    <td>${obj3.acName}</td>
    <td>${obj3.paytype}</td>
    <td><button class="btn btn-sm btn-secondary" onclick="record03()">Full Detail</button class="btn btn-secondary">
    </td>
    <td><button class="btn btn-sm btn-secondary" onclick="deleterow(this) ">Remove</button class="btn btn-secondary"></td>
</tr>`;
let target = _id("Records");
target.insertAdjacentHTML("beforeend",row);
_id("third-form").reset();

carddate.valueAsDate = new Date();
_id("card-error").innerHTML=  " ";
_id("upi-error").innerHTML=  " ";
_id("account-error").innerHTML=  " ";
    }

        // let Arr=[];
        // let obj = {}


else{
    _id("card-error").classList.add("text-danger");
    _id("card-error").classList.remove("text-success");
    _id("card-error").innerHTML=  " invalid cvv ";

    console.log("cvvgeneration error");
  
    
}




 }

}

    





;

function Valids(cardtype) {
   if(cardtype=='card') {

if((cardnum.value.length = 0)||(cardnum.value.length != 16)){
    _id("card-error").classList.add("text-danger");
    _id("card-error").classList.remove("text-success");

    _id("card-error").innerHTML="Credit/Debit Card must be 16 numeric value";
return false;
}
else if((!regexalpha.test(cardname.value))||(cardname.value.length == 0)){
    _id("card-error").classList.add("text-danger");
    _id("card-error").classList.remove("text-success");
    _id("card-error").innerHTML="Please Enter your full name and must be alphabets";
return false;
}
else if(cardhold == null){
    _id("card-error").classList.add("text-danger");
    _id("card-error").classList.remove("text-success");
    _id("card-error").innerHTML="Please Select the Card Type ";
console.log("null");
return false;
}
   
   else{

    

    cvvgeneration();

  }
  
    
}
else if(cardtype== 'upi'){
    if((UpiNumber.value.length==0) ){
         _id("upi-error").innerHTML=" please enter Upi Number  ";
         _id("upi-error").classList.add("text-danger");
         _id("upi-error").classList.remove("text-success");
         return false;
     }
else if((UpiNumber.value.length != "10")||(numberarr.forEach(n => {
   n != UpiNumber.value 
}))){
    _id("upi-error").innerHTML="Upi Number  not valid";
    _id("upi-error").classList.add("text-danger");
    _id("upi-error").classList.remove("text-success");
    return false;
}
else if((UpiName.value.length==0)||(!isNaN(UpiName.value))){
    _id("upi-error").classList.add("text-danger");
    _id("upi-error").classList.remove("text-success");
    _id("upi-error").innerHTML="Please Enter your full name and must be alphabets";
    return false;
}
else{
    cvvgeneration();
}


}
else if(cardtype== 'account'){
    if((AcName.value.length == 0) || (!isNaN(AcName.value)))
    { _id("account-error").classList.add("text-danger");
    _id("account-error").classList.remove("text-success");
        _id("account-error").innerHTML=" Please Enter your full name and must be alphabets";
        return false;
    }
    else  if((AcNum.value.length == 0 ))
    {
        _id("account-error").innerHTML="please enter Number ";
        _id("account-error").classList.add("text-danger");
    _id("account-error").classList.remove("text-success");
        return false;
    }
    else  if((AcNum.value.length == 0 )|| (AcNum.value.length != "10")||(numberarr.forEach(n => {
        n != AcNum.value 
     })))
    {
        _id("account-error").innerHTML=" Number not valid";
        _id("account-error").classList.add("text-danger");
    _id("account-error").classList.remove("text-success");
        return false;
    }

  else if(AcNum.value != AcRnum.value){
        _id("account-error").innerHTML=" Please Re-Enter your Account Number";
        _id("account-error").classList.add("text-danger");
    _id("account-error").classList.remove("text-success");
        return false;
 
}
else if((Accode.value.length == 0) || (AcBranch.value.length == "0")){
    _id("account-error").innerHTML=" Enter all the input";
    _id("account-error").classList.add("text-danger");
    _id("account-error").classList.remove("text-success");
    return false;
   }
else{
    cvvgeneration();

}
}
}
function deleterow(element) {
    element.parentElement.parentElement.remove();
}



function record01() {


        _id("ClientRecord").innerHTML=`<h1>Card Detail</h1> <br>
        Card Number:${Arr1[0].cardnum} <br>
        Card Name:${Arr1[0].cardname}<br>
        Card Date:${Arr1[0].cardexpiry}<br>
        card typr:${Arr1[0].cardtype}<br>
        Payment Method:${Arr1[0].paytype}<br>`


}
function record02() {


    _id("ClientRecord").innerHTML=`
    <p onclick="document.getElementById('ClientRecord').style.display='none'" style="color: black;">&times;</p>
    <h1>UPI Detail</h1> <br>
    UPi Number:${Arr2[0].UpiNumber} <br>
    UPI Name:${Arr2[0].UpiName}<br>
    Card Date:${Arr1[0].cardexpiry}<br>

    Payment Method:${Arr2[0].paytype}<br>`


}


// function name(params) {
//      // UPi Number:${Arr[0].UpiNumber} <br>
//         // UPi Name:${Arr[0].UpiName}<br>
//         // A/c  Number:${Arr[0].acNumber} <br>
//         // A/c Name:${Arr[0].acName}<br>
//         // Branch Name:${Arr[0].Branch}
//         // IFSC code:${Arr[0].Ifsc}
// }

function record03() {
    _id("ClientRecord").innerHTML=`
\
    

    <h1>Account Detail</h1> <br>
    A/c Name:${Arr3[0].acName}<br>
    A/c Number:${Arr3[0].acNumber} <br>
  
    Branch Name:${Arr3[0].Branch}<br>
    IFSC Code:${Arr3[0].Ifsc}<br>
    Card Date:${Arr1[0].cardexpiry}<br>
    Payment Method:${Arr3[0].paytype}<br>`

}



  