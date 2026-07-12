function _id(name) {
    return document.getElementById(name);

}
function _class(name) {
    return document.getElementsByClassName(name);

}
function _tag(name) {
    return document.getElementsByTagName(name);

}

const arr1 = [];
const arr2 = [];
const arr3 = [];
const arr4 = [];
const arr5 = [];
const pricearray = [];
const mainproduct =[];
const product1 = [];
const product2 = [];
const product3 = [];
const product4 = [];


_id("SelectForm").addEventListener("change", changeFunction);
_id("SelectForm").addEventListener("change", function (e) {
    e.preventDefault();
});


function changeFunction() {
    let ElementValue = _id("SelectForm").value;
    _id("DisplayForm").innerHTML = ` `;


    for (let i = 1; i <= ElementValue; i++) {
        _id("DisplayForm").innerHTML += `<div>
        <h1>Delegate Registration Details-${i}</h1>
        <p>Please Enter the details of the Delegate that you wish to register</p>
        <form id="form" class="DelForm">
            <div class="row">
              <div class="col pb-3">
                <label for="" class="form-label">salutation</label>
                <select class="form-control"  name="" id="select${i}">
                    <option value="">Please Select</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Dr">Dr</option>
                    <option value="Er">Er</option>
                </select>
              </div>
              <div class="col pb-3">
                <label for="" class="form-label">Delegate First Name:</label>
                <input type="text" class="form-control" placeholder="Delegate First Name" name="pswd" id="fname${i}" value="">
              </div>
              
              <div class="col pb-3">
                
                <label for="" class="form-label">Delegate Last Name:</label>
                <input type="text" class="form-control" placeholder="Delegate Last Name" name="pswd" id="lname${i}" value="">
              </div>
            </div>
            <div class="row pb-3">
           
                <div class="col">
                    <label for="" class="form-label">Delegate Email:</label>
                  <input type="email" class="form-control" placeholder="Enter email" name="email" id="dmail${i}">
                </div>
                <div class="col pb-3">
                     <label for="" class="form-label">Delegate Telephone:</label>
                  <input type="number" class="form-control" placeholder="Enter Telephone number" name="pswd" id="dtel${i}">
                </div>
                
                <div class="col pb-3">
                    
                <label for="" class="form-label">Delegate Job Title:</label>
                  <input type="text" class="form-control" placeholder="Enter Job Title" name="pswd" id="djob${i}">
                </div>
              </div>
              <div class="row pb-3">
                <div class="col col-4">
                    <label for="" class="form-label">Delegate Passport Number:</label>
                    <input type="text" class="form-control " name="" id="dpass${i}" placeholder="Enter Your Passport Number">
                  </div>
              </div>
          </form>
    </div>


        <form action="">
            <h1>PRODUCT AND FEES</h1>
            <ul class="list-group"></ul>
            <li class="list-group-item d-flex justify-content-between align-items-center mb-3">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="check1" name="ProductFee" value="5900"  onchange="Calculation_${i}(event)">
                <label class="form-check-label" for="check1" id="ch1">All Access Delegate(Delegate)</label>
              </div>
              
              <span class="badge text-dark " id="rs1">USD 5900</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center mb-3">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="check2" name="ProductFee" value="5100" onchange="Calculation_${i}(event)">
                <label class="form-check-label" for="check2" id="ch2">Strategic conference(Delegate)</label>
              </div>
              
              <span class="badge text-dark" id="rs2">USD 5100</span>
            </li>
              <li class="list-group-item d-flex justify-content-between align-items-center mb-3">
                <div class="form-check">
                <input type="checkbox" class="form-check-input" id="check3" name="ProductFee" value="1858" onchange="Calculation_${i}(event)">
              <label class="form-check-label" for="check2" id="ch3">Technical Conferencepass - 4 days(Delegate)</label>
            </div>
                <span class="badge text-dark" id="rs3">USD 1858</span>
              </li>
                <li class="list-group-item d-flex justify-content-between align-items-center mb-3">
                  <div class="form-check">

                  <input type="checkbox" class="form-check-input" name="ProductFee" id="check4"   value="1485" onchange="Calculation_${i}(event)">
              <label class="form-check-label" id="ch4">Technical Conferencepass - 2 days(Delegate)</label>
            </div>

                  <span class="badge text-dark">USD 1485</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center mb-3">
                  <div class="form-check">
              <label class="form-check-label" id="ch4">Technical Conferencepass - 2 days(Delegate)</label>
                  <input type="checkbox" class="form-check-input" name="ProductFee" id="check5" value="1100"  onchange="Calculation_${i}(event)">
              <label class="form-check-label" id="ch5">Downstream Technical Conferencepass (Delegate)</label></div>

                  <span class="badge text-dark">USD 1100</span>
                </li>
                
                
              </div>`



    }

}

