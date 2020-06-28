function formAlert(textbox) {

  if (textbox.value === '') {
    document.getElementById("alert").style.visibility = "visible";
    document.getElementById("alert-text").style.visibility = "visible";
    textbox.setCustomValidity('');
  } else if (textbox.validity.typeMismatch) {
    document.getElementById("alert").style.visibility = "visible";
    document.getElementById("alert-text").style.visibility = "visible";
    textbox.setCustomValidity('');
  } else {
    textbox.setCustomValidity('');
  }

  return true;
}
