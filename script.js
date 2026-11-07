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
