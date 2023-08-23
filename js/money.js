speed = 10;

bezosIncrease = 1636.01;
gatesIncrease = 538.99;
muskIncrease = 2511.09;
zuckIncrease = 1896.00;
toppointIncrease = 0.10185434369 ;
toponeIncrease = 0.02611804058;
avgAmericanIncrease = 0.00192057704;
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
  dollarSpan.style.color = "#196619";
  dollarSpan.style.marginRight = "11px"; // Add some spacing
  dollarSpan.style.fontSize = ".7em";
 dollarSpan.style.transform = "translateY(-10%)"; // Move up by 50% of its own height
  dollarSpan.style.position = "relative"; // Ensure transform works as intended
  dollarSpan.style.display = "inline-block"; 
  dollarSpan.style.textShadow = "-7px 3px 20px #00ff30cf, -4px 3px 1px #20ff00;";
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
}
