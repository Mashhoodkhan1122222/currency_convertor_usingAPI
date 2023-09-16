const populate = async (value, currency) => {
    let myStr = '';

    const url = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_5bRKJnnFohERr7Pk6LhwElzHZ7pXRuSRjUzcJ9Rv';
    let response = await fetch(url);
    let rjson = await response.json();

    document.querySelector(".results").style.display = "flex";

    for (let key in rjson["data"]) {
        myStr += `
        <tr>
            <td>${key}</td>
            <td>${rjson["data"][key]["code"]}</td>
            <td>${Math.round(rjson["data"][key]["value"] * value)}</td>
        </tr>
        `;
    }

    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
}

const btn = document.querySelector(".btn");

btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const value = parseInt(document.querySelector("input[name='amount']").value);
    const currency = document.querySelector("select[name='currency']").value;

    await populate(value, currency);
});
