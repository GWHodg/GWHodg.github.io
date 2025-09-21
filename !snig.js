/* !snig.js (formally 'gsJSidx3.js' > !gs63.js) [6 = 6th month (June); 3 = '(2)3] */
	const PLAYwk0 = []; const PLAYwk1 = []; const PLAYwk2 = [];  const PLAYwk3 = [];  const PLAYwk4 = [];
	var PLAYwk0str; var PLAYwk1str; var PLAYwk2str; var PLAYwk3str; var PLAYwk4str;    //PLAYwk4str = PLAYwk4
	var sflWK;
	var wk0Date; var wk1Date; var wk2Date; var wk3Date; var wk4Date;
//How to save a javascript variable:
  localStorage.setItem("mykey",99); // set a variable
  var varNumber = localStorage.getItem("mykey"); // retrieve variable
  let prevIPT = "TDp1h1";   
 
//SERVICE WORKER
	 /* DISABLED/ENABLED SERVICE WORKER CODE FOR TESTING NEW CODE IN THIS VERSION !!!!*/
  if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/SnigStuffsw.js')
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

	function clearFFx() {
		alert("To clear your data on Firefox for Android, go to Settings via the three dots icon. Here, scroll down to Delete browsing data. You'll then be given a list of items you can choose to delete including Open tabs, Browsing history, Cookies and site data, Cached images and files, Site permissions and, finally, Downloads.");
	}
	
	function openNav() {
		  if (document.getElementById("mySidenav").style.width<"200px") {
				document.getElementById("mySidenav").style.width = "600px";
				//document.getElementById("mySidenav").style.overflow = "scroll";
		  }
		  else {
			 	document.getElementById("mySidenav").style.width = "0px"; 
		  }
	}	
	function closeNav() {
		document.getElementById("mySidenav").style.width = "0px";
	}		
	
	function emails() {
		alert("dbpengelly@gmail.com, jas@uvic.ca, abbuck@shaw.ca, tp70connolly@gmail.com, therad@shaw.ca, charlesmed@shaw.ca, evan@evanhazell.com, geofffield@shaw.ca, cathyhodgins2@gmail.com, pmkuechler@gmail.com, jmccr99@gmail.com, gportermd@gmail.com, jwdutton@telus.net, gmharris@hotmail.com, shaynej@shaw.ca, nigelbailey@shaw.ca, dave.pianoman@gmail.com");
	}
	
						/*   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   */
	
