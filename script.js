
// Tip Splitter Function

document.getElementById('container1').onchange = function calculate() {
	var bill = Number(document.getElementById('billTotal').value);
	var bill2 = Number(document.getElementById('billTotal2').value);
	var bill3 = Number(document.getElementById('billTotal3').value);
	var newBillEach = (bill*bill2*bill3)/100
	document.getElementById('newBill').innerHTML = " $" + newBillEach.toFixed(2);
	document.getElementById('newBill2').innerHTML = " $" + bill.toFixed(2);
	document.getElementById('newBill3').innerHTML = " $" + bill2.toFixed(2);
	document.getElementById('tipAmount').innerHTML = " $" + bill3.toFixed(2);
  }


  document.getElementById('container2').onchange = function myFunction() {
	//alert("I am an alert box!");
	var bills = parseInt(document.getElementById('text1').value);
	var bills2 = parseInt(document.getElementById('text2').value);
	var bills3 = parseInt(document.getElementById('text3').value);
	var newBillEachs = (bill*bill2*bill3)/100
	alert("hello"+ newBillEachs);
	document.getElementById('otp1').innerHTML = " $" + newBillEachs.valueOf;
	document.getElementById('otp2').innerHTML = " $" + bills.valueOf;
	document.getElementById('otp3').innerHTML = " $" + bills2.valueOf;
	document.getElementById('otp4').innerHTML = " $" + bills3.valueOf;
  }
 

var a_parent =  document.querySelectorAll(".a_parent");
var dd_menu_a = document.querySelectorAll(".dd_menu_a");

a_parent.forEach(function(aitem){

		aitem.addEventListener("click", function(){
			a_parent.forEach(function(aitem){
				aitem.classList.remove("active");
			})
			dd_menu_a.forEach(function(dd_menu_item){
				dd_menu_item.classList.remove("active");
			})
			aitem.classList.add("active");
		})
})

dd_menu_a.forEach(function(dd_menu_item){

		dd_menu_item.addEventListener("click", function(){
			dd_menu_a.forEach(function(dd_menu_item){
				dd_menu_item.classList.remove("active");
			})
			dd_menu_item.classList.add("active");
		})
})





document.getElementById('loan-form').addEventListener('submit',function (e) {
    //hide results
    document.getElementById('results').style.display = 'none';
    //show result
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResults,2000);
    e.preventDefault();
});



