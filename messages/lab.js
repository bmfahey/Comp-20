function parse() {
	http_request = new XMLHttpRequest();

http_request.open("GET", "./data.json", true);
http_request.onreadystatechange = function() {
			if (http_request.readyState == 4 && http_request.status == 200) {
				result = "";
				raw = http_request.responseText;
				allMessages = JSON.parse(raw);
				elem = document.getElementById("messages");
				for (i = 0; i < allMessages.length; i++) {
					result += "<p><span id = 'background'>" + allMessages[i].username + ": " + allMessages[i].content + "</span></p>";
				}
				elem.innerHTML = result;
			}
			else if (http_request.readyState == 4 && http_request.status != 200) {
				document.getElementById("messages").innerHTML = "<p> Sorry, error! </p>";
			}
		};
		http_request.send(null);
}