function getStylesheet() {
  var currentTime = new Date().getHours();
  console.log(currentTime);
  if (6 <= currentTime&&currentTime < 18) {
    document.write("<link rel='stylesheet' href='day.css' type='text/css'>");
  } else {
    document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
  }
}
getStylesheet();
