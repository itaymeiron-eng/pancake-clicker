let money = 0;
const chefConfigs = [
    { cost: 5, baseIncome: 2, incomeIncrease: 1 },
    { cost: 50, baseIncome: 15, incomeIncrease: 15 },
    { cost: 100, baseIncome: 25, incomeIncrease: 25 },
    { cost: 5000, baseIncome: 100, incomeIncrease: 100 },
    { cost: 15000, baseIncome: 500, incomeIncrease: 500 },
    { cost: 30000, baseIncome: 1500, incomeIncrease: 1500 }
];
let chefOwned = [0, 0, 0, 0, 0, 0];
let chefIncomes = [2, 15, 25, 100, 500, 1500];

function updateDisplay() {
    document.getElementById('money').textContent = money;
    for (let i = 0; i < 6; i++) {
        document.getElementById('owned-' + i).textContent = chefOwned[i];
        document.getElementById('income-' + i).textContent = chefIncomes[i];
    }
}

document.getElementById('pancakeBtn').addEventListener('click', function() {
    money += 1;
    updateDisplay();
});

for (let i = 0; i < 6; i++) {
    const chefElement = document.querySelector(`[data-chef="${i}"]`);
    chefElement.addEventListener('click', function() {
        if (money >= chefConfigs[i].cost) {
            money -= chefConfigs[i].cost;
            chefOwned[i]++;
            chefIncomes[i] += chefConfigs[i].incomeIncrease;
            updateDisplay();
        } else {
            alert('אין לך מספיק כסף!');
        }
    });
}

updateDisplay();