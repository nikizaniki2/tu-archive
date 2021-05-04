function accept()
{
//document.cookie = "accept=y;secure";
document.getElementById("cookID").style.display = "none";
setCookie("accept","y",365)
}

function check() {
	var check = document.cookie;
	if(check.includes("accept=y")){
	}
	else {
	document.getElementById("cookID").style.display = "block";
	}
}

function setCookie(c_name,c_value,exdays) {
   var exdate=new Date();
   exdate.setDate(exdate.getDate() + exdays);
   document.cookie=encodeURIComponent(c_name) 
     + "=" + encodeURIComponent(c_value)
     + (!exdays ? "" : "; expires="+exdate.toUTCString());
     ;
}