function Calculation_4(event) {
    if (event.target.checked == true) {
        arr4.push(event.target.value);
        let x = event.target.nextElementSibling.innerHTML
       product4.push(x);
    }

}
function Calculation_1(event) {
    if (event.target.checked == true) {
        arr1.push(event.target.value);
        // console.log(arr1);
        let x = event.target.nextElementSibling.innerHTML
       product1.push(x);
       
    }

}
function Calculation_2(event) {
    if (event.target.checked == true) {
        arr2.push(event.target.value);
        let x = event.target.nextElementSibling.innerHTML
       product2.push(x);
    }

}
function Calculation_3(event) {
    if (event.target.checked == true) {
        arr3.push(event.target.value);
        let x = event.target.nextElementSibling.innerHTML
       product3.push(x);
    }

}
function Total() {
   //Addition of array values and push in pricearay
   let sum1 = 0;
   for (i = 0; i < arr1.length; i++) {
 
       sum1 = sum1 + Number(arr1[i]);
 
   } 
 let cal1 = sum1 ;
 pricearray.push(cal1);
 
 
   let sum2 = 0;
   for (let i = 0; i < arr2.length; i++) {
       sum2 += Number(arr2[i]);
   }
   let cal2 = sum2 ;
 pricearray.push(cal2);
 
   let sum3 = 0;
   for (let i = 0; i < arr3.length; i++) {
       sum3 += Number(arr3[i]);
   }
   let cal3 = sum3 ;
 pricearray.push(cal3);
   
   let sum4 = 0;
   for (let i = 0; i < arr4.length; i++) {
       sum4 += Number(arr4[i]);
   }
   let cal4 = sum4 ;
   pricearray.push(cal4);
 
 
   let sum5= 0;
   for(let i = 0 ; i<pricearray.length ; i++){
       sum5 += pricearray[i]; 
   }
 let cal5 = sum5;
 
    // console.log(pricearray);
   
    GrandTotal(cal5);

    //for getting product name
    let total= "";
    for(let i = 0 ; i< product1.length ; i++){
      total += ","+product1[i];
    }
  
  mainproduct.push(total);

  let total2= "";
    for(let i = 0 ; i< product2.length ; i++){
      total2 += ","+product2[i];
    }

  mainproduct.push(total2);

  let total3= "";
    for(let i = 0 ; i< product3.length ; i++){
      total3 += ","+product3[i];
    }

  mainproduct.push(total3);

  let total4= "";
  for(let i = 0 ; i< product4.length ; i++){
    total4 += ","+product4[i];
  }

mainproduct.push(total4);
  
 
  
  console.log(mainproduct);
  
  
}

_id("Show").addEventListener("click", Total)

function GrandTotal(add) {
    
  
   _id("TotalGrand").innerHTML = `<div class="container-fluid" id="grand">
   <h1>PURCHASE SUMMARY</h1>
   <P>Total:(USD) <span id="showusd">${add}</span></P>
 </div>`;

    
}

