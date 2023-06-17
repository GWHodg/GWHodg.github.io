		function popupERA(myERA, windowname) {
			if (! window.focus)return true;
			window.open('', windowname, 'height=650,width=850,scrollbars=yes');
			myERA.target=windowname;
			return true;
		}

		function openNav() {
			  document.getElementById("mySidenav").style.width = "250px";
		}
		
		function closeNav() {
			document.getElementById("mySidenav").style.width = "0";
		}	

			function showmenu(elmnt) { 
				document.getElementById(elmnt).style.visibility="visible" 
			} 
			function hidemenu(elmnt) { 
				document.getElementById(elmnt).style.visibility="hidden" 
			} 
			
	function hideTIP() {
		document.getElementById("musicCONTENT").style.visibility="hidden";
	}
	function showTIP(topic) {
		if (topic=="tipMUSIC") {
			document.getElementById("musicCONTENT").style.visibility="visible";
		}
	}
	
	/*	---------------------------------------------------------------------	*/

	//var CURRENTarray = new Array();
	var HELPcontents = new Array();
	var TOPICSarray = new Array();
	function readXPT2() {
		HELPcontents.length = 0;
		TOPICSarray.length = 0;

		showHELP();
			/* var file = prompt("Enter file to open:\n \t $CODE/xDet_Jul27.xml \n\tzMISC/zS4txtB_Sep04.txt \nzMISC/zcsvWH_Sep01.xml","$CODE/xDet_Jul27.xml"); */
		var file="Help21.xml";		//"zMISC/zcsvWH_Sep01.xml";		
						
		var xmlhttp, xmlDoc;
		xmlhttp = new XMLHttpRequest();
			//xmlhttp.open("GET", "xmlCURRENT.xml", false);
		xmlhttp.open("GET", file, false);

		xmlhttp.send();
		xmlDoc = xmlhttp.responseXML;

		//var CURRENTarray = new Array();
		var tags = xmlDoc.getElementsByTagName('*');
/*		for (var i = 0; i < tags.length; i++) {
					//if (tags[i].nodeName != "player" && tags[i].nodeName != "bluejays") {
			CURRENTarray.push(tags[i].firstChild.nodeValue);
		}		
		alert("'Help21.xml' FILE Array ('"+file+"'):\n\n"+CURRENTarray);	
*/		
		//var TOPICSarray = new Array();
		for (var i = 0; i < tags.length; i++) {
			if (tags[i].nodeName == "title") {
				TOPICSarray.push(tags[i].firstChild.nodeValue);
			}
		}		
			//alert("TOPICSarray ('"+file+"'):\n\n"+TOPICSarray);	
			/* for (var i = 0; i < TOPICSarray.length; i++) {
				alert("topic "+(i+1)+" is " + TOPICSarray[i]);
			} */		
			//var selectTOPIC = prompt("Enter topic to open:\n \t ??",TOPICSarray[2]); 
			
		for (var i = 0; i < tags.length; i++) {
			if (tags[i].nodeName == "detail") {
				HELPcontents.push(tags[i].firstChild.nodeValue);
			}
		}
		
		//i = 0;
		var topicLIST = " ";	// = "1. ";
		for (var i = 0; i < TOPICSarray.length; i++) {
			topicLIST =topicLIST + (i+1) + " " + TOPICSarray[i] + "\n";
		}
		//alert("topicLIST:\n\n" + topicLIST);
		
		document.getElementById("HELPtopics").innerHTML = topicLIST;
		//var HELPdivCONTENT = document.getElementById("HELPdiv").textContent;
		//document.getElementById("HELPdiv").innerHTML = HELPdivCONTENT + "<br>" + topicLIST;
		
	}

	function selectTopic() {
		var topicNO = document.getElementById("TopicSelect").value;
		//alert("You selected topic # " + topicNO);
		// covert 8 to number:
		topicINT = Number(topicNO)-1;
		//alert("topicINT = '"+topicINT+ "'!");
		document.getElementById("HELPcontent").value = TOPICSarray[topicINT] + ":\n\t" + HELPcontents[topicINT];
			//document.getElementById("HELPfile").value = "zMISC/Help21.xml";
	}	
		
			/*	======================================================	*/

	function showHELP() {
		if ( document.getElementById("HELPdiv").style.left == "-999em" ) {		//"73em" ) {
			document.getElementById("HELPdiv").style.left="980px";
			document.getElementById("HELPdiv").style.top="60px";
			document.getElementById("HELPdiv").style.width="280px";	//"370px";
			document.getElementById("HELPfile").value = "Help21.xml";
			document.getElementById("MENUhelp").textContent="Hide Help";
		}
		else { 
			document.getElementById("HELPdiv").style.left="-999em"; 
			document.getElementById("MENUhelp").textContent="HELP!";
		}	
	}
	function hideHELP() { 
		document.getElementById("HELPdiv").style.left="-999em"; 
		document.getElementById("MENUhelp").textContent="HELP!";
	}	 



	
	function hideEEYORE() { 
		//document.getElementById("EEYOREdiv").style.left="-999em"; 
		if ( document.getElementById("EEYOREdiv").style.left == "-999em" ) {
			document.getElementById("EEYOREdiv").style.left="850px";
			document.getElementById("EEYOREdiv").style.top="700px";
					//document.getElementById("HELPdiv").style.width="600px";	//"370px";
					//document.getElementById("HELPfile").value = "Help21.xml";
			document.getElementById("MENUeeyore").textContent="Hide Eeyore";
		}
		else { 
			document.getElementById("EEYOREdiv").style.left="-999em";
			document.getElementById("MENUeeyore").textContent="Show Eeyore"; 
		}			
	}	

