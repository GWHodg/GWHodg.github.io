
	function calcSF(s,p,h) {
		 /*alert("Calculating Stableford points . . .\n"+
			  "score (s) = "+s+" | player (p) = "+p+" \n hole (h) = "+h);*/
					// H1/p1:
					/* UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
							  document.getElementById("HCPh1").value, document.getElementById("p1h1").value,
							  document.getElementById("PARh1").value, 0, 1, 'SPp1h1' ); */		
		var Hscr = s;
		var Phc = document.getElementById("p"+p+"HC").value; 
		var Hhcp = document.getElementById("HCPh"+h).innerText;			//.value,		
		var Hpar = 	document.getElementById("PARh"+h).innerText;		
		var Hpts = 0;				
							//UNIVcalc(name,Phc,Hhcp,Hscr,Hpar,Hpts,hole,PTSid) {
							//var IFnote;
		/* alert("Hscr = "+Hscr+" | Phc = "+Phc+" | Hhcp = "+Hhcp+"\n"+
			  "Hpar = "+Hpar+" | Hpts (pre-calc) = "+Hpts);	*/							
		if ( Hscr != 0 ) {
			if (Phc<19) {
				if (+Hhcp <= +Phc) {	//if (Hhcp<=Phc) {
					//IFnote = "in UNIVcalc Phc<19/Hhcp("+Hhcp+")<=Phc("+Phc+") . . .";
					if (Hscr-1 == Hpar ) {Hpts = 2;} //net par
					else if (Hscr-2 == Hpar ) {Hpts = 1;} //net bogie
					else if (Hscr-0 == Hpar ) {Hpts = 3;} //net birdie
					else if (+Hscr + +1 == Hpar ) {Hpts = 4;} //net EAGLE
						else if (+Hscr + +2 == Hpar ) {Hpts = 5;} //net DBL EAGLE (albatross)
					else {Hpts = 0;}	//net ^ bogie:			
				}
				else {   // HC < 19 but <Hhc!
					//IFnote = "in UNIVcalc Phc<19/else [Hhcp>Phc] . . .";
					if (Hscr-0 == Hpar ) {Hpts = 2;}	//net par
					else if (Hscr-1 == Hpar ) {Hpts = 1;} //net bogie
					else if (+Hscr + +1 == Hpar ) {Hpts = 3;} //net birdie
					else if (+Hscr + +2 == Hpar ) {Hpts = 4;} //net EAGLE
						else if (+Hscr + +3 == Hpar ) {Hpts = 5;} //net DBL EAGLE (albatross)
					else {Hpts = 0;}	//net ^ bogie								
				}
			}	
			if (Phc>18) {	// <> correct Mar 4: if Phc > 18 but < 2XHhcp still > 2 strokes!
				if (+Hhcp<=(+Phc-18)) {		//if ((Hhcp-18)<=Phc) {
					let alertPhc = Phc-18;
					//IFnote = "in UNIVcalc Phc>18/Hhcp("+Hhcp+")<=(Phc-18) . . .\n{Phc-18 = "+alertPhc+"}";
					if (Hscr-2 == Hpar ) {Hpts = 2;} //net par
					else if (Hscr-3 == Hpar ) {Hpts = 1;} //net bogie
					else if (Hscr-1 == Hpar ) {Hpts = 3;} //net birdie
					else if (+Hscr + +0 == Hpar ) {Hpts = 4;} //net EAGLE
						else if (+Hscr + +1 == Hpar ) {Hpts = 5;} //net DBL EAGLE (albatross)
					else {Hpts = 0;}	//net ^ bogie:			
				}
				else {   // HC > 18 but <Hhc!
					//IFnote = "in UNIVcalc Phc>18/else [Hhcp>Phc-18]!";
					
					if (Hscr-1 == Hpar ) {Hpts = 2;} //net par
					else if (Hscr-2 == Hpar ) {Hpts = 1;} //net bogie
					else if (Hscr-0 == Hpar ) {Hpts = 3;} //net birdie
					else if (+Hscr + +1 == Hpar ) {Hpts = 4;} //net EAGLE
						else if (+Hscr + +2 == Hpar ) {Hpts = 5;} //net DBL EAGLE (albatross)
					else {Hpts = 0;}	//net ^ bogie:			
				}
			}
						
				//alert("Hpts (post-calc) = "+Hpts);
				
						//document.getElementById(PTSid).innerHTML = Hpts;	
						//holePTtots();	
				// z2H1s | SPp2h1:
				//alert("Hello . . ");
			localStorage.setItem('zSFp'+p+'h'+h, Hpts);
				//alert("Hi!");
				//alert("localStorage 'zSFp"+p+"h"+h+"'  = "+localStorage.getItem('zSFp'+p+'h'+h));
			
			//alert("POINTS localStorage = "+localStorage.getItem('zSFp'+p+'h'+h)); // << **
	
			document.getElementById('SPp'+p+'h'+h).innerHTML = Hpts;	

				//document.getElementById('SPp5h1').innerHTML = +document.getElementById('SPp5h1').innerHTML + +Hpts;  
										/* ^^ * */
									//+document.getElementById('SPp'+p+'h5').innerHTML +    +Hpts;		
			//ptTperH();	
		
		
			//document.getElementById('p'+p+'h'+h).setAttribute('disabled', '');	
			if ( s > 0 ) {
				document.getElementById('p'+p+'h'+h).setAttribute('readonly', 'true');
			}	
			
		}	
		  
	}
	
	
	  
	function replace() {	 
		/* onchange: */
		//document.getElementById("DATE").value = localStorage.getItem("DATE");

		
		document.getElementById("p1NAME").value = localStorage.getItem("z1NAME");
			document.getElementById("p2NAME").value = localStorage.getItem("z2NAME");
			document.getElementById("p3NAME").value = localStorage.getItem("z3NAME");
			document.getElementById("p4NAME").value = localStorage.getItem("z4NAME");
			document.getElementById("p5NAME").value = localStorage.getItem("z5NAME");
				document.getElementById('p1').innerHTML=localStorage.getItem("z1NAME"); document.getElementById('p1').style.color='yellow';
				document.getElementById('p2').innerHTML=localStorage.getItem("z2NAME"); document.getElementById('p2').style.color='red';
				document.getElementById('p3').innerHTML=localStorage.getItem("z3NAME"); document.getElementById('p3').style.color='lime';
				document.getElementById('p4').innerHTML=localStorage.getItem("z4NAME"); document.getElementById('p4').style.color='orange';
				document.getElementById('5Plbl').innerHTML=localStorage.getItem("z5NAME"); document.getElementById('5Plbl').style.color='beige';				
				
		document.getElementById("p1HC").value = localStorage.getItem("z1HC");
			document.getElementById("p2HC").value = localStorage.getItem("z2HC");
			document.getElementById("p3HC").value = localStorage.getItem("z3HC");
			document.getElementById("p4HC").value = localStorage.getItem("z4HC");
			document.getElementById("p5HC").value = localStorage.getItem("z5HC");	
			
		for (var h = 1; h < 19; h++) {
				document.getElementById("p1h"+h).value = localStorage.getItem("z1H"+h+"s");
				document.getElementById("p2h"+h).value = localStorage.getItem("z2H"+h+"s");
				document.getElementById("p3h"+h).value = localStorage.getItem("z3H"+h+"s");
				document.getElementById("p4h"+h).value = localStorage.getItem("z4H"+h+"s");
					document.getElementById("p5h"+h).value = localStorage.getItem("z5H"+h+"s");
				//document.getElementById("p4h"+h).value = localStorage.getItem("z4H"+h+"s");
				//document.getElementById("p5h"+h).value = localStorage.getItem("z5H"+h+"s");
				
				// z2H1s | SPp2h1 | 'zSFp'+p+'h'+h:
				/*document.getElementById("SPp1h"+h).innerHTML = localStorage.getItem('zSFp1h'+h:);
				document.getElementById("SPp2h"+h).innerHTML = localStorage.getItem('zSFp2h'+h:);
				document.getElementById("SPp3h"+h).innerHTML = localStorage.getItem('zSFp3h'+h:);*/
				
				/*
				document.getElementById("SPp1h1").innerHTML = localStorage.getItem('zSFp1h1'); 
				document.getElementById("SPp2h1").innerHTML = localStorage.getItem('zSFp2h1');
				document.getElementById("SPp3h1").innerHTML = localStorage.getItem('zSFp3h1');
				document.getElementById("SPp4h1").innerHTML = localStorage.getItem('zSFp4h1');
				document.getElementById("SPp5h1").innerHTML = localStorage.getItem('zSFp5h1');
				*/
				document.getElementById("SPp1h"+h).innerHTML = localStorage.getItem('zSFp1h'+h); /* <<\/ * */
				document.getElementById("SPp2h"+h).innerHTML = localStorage.getItem('zSFp2h'+h);
				document.getElementById("SPp3h"+h).innerHTML = localStorage.getItem('zSFp3h'+h);
				document.getElementById("SPp4h"+h).innerHTML = localStorage.getItem('zSFp4h'+h);
				document.getElementById("SPp5h"+h).innerHTML = localStorage.getItem('zSFp5h'+h);
		}			
		
		//var VALz1H1s = localStorage.getItem("z1H1s");
		//alert("localStorage z1H1s = "+VALz1H1s;		//.value;
		
/*		
		var vG1h1s = localStorage.getItem("g1H1s");	var vG2h1s = localStorage.getItem("g2H1s");
		var vG3h1s = localStorage.getItem("g3H1s"); var vG4h1s = localStorage.getItem("g4H1s");
		var vG5h1s = localStorage.getItem("g5H1s");			
		var vG1h2s = localStorage.getItem("g1H2s");	var vG2h2s = localStorage.getItem("g2H2s");
		var vG3h2s = localStorage.getItem("g3H2s"); var vG4h2s = localStorage.getItem("g4H2s");
		var vG5h2s = localStorage.getItem("g5H2s");			
		var vG1h3s = localStorage.getItem("g1H3s");	var vG2h3s = localStorage.getItem("g2H3s"); 
		var vG3h3s = localStorage.getItem("g3H3s"); var vG4h3s = localStorage.getItem("g4H3s");
		var vG5h3s = localStorage.getItem("g5H3s");			
		
		
		alert("Will now try to put player3 H3 score (vG3h3s="+vG3h3s+") in it's input box (id='p3h3)!\n"+
			  "\t\t\t + others . . .\n\n"+
			  "vG2h1s = "+vG2h1s+" | vG2h2s = "+vG2h2s);

		document.getElementById("p1h1").value = vG1h1s; document.getElementById("p2h1").value = vG2h1s;
		document.getElementById("p3h1").value = vG3h1s; document.getElementById("p4h1").value = vG4h1s;
		document.getElementById("p5h1").value = vG5h1s;
		document.getElementById("p1h2").value = vG1h2s; document.getElementById("p2h2").value = vG2h2s;
		document.getElementById("p3h2").value = vG3h2s; document.getElementById("p4h2").value = vG4h2s;
		document.getElementById("p5h2").value = vG5h2s;
		document.getElementById("p1h3").value = vG1h3s; document.getElementById("p2h3").value = vG2h3s; 
		document.getElementById("p3h3").value = vG3h3s; document.getElementById("p4h3").value = vG4h3s;
		document.getElementById("p5h3").value = vG5h3s;
		
		document.getElementById("p1h4").value = localStorage.getItem("g1H4s");
			document.getElementById("p2h4").value = localStorage.getItem("g2H4s");
			document.getElementById("p3h4").value = localStorage.getItem("g3H4s");
			document.getElementById("p4h4").value = localStorage.getItem("g4H4s");
			document.getElementById("p5h4").value = localStorage.getItem("g5H4s");
		document.getElementById("p1h5").value = localStorage.getItem("g1H5s");
			document.getElementById("p2h5").value = localStorage.getItem("g2H5s");
			document.getElementById("p3h5").value = localStorage.getItem("g3H5s");
			document.getElementById("p4h5").value = localStorage.getItem("g4H5s");
			document.getElementById("p5h5").value = localStorage.getItem("g5H5s");			
		document.getElementById("p1h6").value = localStorage.getItem("g1H6s");
			document.getElementById("p2h6").value = localStorage.getItem("g2H6s");
			document.getElementById("p3h6").value = localStorage.getItem("g3H6s");
			document.getElementById("p4h6").value = localStorage.getItem("g4H6s");
			document.getElementById("p5h6").value = localStorage.getItem("g5H6s");
		document.getElementById("p1h7").value = localStorage.getItem("g1H7s");
			document.getElementById("p2h7").value = localStorage.getItem("g2H7s");
			document.getElementById("p3h7").value = localStorage.getItem("g3H7s");
			document.getElementById("p4h7").value = localStorage.getItem("g4H7s");
			document.getElementById("p5h7").value = localStorage.getItem("g5H7s");
		document.getElementById("p1h8").value = localStorage.getItem("g1H8s");
			document.getElementById("p2h8").value = localStorage.getItem("g2H8s");
			document.getElementById("p3h8").value = localStorage.getItem("g3H8s");
			document.getElementById("p4h8").value = localStorage.getItem("g4H8s");
			document.getElementById("p5h8").value = localStorage.getItem("g5H8s");
		document.getElementById("p1h9").value = localStorage.getItem("g1H9s");
			document.getElementById("p2h9").value = localStorage.getItem("g2H9s");
			document.getElementById("p3h9").value = localStorage.getItem("g3H9s");
			document.getElementById("p4h9").value = localStorage.getItem("g4H9s");
			document.getElementById("p5h9").value = localStorage.getItem("g5H9s");			
		for (var h = 10; h < 19; h++) {
				document.getElementById("p1h"+h).value = localStorage.getItem("g1H"+h+"s");
				document.getElementById("p2h"+h).value = localStorage.getItem("g2H"+h+"s");
				document.getElementById("p3h"+h).value = localStorage.getItem("g3H"+h+"s");
				document.getElementById("p4h"+h).value = localStorage.getItem("g4H"+h+"s");
				document.getElementById("p5h"+h).value = localStorage.getItem("g5H"+h+"s");						
		}
	
			
		//hideMENU();
*/			 		
	}
	
				/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
				
	function PLAYERentry() {
		alert("Will enter PLAYERS & HANDICAPS here . . .");
		document.getElementById('p1').innerHTML = "wH";
	}
	
	function hideMENU() {
		//document.getElementById("miscCONTENT").style.visibility="hidden";
		document.getElementById("menuCONTENT").style.visibility="hidden";
	}
	function showMENU(topic) {
		if (topic=="tipMENU") {
			document.getElementById("menuCONTENT").style.visibility="visible";
		}
		if (topic=="tipMENU") {
			document.getElementById("menuCONTENT").style.visibility="visible";
		}
	}

	function editPLAYERS() {
		//alert("Will dry to display player edit row . . .");
		if ( document.getElementById('PLAYERedit').style.display=="none" ) {
			document.getElementById('PLAYERedit').style.display=""; //shows the row!
			document.getElementById('HCedit').style.display=""; //shows the row!
		}
		else {
			document.getElementById('PLAYERedit').style.display="none"; //hides the row!
			document.getElementById('HCedit').style.display="none"; //hides the row!	
			/*if ( document.getElementById('p5').innerHTML=="-" )  {
				document.getElementById('p5h1').style.background='gray'; 
				document.getElementById('td5.2').style.background='gray'; 
				document.getElementById('td5.3').style.background='gray';
					document.getElementById('p5h3').style.background='gray'; 					
			}*/ 		
		}
	}
	
	function back9() {
		//alert("Will dry to display BACK 9 . . .");
		if ( document.getElementById('backNINE1').style.display=="none" ) {
			document.getElementById('BACKbtn').style.opacity="1.0";
			document.getElementById('backNINE1').style.display=""; //shows the row!
				document.getElementById('backNINE2').style.display="";
				document.getElementById('backNINE3').style.display="";
				document.getElementById('backNINE4').style.display="";
				document.getElementById('backNINE5').style.display="";
				document.getElementById('backNINE6').style.display="";
				document.getElementById('backNINE7').style.display="";
				document.getElementById('backNINE8').style.display="";
				document.getElementById('backNINE9').style.display="";	
					document.getElementById('back9tS').style.display="";
					document.getElementById('back9tP').style.display="";						
			document.getElementById('BACKbtn').style.background="yellow";
			document.getElementById('BACKbtn').style.color="black";
			document.getElementById('FRONTbtn').style.opacity="0.5";
			document.getElementById('FRONTbtn').style.background="black";
				document.getElementById('FRONTbtn').style.color="white";
				
			document.getElementById('frontNINE1').style.display="none"; //hides the row!
				document.getElementById('frontNINE2').style.display="none";
				document.getElementById('frontNINE3').style.display="none";
				document.getElementById('frontNINE4').style.display="none";
				document.getElementById('frontNINE5').style.display="none";
				document.getElementById('frontNINE6').style.display="none";
				document.getElementById('frontNINE7').style.display="none";
				document.getElementById('frontNINE8').style.display="none";
				document.getElementById('frontNINE9').style.display="none";	
					document.getElementById('front9tS').style.display="none";
					document.getElementById('front9tP').style.display="none";				
		}
/*		else {
			document.getElementById('backNINE1').style.display="none"; //hides the row!
				document.getElementById('backNINE2').style.display="none";
				document.getElementById('backNINE3').style.display="none";
				document.getElementById('backNINE4').style.display="none";
			document.getElementById('BACKbtn').style.background="black";
			document.getElementById('BACKbtn').style.color="white";
			document.getElementById('FRONTbtn').style.opacity="1.0";
			document.getElementById('BACKbtn').style.opacity="0.5";
		}
*/		
	}	
	function front9() {
		//alert("Will dry to display FRONT 9 . . .");
		if ( document.getElementById('frontNINE1').style.display=="none" ) {
			document.getElementById('FRONTbtn').style.opacity="1.0";
			document.getElementById('frontNINE1').style.display=""; //shows the row!
				document.getElementById('frontNINE2').style.display="";
				document.getElementById('frontNINE3').style.display="";
				document.getElementById('frontNINE4').style.display="";
				document.getElementById('frontNINE5').style.display="";
				document.getElementById('frontNINE6').style.display="";
				document.getElementById('frontNINE7').style.display="";
				document.getElementById('frontNINE8').style.display="";
				document.getElementById('frontNINE9').style.display="";		
					document.getElementById('front9tS').style.display="";
					document.getElementById('front9tP').style.display="";		
							
			document.getElementById('FRONTbtn').style.background="yellow";
			document.getElementById('FRONTbtn').style.color="black";
			document.getElementById('BACKbtn').style.opacity="0.5";
			document.getElementById('BACKbtn').style.background="black";
				document.getElementById('BACKbtn').style.color="white";
			
			document.getElementById('backNINE1').style.display="none"; //hides the row!
				document.getElementById('backNINE2').style.display="none";
				document.getElementById('backNINE3').style.display="none";
				document.getElementById('backNINE4').style.display="none";
				document.getElementById('backNINE5').style.display="none";			
				document.getElementById('backNINE6').style.display="none";			
				document.getElementById('backNINE7').style.display="none";			
				document.getElementById('backNINE8').style.display="none";			
				document.getElementById('backNINE9').style.display="none";	
					document.getElementById('back9tS').style.display="none";
					document.getElementById('back9tP').style.display="none";						
		}
/*		else {
			document.getElementById('frontNINE1').style.display="none"; //hides the row!
				document.getElementById('frontNINE2').style.display="none";
				document.getElementById('frontNINE3').style.display="none";
				document.getElementById('frontNINE4').style.display="none";
			document.getElementById('FRONTbtn').style.background="black";
			document.getElementById('FRONTbtn').style.color="white";
			document.getElementById('BACKbtn').style.opacity="1.0";
			document.getElementById('FRONTbtn').style.opacity="0.5";
		}
*/		
	}
	
	function displaySLIDER() {
		//alert("Will try to display SLIDER . . .");
		if ( document.getElementById('SLIDERinput').style.display=="none" ) {
			document.getElementById('SLIDERinput').style.display=""; //shows the row!
		}
		else {
			document.getElementById('SLIDERinput').style.display="none"; //hides the row!			
		}
	}	
	
	
	
 /*        &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& May/23 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&     */
 
 	function NextInput() {
		var currentInput = document.getElementById('p&h').value;
		//alert("Will try to > next input!\n\tcurrentInput = "+currentInput);
		
		var P1 = localStorage.getItem('z1NAME');
		var P2 = localStorage.getItem('z2NAME');
		var P3 = localStorage.getItem('z3NAME');
		var P4 = localStorage.getItem('z4NAME');
		var P5 = localStorage.getItem('z5NAME');
		
		/* To get the last N characters of a string in JavaScript, call the slice() method on the string, passing -N as an argument. For example, str. slice(-3) returns a new string containing the last 3 characters of str */
		//const cH = currentInput.slice(-1); // < current hole
		const iptARY = currentInput.split(" ");
		//const cHtAR = currentInput.split(" ");
			var cH = iptARY[1]; // <  // < current hole
			//alert ("current hole TEST (cHt) = "+cHt);
			/*if ( +cH == 9 ) {
				alert(" . . in cH > 9 if . .");
				cH = currentInput.slice(-2);
			}*/
		var nH = +cH + 1; // < next hole
		
		//const iptARY = currentInput.split(" ");
		var cP = iptARY[0]; // < current player
		/*alert("Current Hole = "+cH+"\t\t Next Hole = "+nH+"\nCurrent Player = "+cP+"\n\n"+
			  "P1 = "+P1+"\tP2 = '"+P2+"'\tP3 = '"+P3+"'");*/
			  
		if ( cP==P4 && P5!="" ) { 		/* P5!="" ) { */
			//alert("next input = "+P5+" "+cH); 
			document.getElementById('p&h').value = P5+" "+cH;		
		}
		else if ( cP==P3 && P4!="" ) { 
			//alert("next input = "+P4+" "+cH); 
			document.getElementById('p&h').value = P4+" "+cH;		
		}
		else if ( cP==P2 && P3!="" ) { 
			//alert("next input = "+P3+" "+cH); 
			document.getElementById('p&h').value = P3+" "+cH;		
		}
		else if ( cP==P1 && P2!="" ) { 
			//alert("next input = "+P2+" "+cH); 
			document.getElementById('p&h').value = P2+" "+cH;		
		}
		else { 
			alert("All players entered for hole "+cH+"! Go to hole "+nH+"."); 
			document.getElementById('p&h').value = P1+" "+nH;				
		}

		document.getElementById('check').style.visibility = 'hidden';	
		document.getElementById('myRange').value = 0;	//value="0" class="slider" id="myRange"
			document.getElementById('demo').innerHTML = 0; //id="demo"
		
	}	


	function EnterInput() {
		var currentInput = document.getElementById('p&h').value;
		//alert("Will try to ENTER input to 'localStorage'!\n\tcurrentInput = "+currentInput);
		
		var P1 = localStorage.getItem('z1NAME');
		var P2 = localStorage.getItem('z2NAME');
		var P3 = localStorage.getItem('z3NAME');
		var P4 = localStorage.getItem('z4NAME');
		var P5 = localStorage.getItem('z5NAME');
		
		const iptARY = currentInput.split(" ");
		var cH = iptARY[1]; // <  // < current hole	
			//const cH = currentInput.slice(-1); // < current hole
		
		var nH = +cH + 1; // < next hole
		//const iptARY = currentInput.split(" ");
		var cP = iptARY[0]; // < current player	
			var cPno;
			if (cP==P1) {cPno='1'};  if (cP==P2) {cPno='2'};  if (cP==P3) {cPno='3'};
			if (cP==P4) {cPno='4'};  if (cP==P5) {cPno='5'}; 
			//alert("cPno = "+cPno);
		
		const slideVAL = document.getElementById('myRange').value;
		//alert("Entered slider value = "+slideVAL);
		localStorage.setItem('z'+cPno+'H'+cH+'s',slideVAL);
			//localStorage.setItem('g3H4s',slideVAL);	
			alert("z"+cPno+"H"+cH+"s 'localStorage' value = "+localStorage.getItem('z'+cPno+'H'+cH+'s'));	
			
		document.getElementById('check').style.visibility = 'visible';	
				
		//document.getElementById('h'+cH+'p'+cPno).innerHTML = slideVAL;
		alert("slideVAL = "+slideVAL+"\n cP = "+cPno+"\ncH = "+cH);
		calcSF(slideVAL,cPno,cH);
				replace();
		//localStorage.getItem('zSFp1h'+h); /* <<\/ * */
		//calcSF(s,p,h)
		
	}

	function cellTOslide(P,H) {
		/*alert("Will try to get clicked cell P & H to display on slider frame!\n"+
			  "P = "+P+" | H = "+H);*/		
		var Pn;  // < Player NAME
		Pn = localStorage.getItem('z1NAME');
		//alert("Pn = "+Pn);			
		document.getElementById('p&h').value = Pn+" "+H;
	}
	
	function PrevInput() {
		var currentInput = document.getElementById('p&h').value;
		//alert("Will try to > PREVIOUS input!\n\tcurrentInput = "+currentInput);
		
		var P1 = localStorage.getItem('z1NAME');
		var P2 = localStorage.getItem('z2NAME');
		var P3 = localStorage.getItem('z3NAME');
		var P4 = localStorage.getItem('z4NAME');
		var P5 = localStorage.getItem('z5NAME');
		
		const iptARY = currentInput.split(" ");
		var cH = iptARY[1]; // <  // < current hole		
			//const cH = currentInput.slice(-1); // < current hole
			
		var nH = +cH + 1; // < next hole
		var pH = +cH - 1; // < PREVIOUS hole
		
		var cP = iptARY[0]; // < current player
		/*alert("Current Hole = "+cH+"\tPrevious/last Hole = "+pH+"\nCurrent Player = "+cP+"\n\n"+
			  "P1 = "+P1+"\tP2 = '"+P2+"'\tP4 = '"+P4+"'");*/

		if ( cP==P5 ) { 
			//alert("last input = "+P4+" "+cH); 
			document.getElementById('p&h').value = P4+" "+cH;		
		}
		else if ( cP==P4 ) { 
			//alert("last input = "+P3+" "+cH); 
			document.getElementById('p&h').value = P3+" "+cH;		
		}
		else if ( cP==P3 ) { 
			//alert("last input = "+P2+" "+cH); 
			document.getElementById('p&h').value = P2+" "+cH;		
		}	
		else if ( cP==P2 ) { 
			//alert("last input = "+P1+" "+cH); 
			document.getElementById('p&h').value = P1+" "+cH;		
		}	
		else { 
			//alert("?? last input prior to "+P1+" "+cH); 
			alert("Will go back to FIRST listed player of last hole!");
			document.getElementById('p&h').value = P1+" "+pH;	
			
		}
		
		/*	  
		if ( cP==P4 && P5!="" ) { 
			//alert("next input = "+P5+" "+cH); 
			document.getElementById('p&h').value = P5+" "+cH;		
		}
		*/	
		
		document.getElementById('check').style.visibility = 'hidden';
		document.getElementById('myRange').value = 0;	//value="0" class="slider" id="myRange"
			document.getElementById('demo').innerHTML = 0; //id="demo"
	}	
	
	function loadFN() {  
		document.getElementById('p&h').value = localStorage.getItem('g1NAME') + ' 2';
		document.getElementById('BACKbtn').style.opacity="0.5";
	}	

	function cellTOslide(P,H) {
		/*alert("Will try to get clicked cell P & H to display on slider frame!\n"+
			  "P = "+P+" | H = "+H);*/
		
		var Pn;  // < Player NAME
		Pn = localStorage.getItem('g1NAME');
		//alert("Pn = "+Pn);		
		

		document.getElementById('p&h').value = Pn+" "+H;
		
				/*
				alert("localStorage:\n"+
					  "\tH6/p1 = "+localStorage.getItem('g1H6s')+"\n"+
					  "\tH6/p2 = "+localStorage.getItem('g2H6s')+"\n"+
					  "\tH3/p1 = "+localStorage.getItem('g1H3s'));
				*/
	}
	
					/* ################################################################ */
					
	function calcFRONTtots() {
				//alert("Will now try to calculate TOTAL gross scores & Stableford points!");

		//P1 F9:			
		//let p1fTscr = +localStorage.getItem('z1H1s') + +localStorage.getItem('z1H2s') + +localStorage.getItem('z1H3s');
		//let p1fTsfp = +localStorage.getItem('zSFp1h1') + +localStorage.getItem('zSFp1h2') + +localStorage.getItem('zSFp1h3'); 
				//alert("p2fTscr = "+p2fTscr+"\np2fTsfp = "+p2fTsfp);
		let p1fTscr=0; let p1fTsfp=0;
		for (var h = 1; h < 10; h++) {
			p1fTscr = p1fTscr + +localStorage.getItem('z1H'+h+'s');
		}
		for (var h = 1; h < 10; h++) {
			p1fTsfp = p1fTsfp + +localStorage.getItem('zSFp1h'+h);
		}
		document.getElementById("p1fT").innerHTML = p1fTscr;	// < *
		document.getElementById("SPp1fT").innerHTML = p1fTsfp;	
			if ( p1fTsfp > 0 ) {
				document.getElementById("SPp1fT").style.color = 'lime';						
			}	
			
		//P2 F9:			
		let p2fTscr = 0;
		let p2fTsfp = 0; 
		for (var h = 1; h < 10; h++) {
			p2fTscr = p2fTscr + +localStorage.getItem('z2H'+h+'s');
		}
		for (var h = 1; h < 10; h++) {
			p2fTsfp = p2fTsfp + +localStorage.getItem('zSFp2h'+h);
		}
		document.getElementById("p2fT").innerHTML = p2fTscr;	
		document.getElementById("SPp2fT").innerHTML = p2fTsfp;	
			if ( p2fTsfp > 0 ) {
				document.getElementById("SPp2fT").style.color = 'lime';	
			}
			
		//P3 F9:			
		let p3fTscr = 0;
		let p3fTsfp = 0; 
		for (var h = 1; h < 10; h++) {
			p3fTscr = p3fTscr + +localStorage.getItem('z3H'+h+'s');
		}
		for (var h = 1; h < 10; h++) {
			p3fTsfp = p3fTsfp + +localStorage.getItem('zSFp3h'+h);
		}
		document.getElementById("p3fT").innerHTML = p3fTscr;	// < *
		document.getElementById("SPp3fT").innerHTML = p3fTsfp;						
			if ( p3fTsfp > 0 ) {
				document.getElementById("SPp3fT").style.color = 'lime';						
			}
			
		//P4 F9:			
		let p4fTscr = 0;
		let p4fTsfp = 0; 
		for (var h = 1; h < 10; h++) {
			p4fTscr = p4fTscr + +localStorage.getItem('z4H'+h+'s');
		}
		for (var h = 1; h < 10; h++) {
			p4fTsfp = p4fTsfp + +localStorage.getItem('zSFp4h'+h);
		}		
		document.getElementById("p4fT").innerHTML = p4fTscr;	// < *
		document.getElementById("SPp4fT").innerHTML = p4fTsfp;
			if ( p4fTsfp > 0 ) {
				document.getElementById("SPp4fT").style.color = 'lime';						
			}	

		//P5 F9:			
		let p5fTscr = 0;
		let p5fTsfp = 0; 
		for (var h = 1; h < 10; h++) {
			p5fTscr = p5fTscr + +localStorage.getItem('z5H'+h+'s');
		}
		for (var h = 1; h < 10; h++) {
			p5fTsfp = p5fTsfp + +localStorage.getItem('zSFp5h'+h);
		}		
		document.getElementById("p5fT").innerHTML = p5fTscr;	
		document.getElementById("SPp5fT").innerHTML = p5fTsfp;
			if ( p4fTsfp > 0 ) {
				document.getElementById("SPp5fT").style.color = 'lime';						
			}	

			
		document.getElementById("f9ptT").innerHTML =  p4fTsfp + p3fTsfp + p2fTsfp + p1fTsfp + p5fTsfp; //p5fTsfp + 
		document.getElementById("f9ptT").style.color = 'RED';									
										//f9ptT
		
		ptTperH();
		
	}
						/*	@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@	 */
						
	function p5T() {	// < UNUSED! (June5/23)
	     alert('p5 name = '+document.getElementById('p5').innerHTML); 
		 if(document.getElementById('p5').innerHTML=='-' || document.getElementById('p5').innerHTML=='T' ||document.getElementById('p5').innerHTML=='t' || document.getElementById('p5').innerHTML=='p5') {
				 document.getElementById('p5').innerHTML='T';
				 /*
				 document.getElementById('SPp5h1').innerHTML = +document.getElementById('SPp1h1').innerHTML + +document.getElementById('SPp2h1').innerHTML + +document.getElementById('SPp3h1').innerHTML + +document.getElementById('SPp4h1').innerHTML; 
				*/
				for (var h = 1; h < 10; h++) {
					document.getElementById('SPp5h'+h).innerHTML = +document.getElementById('SPp1h'+h).innerHTML + +document.getElementById('SPp2h'+h).innerHTML + +document.getElementById('SPp3h'+h).innerHTML + +document.getElementById('SPp4h'+h).innerHTML;  
					document.getElementById('p5h'+h).setAttribute('disabled', '');
				}
				
				//document.getElementById('p5h1').setAttribute('disabled', '');
				 	//document.getElementById('p5h1').style.background = 'slategray';
		 }
	 }
	
	function ptTperH() {
		for (var h = 1; h < 19; h++) {
			document.getElementById('SPtH'+h).innerHTML = +document.getElementById('SPp1h'+h).innerHTML + +document.getElementById('SPp2h'+h).innerHTML + +document.getElementById('SPp3h'+h).innerHTML + +document.getElementById('SPp4h'+h).innerHTML + +document.getElementById('SPp5h'+h).innerHTML;  //SPtH3
			//document.getElementById('p5h'+h).setAttribute('disabled', '');
		}
				
	}	 
	
	function restrictINPUT() {
		alert("Will try to restrict input columns for P4 &/or P3 when < 4 players.");
		//<input id="p4h1"
		//document.getElementById('TDp4h1').style.display = "none";
		
		//BLOCK P4:			//document.getElementById('p4h1').setAttribute('disabled', '');
		if ( document.getElementById('p4').innerText=="-" ) {
			for (var h = 1; h < 19; h++) {	
				document.getElementById('p4h'+h).setAttribute('disabled', '');	
				document.getElementById('p4h'+h).style.background = "slategray";
				document.getElementById('SPp4h'+h).style.background = "slategray";		//p4h1 | SPp4h1
			}
		}
		
		//BLOCK P3:	
		if ( document.getElementById('p3').innerHTML=="-" ) {
			for (var h = 1; h < 19; h++) {	
				document.getElementById('p3h'+h).setAttribute('disabled', '');	
				document.getElementById('p3h'+h).style.background = "slategray";
				document.getElementById('SPp3h'+h).style.background = "slategray";		//p4h1 | SPp4h1
			}		
		}
		
	}
	
	function calcBACKtots() {
				//alert("Will now try to calculate BACK 9 total gross scores & Stableford points!");
		//P1 B9:			
		let p1bTscr=0; let p1bTsfp=0;
		for (var h = 10; h < 19; h++) {
			p1bTscr = p1bTscr + +localStorage.getItem('z1H'+h+'s');
		}
		for (var h = 10; h < 19; h++) {
			p1bTsfp = p1bTsfp + +localStorage.getItem('zSFp1h'+h);
		}
		document.getElementById("p1bT").innerHTML = p1bTscr;	// < *
		document.getElementById("SPp1bT").innerHTML = p1bTsfp;	
			if ( p1bTsfp > 0 ) {
				document.getElementById("SPp1bT").style.color = 'lime';						
			}	

		//P2 B9:			
		let p2bTscr=0; let p2bTsfp=0;
		for (var h = 10; h < 19; h++) {
			p2bTscr = p2bTscr + +localStorage.getItem('z2H'+h+'s');
		}
		for (var h = 10; h < 19; h++) {
			p2bTsfp = p2bTsfp + +localStorage.getItem('zSFp2h'+h);
		}
		document.getElementById("p2bT").innerHTML = p2bTscr;	// < *
		document.getElementById("SPp2bT").innerHTML = p2bTsfp;	
			if ( p2bTsfp > 0 ) {
				document.getElementById("SPp2bT").style.color = 'lime';						
			}		

		//P3 B9:			
		let p3bTscr=0; let p3bTsfp=0;
		for (var h = 10; h < 19; h++) {
			p3bTscr = p3bTscr + +localStorage.getItem('z3H'+h+'s');
		}
		for (var h = 10; h < 19; h++) {
			p3bTsfp = p3bTsfp + +localStorage.getItem('zSFp3h'+h);
		}
		document.getElementById("p3bT").innerHTML = p3bTscr;	// < *
		document.getElementById("SPp3bT").innerHTML = p3bTsfp;	
			if ( p3bTsfp > 0 ) {
				document.getElementById("SPp3bT").style.color = 'lime';						
			}				

		//P4 B9:			
		let p4bTscr=0; let p4bTsfp=0;
		for (var h = 10; h < 19; h++) {
			p4bTscr = p4bTscr + +localStorage.getItem('z4H'+h+'s');
		}
		for (var h = 10; h < 19; h++) {
			p4bTsfp = p4bTsfp + +localStorage.getItem('zSFp4h'+h);
		}
		document.getElementById("p4bT").innerHTML = p4bTscr;	// < *
		document.getElementById("SPp4bT").innerHTML = p4bTsfp;	
			if ( p4bTsfp > 0 ) {
				document.getElementById("SPp4bT").style.color = 'lime';						
			}				
			
		//P5 B9:			
		let p5bTscr=0; let p5bTsfp=0;
		for (var h = 10; h < 19; h++) {
			p5bTscr = p5bTscr + +localStorage.getItem('z5H'+h+'s');
		}
		for (var h = 10; h < 19; h++) {
			p5bTsfp = p5bTsfp + +localStorage.getItem('zSFp5h'+h);
		}
		document.getElementById("p5bT").innerHTML = p5bTscr;	// < *
		document.getElementById("SPp5bT").innerHTML = p5bTsfp;	
			if ( p5bTsfp > 0 ) {
				document.getElementById("SPp5bT").style.color = 'lime';						
			}				
			
		document.getElementById("b9ptT").innerHTML =  p4bTsfp + p3bTsfp + p2bTsfp + p1bTsfp + p5bTsfp; //p5fTsfp + 
		document.getElementById("b9ptT").style.color = 'RED';									
										//f9ptT
		//ptTperH();
		/* p4T18 18scrT p5T18
		SPp1T18 18ptT SPp5T18 */
		document.getElementById("p1T18").innerHTML =  +document.getElementById("p1fT").innerHTML + +document.getElementById("p1bT").innerHTML;
		document.getElementById("SPp1T18").innerHTML =  +document.getElementById("SPp1fT").innerHTML + +document.getElementById("SPp1bT").innerHTML;
				document.getElementById("SPp1T18").style.color = 'lime';						
		
		document.getElementById("p2T18").innerHTML =  +document.getElementById("p2fT").innerHTML + +document.getElementById("p2bT").innerHTML;
		document.getElementById("SPp2T18").innerHTML =  +document.getElementById("SPp2fT").innerHTML + +document.getElementById("SPp2bT").innerHTML;
				document.getElementById("SPp2T18").style.color = 'lime';	
		
		document.getElementById("p3T18").innerHTML =  +document.getElementById("p3fT").innerHTML + +document.getElementById("p3bT").innerHTML;
		document.getElementById("SPp3T18").innerHTML =  +document.getElementById("SPp3fT").innerHTML + +document.getElementById("SPp3bT").innerHTML;
				document.getElementById("SPp3T18").style.color = 'lime';	
		
		document.getElementById("p4T18").innerHTML =  +document.getElementById("p4fT").innerHTML + +document.getElementById("p4bT").innerHTML;
		document.getElementById("SPp4T18").innerHTML =  +document.getElementById("SPp4fT").innerHTML + +document.getElementById("SPp4bT").innerHTML;
			document.getElementById("SPp4T18").style.color = 'lime';	
		
		document.getElementById("p5T18").innerHTML =  +document.getElementById("p5fT").innerHTML + +document.getElementById("p5bT").innerHTML;
		document.getElementById("SPp5T18").innerHTML =  +document.getElementById("SPp5fT").innerHTML + +document.getElementById("SPp5bT").innerHTML;
			document.getElementById("SPp5T18").style.color = 'lime';									
		
		document.getElementById("18ptT").innerHTML =  +document.getElementById("f9ptT").innerHTML +
		+document.getElementById("b9ptT").innerHTML;
		document.getElementById("18ptT").style.color = 'RED';									
		
			
	}	
	
	
	function showF9totals() {
		alert("Will try to display F9 totals above B9!");
		document.getElementById('front9tS').style.display="";
		document.getElementById('front9tP').style.display="";				
	}
	
	
	function strokeHoles() {
		alert("Will try to change TD colors re strokes player gets . . ");
		
					//HOLEhc = document.getElementById("HCPh1").innerHTML;
						/*alert("HOLEhc (H1) ="+document.getElementById("HCPh1").innerHTML+"\n"+
							  "PLAYERhc (p1HC) = " + +document.getElementById("p1HC").value);*/
		//if (  )
			for (var h = 1; h < 19; h++) {			  
				for (var p = 1; p < 5; p++) {
					if (+document.getElementById("p"+p+"HC").value-18 >= +document.getElementById("HCPh"+h).innerHTML) {
						document.getElementById(p+"Ph"+h+"td").style.background = "green";	//"slategray";
							document.getElementById("SPp"+p+"h"+h).style.color = "white";
					}
					else if (+document.getElementById("p"+p+"HC").value >= +document.getElementById("HCPh"+h).innerHTML) { 
						//if (h=5) {alert("h = 5 & HOLEhc = "+HOLEhc); }
						document.getElementById(p+"Ph"+h+"td").style.background = "lime";
					}
				}
			}	
		
			/* if (+document.getElementById("p1HC").value-18 >= +document.getElementById("HCPh"+h).innerHTML) {
						document.getElementById("1Ph"+h+"td").style.background = "green";	//"slategray";
							document.getElementById("SPp1h"+h).style.color = "white";
					}
					else if (+document.getElementById("p1HC").value >= +document.getElementById("HCPh"+h).innerHTML) { 
						//if (h=5) {alert("h = 5 & HOLEhc = "+HOLEhc); }
						document.getElementById("1Ph"+h+"td").style.background = "lime";
					}
			*/
			
			
	}
	
	function clearSAVED() {
		/*alert("Will CLEAR 'saved' inputs here!\n\n"+
			  "g1H1s PRE 'clear' = " + localStorage.getItem("g1H1s"));*/
		  let reply;
		  if (confirm("Are you SURE you want to CLEAR all 'saved' input?") == true) {
		    reply = "YES!";
		  } else {
		    reply = "NO!";
		  }
  		  alert(reply);
			  
		if ( reply=="YES!") {
			for (var h = 1; h < 19; h++) {
					for (var n = 1; n < 6; n++) {
						localStorage.setItem('z'+n+'H'+h+'s',""); document.getElementById("p"+n+"h"+h).value = "";
						
						document.getElementById('SPp'+n+'h'+h).innerHTML = 0;	
						localStorage.setItem('zSFp'+n+'h'+h, 0);
					}
			}
			
			//localStorage.setItem("DATE",""); document.getElementById("DATE").value = ""; 
			localStorage.setItem("z1NAME",""); document.getElementById("z1NAME").value = ""; 
				localStorage.setItem("z2NAME",""); document.getElementById("z2NAME").value = ""; 
				localStorage.setItem("z3NAME",""); document.getElementById("z3NAME").value = ""; 
				localStorage.setItem("z4NAME",""); document.getElementById("z4NAME").value = ""; 
				localStorage.setItem("z5NAME",""); document.getElementById("z5NAME").value = ""; 
			localStorage.setItem("z1HC",""); document.getElementById("z1HC").value = ""; 
				localStorage.setItem("z2HC",""); document.getElementById("z2HC").value = ""; 
				localStorage.setItem("z3HC",""); document.getElementById("z3HC").value = ""; 
				localStorage.setItem("z4HC",""); document.getElementById("z4HC").value = ""; 
				localStorage.setItem("z5HC",""); document.getElementById("z5HC").value = ""; 
				
			//for (var h = 1; h < 19; h++) {
			//	for (var p = 1; p < 6; p++) {
			//		alert("In 'clearSAVED' fn to try to clear ea hole's SF pts . .");
					//document.getElementById('SPp'+p+'h'+h).style.display = "none";
					//document.getElementById('SPp'+p+'h'+h).innerText = "";	
					//document.getElementById('SPp'+p+'h'+h).innerHTML = Hpts;	
			//	}
			//}
			
		}
		
		//alert("g1H1s POST 'clear' = " +  localStorage.getItem("g1H1s"));
		
		//hideMENU();		
	}	
	
	function remREADONLY() {
		alert("Will TRY to re-enable ALL inputs . . .");
		
				for (var h = 1; h < 19; h++) {
					for (var n = 1; n < 6; n++) {
						//document.getElementById('p'+n+'h'+h).setAttribute('readonly', 'false');
						document.getElementById('p'+n+'h'+h).readOnly = false;
					}
				}
		//document.getElementById('p'+p+'h'+h).setAttribute('readonly', 'true');
		
	}
	
		function freeze() {
			alert("Will FREEZE/UNFREEZE player course handicap input!");
			//document.getElementById("th").style.background = "white";			
			
			if ( document.getElementById("p1HC").disabled == false ) {
				document.getElementById("p1HC").disabled = true;	//"disabled";
					//document.getElementById("p1HC").style.background = "orange";
					document.getElementById("p1NAME").disabled = true;	
				document.getElementById("p2HC").disabled = true;	//"disabled";
					//document.getElementById("p2HC").style.background = "orange";
					document.getElementById("p2NAME").disabled = true;
				document.getElementById("p3HC").disabled = true;	//"disabled";
					//document.getElementById("p3HC").style.background = "orange";	
					document.getElementById("p3NAME").disabled = true;			
				document.getElementById("p4HC").disabled = true;	//"disabled";
					//document.getElementById("p4HC").style.background = "orange";
					document.getElementById("p4NAME").disabled = true;
				document.getElementById("p5HC").disabled = true;	//"disabled";
					//document.getElementById("p5HC").style.background = "orange";	
					document.getElementById("p5NAME").disabled = true;	
			}
			else {
				document.getElementById("p1HC").disabled = false;
					document.getElementById("p1NAME").disabled = false;	
				document.getElementById("p2HC").disabled = false;
					document.getElementById("p2NAME").disabled = false;
				document.getElementById("p3HC").disabled = false;
					document.getElementById("p3NAME").disabled = false;			
				document.getElementById("p4HC").disabled = false;
					document.getElementById("p4NAME").disabled = false;
				document.getElementById("p5HC").disabled = false;
					document.getElementById("p5NAME").disabled = false;					
			}
				
		}
		