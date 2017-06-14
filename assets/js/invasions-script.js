console.log("don't look at me");

function reloader() {
	$.getJSON('https://opdessertstorm.com/api/invasions', callback); //define json to pull data from
	function callback(data) {
        var target = $("div.row"); //write to <div class="row">
        target.empty();
        var timeNow = Math.round(new Date().getTime()/1000);
		$.each(data.invasions, function(key, val) {
			target.append('<div class="col-lg-6 col-xs-12 col-md-12"><div class="invasion-container">' + '<h2 class="invasion-district">' + key + '</h2><b>' + val.type + '</b><br><b>' + val.remaining + '/' + val.total + '</b><br>' + Math.round((30 - ([timeNow - val.began]) / 60)) + ' minutes remaining </div></div>' ); //retrieve info from json, display as html
		});
	}
	setTimeout(reloader, 15000);
}

$(document).ready(function() {
	reloader();
});
