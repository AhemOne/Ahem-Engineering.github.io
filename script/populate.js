function populateDiv(div, data) {
  div.innerHTML = 
    '<div><b>datasheet:</b>&nbsp;<a href="' + data.datasheet[0].url + '">' + data.datasheet[0].author + "</a></div>" +
    '<div><b>library:</b>&nbsp;<a href="' + data.library[0].url + '">' + data.library[0].author + "</a></div>";
}
