
	function calcSF(s,p,h) {
		/* alert("Calculating Stableford points . . .\n"+
			  "score (s) = "+s+" | player (p) = "+p+" \n hole (h) = "+h); */			  
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
			
			alert("POINTS localStorage = "+localStorage.getItem('zSFp'+p+'h'+h));
	
			document.getElementById('SPp'+p+'h'+h).innerHTML = Hpts;	

			document.getElementById('SPp5h1').innerHTML = +document.getElementById('SPp5h1').innerHTML + +Hpts;  
									/* ^^ * */
								//+document.getElementById('SPp'+p+'h5').innerHTML +    +Hpts;				
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
				document.getElementById('p5').innerHTML=localStorage.getItem("z5NAME"); document.getElementById('p5').style.color='silver';				
				
		document.getElementById("p1HC").value = localStorage.getItem("z1HC");
			document.getElementById("p2HC").value = localStorage.getItem("z2HC");
			document.getElementById("p3HC").value = localStorage.getItem("z3HC");
			document.getElementById("p4HC").value = localStorage.getItem("z4HC");
			document.getElementById("p5HC").value = localStorage.getItem("z5HC");	
			
		for (var h = 1; h < 3; h++) {
				document.getElementById("p1h"+h).value = localStorage.getItem("z1H"+h+"s");
				document.getElementById("p2h"+h).value = localStorage.getItem("z2H"+h+"s");
				document.getElementById("p3h"+h).value = localStorage.getItem("z3H"+h+"s");
				document.getElementById("p4h"+h).value = localStorage.getItem("z4H"+h+"s");
				//document.getElementById("p4h"+h).value = localStorage.getItem("z4H"+h+"s");
				//document.getElementById("p5h"+h).value = localStorage.getItem("z5H"+h+"s");
				
				// z2H1s | SPp2h1 | 'zSFp'+p+'h'+h:
				/*document.getElementById("SPp1h"+h).innerHTML = localStorage.getItem('zSFp1h'+h:);
				document.getElementById("SPp2h"+h).innerHTML = localStorage.getItem('zSFp2h'+h:);
				document.getElementById("SPp3h"+h).innerHTML = localStorage.getItem('zSFp3h'+h:);*/
				document.getElementById("SPp1h1").innerHTML = localStorage.getItem('zSFp1h1'); /* <<\/ * */
				document.getElementById("SPp2h1").innerHTML = localStorage.getItem('zSFp2h1');
				document.getElementById("SPp3h1").innerHTML = localStorage.getItem('zSFp3h1');
				document.getElementById("SPp4h1").innerHTML = localStorage.getItem('zSFp4h1');
				document.getElementById("SPp5h1").innerHTML = localStorage.getItem('zSFp5h1');
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