// Function to generate Fibonacci series up to a given number of terms
function generateFibonacciSeries(numTerms1) {
  var fibonacciSeries = [];
  var a = 0,
    b = 1;

  for (var i = 0; i < numTerms1; i++) {
    fibonacciSeries.push(a);
    var temp = a;
    a = b;
    b = temp + b;
  }

  return fibonacciSeries;
}

// Function to display Fibonacci series on HTML page
document.getElementById("btn").addEventListener("click", function () {
  var numTerms = document.getElementById("t1").value; // Move this line inside the function
  var fibonacciSeries = generateFibonacciSeries(numTerms);
  //var output = "Fibonacci Series: ";
  //output += fibonacciSeries.join(", ");
  document.getElementById("fibonacciSeries").innerHTML =
    "Fibonacci Series: " + fibonacciSeries;
});
