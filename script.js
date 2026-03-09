function searchWeb() {
  var query = document.getElementById("searchBox").value;
  var url = "https://www.google.com/search?q=" + encodeURIComponent(query);
  window.location.href = url;
}

document.getElementById("searchBox").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    searchWeb();
  }
});
