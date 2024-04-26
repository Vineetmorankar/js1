let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let inputField = document.querySelector("input");

    if (
      inputField.value.length >= 20 &&
      e.target.innerHTML !== "AC" &&
      e.target.innerHTML !== "X"
    ) {
      alert("Input limit reached!");
      return;
    }

    if (e.target.innerHTML === "=") {
      try {
        string = eval(string);
        if (!isFinite(string)) {
          throw new Error("Invalid operation");
        }
        document.querySelector("input").value = string;
      } catch (error) {
        alert("Invalid operation");
        document.querySelector("input").value = "Invalid";
        string = "";
      }
    } else if (e.target.innerHTML === "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML === "X") {
      string = string.slice(0, string.length - 1);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML === "sin") {
      string = Math.sin(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML === "cos") {
      string = Math.cos(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML === "tan") {
      string = Math.tan(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML === "log") {
      string = Math.log(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML === "sqrt") {
      string = Math.sqrt(string);
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