//SERVICE WORKER
	 /* DISABLED/ENABLED SERVICE WORKER CODE FOR TESTING NEW CODE IN THIS VERSION !!!!*/


  if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/WaltStuffsw.js')
             .then(function() { console.log('Service Worker Registered'); });
			alert('Service Worker Registered!'); navigator.storage.estimate().then(function(estimate) {
  //document.getElementById("percent").value =
    //  (estimate.usage / estimate.quota * 100).toFixed(2);
  });//end storageManagerEstimate	
  
		 }//end if service worker
	//StorageManager.estimate()..https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate
	
	if(!navigator.serviceWorker) {
	console.log('You are not running in Safari!');
	//document.getElementById("percent").value = '(Not running in Safari so not able to return )';
}//end if not! service worker
	
	//what about the manifest file? triggered by oninstall? A2HS?	 
//If the service worker API is supported in the browser, it is registered against the site using the ServiceWorkerContainer.register() method. Its contents reside in the sw.js file, and can be executed after the registration is successful. It's the only piece of Service Worker code that sits inside the app.js file; everything else that is Service Worker-specific is written in the sw.js file itself.
//END OF DISABLED SERVICE WORKER !!!*/

	
	//SERVICE WORKER

/* +++++++++++++++++++++++ ADDED BY DOUG ^ ++++++++++++++++++++++++++++++++++++++ */	

	
	function elmerEGG() {
		//alert("Eeyore rules!");
	document.getElementById("EEYOREdiv").style.left="850px"; 
	}	

	function showTOPICS() {
		//alert("MENUtopics textContent = "+document.getElementById("MENUtopics").textContent);
		if (document.getElementById("MENUtopics").textContent=="Hide Topics") {
			document.getElementById("ACDNdiv").style.display="none"; //inline 	
			document.getElementById("MENUtopics").textContent="Show Topics";
		}		
		else {	//(document.getElementById("ACDNdiv").style.display="none") {
			document.getElementById("ACDNdiv").style.display="block"; //inline 	
			document.getElementById("MENUtopics").textContent="Hide Topics";
		}
		
	}
	
	function showPIANO() {
		//alert("MENUtopics textContent = "+document.getElementById("MENUtopics").textContent);
		if (document.getElementById("MENUpianoIFRAME").textContent=="Hide Piano") {
			document.getElementById("PIANOdiv").style.display="none"; //inline 	
			document.getElementById("MENUpianoIFRAME").textContent="Show Piano";
		}		
		else {	//(document.getElementById("ACDNdiv").style.display="none") {
			document.getElementById("PIANOdiv").style.display="block"; //inline 	
			document.getElementById("MENUpianoIFRAME").textContent="Hide Piano";
		}
		
	}
	
	
	function showCHAT() {
		//alert("MENUtopics textContent = "+document.getElementById("MENUtopics").textContent);
		if (document.getElementById("MENUchat").textContent=="Hide Chat") {
			document.getElementById("CHATdiv").style.display="none"; //inline 	
			document.getElementById("MENUchat").textContent="Show Chat";
		}		
		else {	//(document.getElementById("ACDNdiv").style.display="none") {
			document.getElementById("CHATdiv").style.display="block"; //inline 	
			document.getElementById("MENUchat").textContent="Hide Chat";
		}
		
	}
		
	
			/*		========================		*/
			
	function hideTIP() {
		document.getElementById("miscCONTENT").style.visibility="hidden";
	}			
	function showTIP(topic) {
		if (topic=="tipMISC") {
			document.getElementById("miscCONTENT").style.visibility="visible";
		}
	}	
	
	function hideMENU23() {
		//document.getElementById("miscCONTENT").style.visibility="hidden";
		document.getElementById("menu23").style.visibility="hidden";
	}
	function showMENU23() {
		if (document.getElementById("menu23").style.visibility=="hidden") {	
			//alert("trying to display 'menu23'!");
			document.getElementById("menu23").style.visibility="visible";
				/* document.getElementById("menu23").style.display="block"; */		 //inline 	
		}		
	}
	
						/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
						
	function showGS() {
		//alert("MENUtopics textContent = "+document.getElementById("MENUtopics").textContent);
		if (document.getElementById("GScard").textContent=="Hide GS") {
			document.getElementById("GSdiv").style.display="none"; //inline 	
			document.getElementById("GScard").textContent="Show GS";
		}		
		else {	//(document.getElementById("ACDNdiv").style.display="none") {
			document.getElementById("GSdiv").style.display="block"; //inline 	
			document.getElementById("GScard").textContent="Hide GS";
		}
		
	}						