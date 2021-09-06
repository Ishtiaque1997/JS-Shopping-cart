/* function to change the number of case or phone*/
function updateNumber(product,price,isIncreasing){
const productInput=document.getElementById(product+'-number');
    let productNumber=productInput.value;
    if(isIncreasing==true){
       productNumber=parseInt(productNumber)+1;
    }
    else if(productNumber>0){
     productNumber=parseInt(productNumber)-1;
    }
    productInput.value=productNumber;
    //update total price
    const priceTotal=document.getElementById(product+'-total');
    priceTotal.innerText=productNumber*price;
    calculateTotal();
}
/*function to get the value of input */

function getInputValue(product){
    const productInput=document.getElementById(product+'-number');
    const productNumber=parseInt(productInput.value);
    return productNumber;
}
/* function to calculate the total price */
function calculateTotal(){
    const phoneTotal=getInputValue('phone')*1219;
    const caseTotal=getInputValue('case')*59;
    const subTotal=phoneTotal+caseTotal;
    const tax=subTotal/10;
    const netTotal=subTotal+tax;
    //update on the html
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax-amount').innerText=tax;
    document.getElementById('total-price').innerText=netTotal;
}
//handle phone increase and decrease
 document.getElementById('phone-plus').addEventListener('click',function(){
     updateNumber('phone',1219,true);
 })
 document.getElementById('phone-minus').addEventListener('click',function(){
     updateNumber('phone',1219,false);
 })
//handle case increase and decrease
document.getElementById('case-plus').addEventListener('click',function(){
    updateNumber('case',59,true);
})
document.getElementById('case-minus').addEventListener('click',function(){
     updateNumber('case',59,false)
})
