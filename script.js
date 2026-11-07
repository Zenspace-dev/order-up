console.log("hello!");

const tags = ["vegan", "spicy", "late night"];
const prices = [6.5, 5.5, 3, 4.5];

console.log(tags, prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";
for (let i = 0; i < tags.length; i++) {
        tagText.textContent = tagText.textContent + tags[i] + " . ";

}
let total = 0;
for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}
document.querySelector("#total").textContent = "$" + total;

// bonus 2

const tax = total * 0.11;
const totalWithTax = total + tax;
document.querySelector("#tax").textContent = "Tax: $" + tax.toFixed(2);
document.querySelector("#totalWithTax").textContent = "Total with tax: $" + totalWithTax.toFixed(2);

// bonus 3
let cheapCount = 0;
for(let i = 0; i < prices.length; i++) {
    if(prices[i] < 5) {
        cheapCount = cheapCount + 1
    }
}

document.querySelector("#cheap").textContent = cheapCount + " items under $5";
