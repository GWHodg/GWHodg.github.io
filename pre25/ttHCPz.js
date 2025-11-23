function myFunction(event) {
  let key = event.key;
  alert("The key was: " + key);
  //document.getElementById("demo").innerHTML = "The key was: " + key;
  if ( key=="`" ) { respBIDa() } 
}

	function showDROP(text) {
		document.getElementById("DROPdiv").style.top="60%";
		document.getElementById("DROPdiv").innerHTML="<span style='float:right;'><a onclick='showDROP()''><b><font size=7>&times;</font></b></a></span>";
		
		/*if ( text.substring(0,8)=="<b>OPENER" ) {
			document.getElementById("DROPdiv").style.top="70%";
		}*/
		
		if (document.getElementById("DROPdiv").style.visibility=="visible") {
			document.getElementById("DROPdiv").style.visibility="hidden"; 
			//document.getElementById("DROPcheck").style.visibility="hidden";
			
			//document.getElementById("pDone").style.visibility = "hidden";
		}		
		else {
			//alert("text.substring(3,6) = "+text.substring(3,12));
			if ( text.substring(3,12)=="OPENER RE" ) {
				document.getElementById("DROPdiv").style.top="80%";
			}
			document.getElementById("DROPdiv").style.visibility="visible";
		}
		
		document.getElementById("DROPdiv").innerHTML=
			/* document.getElementById("DROPdiv").innerHTML+"<br>"+text; */
			document.getElementById("DROPdiv").innerHTML+text; 			
		//hideMENU();		
		
		//document.getElementById("DROPdiv").style.top="60%";
	}		
	
	
	

	const hand = [];
	var card1;	var card2;	
	
	var HCP = 0;
	
	//alert(document.querySelectorAll('input[type="checkbox"]:checked').length);	
	var checkNO;
	
	function enterCARDS() {
		
		//alert(document.querySelectorAll('input[type="checkbox"]:checked').length);
		
		for (var  n = 1; n < 53; n++) {
			if (document.getElementById(n).checked==true) {
				hand.push(n);		//alert(h+"s is true!");
			}
		}		
		//alert("'hand' array = "+hand);		
		//document.getElementById("W1v").value = hand[0];
		//card2 = hand[1]; alert("card2 = "+card2);
		convertCard();
	}	

	function convertCard() {
		for (var  c = 0; c < 13; c++) {
			//alert("Card #1 code = "+ hand[c]);
			if (hand[c] === undefined) {alert("'hand["+c+"] is UNDEFINED!");}	
			else {
				document.getElementById("c"+ (c+1) +"#").innerHTML = hand[c];	
				document.getElementById("c"+ (c+1) +"rank").style.color = "black";	// < ??
				
				if (hand[c]<14){ // < was <13 ** NB! Jan 13/24 
					document.getElementById("c"+ (c+1) +"suit").innerHTML = "&spades;";	
						document.getElementById("c"+ (c+1) +"suit").style.color = "black";	
						document.getElementById("Wcard"+(c+1)).style.background = "white";	
				}		
				if (hand[c]>13 && hand[c]<27){ //< was <27
					document.getElementById("c"+ (c+1) +"suit").innerHTML = "&hearts;";	
						document.getElementById("c"+ (c+1) +"suit").style.color = "red";	
						document.getElementById("Wcard"+(c+1)).style.background = "white";	
				}					
				if (hand[c]>26 && hand[c]<40){ //< was <40
					document.getElementById("c"+ (c+1) +"suit").innerHTML = "&clubs;";	
						document.getElementById("c"+ (c+1) +"suit").style.color = "black";	
						document.getElementById("Wcard"+(c+1)).style.background = "moccasin";					
				}					
				if (hand[c]>39 && hand[c]<53){ //< was <53 
					document.getElementById("c"+ (c+1) +"suit").innerHTML = "&diams;";	
						document.getElementById("c"+ (c+1) +"suit").style.color = "red";
						document.getElementById("Wcard"+(c+1)).style.background = "moccasin";
				}									
				
				if (hand[c]==1 || hand[c]==14 || hand[c]==27 || hand[c]==40) { 
					document.getElementById("c"+ (c+1) +"rank").innerHTML = "A";	
						//document.getElementById("c"+ (c+1) +"rank").style.color = "black";
					}
				if (hand[c]==2||hand[c]==15||hand[c]==28||hand[c]==41) {document.getElementById("c"+ (c+1) +"rank").innerHTML = "K";}	
				if (hand[c]==3||hand[c]==16||hand[c]==29||hand[c]==42) {document.getElementById("c"+ (c+1) +"rank").innerHTML = "Q";}	
				if (hand[c]==4||hand[c]==17||hand[c]==30||hand[c]==43) {document.getElementById("c"+ (c+1) +"rank").innerHTML = "J";}				
				if (hand[c]==5||hand[c]==18||hand[c]==31||hand[c]==44) {document.getElementById("c"+ (c+1) +"rank").innerHTML = "10";}
				if (hand[c]==6||hand[c]==19||hand[c]==32||hand[c]==45) {document.getElementById("c"+ (c+1) +"rank").innerHTML = "9";}	
				if (hand[c]==7||hand[c]==20||hand[c]==33||hand[c]==46) {document.getElementById("c"+ (c+1) +"rank").innerHTML = "8";}			
				if (hand[c]==8||hand[c]==21||hand[c]==34||hand[c]==47) {document.getElementById("c"+ (c+1) +"rank").innerHTML = "7";}			
				if (hand[c]==9||hand[c]==22||hand[c]==35||hand[c]==48) {document.getElementById("c"+ (c+1) +"rank").innerHTML = "6";}
				if (hand[c]==10||hand[c]==23||hand[c]==36||hand[c]==49) {document.getElementById("c"+ (c+1) +"rank").innerHTML = "5";}
				if (hand[c]==11||hand[c]==24||hand[c]==37||hand[c]==50) {document.getElementById("c"+ (c+1) +"rank").innerHTML = "4";}
				if (hand[c]==12||hand[c]==25||hand[c]==38||hand[c]==51) {document.getElementById("c"+ (c+1) +"rank").innerHTML = "3";}
				if (hand[c]==13||hand[c]==26||hand[c]==39||hand[c]==52) {document.getElementById("c"+ (c+1) +"rank").innerHTML = "2";}			
			}						
			
		}		
	
		//var HCP=0;					/* A: 1, 14; 27; 40" */
		if (document.getElementById(1).checked==true) {HCP=HCP+4}; 
			if (document.getElementById(14).checked==true) {HCP=HCP+4};
			if (document.getElementById(27).checked==true) {HCP=HCP+4};
			if (document.getElementById(40).checked==true) {HCP=HCP+4};
		if (document.getElementById(2).checked==true) {HCP=HCP+3}; 
			if (document.getElementById(15).checked==true) {HCP=HCP+3};
			if (document.getElementById(28).checked==true) {HCP=HCP+3};
			if (document.getElementById(41).checked==true) {HCP=HCP+3};			
		if (document.getElementById(3).checked==true) {HCP=HCP+2}; 
			if (document.getElementById(16).checked==true) {HCP=HCP+2};
			if (document.getElementById(29).checked==true) {HCP=HCP+2};
			if (document.getElementById(42).checked==true) {HCP=HCP+2};	
		if (document.getElementById(4).checked==true) {HCP=HCP+1}; 
			if (document.getElementById(17).checked==true) {HCP=HCP+1};
			if (document.getElementById(30).checked==true) {HCP=HCP+1};
			if (document.getElementById(43).checked==true) {HCP=HCP+1};				
		//alert("HCP total = "+HCP);
		document.getElementById("totalHCP").value = HCP;


		
		var SUITnoS = 0; var SUITnoH = 0; var SUITnoD = 0; var SUITnoC = 0;
		for (var  s = 0; s < 13; s++) {
			if (document.getElementById(s+1).checked==true) {SUITnoS=SUITnoS+1}; 	//< # spades
		}
		for (var  h = 13; h < 26; h++) {if (document.getElementById(h+1).checked==true) {SUITnoH=SUITnoH+1};}//#hts
		for (var  d = 26; d < 39; d++) {if (document.getElementById(d+1).checked==true) {SUITnoC=SUITnoC+1};}//#hts
		for (var  b = 39; b < 52; b++) {if (document.getElementById(b+1).checked==true) {SUITnoD=SUITnoD+1};}//#hts		
		//alert("# cards:\n\tSPADES: "+SUITnoS+"\n\tHEARTS: "+SUITnoH+"\n\tDIAMONDS: "+SUITnoD+"\n\tCLUBS: "+SUITnoC);
		document.getElementById("shape").value=SUITnoS+"="+SUITnoH+"="+SUITnoC+"="+SUITnoD; 


		
	}	

	function limitCHECKS() {
		//alert("Will TRY to limit # of checks to 13 . . .");
					//checkNO = document.querySelectorAll('input[type="checkbox"]:checked').length;
					//alert("'checkNO' var = "+checkNO);		
		checkNO = document.querySelectorAll('input[type="checkbox"]:checked').length;
		//alert("'checkNO' var = "+checkNO);
		if (checkNO==11) {alert("You have entered 10 cards so far.");}
		if (checkNO==13) {alert("This will be your 13th card entry!");}
		if (checkNO>13) {alert("MORE THAN 13 cards have been entered.");}
		
		document.getElementById("CHECKcount").value=checkNO;		
	}

	SHAPEarray = [];
	var blncdYN = "?";
	function openBID() {
		//alert("Will try to code opening bid.");
		var SUITnoS = 0; var SUITnoH = 0; var SUITnoD = 0; var SUITnoC = 0;
		for (var  s = 0; s < 13; s++) {
			if (document.getElementById(s+1).checked==true) {SUITnoS=SUITnoS+1}; 	//< # spades
		}
		for (var  h = 13; h < 26; h++) {if (document.getElementById(h+1).checked==true) {SUITnoH=SUITnoH+1};}//#hts
		for (var  d = 26; d < 39; d++) {if (document.getElementById(d+1).checked==true) {SUITnoC=SUITnoC+1};}//#hts
		for (var  b = 39; b < 52; b++) {if (document.getElementById(b+1).checked==true) {SUITnoD=SUITnoD+1};}//#hts		
		//alert("# cards:\n\tSPADES: "+SUITnoS+"\n\tHEARTS: "+SUITnoH+"\n\tDIAMONDS: "+SUITnoD+"\n\tCLUBS: "+SUITnoC);
		document.getElementById("shape").value=SUITnoS+"="+SUITnoH+"="+SUITnoC+"="+SUITnoD; 
		
				/* 3 balanced shapes: 4-3-3-3; (4-4-3-2); 5-3-3-2 (Opener's Rebid; p 143) */
				SHAPEarray = [SUITnoS, SUITnoH, SUITnoD, SUITnoC];  //alert("'SHAPEarray' = "+SHAPEarray);
				sortedSHAPE = SHAPEarray.sort(function(a, b){return b - a});
					//alert("sortedSHAPE array = '"+sortedSHAPE+"'");
		//var blncdYN = "?";								
		/* alert("You have "+HCP+" HCPs & card shape is "+sortedSHAPE+"\n\n"+
			  "(balanced shapes = 4-3-3-3, 4-4-3-2 & 5-3-3-2)"); */
		var noteA = "You have "+HCP+" HCPs.\nCard shape is "+sortedSHAPE+
					"\n(balanced shapes = 4-3-3-3, 4-4-3-2 & 5-3-3-2)";
		if ( (sortedSHAPE=="4,3,3,3") || (sortedSHAPE=="4,4,3,2") || (sortedSHAPE=="5,3,3,2") ) {
				alert(noteA+"\n\nYour shape ("+sortedSHAPE+") is BALANCED!");	
				blncdYN = "Y";			
		}
		else {
				alert(noteA+"\n\nYour shape is NOT balanced");
				blncdYN = "N";				
		}
			
						/* ========================= */
						
		if (HCP < 12) { 
			alert("You have < 12 HCP. PASS!"); 
			document.getElementById("open").value= "pass";
		}
		else { 
			//alert("You have > 12 HCP. BID!"); 
			if ( blncdYN=="Y" ) {
				alert("You have > 12 HCP & your shape is balanced. BID!");
				if ( HCP>14 && HCP<18 ) { 
					alert("w/ bal hd + HCP 15-17 bid 1 NT.") 
					document.getElementById("open").value= "1NT";
				}
				else if ( HCP==20 || HCP==21 ) { 
					alert("w/ bal hd + HCP 20 or 21 bid 2 NT.") 
					document.getElementById("open").value= "2NT";
				}
				else { alert("Bid 1 of suit w/ HCP +> 15-17, 20 or 21.") 
					if ( SUITnoS >= 5 ) { 
						alert("w/ 5 spades bid 1S");
						document.getElementById("open").value= "1S";	
					}
					else if ( SUITnoH >= 5 ) { 
						alert("w/ 5 hearts bid 1H");
						document.getElementById("open").value= "1H";
					}
					else if ( SUITnoD >= 4 ) { 
						alert("w/ min 4 diamonds bid 1D");
						document.getElementById("open").value= "1D";
					}
					else if ( SUITnoD >= 3 ) { 
						alert("w/ min 3 clubs bid 1C");
						document.getElementById("open").value= "1C";
					}					
				}
			}
			else {
				alert("You have > 12 HCP & can BID but your shape is NOT balanced. Can't bid NT!");
				if ( SUITnoS >= 5 ) { 
					alert("w/ at least 5 spades bid 1S");
					document.getElementById("open").value= "1S";
				}
				else if ( SUITnoH >= 5 ) { 
					alert("w/ min 5 hearts bid 1H");
					document.getElementById("open").value= "1H";
				}
				else if ( SUITnoD >= 4 ) { 
					alert("w/ min 4 diamonds bid 1D");
					document.getElementById("open").value= "1D";
				}
				else if ( SUITnoD >= 3 ) { 
					alert("w/ min 3 clubs bid 1C");
					document.getElementById("open").value= "1C";
				}
				
				else if ( SUITnoC >= 4 ) { 
					alert("# clubs = "+SUITnoC);
					document.getElementById("open").value= "1C";
				}
				
			}	
		}			  
	}	

	function respBIDa() {
		var RANDno = Math.floor(Math.random() * (5 - 1) ) + 1; // > 4 #s 1-4
		var opnBid = document.getElementById("open").value; 
			var oBlastCH = opnBid.slice(-1); //< last CH open bid
		alert("RANDno = "+RANDno+"\nOpener's bid = "+opnBid+" (last ch: "+oBlastCH+")");
				//var RANDno = Math.floor(Math.random() * (53 - 1) ) + 1; // > 52 #s 1-52
		//alert("Will try to call 'respBIDa' fn after '`' keypress 'event'!");
		//alert("'respBIDa' fn called after 'resp' input focus!");
		document.getElementById("resp").value="";
		var RSPval;
		if ( oBlastCH=="H" ) {
			if (RANDno==1) {RSPval="1S"};
			if (RANDno==2) {RSPval="1NT"};
			if (RANDno==3) {RSPval="2H"};
			if (RANDno==4) {RSPval="pass"};
		}
		if ( oBlastCH=="S" ) {
			if (RANDno==1) {RSPval="1NT"};
			if (RANDno==2) {RSPval="pass"};
			if (RANDno==3) {RSPval="2S"};
			if (RANDno==4) {RSPval="pass"};
		}
		if ( oBlastCH=="D" ) {
			if (RANDno==1) {RSPval="1H"}; if (RANDno==2) {RSPval="1S"};
			if (RANDno==3) {RSPval="1NT"}; if (RANDno==4) {RSPval="pass"};
		}
		if ( oBlastCH=="C" ) {
			if (RANDno==1) {RSPval="1H"}; if (RANDno==2) {RSPval="1S"};
			if (RANDno==3) {RSPval="1D"}; if (RANDno==4) {RSPval="pass"};
		}
		if ( oBlastCH=="T" ) { //< opn = NT
			if (RANDno==1) {RSPval="2H"}; if (RANDno==2) {RSPval="2S"};
			if (RANDno==3) {RSPval="2NT"}; if (RANDno==4) {RSPval="pass"};
		}	
		if ( oBlastCH=="s" ) { //< opn = pass
			if (RANDno==1) {RSPval="1H"}; if (RANDno==2) {RSPval="1S"};
			if (RANDno==3) {RSPval="1D"}; if (RANDno==4) {RSPval="pass"};
		}	
	
		document.getElementById("resp").value=RSPval;	
		
		/*if ( document.getElementById("open").value!="1S" ) { 
			//document.getElementById("resp").value="";
			//document.getElementById("resp").reset(); 
			document.getElementById("resp").value = "1S";
		}
		else { 
			document.getElementById("resp").value = "";
			document.getElementById("resp").value= "2C"; 
		}*/		
		//document.getElementById("reopenPopup").innerHTML = "5NT!"; // < test **
	}	

	function openREBID() {
		var rspBid = document.getElementById("resp").value; var rBlastCH = rspBid.slice(-1);
		var opnBid = document.getElementById("open").value; var oBlastCH = opnBid.slice(-1);
		 alert(". . code opener's rebid . .\nHCP = "+HCP+"\n? balanced hand: "+blncdYN+"\n"+
			  "shape = "+SHAPEarray+"\n\n"+
			  "Last character of responder's bid = "+rBlastCH+"\n"+
			  "Last character of opener's bid = "+oBlastCH);
			  if ( rBlastCH==oBlastCH ) { alert("last CH r = o!") }
			  else { alert("last CH r != o") }; 
			  
		//document.getElementById("open2").value= "test"; 	  
		
		if (  (HCP>11) && (rBlastCH==oBlastCH) ) { // < fit found!
			alert("Fit found!. Raise w/ inv (16) or pass w/ min (12-15).");
			if (HCP>15) {document.getElementById("open2").value= "3"+rBlastCH;}
			if (HCP<16) {document.getElementById("open2").value= "pass";}
		}	
		else if ( (HCP>11) && (rBlastCH!=oBlastCH) ) {
			alert("HCP > 11 BUT rBlastCH != oBlastCH (fit NOT found). "+
				  "w/ bal hd > NT. w/ 1-suited > bid IT 2nd time. w/ 2-suited bid 2nd suit.");
			if (blncdYN=="Y") {document.getElementById("open2").value= "2NT";}
			if (blncdYN=="N") {document.getElementById("open2").value= "2"+oBlastCH;}
		}	
		else { alert("w/ HCP < 12 PASS!"); document.getElementById("open2").value= "pass"; }
	}
	
	function saved() {
		for (var  n = 1; n < 53; n++) {
			if (localStorage.getItem(n)=="on") { document.getElementById(n).checked = true; }	
		}		
	}
	function reload() { window.location.reload(true); }
	function clearSAVED() {
		//Force a hard reload to clear the cache if supported by the browser
		//window.location.reload(true);
		//location.reload();
		/*alert("Will CLEAR 'saved' inputs here!\n\n"+
			  "g1H1s PRE 'clear' = " + localStorage.getItem("g1H1s"));*/
		  let reply;
		  if (confirm("Are you SURE you want to CLEAR all 'saved' input?") == true) {
		    reply = "YES!";
		  } else {
		    reply = "NO!";
		  }
  		  alert(reply);
		  
		// 13 26 39 52. 12 25 38 51.  
		localStorage.setItem(13,""); document.getElementById(13).checked = false; 
				localStorage.setItem(26,""); document.getElementById(26).checked = false;	//<2
				localStorage.setItem(39,""); document.getElementById(39).checked = false;
				localStorage.setItem(52,""); document.getElementById(52).checked = false;	
		localStorage.setItem(12,""); document.getElementById(12).checked = false;	//<3
				localStorage.setItem(25,""); document.getElementById(25).checked = false;
				localStorage.setItem(38,""); document.getElementById(38).checked = false;
				localStorage.setItem(51,""); document.getElementById(51).checked = false;	
		for (var  n = 1; n < 53; n++) {
			localStorage.setItem(n,""); document.getElementById(n).checked = false;
		}			

				for (var  n = 0; n < 13; n++) {
					document.getElementById("c"+ (n+1) +"#").innerHTML = "#";	
					document.getElementById("c"+ (n+1) +"rank").innerHTML = "r";	
					document.getElementById("c"+ (n+1) +"suit").innerHTML = "S";	
				}
		//location.reload();
		document.getElementById("CHECKcount").value = 0;	
		
	}

	function PRESET1() { //17 HCP & balanced (5-3-3-2) hand
		//alert("Set or clear 13 preset checkbox inputs.")	
		alert("Will TRY to set/clear 13 checkboxes > 17 HCP & balanced (5-3-3-2) hand.");		
		if (document.getElementById(2).checked==true) {		// FOR 16 HCP & BALANCED (5-3-3-2):
			document.getElementById(2).checked = false; document.getElementById(15).checked = false; //4K>12HCP
				document.getElementById(28).checked = false; document.getElementById(41).checked = false; 
			document.getElementById(3).checked = false; document.getElementById(17).checked = false; //1Q+2J>4HCP
				document.getElementById(16).checked = false; 			
			document.getElementById(19).checked = false; document.getElementById(21).checked = false; //+2H>5
				document.getElementById(36).checked = false; //+1C>2			
			document.getElementById(13).checked = false; //+1S>3
			document.getElementById(52).checked = false; //+1D>2
			document.getElementById(38).checked = false; //+1C>3 <*		
		}
		else {
			document.getElementById(2).checked = true; document.getElementById(15).checked = true; //4K>12HCP
				document.getElementById(28).checked = true; document.getElementById(41).checked = true; 
			document.getElementById(3).checked = true; document.getElementById(17).checked = true; //1Q+2J>4HCP
				document.getElementById(16).checked = true; 			
			document.getElementById(19).checked = true; document.getElementById(21).checked = true; //+2H>5
				document.getElementById(36).checked = true; //+1C>2						
			document.getElementById(13).checked = true; //+1S>3
			document.getElementById(52).checked = true; //+1D>2
			document.getElementById(38).checked = true; //+1C>3 <*		
			}
		/*
		if (document.getElementById(8).checked==true) {		
			document.getElementById(8).checked = false; document.getElementById(21).checked = false; // < 7
				document.getElementById(34).checked = false; document.getElementById(47).checked = false;
			document.getElementById(7).checked = false; document.getElementById(20).checked = false; // < 8
				document.getElementById(33).checked = false; document.getElementById(46).checked = false;		
			document.getElementById(2).checked = false; document.getElementById(15).checked = false; // < K
				document.getElementById(28).checked = false; document.getElementById(41).checked = false;
			document.getElementById(42).checked = false; // > Qd
		}
		else {
			document.getElementById(8).checked = true; document.getElementById(21).checked = true; // < 7
				document.getElementById(34).checked = true; document.getElementById(47).checked = true;
			document.getElementById(7).checked = true; document.getElementById(20).checked = true; // < 8
				document.getElementById(33).checked = true; document.getElementById(46).checked = true;		
			document.getElementById(2).checked = true; document.getElementById(15).checked = true; // < K
				document.getElementById(28).checked = true; document.getElementById(41).checked = true;
				document.getElementById(42).checked = true; // > Qd			
		}
		*/
		
		var checkCOUNT = document.querySelectorAll('input[type="checkbox"]:checked').length;
		document.getElementById("CHECKcount").value=checkCOUNT;		
	}	
	function PRESET2() {	//13 HCP & Unbalanced
		if (document.getElementById(37).checked==true) {		// FOR 16 HCP & BALANCED (5-3-3-2):
			document.getElementById(37).checked = false; document.getElementById(15).checked = false; //4K>12HCP
				document.getElementById(28).checked = false; document.getElementById(41).checked = false; 
			document.getElementById(4).checked = false; document.getElementById(17).checked = false; //1Q+2J>4HCP
				document.getElementById(16).checked = false; 			
			document.getElementById(19).checked = false; document.getElementById(21).checked = false; //+2H>5
				document.getElementById(36).checked = false; //+1C>2			
			document.getElementById(13).checked = false; //+1S>3
			document.getElementById(52).checked = false; //+1D>2
			document.getElementById(38).checked = false; //+1C>3 <*		
		}
		else {
			document.getElementById(37).checked = true; document.getElementById(15).checked = true; //4K>12HCP
				document.getElementById(28).checked = true; document.getElementById(41).checked = true; 
			document.getElementById(4).checked = true; document.getElementById(17).checked = true; //1Q+2J>4HCP
				document.getElementById(16).checked = true; 			
			document.getElementById(19).checked = true; document.getElementById(21).checked = true; //+2H>5
				document.getElementById(36).checked = true; //+1C>2						
			document.getElementById(13).checked = true; //+1S>3
			document.getElementById(52).checked = true; //+1D>2
			document.getElementById(38).checked = true; //+1C>3 <*		
		}	
		var checkCOUNT = document.querySelectorAll('input[type="checkbox"]:checked').length;
		document.getElementById("CHECKcount").value=checkCOUNT;				
	}
	function PRESET3() {	//13 HCP & Unbalanced: 1-suited in CLUBS
		if (document.getElementById(37).checked==true) {		// FOR 16 HCP & BALANCED (5-3-3-2):
			document.getElementById(37).checked = false; document.getElementById(15).checked = false; //4K>12HCP
				document.getElementById(28).checked = false; document.getElementById(41).checked = false; 
			document.getElementById(4).checked = false; document.getElementById(17).checked = false; //1Q+2J>4HCP
				document.getElementById(16).checked = false; 			
			document.getElementById(32).checked = false; document.getElementById(34).checked = false; //+2C
				document.getElementById(36).checked = false; //+1C>2			
			document.getElementById(13).checked = false; //+1S>3
			document.getElementById(52).checked = false; //+1D>2
			document.getElementById(38).checked = false; //+1C>3 <*		
		}
		else {
			document.getElementById(37).checked = true; document.getElementById(15).checked = true; //4K>12HCP
				document.getElementById(28).checked = true; document.getElementById(41).checked = true; 
			document.getElementById(4).checked = true; document.getElementById(17).checked = true; //1Q+2J>4HCP
				document.getElementById(16).checked = true; 			
			document.getElementById(32).checked = true; document.getElementById(34).checked = true; //+2C
				document.getElementById(36).checked = true; //+1C>2						
			document.getElementById(13).checked = true; //+1S>3
			document.getElementById(52).checked = true; //+1D>2
			document.getElementById(38).checked = true; //+1C>3 <*		
		}	
		var checkCOUNT = document.querySelectorAll('input[type="checkbox"]:checked').length;
		document.getElementById("CHECKcount").value=checkCOUNT;				
	}
	function PRESET4() {	//13 HCP & Unbalanced: 2-suited in DIAMONDS & CLUBS!
		if (document.getElementById(37).checked==true) {		// FOR 16 HCP & BALANCED (5-3-3-2):
			document.getElementById(37).checked = false; document.getElementById(15).checked = false; //4K>12HCP
				document.getElementById(28).checked = false; document.getElementById(41).checked = false; 
			document.getElementById(4).checked = false; document.getElementById(17).checked = false; //1Q+2J>4HCP
				document.getElementById(16).checked = false; 			
			document.getElementById(45).checked = false; document.getElementById(47).checked = false; //+2D
				document.getElementById(36).checked = false; //+1C>2			
			document.getElementById(13).checked = false; //+1S>3
			document.getElementById(52).checked = false; //+1D>2
			document.getElementById(38).checked = false; //+1C>3 <*		
		}
		else {
			document.getElementById(37).checked = true; document.getElementById(15).checked = true; //4K>12HCP
				document.getElementById(28).checked = true; document.getElementById(41).checked = true; 
			document.getElementById(4).checked = true; document.getElementById(17).checked = true; //1Q+2J>4HCP
				document.getElementById(16).checked = true; 			
			document.getElementById(45).checked = true; document.getElementById(47).checked = true; //+2D
				document.getElementById(36).checked = true; //+1C>2						
			document.getElementById(13).checked = true; //+1S>3
			document.getElementById(52).checked = true; //+1D>2
			document.getElementById(38).checked = true; //+1C>3 <*		
		}	
		var checkCOUNT = document.querySelectorAll('input[type="checkbox"]:checked').length;
		document.getElementById("CHECKcount").value=checkCOUNT;				
	}	
	function PRESET5() {	//< 12 HCP
		if (document.getElementById(37).checked==true) {		// FOR 16 HCP & BALANCED (5-3-3-2):
			document.getElementById(37).checked = false; document.getElementById(15).checked = false; //4K>12HCP
				document.getElementById(35).checked = false; document.getElementById(41).checked = false; 
			document.getElementById(4).checked = false; document.getElementById(17).checked = false; //1Q+2J>4HCP
				document.getElementById(16).checked = false; 			
			document.getElementById(19).checked = false; document.getElementById(21).checked = false; //+2H>5
				document.getElementById(36).checked = false; //+1C>2			
			document.getElementById(13).checked = false; //+1S>3
			document.getElementById(52).checked = false; //+1D>2
			document.getElementById(38).checked = false; //+1C>3 <*		
		}
		else {
			document.getElementById(37).checked = true; document.getElementById(15).checked = true; //4K>12HCP
				document.getElementById(35).checked = true; document.getElementById(41).checked = true; 
			document.getElementById(4).checked = true; document.getElementById(17).checked = true; //1Q+2J>4HCP
				document.getElementById(16).checked = true; 			
			document.getElementById(19).checked = true; document.getElementById(21).checked = true; //+2H>5
				document.getElementById(36).checked = true; //+1C>2						
			document.getElementById(13).checked = true; //+1S>3
			document.getElementById(52).checked = true; //+1D>2
			document.getElementById(38).checked = true; //+1C>3 <*		
		}	
		var checkCOUNT = document.querySelectorAll('input[type="checkbox"]:checked').length;
		document.getElementById("CHECKcount").value=checkCOUNT;				
	}	
	
	function RANDOM() {
		//location.reload();	
		var RANDno = Math.floor(Math.random() * (53 - 1) ) + 1;
		//alert("Return a random number between min (included) and max (excluded)\n\n"+"RANDno = "+RANDno);	// 1 > 52 	
			//function getRndInteger(min, max) {
  			//return Math.floor(Math.random() * (max - min) ) + min;
		var numbers = []; // new empty array
		var min, max, r, n, p;
		min = 1;
		max = 53;
		r = 13; // how many numbers you want to extract
		for (let i = 0; i < r; i++) {
		  do {
		    n = Math.floor(Math.random() * (max - min + 1)) + min;
		    p = numbers.includes(n);
		    if(!p){
		      numbers.push(n);
		    }
		  }
		  while(p);
		}
		//console.log(numbers.join(" - "));
		alert("'numbers' array = "+numbers);
		
		//hand = numbers.clone();		//hand=numbers;
		//convertCard();
		
		for (let x = 0; x < 13; x++) {
			document.getElementById(+numbers[x]).checked = true;			// < problem here Jan 14! **
		}
		
		//hand = []; // < empty array!
			//A.length = 0
			//A.splice(0,A.length)
		/*
		for (let i = 0; i < r; i++) {
		  do {
		    n = Math.floor(Math.random() * (max - min + 1)) + min;
		    p = hand.includes(n);
		    if(!p){
		      hand.push(n);
		    }
		  }
		  while(p);
		}
		alert("'hand' array = "+hand);		
		convertCard();
		*/

		var checkCOUNT = document.querySelectorAll('input[type="checkbox"]:checked').length;
		document.getElementById("CHECKcount").value=checkCOUNT;		
		
	}

	// When the user clicks on div, open the popup
	function myFunction(id) {
		  var popup = document.getElementById(id);
		  	//var popup = document.getElementById("myPopup");
		  popup.classList.toggle("show");
	}

	function CHECKcount() {
		alert("Will try to count number of checkboxes that are checked.");
		var checkCOUNT = document.querySelectorAll('input[type="checkbox"]:checked').length;
		//alert("'checkNO' var = "+checkNO);
		//if (checkNO==11) {alert("You have entered 10 cards so far.");}
		document.getElementById("CHECKcount").value=checkCOUNT;
			
	}	

	function presetPROMPT() {
	  let preset = prompt("Enter preset choice:\n\n"+
	  					  "1) 17 HCP BALANCED\n"+
						  "2) 13 HCP Unbalanced - 5H/4C (2-std)\n"+
						  "3) 13 HCP Unbalanced - 5C (1-std)\n"+
						  "4) 13 HCP BALANCED - 4D/4C (2-std)\n"+						  
						  "5) < 12 HCP", "2"); /*  (5-3-3-2) */
	  //if (preset != null) {
	  if (preset==1) {
	    	//document.getElementById("demo").innerHTML = "Selected Preset: " + preset;
			//alert("Selected Preset: " + preset);
			PRESET1();
	  }
	  if (preset==2) { PRESET2(); } if (preset==3) { PRESET3(); } if (preset==4) { PRESET4(); }
	  if (preset==5) { PRESET5(); }
	}	