// Calculate Results
function calculateResults(){
    console.log('hello');
    //UI variable
    const UIamount = document.getElementById('amount');
    const UIinterest = document.getElementById("interest");
    const UIyears = document.getElementById("years");
    const UImonthlyPayment = document.getElementById("monthly-payment");
    const UItotalPayment= document.getElementById("total-payment");
    const UItotalInterest = document.getElementById("total-interest");
    
    const principal = parseFloat(UIamount.value);
    const calculatedInterest = parseFloat(UIinterest.value)/100 / 12 ;
    const calculatedPayments = parseFloat(UIyears.value)*12;


    const UIamount1 = document.getElementById('amount1');
    const UIinterest1 = document.getElementById("interest1");
    const UIyears1 = document.getElementById("years1");
    const UImonthlyPayment1 = document.getElementById("monthly-payment1");
    const UItotalPayment1= document.getElementById("total-payment1");
    const UItotalInterest1 = document.getElementById("total-interest1");


    
    const principal1 = parseFloat(UIamount1.value);
    const calculatedInterest1 = parseFloat(UIinterest1.value)/100 / 12 ;
    const calculatedPayments1 = parseFloat(UIyears1.value)*12;

    //complate monthly payment
    const x = Math.pow(1 + calculatedInterest,calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    const x1 = Math.pow(1 + calculatedInterest1,calculatedPayments1);
    const monthly1 = (principal1*x*calculatedInterest1)/(x-1);
    
    if(principal < 0)
    {
        showError('Please Enter Positive Amount for Principal');
    }
    else if(calculatedInterest < 0)
    {
        showError('Please Enter Positive Interest Rate');
    }
    else if(calculatedPayments  < 0)
    {
        showError('Please Enter Positive Value');
    }
    else if(isFinite(monthly)){
        UImonthlyPayment.value = monthly.toFixed(2);
        UItotalPayment.value = (monthly*calculatedPayments).toFixed(2);
        UItotalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
        //show result
        document.getElementById('results').style.display = 'block';
        //hide loader
        document.getElementById('loading').style.display = 'none';


        UImonthlyPayment1.value = monthly1.toFixed(2);
        UItotalPayment1.value = (monthly1*calculatedPayments1).toFixed(2);
        UItotalInterest1.value = ((monthly1 * calculatedPayments1)-principal1).toFixed(2);
        //show result
        document.getElementById('resultss').style.display = 'block';
        //hide loader
        document.getElementById('loadings').style.display = 'none';
    }else{
        
        showError('Please check your number');
    }


}


//Show Error

function showError(error){
    //hide result
    document.getElementById('results').style.display = 'none';
    //hide loader
    document.getElementById('loading').style.display = 'none';
    //create a div
    const errorDiv =document.createElement('div');

    //get Element
    const card = document.querySelector('.card');
    const heading =document.querySelector('.heading');

    //add class
    errorDiv.className = 'alert alert-danger';

    //  Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert Error above heading
    card.insertBefore(errorDiv,heading);

    //clear Error after 3second
    setTimeout(clearError,2000);
}

function clearError()
{
    document.querySelector('.alert').remove();
}




/*    vssss*/


document.getElementById('loan-forms').addEventListener('submit',function (e) {
    //hide results
    document.getElementById('resultss').style.display = 'none';
    //show result
    document.getElementById('loadings').style.display = 'block';
    setTimeout(calculateResultss,2000);
    e.preventDefault();
});



// Calculate Results
function calculateResultss(){
    console.log('hello');
    //UI variable
   

    const UIamount1 = document.getElementById('amount1');
    const UIinterest1 = document.getElementById("interest1");
    const UIyears1 = document.getElementById("years1");
    const UImonthlyPayment1 = document.getElementById("monthly-payment1");
    const UItotalPayment1= document.getElementById("total-payment1");
    const UItotalInterest1 = document.getElementById("total-interest1");


    
    const principal1 = parseFloat(UIamount1.value);
    const calculatedInterest1 = parseFloat(UIinterest1.value)/100 / 12 ;
    const calculatedPayments1 = parseFloat(UIyears1.value)*12;

    //complate monthly payment
    

    const x1 = Math.pow(1 + calculatedInterest1,calculatedPayments1);
    const monthly1 = (principal1*x1*calculatedInterest1)/(x-1);
    
    if(principal < 0)
    {
        showError('Please Enter Positive Amount for Principal');
    }
    else if(calculatedInterest < 0)
    {
        showError('Please Enter Positive Interest Rate');
    }
    else if(calculatedPayments  < 0)
    {
        showError('Please Enter Positive Value');
    }
    else if(isFinite(monthly)){
        

        UImonthlyPayment1.value = monthly1.toFixed(2);
        UItotalPayment1.value = (monthly1*calculatedPayments1).toFixed(2);
        UItotalInterest1.value = ((monthly1 * calculatedPayments1)-principal1).toFixed(2);
        //show result
        document.getElementById('resultss').style.display = 'block';
        //hide loader
        document.getElementById('loadings').style.display = 'none';
    }else{
        
        showError('Please check your number');
    }


}


//Show Error

function showError(error){
    //hide result
    document.getElementById('results').style.display = 'none';
    //hide loader
    document.getElementById('loading').style.display = 'none';
    //create a div
    const errorDiv =document.createElement('div');

    //get Element
    const card = document.querySelector('.card');
    const heading =document.querySelector('.heading');

    //add class
    errorDiv.className = 'alert alert-danger';

    //  Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert Error above heading
    card.insertBefore(errorDiv,heading);

    //clear Error after 3second
    setTimeout(clearError,2000);
}

function clearError()
{
    document.querySelector('.alert').remove();
}
