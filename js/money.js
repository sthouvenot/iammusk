speed = 10;

// Per-second figures, updated June 16, 2026.
// Billionaires: total net worth (Bloomberg Billionaires Index) divided by
// their working life in seconds — i.e. (age - 18) * 31,536,000. This is a
// lifetime-average accrual rate, so it's immune to one-off events like an
// IPO. Income tiers: annual income / 31,536,000.
// See README.md for the exact figures and sources.
bezosIncrease = 192.42;   // $267B / (44 working yrs)
muskIncrease = 1118.65;   // $1.27T / (36 working yrs)
zuckIncrease = 302.56;    // $229B / (24 working yrs)
swiftIncrease = 3.52;     // $2B (Forbes) / (18 working yrs)
toppointIncrease = 0.10504480;
toponeIncrease = 0.02536783;
avgAmericanIncrease = 0.00211257;
avgMinimumWage = 0.00047812301;

var begSeconds = new Date().getTime();

var savedIncrease = 0; //incase of overflow;
var x = setInterval(function() {
  var newSeconds = new Date().getTime();
  var difference = (newSeconds - begSeconds) / 1000;
  newAmount = difference * increaseNumber;
  amountLarge = false;
  amountSmall = false;

  if (/Android|webOS|iPhone|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
    if(newAmount > 9999999)
  {
    amountLarge = true;
  }
}

if(newAmount < 99.99)
{
  amountSmall = true;
}
  newAmount = newAmount.toFixed(2);
  newAmount = numberWithCommas(newAmount);

  var moneyElement = document.getElementById("money");

  // Clear the content of moneyElement
  moneyElement.innerHTML = "";

  // Create a span for the dollar sign
  var dollarSpan = document.createElement("span");
  dollarSpan.textContent = "$";
  dollarSpan.style.color = "#ffce4d";
  dollarSpan.style.marginRight = "11px"; // Add some spacing
  dollarSpan.style.fontSize = ".7em";
 dollarSpan.style.transform = "translateY(-10%)"; // Move up by 50% of its own height
  dollarSpan.style.position = "relative"; // Ensure transform works as intended
  dollarSpan.style.display = "inline-block"; 
  dollarSpan.style.textShadow = "1px 2px 7px rgba(0,35,10,0.55)";
  moneyElement.appendChild(dollarSpan);

  if(amountLarge)
  {
    dollarSpan.style.fontSize = ".4em";
  }

  // Create spans for each digit and comma
  for (var i = 0; i < newAmount.length; i++) {
    var charSpan = document.createElement("span");
    charSpan.textContent = newAmount[i];
    charSpan.style.width = ".91ch"; // Set the fixed width for each digit using 'ch' unit
    charSpan.style.display = "inline-block"; // Ensure consistent layout
    charSpan.style.textAlign = "center"; // Center align the content
    
    if(amountLarge)
    {
      charSpan.style.fontSize = ".8em"; 
    }

    if (newAmount[i] === "," || newAmount[i] === ".") {
         charSpan.style.fontSize = ".8em"; // Adjust the font size for commas and decimal point
         charSpan.style.width = ".5ch"; 

      
    }

    if(i > newAmount.length - 4)
    {
      charSpan.style.fontSize = ".35em";
      if(amountSmall)
      {
              charSpan.style.fontSize = "1em";
      }
  
        if(amountLarge)
         {
            charSpan.style.fontSize = ".3em"; 
         }
    }

    moneyElement.appendChild(charSpan);
  }
}, 1000 / speed);

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
var increaseNumber = muskIncrease;

function reseter() {
  begSeconds = new Date().getTime();
  // Spin the button as visual feedback that the reset fired.
  var btn = document.querySelector(".topRight");
  if (btn) {
    btn.classList.remove("spinning");
    void btn.offsetWidth; // force reflow so the animation restarts every click
    btn.classList.add("spinning");
  }
}