_id("NextForm").addEventListener("click",CompanyDetail);
_id("NextForm").addEventListener("click",(e)=>e.preventDefault());
function CompanyDetail() {

 
    _id("CompanyForm").innerHTML=`  <section id="cominfo"  class="container-fluid">
    <h1>Company information:</h1>
    <form id="form2" >
      <div class="row ">
        <div class="col">
          <label for="" class="form-label">Company Name:</label>
        <input type="text" class="form-control" placeholder="" name="" id="cname">
      </div>
      <div class="col pb-3">
           <label for="" class="form-label">Street:</label>
        <input type="text" class="form-control" placeholder="" name="" id="cstreet">
      </div>
      
      <div class="col pb-3">
          
      <label for="" class="form-label">Town city:</label>
        <input type="text" class="form-control" placeholder=" " name="" id="ctown">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="" class="form-label">Country:</label>
      <input type="text" class="form-control" placeholder="" name="" id="ccountry">
    </div>
    <div class="col pb-3">
         <label for="" class="form-label">Zipcode:</label>
      <input type="number" class="form-control" placeholder="" name="" id="czip">
    </div>
    
    <div class="col pb-3">
        
    <label for="" class="form-label">State:</label>
      <input type="text" class="form-control" placeholder="" name="" id="cstate">
    </div>
  </div>
  
  <div>
    <h1>Billing Contact Info</h1>
    <form>
      <div class="row">
        <div class="col pb-3">
          <label for="" class="form-label">salutation</label>
          <select class="form-control"  name="" id="select2">
            <option value="">Please Select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Dr">Dr</option>
            <option value="Er">Er</option>
          </select>
        </div>
        <div class="col pb-3">
          <label for="" class="form-label">First Name:</label>
          <input type="text" class="form-control" placeholder="First Name" name="pswd" id="Bill-fname">
        </div>
        
        <div class="col pb-3">
          
          <label for="" class="form-label">Last Name:</label>
          <input type="text" class="form-control" placeholder="Last Name" name="pswd"
          id="Bill-lname">
        </div>
      </div>
      <div class="row pb-3">
        
        <div class="col col-4">
            <label for="" class="form-label">Email:</label>
          <input type="email" class="form-control" placeholder="Enter email" name="email" id="Bill-email">
        </div>
        <div class="col pb-3 col-4">
             <label for="" class="form-label">Telephone:</label>
          <input type="number" class="form-control" placeholder="Enter Telephone number" name="pswd" id="number">
        </div>
        </div>
        <p>VAT Registered</p>
        <input type="radio" name="radio" id="option1" onclick="visiblity()" ><label for="radio" class="option" >Yes</label></input>
        <input type="radio" name="radio" id="option2" onclick="hide()"><label for="radio" class="option">No</label></input> <br>
        <div class="col pb-3 col-2">

          <input type="text" name="" id="vatnum"class="form-control " placeholder="Vat number">
        </div>
        </form>
      </div>
    </section> 
`

    
}
let ArrVatEntry=[];
let ObjVatEntry={};
function visiblity() {
  
    _id("vatnum").style.display="block";
    // return list = true ;
    ObjVatEntry.Option="Yes";
  ObjVatEntry.Number = _id("vatnum").value;
    ArrVatEntry.push(ObjVatEntry);
    // console.log(ArrVatEntry);

  }
  


