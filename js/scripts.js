// Dropdown interaction — vanilla JS (no jQuery).
// Rates (muskIncrease, etc.) and the global `increaseNumber` come from money.js,
// which is loaded before this file.

const RATES = {
  "Elon Musk": muskIncrease,
  "Mark Zuckerberg": zuckIncrease,
  "Jeff Bezos": bezosIncrease,
  "Bill Gates": gatesIncrease,
  "a top .1% income earner": toppointIncrease,
  "a top 1% income earner": toponeIncrease,
  "an average American": avgAmericanIncrease,
  "a minimum wage worker": avgMinimumWage,
};

const placeholder = document.querySelector(".placeholder");
const listUl = document.querySelector(".list__ul");
const clickIcon = document.getElementById("clickIcon");

// Click anywhere on the page closes the dropdown.
document.addEventListener("click", function () {
  listUl.style.display = "none";
});

// Clicking the current selection toggles the dropdown open.
placeholder.addEventListener("click", function (e) {
  e.stopPropagation();
  if (clickIcon) clickIcon.style.visibility = "hidden";
  placeholder.style.opacity = "1";
  listUl.style.display = listUl.style.display === "block" ? "none" : "block";
});

// Picking an option updates the label and the counter's rate.
listUl.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const name = link.textContent.trim();
    placeholder.textContent = name;
    placeholder.style.opacity = "1";
    if (name in RATES) {
      increaseNumber = RATES[name];
    }
    listUl.style.display = "none";
  });
});
