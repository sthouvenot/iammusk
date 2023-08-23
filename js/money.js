speed = 10;

bezosIncrease = 2447.68;
gatesIncrease = 254.06;
muskIncrease = 1978.44;
zuckIncrease = 668.99;
toppointIncrease = 0.0890331008;
toponeIncrease = 0.02338925174;
avgAmericanIncrease = 0.00175688015;
avgMinimumWage = 0.00047812301;

var begSeconds = new Date().getTime();

var savedIncrease = 0; //incase of overflow;
var x = setInterval(function() {
  var newSeconds = new Date().getTime();
  var difference = (newSeconds - begSeconds) / 1000;
  newAmount = difference * increaseNumber;
  newAmount = newAmount.toFixed(2);
  newAmount = numberWithCommas(newAmount);

  var moneyElement = document.getElementById("money");

  // Clear the content of moneyElement
  moneyElement.innerHTML = "";

  // Create a span for the dollar sign
  var dollarSpan = document.createElement("span");
  dollarSpan.textContent = "$";
  dollarSpan.style.color = "#196619";
  dollarSpan.style.marginRight = "13px"; // Add some spacing
  dollarSpan.style.fontSize = ".7em";
 dollarSpan.style.transform = "translateY(-10%)"; // Move up by 50% of its own height
  dollarSpan.style.position = "relative"; // Ensure transform works as intended
  dollarSpan.style.display = "inline-block"; 
  dollarSpan.style.textShadow = "-7px 3px 20px #00ff30cf, -4px 3px 1px #20ff00;";
  moneyElement.appendChild(dollarSpan);

  // Create spans for each digit and comma
  for (var i = 0; i < newAmount.length; i++) {
    var charSpan = document.createElement("span");
    charSpan.textContent = newAmount[i];
    charSpan.style.width = ".91ch"; // Set the fixed width for each digit using 'ch' unit
    charSpan.style.display = "inline-block"; // Ensure consistent layout
    charSpan.style.textAlign = "center"; // Center align the content

    if (newAmount[i] === "," || newAmount[i] === ".") {
      charSpan.style.fontSize = ".8em"; // Adjust the font size for commas and decimal point
         charSpan.style.width = ".5ch"; 
    }

    if(i > newAmount.length - 4)
    {
      charSpan.style.fontSize = ".785em";
    }

    moneyElement.appendChild(charSpan);
  }
}, 1000 / speed);

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
var increaseNumber = bezosIncrease;

function reseter() {
  begSeconds = new Date().getTime();
}
