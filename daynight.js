document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      document.body.style.backgroundColor = "#E6E6E6";
      document.getElementById("title").style.color = "#1A1A1A";
      document.getElementById("BodyText").style.color = "#1A1A1A";

      console.log('Checked');
    } else {
      document.body.style.backgroundColor = "#1A1A1A";
      document.getElementById("title").style.color = "#E6E6E6";
      document.getElementById("BodyText").style.color = "#E6E6E6";
      

      console.log('Not checked');
    }
  });
});