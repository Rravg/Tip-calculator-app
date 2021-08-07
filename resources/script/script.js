
let total = document.getElementById('total');
let tip_amount = document.getElementById('tip-amount');

let tip5 = document.getElementById('5tip');
let tip10 = document.getElementById('10tip');
let tip15 = document.getElementById('15tip');
let tip25 = document.getElementById('25tip');
let tip50 = document.getElementById('50tip');

tip15.onclick = () => {
    let bill = parseFloat(document.getElementById('bill').value);
    let people = parseInt(document.getElementById('people').value);

    let tip = (bill * 0.15) / people;
    tip = tip.toFixed(2);
    tip_amount.innerHTML = `$${tip}`;

    bill = (bill * 1.15 ) / people;
    bill = bill.toFixed(2);
    total.innerHTML = `$${bill}`;  
}

tip25.onclick = () => {
    let bill = parseFloat(document.getElementById('bill').value);
    total.innerHTML = `$${bill}`;
}