function hide() {
  _id("vatnum").style.display="none";
//  return list = false;
ObjVatEntry.Option="No";
    ArrVatEntry.push(ObjVatEntry);
    // console.log(ArrVatEntry);

  
}
_id("SubmitForm").addEventListener("click",StudentTable);
function StudentTable() {
  ObjVatEntry.Number = _id("vatnum").value;
  ArrVatEntry.push(ObjVatEntry);
  // console.log(ArrVatEntry);
  

  let Arrforcompanytable =[];
  let ObjcompanyTable ={};
  ObjcompanyTable.Name = _id("cname").value;
  ObjcompanyTable.Street = _id("cstreet").value;
  ObjcompanyTable.City= _id("ctown").value;
  ObjcompanyTable.Country = _id("ccountry").value;
  ObjcompanyTable.Zipcode = _id("czip").value;
  ObjcompanyTable.State = _id("cstate").value;
  //for billing info
  ObjcompanyTable.Salutation = _id("select2").value;
  ObjcompanyTable.FName = _id("Bill-fname").value;
  ObjcompanyTable.LName = _id("Bill-lname").value;
  ObjcompanyTable.Email = _id("Bill-email").value;
  ObjcompanyTable.Telephone = _id("number").value;
Arrforcompanytable.push(ObjcompanyTable);
// console.log(Arrforcompanytable);
let sum5= 0;
   for(let i = 0 ; i<pricearray.length ; i++){
       sum5 += pricearray[i]; 
   }
 let cal5 = sum5;
_id("CompanyTable").innerHTML=`<table id="table2" class="tables">
<tr>
  <th colspan="2"> Company Information
  </th>
</tr>
  
  <tr>
    
    <th>Company Name</th>
    <td id="name">${Arrforcompanytable[0].Name}</td>
  </tr>
  <tr>
    <th>Street</th>
    <td id="street">${Arrforcompanytable[0].Street}</td>
  </tr>
  <tr>
    <th>Town/City</th>
    <td id="town">${Arrforcompanytable[0].City}</td>
  </tr>
  <tr>
    <th>Country</th>
    <td id="country">${Arrforcompanytable[0].Country}</td>
  </tr>
  <tr>
    <th>Zipcode</th>
    <td id="zip">${Arrforcompanytable[0].Zipcode}</td>
  </tr>
  <tr>
    <th>State</th>
    <td id="state">${Arrforcompanytable[0].State}</td>
  </tr>

</table>
<table id="table3" class="tables">
<tr>
  <th colspan="2">Billing Contact Info</th>
</tr>
<tr>
  <th>Salutation</th>
  <td id="sal">${Arrforcompanytable[0].Salutation}</td>
</tr>
<tr>
  <th>First Name</th>
  <td id="first">${Arrforcompanytable[0].FName}</td>
</tr>
<tr>
  <th>Last Name</th>
  <td id="last">${Arrforcompanytable[0].LName}</td>
</tr>
<tr>
  <th>Email</th>
  <td id="mail">${Arrforcompanytable[0].Email}</td>
</tr>
<tr>
  <th>Telephone</th>
  <td id="Company-phone">${Arrforcompanytable[0].Telephone}</td>
</tr>
</table>
<table id="table4" class="tables">
<tr>
  <th>Purchase Summary</th>
  <th>VAT Registered:${ArrVatEntry[0].Option}</th>
</tr>
<tr>
  <th>Total:USD <span id="usdrs">${cal5}</span></th>
  <td id="tusd">${ArrVatEntry[0].Number}</td>
</tr>
</table>


`


  let ElementValue=_id("SelectForm").value;
  let ArrDelegate=[ ];


  // console.log(pricearray);
  
  // let arrcalculation2 = arr2.reduce((total,num) => Number(total) + Number(num));
  // let arrcalculation3 = arr3.reduce((total,num) => Number(total) + Number(num));
  // let arrcalculation4 = arr4.reduce((total,num) => Number(total) + Number(num));
 

  _id("Tables").innerHTML=` `;
  for(let i =1 ; i <=ElementValue ; i++){
     ObjDelegate={ };
     ObjDelegate.Salutation=_id("select"+i).value;
     ObjDelegate.Name=_id("fname"+i).value;
     ObjDelegate.LastName=_id("lname"+i).value;
     ObjDelegate.Email=_id("dmail"+i).value;
     ObjDelegate.Telephone=_id("dtel"+i).value;
     ObjDelegate.JobTitle=_id("djob"+i).value;
     ObjDelegate.passwordNumber=_id("dpass"+i).value;
    //  ObjDelegate.Total=_id("showusd").innerHTML;
    //  ObjDelegate.test=Product;
     ArrDelegate.push(ObjDelegate);
    //  console.log(ArrDelegate);



  }



  for(let i =0 ; i <=ElementValue ; i++){
    _id("Tables").innerHTML+=`<div> <table id="table1" class="tables"> 
                            
    <tr><th colspan="3">NO of Delegate ${1+i}: </th></tr>
    <tr>
      <th>Salutation:</th>
      <th>Delegate First Name:</th>
      <th>Delegate Last Name:</th>
    </tr>
    <tr id="data">
    <td id="stion">${ArrDelegate[i].Salutation}</td>
      <td id="dfname">${ArrDelegate[i].Name}</td>
      <td id="dlname">${ArrDelegate[i].LastName}</td>
    </tr>
    <tr>
      <th>Delegate Email:</th>
      <th>Delegate Telephone:</th>
      <th>Delegate Job Title:</th>
    </tr>
    <tr>
      <td id="email">  ${ArrDelegate[i].Email} </td>
      <td id="tel">${ArrDelegate[i].Telephone}</td>
      <td id="job">${ArrDelegate[i].JobTitle}</td>
    </tr>
    <tr>
      <th colspan="2">Delegate password Number:</th>
      <th>Product And Fees:${mainproduct[i]}</th>
    </tr>
    <tr>
      <td colspan="2" id="passw">${ArrDelegate[i].passwordNumber} </td>
      <td id="fee">${pricearray[i]}</td>
    </tr>
  </table>  </div> `


  

    }
   
}