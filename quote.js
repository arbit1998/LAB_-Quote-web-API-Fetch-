window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	

   });
});

// TODO: Modify to use Fetch API
async function fetchQuotes(topic, count) {


let url = "https://wp.zybooks.com/quotes.php?" + "topic=" +topic + "&" + "count=" + count;
let response = await fetch(url);
let responseData = await response.json();

let responseDataCount = 0;
let html = "<ol>";

if (Array.isArray(responseData)) {

   for (let c = 1; c <= count; c++) {
      html += "<li>" + responseData[responseDataCount].quote + " - " + responseData[responseDataCount].source + "</li>"
      responseDataCount += 1;
}
html += "</ol>";

document.querySelector("#quotes").innerHTML = html;
      
}
else {
   html = responseData.error;

   document.querySelector("#quotes").innerHTML = html;
}

}

