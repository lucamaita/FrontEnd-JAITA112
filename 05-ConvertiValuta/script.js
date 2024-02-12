document.getElementById("convertBtn").addEventListener("click", convertCurrency);

function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = document.getElementById("amount").value;

    let conversionRate;

    if (fromCurrency === "USD" && toCurrency === "EUR") {
        conversionRate = 0.85; // Conversione da USD a EUR
    } else if (fromCurrency === "EUR" && toCurrency === "USD") {
        conversionRate = 1.18; // Conversione da EUR a USD
    } else if (fromCurrency === "USD" && toCurrency === "GBP") {
        conversionRate = 0.73; // Conversione da USD a GBP
    } else if (fromCurrency === "GBP" && toCurrency === "USD") {
        conversionRate = 1.37; // Conversione da GBP a USD
    } else if (fromCurrency === "EUR" && toCurrency === "GBP") {
        conversionRate = 0.86; // Conversione da EUR a GBP
    } else if (fromCurrency === "GBP" && toCurrency === "EUR") {
        conversionRate = 1.16; // Conversione da GBP a EUR
    }

    if (conversionRate) {
        const result = amount * conversionRate;
        const resultElement = document.getElementById("result");
        resultElement.innerText = `Importo convertito: ${result.toFixed(2)} ${toCurrency}`;
        resultElement.classList.remove("animate");
    } else {
        document.getElementById("result").innerText = "Conversione non supportata";
    }
}
