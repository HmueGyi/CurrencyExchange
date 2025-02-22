"use strict";
var inputVal=document.querySelector(".inputB");
var fromVal=document.querySelector(".fromOpt");
var toVal=document.querySelector(".toOpt");
var result=document.querySelector(".result");
// var history=document.querySelector(".history");
var history_list=document.querySelector(".history");

for(var opt in data.rates){
    // console.log(val, data.rates[val]);
    createOptions(fromVal,opt,data.rates[opt]);
    createOptions(toVal,opt,data.rates[opt]);

}
function createOptions(plate,opt,val){
    var option=document.createElement("option");
    var text=document.createTextNode(opt);
    option.setAttribute("value",toNum(val));
    option.appendChild(text);
    plate.appendChild(option);
}
//to change the string to int and remove comma
function toNum(num){
    return Number(num.replace(",",""));
}

//calculation
document.querySelector("#CalculationBtn").addEventListener("click",function(e){
    e.preventDefault();
    var amount= inputVal.value;
    var fromAmt=fromVal.value;
    var toAmt=toVal.value;
    
    // inputVal.focus();
    if(amount, fromAmt, toAmt){
            var finalResult=(amount*fromAmt)/toAmt; 
        result.innerHTML=finalResult.toFixed(2); 
        inputVal.value="";
        inputVal.focus();
        var options = document.querySelectorAll('#default');
    
        
        //getting value for history
        var date=new Date().toLocaleString();
        var from=fromVal.options[fromVal.selectedIndex].innerText;
        var to=toVal.options[toVal.selectedIndex].innerText;
        var total= finalResult.toFixed(2);
        var array=[date,amount,from,to,total];
        createTr(array);
        setLocal();

        // for (var i = 0, l = options.length; i < l; i++) {
        //     options[i].selected = options[i].defaultSelected;
        // }
    }
        else{
            alert(`Error!!\nPlease Insert any amount`);
        }
    
    //  alert(`Error \n Please Insert any amount`);
    

})
//getting the option text
// function getText(){
//     console.log();
// }
function createTr(x){
    var rowSpacer = document.getElementById("rowSpacer");
    if (rowSpacer){
        rowSpacer.remove();
    }
    var tr=document.createElement("tr");
    x.map(function(el){
        var td=document.createElement("td");
        var text=document.createTextNode(el);
        td.appendChild(text);
        tr.appendChild(td);
    })
   
    history_list.appendChild(tr);
};

//setting localstorage()
function setLocal(){
    localStorage.setItem("record", history_list.innerHTML);
};
(function () {
    if(localStorage.getItem("record")){
        history_list.innerHTML = localStorage.getItem("record");
    }else{
        history_list.innerHTML=`<tr id="rowSpacer" > <td colspan="5" style="
        height: 209px;
        background: #7070702e;
        width: 100%;
        border-radius: var(--radius);
    ">
           There is no Record   
        </td> </tr>`;
    }
})();
document.querySelector("#clear").addEventListener("click",function(e){
    e.preventDefault();
    localStorage.clear();
    history_list.innerHTML="";
    result.innerHTML="0.00";
    history_list.innerHTML=`<tr id="rowSpacer" > <td colspan="5" style="
    height: 209px;
    background: #7070702e;
    width: 100%;
    border-radius: var(--radius);
">
       There is no Record   
    </td> </tr>`;
})
function changeMode(){
    document.querySelector("body").classList.toggle("darkmode");
}