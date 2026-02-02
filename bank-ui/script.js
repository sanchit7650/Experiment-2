let balance = 1000;

function deposit(){
    let amt = Number(document.getElementById("amount").value);
    if(amt > 0){
        balance += amt;
        document.getElementById("balance").innerText = balance;
        document.getElementById("message").innerText = "Amount Deposited!";
    } else {
        document.getElementById("message").innerText = "Enter valid amount!";
    }
}

function withdraw(){
    let amt = Number(document.getElementById("amount").value);
    if(amt > 0 && amt <= balance){
        balance -= amt;
        document.getElementById("balance").innerText = balance;
        document.getElementById("message").innerText = "Amount Withdrawn!";
    } else {
        document.getElementById("message").innerText = "Insufficient balance!";
    }
}
