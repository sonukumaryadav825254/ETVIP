function convert() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  
  const conversionRates = {
    usd: { eur: 0.85, usd: 1.0 },
    eur: { usd: 1.18, eur: 1.0 },
    usd: { usd:1.0, inr:83.7},
    inr: { inr:1.0, usd:0.01},
    eur: { eur:1.0, inr:87.9},
    inr: { inr:1.0, eur:0.01}
  };
  
  const convertedAmount = amount * conversionRates[fromCurrency][toCurrency];
  
  document.getElementById('result').innerText = convertedAmount.toFixed(2);
}
