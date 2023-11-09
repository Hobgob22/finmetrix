function calculateROA() {
  var netProfit = document.getElementById('roa-net-profit').value;
  var assetsValue = document.getElementById('assets-value').value;

  if (netProfit !== '' && assetsValue !== '') {
    var roa = (parseFloat(netProfit) / parseFloat(assetsValue)) * 100;
    document.getElementById('roa-result').textContent = roa.toFixed(2); // Rounded to two decimal places
  } else {
    document.getElementById('roa-result').textContent = 'Please enter valid numbers.';
  }
}

function calculateROE() {
  var netProfit = document.getElementById('roe-net-profit').value;
  var equityValue = document.getElementById('equity-value').value;

  if (netProfit !== '' && equityValue !== '') {
    var roe = (parseFloat(netProfit) / parseFloat(equityValue)) * 100;
    document.getElementById('roe-result').textContent = roe.toFixed(2);
  } else {
    document.getElementById('roe-result').textContent = 'Please enter valid numbers.';
  }
}

function calculateInventoryTurnover() {
  var salesRevenue = document.getElementById('sales-revenue').value;
  var averageInventory = document.getElementById('average-inventory').value;

  if (salesRevenue !== '' && averageInventory !== '') {
    var inventoryTurnover = parseFloat(salesRevenue) / parseFloat(averageInventory);
    document.getElementById('inventory-turnover-result').textContent = inventoryTurnover.toFixed(2);
  } else {
    document.getElementById('inventory-turnover-result').textContent = 'Please enter valid numbers.';
  }
}

function calculateCurrentRatio() {
  var currentAssets = document.getElementById('current-assets').value;
  var currentLiabilities = document.getElementById('current-liabilities').value;

  if (currentAssets !== '' && currentLiabilities !== '') {
    var currentRatio = parseFloat(currentAssets) / parseFloat(currentLiabilities);
    document.getElementById('current-ratio-result').textContent = currentRatio.toFixed(2); // Rounded to two decimal places
  } else {
    document.getElementById('current-ratio-result').textContent = 'Please enter valid numbers.';
  }
}

function calculateNetProfitMargin() {
  var netProfit = document.getElementById('net-profit-margin-net-profit').value;
  var revenue = document.getElementById('net-profit-margin-revenue').value;

  if (netProfit !== '' && revenue !== '') {
    var netProfitMargin = (parseFloat(netProfit) / parseFloat(revenue)) * 100;
    document.getElementById('net-profit-margin-result').textContent = netProfitMargin.toFixed(2); // Rounded to two decimal places
  } else {
    document.getElementById('net-profit-margin-result').textContent = 'Please enter valid numbers.';
  }
}



document.getElementById('roa-form').addEventListener('submit', function(event) {
  event.preventDefault();
  calculateROA();
});

document.getElementById('roe-form').addEventListener('submit', function(event) {
  event.preventDefault();
  calculateROE();
});

document.getElementById('inventory-turnover-form').addEventListener('submit', function(event) {
  event.preventDefault();
  calculateInventoryTurnover();
});


document.getElementById('current-ratio-form').addEventListener('submit', function(event) {
  event.preventDefault();
  calculateCurrentRatio();
});

document.getElementById('net-profit-margin-form').addEventListener('submit', function(event) {
  event.preventDefault();
  calculateNetProfitMargin();
});