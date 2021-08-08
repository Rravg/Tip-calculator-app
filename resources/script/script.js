
let total = document.getElementById('total');
let tip_amount = document.getElementById('tip-amount');

let tip5 = document.getElementById('5tip');
let tip10 = document.getElementById('10tip');
let tip15 = document.getElementById('15tip');
let tip25 = document.getElementById('25tip');
let tip50 = document.getElementById('50tip');

let alert = document.getElementById('cant-zero');
let reset = document.getElementById('button');

const request = () => {
    let bill = parseFloat(document.getElementById('bill').value);
    let people = parseInt(document.getElementById('people').value);
   
    return [bill, people];
}

const requestActive = (reset) => {
    reset.disabled = false;
    reset.style.color = 'hsl(183, 100%, 15%)';
    reset.style.backgroundColor = 'hsl(172, 67%, 45%)';
    reset.style.cursor = 'pointer';
}

const resetButton = function () {

    
    tip5.style.backgroundColor = 'hsl(183, 100%, 15%)';
    tip5.style.color = 'white';
    tip10.style.backgroundColor = 'hsl(183, 100%, 15%)';
    tip10.style.color = 'white';
    tip15.style.backgroundColor = 'hsl(183, 100%, 15%)';
    tip15.style.color = 'white';
    tip25.style.backgroundColor = 'hsl(183, 100%, 15%)';
    tip25.style.color = 'white';
    tip50.style.backgroundColor = 'hsl(183, 100%, 15%)';
    tip50.style.color = 'white';

    document.getElementById('bill').value = NaN;
    document.getElementById('people').value = NaN;

    total.innerHTML = '$0.00';
    tip_amount.innerHTML = '$0.00';
    reset.style.color = 'default'
    reset.style.backgroundColor = 'default';
    reset.disabled = true;
    reset.style.cursor = 'default';
    
}

let clickedButton = function(event) {
    let [bill, people] = request();
    

    if (people === 0) {
        alert.style.color = 'red';   
    }

    else if (!Number.isNaN(people) && !Number.isNaN(bill)) {
        event.target.style.color = 'hsl(186, 14%, 43%)';
        event.target.style.backgroundColor = 'hsl(185, 41%, 84%)';
        requestActive(reset);
        alert.style.color = 'transparent';

        if (event.target === tip5) {

            tip10.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip10.style.color = 'white';
            tip15.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip15.style.color = 'white';
            tip25.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip25.style.color = 'white';
            tip50.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip50.style.color = 'white';

            let tip = (bill * 0.05) / people;
            tip = tip.toFixed(2);
            tip_amount.innerHTML = `$${tip}`;
        
            bill = (bill * 1.05 ) / people;
            bill = bill.toFixed(2);
            total.innerHTML = `$${bill}`;  

        } else if (event.target === tip10) {

            tip5.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip5.style.color = 'white';
            tip15.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip15.style.color = 'white';
            tip25.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip25.style.color = 'white';
            tip50.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip50.style.color = 'white';

            let tip = (bill * 0.10) / people;
            tip = tip.toFixed(2);
            tip_amount.innerHTML = `$${tip}`;
        
            bill = (bill * 1.10 ) / people;
            bill = bill.toFixed(2);
            total.innerHTML = `$${bill}`; 

        } else if (event.target === tip15) {

            tip10.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip10.style.color = 'white';
            tip5.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip5.style.color = 'white';
            tip25.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip25.style.color = 'white';
            tip50.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip50.style.color = 'white';

            let tip = (bill * 0.15) / people;
            tip = tip.toFixed(2);
            tip_amount.innerHTML = `$${tip}`;
        
            bill = (bill * 1.15 ) / people;
            bill = bill.toFixed(2);
            total.innerHTML = `$${bill}`; 

        } else if (event.target === tip25) {

            tip10.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip10.style.color = 'white';
            tip15.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip15.style.color = 'white';
            tip5.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip5.style.color = 'white';
            tip50.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip50.style.color = 'white';

            let tip = (bill * 0.25) / people;
            tip = tip.toFixed(2);
            tip_amount.innerHTML = `$${tip}`;
        
            bill = (bill * 1.25 ) / people;
            bill = bill.toFixed(2);
            total.innerHTML = `$${bill}`; 

        } else if (event.target === tip50) {

            tip10.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip10.style.color = 'white';
            tip15.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip15.style.color = 'white';
            tip25.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip25.style.color = 'white';
            tip5.style.backgroundColor = 'hsl(183, 100%, 15%)';
            tip5.style.color = 'white';

            let tip = (bill * 0.50) / people;
            tip = tip.toFixed(2);
            tip_amount.innerHTML = `$${tip}`;
        
            bill = (bill * 1.50 ) / people;
            bill = bill.toFixed(2);
            total.innerHTML = `$${bill}`; 
        }
 
    }  
}  

tip5.addEventListener('click', clickedButton);
tip10.addEventListener('click',clickedButton);
tip15.addEventListener('click', clickedButton);
tip25.addEventListener('click', clickedButton);
tip50.addEventListener('click', clickedButton);

reset.addEventListener('click', resetButton);