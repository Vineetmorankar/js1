var alertShown = false; // Flag to check if alert has been shown

function userid_validation(mx, my) {
  var uid = document.registration.userid;
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    if (!alertShown) {
      alert(
        "User Id should not be empty / length be between " + mx + " to " + my
      );
      alertShown = true; // Set flag to true
    }
    uid.focus(); // Keep focus on the same field
    return false;
  }
  alertShown = false; // Reset flag if validation succeeds
  return true;
}

function passid_validation(mx, my) {
  var passid = document.registration.passid;
  var passid_len = passid.value.length;
  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
    if (!alertShown) {
      alert(
        "Password should not be empty / length be between " + mx + " to " + my
      );
      alertShown = true; // Set flag to true
    }
    passid.focus(); // Keep focus on the same field
    return false;
  }
  alertShown = false; // Reset flag if validation succeeds
  return true;
}

function allLetter() {
  var uname = document.registration.username;
  var letters = /^[A-Za-z]+$/;
  if (!uname.value.match(letters)) {
    if (!alertShown) {
      alert("Username must have alphabet characters only");
      alertShown = true; // Set flag to true
    }
    uname.focus(); // Keep focus on the same field
    return false;
  }
  alertShown = false; // Reset flag if validation succeeds
  return true;
}

function alphanumeric() {
  var uadd = document.registration.address;
  var letters = /^[0-9a-zA-Z]+$/;
  if (!uadd.value.match(letters)) {
    if (!alertShown) {
      alert("User address must have alphanumeric characters only");
      alertShown = true; // Set flag to true
    }
    uadd.focus(); // Keep focus on the same field
    return false;
  }
  alertShown = false; // Reset flag if validation succeeds
  return true;
}

function countryselect() {
  var ucountry = document.registration.country;
  if (ucountry.value == "Default") {
    if (!alertShown) {
      alert("Select your country from the list");
      alertShown = true; // Set flag to true
    }
    ucountry.focus(); // Keep focus on the same field
    return false;
  }
  alertShown = false; // Reset flag if validation succeeds
  return true;
}

function allnumeric() {
  var uzip = document.registration.zip;
  var numbers = /^[0-9]+$/;
  if (!uzip.value.match(numbers)) {
    if (!alertShown) {
      alert("ZIP code must have numeric characters only");
      alertShown = true; // Set flag to true
    }
    uzip.focus(); // Keep focus on the same field
    return false;
  }
  alertShown = false; // Reset flag if validation succeeds
  return true;
}

function ValidateEmail() {
  var uemail = document.registration.email;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!uemail.value.match(mailformat)) {
    if (!alertShown) {
      alert("You have entered an invalid email address!");
      alertShown = true; // Set flag to true
    }
    uemail.focus(); // Keep focus on the same field
    return false;
  }
  alertShown = false; // Reset flag if validation succeeds
  return true;
}

function validateForm(event) {
  if (!userid_validation(5, 12)) {
    event.preventDefault(); // Prevent form submission
    return false;
  }
  if (!passid_validation(7, 12)) {
    event.preventDefault(); // Prevent form submission
    return false;
  }
  if (!allLetter()) {
    event.preventDefault(); // Prevent form submission
    return false;
  }
  if (!alphanumeric()) {
    event.preventDefault(); // Prevent form submission
    return false;
  }
  if (!countryselect()) {
    event.preventDefault(); // Prevent form submission
    return false;
  }
  if (!allnumeric()) {
    event.preventDefault(); // Prevent form submission
    return false;
  }
  if (!ValidateEmail()) {
    event.preventDefault(); // Prevent form submission
    return false;
  }
  return true;
}

function firstfocus() {
  document.registration.userid.focus();
}
