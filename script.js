function lifetimeSupplyCalculator(currentAge, lifeExpectancy, snacksPerDay) {

    let remainingYears = lifeExpectancy - currentAge;

    let totalSupply = remainingYears * 365 * snacksPerDay;

    return totalSupply;
}

function startCalculator() {

    let favSnack = prompt("Enter Your Favourite Snack");
    let currentAge = parseInt(prompt("Enter your current age:"));
    let lifeExpectancy = parseInt(prompt("Enter your life expectancy (how long you think you'll live):"));
    let snacksPerDay = parseInt(prompt("Enter how many snacks you eat per day:"));

    if (isNaN(currentAge) || isNaN(lifeExpectancy) || isNaN(snacksPerDay)) {
        document.getElementById("result").innerHTML = "Please Enter Valid Numbers!";
        return;
    }

    let totalSupply = lifetimeSupplyCalculator(currentAge, lifeExpectancy, snacksPerDay);

    document.getElementById("result").innerHTML = `You will need ${totalSupply} ${favSnack} to last you until the ripe old age of ${lifeExpectancy}`;
}


