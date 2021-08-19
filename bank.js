document.getElementById('Deposite-button').addEventListener('click',function(){
const dipositeInput = document.getElementById('Deposite-input');
const dipositeAmountText = dipositeInput.value;

 const dipositeTotal = document.getElementById('deposite-total')
 const dipositeTotalText = dipositeTotal.innerText

 dipositeTotal.innerText = dipositeAmountText
 dipositeInput.value = '';

 const totalDiposite = parseFloat(dipositeTotalText)
 const dipositeAmount = parseFloat(dipositeAmountText)
 dipositeTotal.innerText = totalDiposite + dipositeAmount

 const balanceTotal =  document.getElementById('balance-total')
 const balanceTotalText = balanceTotal.innerText
 const previousbalanceTotal = parseFloat(balanceTotalText)
 balanceTotal.innerText = previousbalanceTotal + dipositeAmount



})

// withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('Withdraw-input')
    const withdrawAmountText = withdrawInput.value
    const withdrawAmount = parseFloat(withdrawAmountText)
  

    // update 
    const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalText = withdrawTotal.innerText;
    const totalwithdraw = parseFloat(withdrawTotalText)
    withdrawTotal.innerText = totalwithdraw + withdrawAmount;


    withdrawInput.value = '';


    // update balane after waitdraw
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousbalanceTotal = parseFloat(balanceTotalText)
    balanceTotal.innerText = previousbalanceTotal - totalwithdraw

})