function PLAYwk(pl,pNO,wk) {
	if ( freeze != "y" ) {
		/*
		var locStorWK0str = localStorage.getItem("lsWK0");
		var locStorWK1str = localStorage.getItem("lsWK1");
		var locStorWK2str = localStorage.getItem("lsWK2");
		let concatWKstr = locStorWK0str.concat(",",locStorWK1str,",",locStorWK2str);
		alert("In 'PLAYwk' fn!\n\n"+
			  "'locStorWK2str' fr locStor = "+locStorWK2str+"\n"+
			  "'locStorWK1str' fr locStor = "+locStorWK1str+"\n"+
			  "'locStorWK0str' fr locStor = "+locStorWK0str+"\n\n"+
			  "'concatWKstr' = "+concatWKstr);
		*/
		
		
		if ( document.getElementById("G"+pNO+"wk"+wk).style.background == "lime" ) {
			//alert(pl+" is NOT playing wk "+wk+"!");
			document.getElementById("G"+pNO+"wk"+wk).style.background = "slategray";	
			localStorage.setItem("G"+pNO+"playWK"+wk,"");
			
			if ( wk==1 ) {
				//alert("PLAYwk1 array includes "+pl+". Will REMOVE from array!");
				var index = PLAYwk1.indexOf(pl);		//alert("index of "+pl+" = "+index+"\nPLAY = "+PLAYwk1);
				PLAYwk1.splice(index, 1);				/* <<< HELP! (July 15/23 */		// < **!
				//alert("Post splice PLAYwk1 = "+PLAYwk1);
				PLAYwk1str = PLAYwk1.toString();
				localStorage.setItem("lsWK1",PLAYwk1str);
			}	
			if ( wk==0 ) { var index = PLAYwk0.indexOf(pl);	PLAYwk0.splice(index, 1); PLAYwk0str = PLAYwk0.toString(); localStorage.setItem("lsWK0",PLAYwk0str);}	
			if ( wk==2 ) { var index = PLAYwk2.indexOf(pl);	PLAYwk2.splice(index, 1); PLAYwk2str = PLAYwk2.toString(); localStorage.setItem("lsWK2",PLAYwk2str);}	
			if ( wk==3 ) { var index = PLAYwk3.indexOf(pl);	PLAYwk3.splice(index, 1); PLAYwk3str = PLAYwk3.toString(); localStorage.setItem("lsWK3",PLAYwk3str);}
			if ( wk==4 ) { var index = PLAYwk4.indexOf(pl);	PLAYwk4.splice(index, 1); PLAYwk4str = PLAYwk4.toString(); localStorage.setItem("lsWK4",PLAYwk4str);}
		}
		else { 
			//alert(pl+" is playing wk "+wk+"!");
			document.getElementById("G"+pNO+"wk"+wk).style.background = "lime"; 
			localStorage.setItem("G"+pNO+"playWK"+wk,pl);
			
			if ( wk == 1 ) {
				PLAYwk1.push(pl); 			//alert("PLAY array = "+PLAY);
				//alert("'PLAYwk1' array = "+PLAYwk1);
				PLAYwk1str = PLAYwk1.toString();
				//lastARRAY = LASTstring.split(",");
				//localStorage.setItem("lsWK1",PLAYwk1str);
				
			}
			if ( wk == 0 ) { PLAYwk0.push(pl); /*alert("'PLAYwk0' array = "+PLAYwk0);*/ PLAYwk0str = PLAYwk0.toString(); /*localStorage.setItem("lsWK0",PLAYwk0str);*/ }
			if ( wk == 2 ) { PLAYwk2.push(pl); /*alert("'PLAYwk2' array = "+PLAYwk2);*/ PLAYwk2str = PLAYwk2.toString(); /*localStorage.setItem("lsWK2",PLAYwk2str);*/ }
			if ( wk == 3 ) { PLAYwk3.push(pl); /*alert("'PLAYwk3' array = "+PLAYwk3);*/ PLAYwk3str = PLAYwk3.toString(); }
			if ( wk == 4 ) { PLAYwk4.push(pl); /*alert("'PLAYwk4' array = "+PLAYwk4);*/ PLAYwk4str = PLAYwk4.toString(); }
		}		

	}		
		
}
	
	function locStor() {
		/* alert("localStorage:\n\n"+
			  "lS 'G3wk0' = "+localStorage.getItem('G3playWK0')+
			  "\nlS 'G1wk3' = "+localStorage.getItem('G1playWK3')+
			  "\n\nG1wk1: "+localStorage.getItem('G1playWK1')+" | G2wk1: "+localStorage.getItem('G2playWK1')+" | G3wk1: "+localStorage.getItem('G3playWK1')+" | G4wk1: "+localStorage.getItem('G4playWK1')+" | G5wk1: "+localStorage.getItem('G5playWK1') ); */
			  		
/*		for (let i = 1; i < 6; i++) {	  
			if ( localStorage.getItem('G'+i+'playWK1') !== "" ) {
				document.getElementById("G"+i+"wk1").style.background = "green";
			}
		}
*/	
		for (let w = 0; w < 5; w++) {	  
			for (let i = 1; i < 17; i++) {	  
				if ( (localStorage.getItem('G'+i+'playWK'+w) != "") &&  (localStorage.getItem('G'+i+'playWK'+w) != null) ) {
					document.getElementById("G"+i+"wk"+w).style.background = "green";
				}
			}
		}

		document.getElementById("mySidenav").style.width = "0px";
		
		
		var curWK = localStorage.getItem("PRIMEwk");
		document.getElementById("w"+curWK).style.background="orange"; 
		
		
		
		
		
		/*alert("in 'locStor' fn:\n\n"+
			  "LSawyW0 = "+localStorage.getItem("LSawyW0")+"\n\n"+
			  "LSawyW1 = "+localStorage.getItem("LSawyW1")+"\n"+
			  "LSawyW2 = "+localStorage.getItem("LSawyW2")+"\n"+
			  "LSawyW3 = "+localStorage.getItem("LSawyW3")+"\n"+
			  "LSawyW4 = "+localStorage.getItem("LSawyW4")); */
		const awW0array = localStorage.getItem("LSawyW0").split(",");
		const awW1array = localStorage.getItem("LSawyW1").split(",");
		const awW2array = localStorage.getItem("LSawyW2").split(",");
		const awW3array = localStorage.getItem("LSawyW3").split(",");
		const awW4array = localStorage.getItem("LSawyW4").split(",");
		//alert("awW1array = "+ awW1array);
		//document.getElementById('G'+selPL+'wk'+w).style.background = 'ivory';  //G12wk1
			var awy1Len = awW1array.length;
				//alert("awy1Len (in locStor fn) = "+awy1Len);
			//if (awy1Len>1) {
			if (awW1array.length!=0) {	
				for (let a = 1; a < awy1Len; a++) {
						/*alert("awy1Len (in locStor fn) = "+awy1Len+"\n"+
						      "getElementById('G'+awW1array[a]+'wk1') = " + 'G'+awW1array[a]+'wk1');*/
						
						if (awW1array[a]!="") {	  
							document.getElementById("G"+awW1array[a]+"wk1").style.background = 'ivory';  //G12wk1	
							document.getElementById("G"+awW1array[a]+"wk1").onclick = function(){alert("Input frozen!");}	
							
							//document.getElementById("G"+awW1array[a]+"wk1").setAttribute('readonly', 'true'); 		// << *
							//document.getElementById("G"+awW1array[a]+"wk1").setAttribute.readOnly = true;		
							//document.getElementById("G"+awW1array[a]+"wk1").readOnly = true;		
							//document.getElementById("G"+awW1array[a]+"wk1").style.opacity = "50%";
							//document.getElementById("G"+awW1array[a]+"wk1").onclick = function(){alert("Input frozen!");}	
							
							
						}
						
				}
			}				
			var awy0Len = awW0array.length; //alert("awy0Len (in locStor fn) = "+awy0Len);
			//if (awy0Len>1) {	
			if (awW0array.length!=0) {			
				for (let a = 1; a < awy0Len; a++) {
					if (awW0array[a]!="") {	  	
						document.getElementById("G"+awW0array[a]+"wk0").style.background = 'ivory';  
						document.getElementById("G"+awW0array[a]+"wk0").onclick = function(){alert("Input frozen!");}
					}
				}	
			}
			var awy2Len = awW2array.length;
			//if (awy2Len>1) {
			if (awW2array.length!=0) {				
				for (let a = 1; a < awy2Len; a++) {
					if (awW2array[a]!="") {	  	
						document.getElementById("G"+awW2array[a]+"wk2").style.background = 'ivory';  // <<< ** 
						document.getElementById("G"+awW2array[a]+"wk2").onclick = function(){alert("Input frozen!");}
					}
				}
			}
			var awy3Len = awW3array.length;
			//if (awy3Len>1) {
			if (awW3array.length!=0) {	
				for (let a = 1; a < awy3Len; a++) {
					if (awW3array[a]!="") {	  
						document.getElementById("G"+awW3array[a]+"wk3").style.background = 'ivory';  
						document.getElementById("G"+awW3array[a]+"wk3").onclick = function(){alert("Input frozen!");}
					}
				}
			}		
			var awy4Len = awW4array.length; //alert("awy4Len (in locStor fn) = "+awy4Len);
			//if (awy4Len>1) {	
			if (awW4array.length!=0) {			
				for (let a = 1; a < awy4Len; a++) {
					if (awW4array[a]!="") {	  
						document.getElementById("G"+awW4array[a]+"wk4").style.background = 'ivory'; 
						document.getElementById("G"+awW4array[a]+"wk4").onclick = function(){alert("Input frozen!");}	
					}
				}	
			}				
		
	}
	
	function clearLS() {		
			//alert("G1playWK0 PRE clear = "+localStorage.getItem('G1playWK0'));
			
		  let reply;
		  if (confirm("Are you SURE you want to CLEAR 'localStorage'?") == true) {
		    reply = "YES!";
		  } else {
		    reply = "NO!";
		  }
  		  alert(reply);
			  
		  if ( reply=="YES!") {			  
						var TEMPw0date = localStorage.getItem("w0date");
						var TEMPw1date = localStorage.getItem("w1date");
						var TEMPw2date = localStorage.getItem("w2date");
						var TEMPw3date = localStorage.getItem("w3date");
						var TEMPw4date = localStorage.getItem("w4date");
						var tempPRIMEwk = localStorage.getItem("PRIMEwk");	// *
						var tempNOTE = localStorage.getItem("NOTEchange");	
			    //localStorage.setItem("lastPLAY","");
				localStorage.clear();
						localStorage.setItem("w0date",TEMPw0date); 
						localStorage.setItem("w1date",TEMPw1date); 
						localStorage.setItem("w2date",TEMPw2date); 
						localStorage.setItem("w3date",TEMPw3date); 
						localStorage.setItem("w4date",TEMPw4date); 
						localStorage.setItem("PRIMEwk",tempPRIMEwk); 
						localStorage.setItem("NOTEchange",tempNOTE); 
				//localStorage.removeItem(" ");									// << **
				//alert("G1playWK0 post clear = "+localStorage.getItem('G1playWK0'));
				
				//localStorage.getItem("LSawyW1"); 
				//localStorage.setItem("LSawyW0",appendAWYwk0str); 
				localStorage.setItem("LSawyW0",'0'); localStorage.setItem("LSawyW1",'0'); 
				localStorage.setItem("LSawyW2",'0');  localStorage.setItem("LSawyW3",'0'); 
				localStorage.setItem("LSawyW4",'0'); 
				
				alert("'localStorage' (except week dates & note) have been CLEARED!\n"+
					  "'Away' data also cleared. *");
					  
				location.reload();					  
					  
		  }
	}
	
				/*   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   */
				
	function showNOTE() {
		//alert("Trying to show 'note'!");
		if (document.getElementById("noteTA").style.visibility=="visible") {
			document.getElementById("noteTA").style.visibility="hidden"; 
			//onchange="localStorage.setItem('bkDATE',this.value);"	
				document.getElementById("noteX").style.visibility="hidden"; 
		}		
		else {
			document.getElementById("noteTA").style.visibility="visible"; 
				document.getElementById("noteX").style.visibility="visible"; 
			storedNOTE = localStorage.getItem("NOTEchange");
				//alert("storedNOTE (fr lS) = "+storedNOTE);
			document.getElementById("noteTA").value=storedNOTE;	
		}
		//hideMENU();		
	}
	function hideNOTE() {
			document.getElementById("noteTA").style.visibility="hidden"; 
			document.getElementById("noteX").style.visibility="hidden"; 		
	}
	
	function codeFILES() {
		alert("CODE FILES:\n\n"+
			  "SCORING 'APP':\t*\n"+
			  "'GSidx3' files (Sept/23): !sep23_index.html (= index.html); !sep23_!gs63.css; !sep23_!gs63.js; WaltStuff.webmanifest; WaltStuffsw.js [on iPad @ Files/2021/$CODE/!code23/Elmer23]\n\n"+
			  "BOOKING APP:\nDOCbk24+.html [on iPad @ Files/2021/$GOLF]\n\n"+			  
			  "PIXEL reload/refresh: Hold icon > App info > Storage & cache > Manage space > MANAGE (Site storage) > 'gwhodg.github.io' > Clear & reset"
			  
			  );
	}	
	
	function showSFL() {
		//alert("Trying to show 'tblSFL'!");
		if (document.getElementById("tblSFL").style.visibility=="visible") {
			document.getElementById("tblSFL").style.visibility="hidden"; 
			//onchange="localStorage.setItem('bkDATE',this.value);"	
		}		
		else {
			  sflWK = prompt("Please enter week to shuffle (0-4)", 1);
			  //lsWK2:
			  /*var locStorWK2str = localStorage.getItem("lsWK2");
			  		alert("'locStorWK2str' fr locStor = "+locStorWK2str);*/
			  if (sflWK != null) {
			    //document.getElementById("demo").innerHTML =
			    //"Hello " + person + "! How are you today?";	
		
					//LASTstring = localStorage.getItem("lastPLAY");
					//lastARRAY = LASTstring.split(",");
					//newLASTarray = lastARRAY.slice(1,lastARRAY.length);	
						//LASTstring = LASTstring  + "," + NAME;
						//localStorage.setItem("lastPLAY",LASTstring); //alert("GOT to 'localStorage.setItem'!");
						
				/* alert("sflWK = "+sflWK+"\n"+
					  "'PLAYwk1' array = "+PLAYwk1+"\n"+
					  "'PLAYwk1str' = "+PLAYwk1str); */
			  }
			document.getElementById("tblSFL").style.visibility="visible"; 
			//storedNOTE = localStorage.getItem("NOTEchange");
				//alert("storedNOTE (fr lS) = "+storedNOTE);
			//document.getElementById("tblSFL").value=storedNOTE;	
			
			const SFLwk0 = []; const SFLwk1 = []; const SFLwk2 = []; const SFLwk3 = []; const SFLwk4 = []; 
			for (let i = 1; i < 17; i++) {	  
					if ( (document.getElementById("G"+i+"wk"+sflWK).style.background=="green") || (document.getElementById("G"+i+"wk"+sflWK).style.background=="lime") ) {
						if (sflWK==0) {SFLwk0.push(document.getElementById("G"+i).innerHTML);} 
						if (sflWK==1) {SFLwk1.push(document.getElementById("G"+i).innerHTML);} 
						if (sflWK==2) {SFLwk2.push(document.getElementById("G"+i).innerHTML);} 
						if (sflWK==3) {SFLwk3.push(document.getElementById("G"+i).innerHTML);} 
						if (sflWK==4) {
							SFLwk4.push(document.getElementById("G"+i).innerHTML);
							//alert("got to sflWK = 4! SFLwk4 = "+SFLwk4);
						} 
						//else { alert("Didn't get here!"); }
						//alert("G"+i+"wk2 bkgd is green/lime!");
						//alert("SFLwk2' array = "+SFLwk2);
					}
			}
			//alert("Didn't get here!");
			/* alert("'SFLwk0' array = "+SFLwk0+"\n"+
				  "'SFLwk1' array = "+SFLwk1+"\n"+
				  "'SFLwk2' array = "+SFLwk2+"\n"+
				  "'SFLwk3' array = "+SFLwk3+"\n"+
				  "'SFLwk4' array = "+SFLwk4); */
			if ( sflWK == 0 ) { document.getElementById("WKipt").value = "W0"; }
			if ( sflWK == 1 ) { document.getElementById("WKipt").value = "W1"; }
			if ( sflWK == 2 ) { document.getElementById("WKipt").value = "W2"; }
			if ( sflWK == 3 ) { document.getElementById("WKipt").value = "W3"; }
			if ( sflWK == 4 ) { document.getElementById("WKipt").value = "W4"; }
				  
			/* if ( (SFLwk2[0] != "undefined") && (SFLwk2[0] != null) && (SFLwk2[0] != "") ) {
				document.getElementById("SFL5").innerHTML=SFLwk2[0]; 
			} */

			const PLAYfull = [];
					//alert("PLAY array pre-adjusted = "+PLAY);
			for (let n = 1; n < 17; n++) {
				if ((SFLwk0[n-1] == "AB")||(SFLwk1[n-1] == "AB")||(SFLwk2[n-1] == "AB")||(SFLwk3[n-1] == "AB")||(SFLwk4[n-1] == "AB")) { PLAYfull[n-1] = "Buckley, Alan" }
				if ((SFLwk0[n-1] == "TC")||(SFLwk1[n-1] == "TC")||(SFLwk2[n-1] == "TC")||(SFLwk3[n-1] == "TC")||(SFLwk4[n-1] == "TC")) { PLAYfull[n-1] = "Connolly, Thomas" }
				if ((SFLwk0[n-1] == "JD")||(SFLwk1[n-1] == "JD")||(SFLwk2[n-1] == "JD")||(SFLwk3[n-1] == "JD")||(SFLwk4[n-1] == "JD")) { PLAYfull[n-1] = "Dutton, James W." }
				if ((SFLwk0[n-1] == "GF")||(SFLwk1[n-1] == "GF")||(SFLwk2[n-1] == "GF")||(SFLwk3[n-1] == "GF")||(SFLwk4[n-1] == "GF")) { PLAYfull[n-1] = "Field, Geoffrey" }
				if ((SFLwk0[n-1] == "WH")||(SFLwk1[n-1] == "WH")||(SFLwk2[n-1] == "WH")||(SFLwk3[n-1] == "WH")||(SFLwk4[n-1] == "WH")) { 
						PLAYfull[n-1] = "Hodgins, George W.";
						//document.getElementById("SFL"+(n+1)).style.color = "red"; 
				}
				if ((SFLwk0[n-1] == "SJ")||(SFLwk1[n-1] == "SJ")||(SFLwk2[n-1] == "SJ")||(SFLwk3[n-1] == "SJ")||(SFLwk4[n-1] == "SJ")) { PLAYfull[n-1] = "Jessop, Shayne A." }
				if ((SFLwk0[n-1] == "PK")||(SFLwk1[n-1] == "PK")||(SFLwk2[n-1] == "PK")||(SFLwk3[n-1] == "PK")||(SFLwk4[n-1] == "PK")) { PLAYfull[n-1] = "Kuechler, Peter M." }
				if ((SFLwk0[n-1] == "JM")||(SFLwk1[n-1] == "JM")||(SFLwk2[n-1] == "JM")||(SFLwk3[n-1] == "JM")||(SFLwk4[n-1] == "JM")) { PLAYfull[n-1] = "McCracken, John G." }
				if ((SFLwk0[n-1] == "CM")||(SFLwk1[n-1] == "CM")||(SFLwk2[n-1] == "CM")||(SFLwk3[n-1] == "CM")||(SFLwk4[n-1] == "CM")) { PLAYfull[n-1] = "Medhurst, Charles" }
				if ((SFLwk0[n-1] == "DP")||(SFLwk1[n-1] == "DP")||(SFLwk2[n-1] == "DP")||(SFLwk3[n-1] == "DP")||(SFLwk4[n-1] == "DP")) { PLAYfull[n-1] = "Pengelly, Delmer B." }
				if ((SFLwk0[n-1] == "Pd")||(SFLwk1[n-1] == "Pd")||(SFLwk2[n-1] == "Pd")||(SFLwk3[n-1] == "Pd")||(SFLwk4[n-1] == "Pd")) { PLAYfull[n-1] = "Paulson, David B." }
				if ((SFLwk0[n-1] == "BP")||(SFLwk1[n-1] == "BP")||(SFLwk2[n-1] == "BP")||(SFLwk3[n-1] == "BP")||(SFLwk4[n-1] == "BP")) { PLAYfull[n-1] = "Porter, George R." }
				if ((SFLwk0[n-1] == "WR")||(SFLwk1[n-1] == "WR")||(SFLwk2[n-1] == "WR")||(SFLwk3[n-1] == "WR")||(SFLwk4[n-1] == "WR")) { PLAYfull[n-1] = "Ritchie, William" }
				if ((SFLwk0[n-1] == "JS")||(SFLwk1[n-1] == "JS")||(SFLwk2[n-1] == "JS")||(SFLwk3[n-1] == "JS")||(SFLwk4[n-1] == "JS")) { PLAYfull[n-1] = "Schofield, John A." }
				
				if ((SFLwk0[n-1] == "NB")||(SFLwk1[n-1] == "NB")||(SFLwk2[n-1] == "NB")||(SFLwk3[n-1] == "NB")||(SFLwk4[n-1] == "NB")) { PLAYfull[n-1] = "Bailey, Nigel" }
				if ((SFLwk0[n-1] == "EH")||(SFLwk1[n-1] == "EH")||(SFLwk2[n-1] == "EH")||(SFLwk3[n-1] == "EH")||(SFLwk4[n-1] == "EH")) { PLAYfull[n-1] = "Hazell, Evan" }
			}
			//alert("PLAY array POST-adjusted = "+PLAY);
					
			for (let z = 1; z < 17; z++) {
					document.getElementById("SFL"+z).innerHTML = "";
			}
			/*alert("Will try to SHUFFLE finished player order. Array to shuffle = "+array+"\n\n"+
				  array+" array content = "+PLAY);*/
			
			  //let shuffled = PLAY
			  let shuffled = PLAYfull
			    .map(value => ({ value, sort: Math.random() }))
			    .sort((a, b) => a.sort - b.sort)
			    .map(({ value }) => value)
			  
			//alert("'PLAY' array = "+PLAY+"\n\nNew 'shuffled' array = "+shuffled);	
			var sflLen = shuffled.length;
			for (let q = 0; q < sflLen; q++) {
					document.getElementById("SFL"+(q+1)).innerHTML = shuffled[q];
					
					if (document.getElementById("SFL"+(q+1)).innerHTML == "Hodgins, George W.") {
						document.getElementById("SFL"+(q+1)).style.color = "green";
					}
					else {
						document.getElementById("SFL"+(q+1)).style.color = "black";
					}	
			}		
	//}

	/* =========================================== */			
	
			document.getElementById("mySidenav").style.width = "0px";	//hideMENU();		
			//document.getElementById("tblDATE").style.visibility="hidden";	//display="none";

			
		}

							/*  #################################  */
							
					Date0str = localStorage.getItem("w0date");	  
					Date1str = localStorage.getItem("w1date");	  
					Date2str = localStorage.getItem("w2date");	  
					Date3str = localStorage.getItem("w3date");	  
					Date4str = localStorage.getItem("w4date");
					if ( sflWK == 0 ) { document.getElementById("WKdisp").value =Date0str; }
					if ( sflWK == 1 ) { document.getElementById("WKdisp").value =Date1str; }
					if ( sflWK == 2 ) { document.getElementById("WKdisp").value =Date2str; }
					if ( sflWK == 3 ) { document.getElementById("WKdisp").value =Date3str; }
					if ( sflWK == 4 ) { document.getElementById("WKdisp").value =Date4str; }
		
		
	}
	
	
	function SFL2() {
		//alert("Will try to code shuffle from popup!");
		
			const SFLwk0 = []; const SFLwk1 = []; const SFLwk2 = [];  const SFLwk3 = [];  const SFLwk4 = []; 
			for (let i = 1; i < 17; i++) {	  
					if ( (document.getElementById("G"+i+"wk"+sflWK).style.background=="green") || (document.getElementById("G"+i+"wk"+sflWK).style.background=="lime") ) {
						if (sflWK==0) {SFLwk0.push(document.getElementById("G"+i).innerHTML);} 
						if (sflWK==1) {SFLwk1.push(document.getElementById("G"+i).innerHTML);} 
						if (sflWK==2) {SFLwk2.push(document.getElementById("G"+i).innerHTML);} 
						if (sflWK==3) {SFLwk3.push(document.getElementById("G"+i).innerHTML);} 
						if (sflWK==4) {SFLwk4.push(document.getElementById("G"+i).innerHTML);} 
						//alert("G"+i+"wk2 bkgd is green/lime!");
						//alert("SFLwk2' array = "+SFLwk2);
					}
			}
			/* alert("'SFLwk0' array = "+SFLwk0+"\n"+
				  "'SFLwk1' array = "+SFLwk1+"\n"+
				  "'SFLwk2' array = "+SFLwk2); */
			if ( sflWK == 0 ) { document.getElementById("WKipt").value = "W0"; }
			if ( sflWK == 1 ) { document.getElementById("WKipt").value = "W1"; }
			if ( sflWK == 2 ) { document.getElementById("WKipt").value = "W2"; }
			if ( sflWK == 3 ) { document.getElementById("WKipt").value = "W3"; }
			if ( sflWK == 4 ) { document.getElementById("WKipt").value = "W4"; }
				  
			/* if ( (SFLwk2[0] != "undefined") && (SFLwk2[0] != null) && (SFLwk2[0] != "") ) {
				document.getElementById("SFL5").innerHTML=SFLwk2[0]; 
			} */

			const PLAYfull = [];
					//alert("PLAY array pre-adjusted = "+PLAY);
			for (let n = 1; n < 17; n++) {
				if ((SFLwk0[n-1] == "AB")||(SFLwk1[n-1] == "AB")||(SFLwk2[n-1] == "AB")||(SFLwk3[n-1] == "AB")||(SFLwk4[n-1] == "AB")) { PLAYfull[n-1] = "Buckley, Alan" }
				if ((SFLwk0[n-1] == "TC")||(SFLwk1[n-1] == "TC")||(SFLwk2[n-1] == "TC")||(SFLwk3[n-1] == "TC")||(SFLwk4[n-1] == "TC")) { PLAYfull[n-1] = "Connolly, Thomas" }
				if ((SFLwk0[n-1] == "JD")||(SFLwk1[n-1] == "JD")||(SFLwk2[n-1] == "JD")||(SFLwk3[n-1] == "JD")||(SFLwk4[n-1] == "JD")) { PLAYfull[n-1] = "Dutton, James W." }
				if ((SFLwk0[n-1] == "GF")||(SFLwk1[n-1] == "GF")||(SFLwk2[n-1] == "GF")||(SFLwk3[n-1] == "GF")||(SFLwk4[n-1] == "GF")) { PLAYfull[n-1] = "Field, Geoffrey" }
				if ((SFLwk0[n-1] == "WH")||(SFLwk1[n-1] == "WH")||(SFLwk2[n-1] == "WH")||(SFLwk3[n-1] == "WH")||(SFLwk4[n-1] == "WH")) { PLAYfull[n-1] = "Hodgins, George W." }
				if ((SFLwk0[n-1] == "SJ")||(SFLwk1[n-1] == "SJ")||(SFLwk2[n-1] == "SJ")||(SFLwk3[n-1] == "SJ")||(SFLwk4[n-1] == "SJ")) { PLAYfull[n-1] = "Jessop, Shayne A." }
				if ((SFLwk0[n-1] == "PK")||(SFLwk1[n-1] == "PK")||(SFLwk2[n-1] == "PK")||(SFLwk3[n-1] == "PK")||(SFLwk4[n-1] == "PK")) { PLAYfull[n-1] = "Kuechler, Peter M." }
				if ((SFLwk0[n-1] == "JM")||(SFLwk1[n-1] == "JM")||(SFLwk2[n-1] == "JM")||(SFLwk3[n-1] == "JM")||(SFLwk4[n-1] == "JM")) { PLAYfull[n-1] = "McCracken, John G." }
				if ((SFLwk0[n-1] == "CM")||(SFLwk1[n-1] == "CM")||(SFLwk2[n-1] == "CM")||(SFLwk3[n-1] == "CM")||(SFLwk4[n-1] == "CM")) { PLAYfull[n-1] = "Medhurst, Charles" }
				if ((SFLwk0[n-1] == "DP")||(SFLwk1[n-1] == "DP")||(SFLwk2[n-1] == "DP")||(SFLwk3[n-1] == "DP")||(SFLwk4[n-1] == "DP")) { PLAYfull[n-1] = "Pengelly, Delmer B." }
				if ((SFLwk0[n-1] == "Pd")||(SFLwk1[n-1] == "Pd")||(SFLwk2[n-1] == "Pd")||(SFLwk3[n-1] == "Pd")||(SFLwk4[n-1] == "Pd")) { PLAYfull[n-1] = "Paulson, David B." }
				if ((SFLwk0[n-1] == "BP")||(SFLwk1[n-1] == "BP")||(SFLwk2[n-1] == "BP")||(SFLwk3[n-1] == "BP")||(SFLwk4[n-1] == "BP")) { PLAYfull[n-1] = "Porter, George R." }
				if ((SFLwk0[n-1] == "WR")||(SFLwk1[n-1] == "WR")||(SFLwk2[n-1] == "WR")||(SFLwk3[n-1] == "WR")||(SFLwk4[n-1] == "WR")) { PLAYfull[n-1] = "Ritchie, William" }
				if ((SFLwk0[n-1] == "JS")||(SFLwk1[n-1] == "JS")||(SFLwk2[n-1] == "JS")||(SFLwk3[n-1] == "JS")||(SFLwk4[n-1] == "JS")) { PLAYfull[n-1] = "Schofield, John A." }
				
				if ((SFLwk0[n-1] == "NB")||(SFLwk1[n-1] == "NB")||(SFLwk2[n-1] == "NB")||(SFLwk3[n-1] == "NB")||(SFLwk4[n-1] == "NB")) { PLAYfull[n-1] = "Bailey, Nigel" }
				if ((SFLwk0[n-1] == "EH")||(SFLwk1[n-1] == "EH")||(SFLwk2[n-1] == "EH")||(SFLwk3[n-1] == "EH")||(SFLwk4[n-1] == "EH")) { PLAYfull[n-1] = "Hazell, Evan" }				
			}
			//alert("PLAY array POST-adjusted = "+PLAY);
					
			for (let z = 1; z < 17; z++) {
					document.getElementById("SFL"+z).innerHTML = "";
			}
			/*alert("Will try to SHUFFLE finished player order. Array to shuffle = "+array+"\n\n"+
				  array+" array content = "+PLAY);*/
			
			  //let shuffled = PLAY
			  let shuffled = PLAYfull
			    .map(value => ({ value, sort: Math.random() }))
			    .sort((a, b) => a.sort - b.sort)
			    .map(({ value }) => value)
			  
			//alert("'PLAY' array = "+PLAY+"\n\nNew 'shuffled' array = "+shuffled);	
			var sflLen = shuffled.length;
			for (let q = 0; q < sflLen; q++) {
					document.getElementById("SFL"+(q+1)).innerHTML = shuffled[q];
					if (document.getElementById("SFL"+(q+1)).innerHTML == "Hodgins, George W.") {
						document.getElementById("SFL"+(q+1)).style.color = "green";
					}
					else {
						document.getElementById("SFL"+(q+1)).style.color = "black";
					}
			}
		
	}
	
	
	function showDATE() {
		//alert("Trying to show 'note'!");
		if (document.getElementById("tblDATE").style.visibility=="visible") {
			document.getElementById("tblDATE").style.visibility="hidden"; 
			//onchange="localStorage.setItem('bkDATE',this.value);"	
		}		
		else {
			document.getElementById("tblDATE").style.visibility="visible"; 
			//storedNOTE = localStorage.getItem("NOTEchange");
				//alert("storedNOTE (fr lS) = "+storedNOTE);
			//document.getElementById("noteTA").value=storedNOTE;	
		}
		document.getElementById("mySidenav").style.width = "0px";	//hideMENU();		
	}
	function setDATE() {
		//const d = new Date("Mar 25 2015");
		var d = new Date(document.getElementById("DATE").value); //alert("d pre manipulation = "+d);
		d.setDate(d.getDate() + 1);
		var myDate = d.toDateString(); 
			myDate = myDate.substring(0,11);
			alert("myDate = "+myDate);
		//let dateOnly = d.slice(0, 10); alert("dateOnly (post slice) = "+dateOnly);
		//var ds = d.substring(5,12);
		//d = document.getElementById("DATE").value;  
		//alert("d = "+d);		//+"\n"+"ds = "+ds);
		//alert("Will try to set date(s) here . .");		
				//if ( date3.checked == true ) {
				//if ( date3.value == true ) {	
		if(document.getElementById('date0').checked) {
		  		//alert ("'date0/aa'' radio button is checked. DATE submitted = "+myDate);
				wk0Date = myDate;
				localStorage.setItem("w0date",wk0Date); 
	    }
		else if(document.getElementById('date1').checked) {
		  		//alert ("'date1/bb'' radio button is checked. DATE submitted = "+myDate);
				wk1Date = myDate;
				localStorage.setItem("w1date",wk1Date); 
	 	}
		else if(document.getElementById('date2').checked) {
		  		//alert ("'date2/cc'' radio button is checked. DATE submitted = "+myDate);
				wk2Date = myDate;
				localStorage.setItem("w2date",wk2Date); 
	  	}		
		else if(document.getElementById('date3').checked) {
			  //'dd' radio button is checked
			  /* alert ("'date3/dd'' radio button is checked.\n\n"+
			  		 //"DATE submitted = "+document.getElementById("DATE").value );
					 "DATE submitted = "+myDate);	*/				 
			  //var d = document.getElementById("DATE").value.getDate();   alert("d = "+d);
			  wk3Date = myDate; 	alert("wk3Date = "+wk3Date);							 // << **
			  localStorage.setItem("w3date",wk3Date); 
		}
		else if(document.getElementById('date4').checked) {
		  		//alert ("'date4/ee'' radio button is checked. DATE submitted = "+myDate);
				wk4Date = myDate;
				localStorage.setItem("w4date",wk4Date); 
			}		
		else { alert ("Radio button OTHER THAN 0-4 was checked!"); }
		//}else if(document.getElementById('date0').checked) {
		  //'aa' radio button is checked
		//}
/*		if ( document.getElementById("date3").value==true ) {
			alert("date3.checked = true!");			
		}
*/

	}	

	//const AWYwk0 = []; const AWYwk1 = []; const AWYwk2 = []; const AWYwk3 = []; const AWYwk4 = [];
	function setAWAY() {
		
		const AWYwk0 = localStorage.getItem("LSawyW0").split(",");
		const AWYwk1 = localStorage.getItem("LSawyW1").split(",");
		const AWYwk2 = localStorage.getItem("LSawyW2").split(",");
		const AWYwk3 = localStorage.getItem("LSawyW3").split(",");
		const AWYwk4 = localStorage.getItem("LSawyW4").split(",");
		
			var selPL;
			
			for (let p = 1; p < 15; p++) {
				if(document.getElementById('pl'+p).checked==true) {
			  		//alert ("'pl"+p+"' radio button is checked.");	
					selPL = p;
				}
			}	
			
			for (let w = 0; w < 5; w++) {
				if(document.getElementById('CHKw'+w).checked==true) { 
					//alert ("'CHKw"+w+"'' CHECKBOX is checked!");
					document.getElementById('G'+selPL+'wk'+w).style.background = 'ivory';  //G12wk1
					document.getElementById('G'+selPL+'wk'+w).onclick = function(){alert("Input frozen!");}	
					if (w==0) {AWYwk0.push(selPL);}
					if (w==1) {AWYwk1.push(selPL);}
					if (w==2) {AWYwk2.push(selPL);}
					if (w==3) {AWYwk3.push(selPL);}
					if (w==4) {AWYwk4.push(selPL);}					
				}
			}
					
			//NEW strings:
			var AWYwk0str = AWYwk0.toString(); 
			var AWYwk1str = AWYwk1.toString(); 
			var AWYwk2str = AWYwk2.toString(); 
			var AWYwk3str = AWYwk3.toString(); 
			var AWYwk4str = AWYwk4.toString(); 
			/* alert("Away strings:\n\n"+
				  "newAWYwk0str = '"+AWYwk0str+"'\n"+
				  "newAWYwk1str = '"+AWYwk1str+"'\n"+
				  "newAWYwk2str = '"+AWYwk2str+"'\n"+
				  "newAWYwk3str = '"+AWYwk3str+"'\n"+
				  "newAWYwk4str = '"+AWYwk4str+"'"); */		
			
			localStorage.setItem("LSawyW0",AWYwk0str);
			localStorage.setItem("LSawyW1",AWYwk1str);
			localStorage.setItem("LSawyW2",AWYwk2str);
			localStorage.setItem("LSawyW3",AWYwk3str);
			localStorage.setItem("LSawyW4",AWYwk4str);
//			localStorage.setItem("LSawyW0",appendAWYwk0str); 
//			localStorage.setItem("LSawyW1",appendAWYwk1str);	
				//localStorage.setItem("LSawyW1",localStorage.getItem("LSawyW1") + ", " + AWYwk1str);
/*			localStorage.setItem("LSawyW2",appendAWYwk2str);
			localStorage.setItem("LSawyW3",appendAWYwk3str);
			localStorage.setItem("LSawyW4",appendAWYwk4str);
*/							

	}
	
	function displayDATE(w) {
		/* alert("Will try to display date for wk "+w+"!\n"+
			  "wk2Date (pre lS get) = "+wk2Date); */
		Date0str = localStorage.getItem("w0date");	  
		Date1str = localStorage.getItem("w1date");	  
		Date2str = localStorage.getItem("w2date");	  
			//alert("wk2Date/Date2str (post lS get) = \n"+Date2str);
		Date3str = localStorage.getItem("w3date");	  
		Date4str = localStorage.getItem("w4date");
			
		if ( w == 0 ) { alert("W0 = "+Date0str); }
		if ( w == 1 ) { alert("W1 = "+Date1str); }
		if ( w == 2 ) { alert("W2 = "+Date2str); }
		if ( w == 3 ) { alert("W3 = "+Date3str); }
		if ( w == 4 ) { alert("W4 = "+Date4str); }
			
	}
	
	function PrimeWK() {
		  let reply;
		  if (confirm("Are you SURE you want to set a primary/current week?") == true) {
		    reply = "YES!";
		  } else {
		    reply = "NO!";
		  }
  		  alert(reply);
			  
		  if ( reply=="YES!") {			  
			  curWK = prompt("Please enter week to highlight (0-4)", 1);
			  localStorage.setItem("PRIMEwk",curWK);
			  document.getElementById("w0").style.background="white"; 
			  		document.getElementById("w1").style.background="white"; 
			  		document.getElementById("w2").style.background="white"; 
					document.getElementById("w3").style.background="white"; 
					document.getElementById("w4").style.background="white"; 
			  document.getElementById("w"+curWK).style.background="orange"; 
			   
		  }
		  
	}
	
	function hidePICKER() {
		document.getElementById("tblDATE").style.visibility="hidden";	//display="none";
	}
	function hideSFL() {
		document.getElementById("tblSFL").style.visibility="hidden";	//display="none";
	}
		
						/*    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$    */
	var freeze = "n";	
	function FREEZE() {
		if (freeze == "n") {
				for (let w = 0; w < 5; w++) {	  
					for (let i = 1; i < 17; i++) {	  
						//document.getElementById("G"+i+"wk"+w).setAttribute('readonly', 'true'); 		// << *
						//document.getElementById("G"+i+"wk"+w).readOnly = true;		
						document.getElementById("G"+i+"wk"+w).style.opacity = "50%";
						//document.getElementById("G"+i+"wk"+w).onclick = function(){alert("Input frozen!");}	
					}
				}
				freeze = "y";
		}
		else {
				for (let w = 0; w < 5; w++) {	  
					for (let i = 1; i < 17; i++) {	  
						document.getElementById("G"+i+"wk"+w).style.opacity = "100%";
						//document.getElementById("G"+i+"wk"+w).onclick = PLAYwk('TC',2,4);
						
					}
				}
				freeze = "n";
		}			
	}					
	
	function showAWAY() {
		if (document.getElementById("tblAWAY").style.visibility=="visible") {
			document.getElementById("tblAWAY").style.visibility="hidden"; 
		}		
		else {
			document.getElementById("tblAWAY").style.visibility="visible"; 
		}
		document.getElementById("mySidenav").style.width = "0px";	//hideMENU();		
	}	

	//var loadNUMBER;
	function LOADfn() {
		Date0str = localStorage.getItem("w0date").substring(7,10);	  
		Date1str = localStorage.getItem("w1date").substring(7,10);	  
		Date2str = localStorage.getItem("w2date").substring(7,10);	  
		Date3str = localStorage.getItem("w3date").substring(7,10);	  
		Date4str = localStorage.getItem("w4date").substring(7,10);
							//myDate = myDate.substring(0,11);
		document.getElementById("W0lbl").innerText=Date0str; 
		document.getElementById("W1lbl").innerText=Date1str; 
		document.getElementById("W2lbl").innerText=Date2str; 
		document.getElementById("W3lbl").innerText=Date3str; 
		document.getElementById("W4lbl").innerText=Date4str; 
		
		locStor();
		
						/*   ###############################   */
		/*				
		alert("Welcome to Retlaw Snigdoh's 'Tee Sheet' web app onLoad function!\n"+
			  "Here are some 'localStoage' variables:\n\n"+
			  "LSawyW0 = '"+localStorage.getItem("LSawyW0")+"'\n"+
			  "LSawyW1 = '"+localStorage.getItem("LSawyW1")+"'\n"+
			  "LSawyW2 = '"+localStorage.getItem("LSawyW2")+"'\n"+
			  "LSawyW3 = '"+localStorage.getItem("LSawyW3")+"'\n"+
			  "LSawyW4 = '"+localStorage.getItem("LSawyW4")+"'"); 						
		*/						
/*		
		alert("'loadNUMBER' variable = "+loadNUMBER);
		//window.location.href = "!gs63/!gs63idx.html";
		if (loadNUMBER != '2') {
			loadNUMBER = '2';
			window.location.href = "!gs63/!gs63idx.html";
		}
*/		
	}
	
	function removeAWAY() {
		//alert("Will code to REMOVE away entries here!");		
		//str.replace('g', 'b');
		var strAWYwk0 = localStorage.getItem("LSawyW0");
		var strAWYwk1 = localStorage.getItem("LSawyW1");
		var strAWYwk2 = localStorage.getItem("LSawyW2");
		var strAWYwk3 = localStorage.getItem("LSawyW3");
		var strAWYwk4 = localStorage.getItem("LSawyW4");
/*		alert("removeAWAY fn:\n\n"+
			  "'strAWYwk0' = '"+strAWYwk0+"'\n\n"+
			  "Will try removing PK (p7) . .");	
		strAWYwk0 = strAWYwk0.replace(','+7, '');
		alert( "'strAWYwk0' post .replace= '"+strAWYwk0+"'");
*/		
			var selPL;
			for (let p = 1; p < 15; p++) {
				if(document.getElementById('pl'+p).checked==true) {
			  		//alert ("'pl"+p+"' radio button is checked.");	
					selPL = p;
				}
			}			
			for (let w = 0; w < 5; w++) {
				if(document.getElementById('CHKw'+w).checked==true) { 
					//alert ("'CHKw"+w+"'' CHECKBOX is checked!");
					document.getElementById('G'+selPL+'wk'+w).style.background = 'slategray';  //G12wk1
					if (w==0) {strAWYwk0 = strAWYwk0.replace(','+selPL, '');}
					if (w==1) {strAWYwk1 = strAWYwk1.replace(','+selPL, '');}
					if (w==2) {strAWYwk2 = strAWYwk2.replace(','+selPL, '');}
					if (w==3) {strAWYwk3 = strAWYwk3.replace(','+selPL, '');}
					if (w==4) {strAWYwk4 = strAWYwk4.replace(','+selPL, '');}					
				}
			}
		
			localStorage.setItem("LSawyW0",strAWYwk0);
			localStorage.setItem("LSawyW1",strAWYwk1);
			localStorage.setItem("LSawyW2",strAWYwk2);
			localStorage.setItem("LSawyW3",strAWYwk3);
			localStorage.setItem("LSawyW4",strAWYwk4);		
		
		location.reload();
		//locStor();
		
	}