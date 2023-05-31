
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
						
			alert("Hpts (post-calc) = "+Hpts);
			document.getElementById('SPp'+p+'h'+h).innerHTML = Hpts;	
					//document.getElementById(PTSid).innerHTML = Hpts;	
					//holePTtots();					
		}	
		  
	}
	
	
	  
	function calcTOTALS() {
				//alert("Will try to calculate TOTAL gross scores & Stableford points here!");

		//P1:				#######################
		let p1h1scr = document.getElementById("p1h1").value;
		let p1h2scr = document.getElementById("p1h2").value;
		let p1h3scr = document.getElementById("p1h3").value;		
		let p1h4scr = document.getElementById("p1h4").value;
		let p1h5scr = document.getElementById("p1h5").value;
		let p1h6scr = document.getElementById("p1h6").value;		
		let p1h7scr = document.getElementById("p1h7").value;
		let p1h8scr = document.getElementById("p1h8").value;
		let p1h9scr = document.getElementById("p1h9").value;				
		let p1TscrF9 = +p1h1scr + +p1h2scr + +p1h3scr + +p1h4scr + +p1h5scr + +p1h6scr + +p1h7scr + +p1h8scr + +p1h9scr;
		
		let p1h1sf = document.getElementById("SPp1h1").innerText; 
		let p1h2sf = document.getElementById("SPp1h2").innerText;
		let p1h3sf = document.getElementById("SPp1h3").innerText;		
		let p1h4sf = document.getElementById("SPp1h4").innerText;
		let p1h5sf = document.getElementById("SPp1h5").innerText;
		let p1h6sf = document.getElementById("SPp1h6").innerText;		
		let p1h7sf = document.getElementById("SPp1h7").innerText;
		let p1h8sf = document.getElementById("SPp1h8").innerText; 
		let p1h9sf = document.getElementById("SPp1h9").innerText;				
		let p1TsfF9 = +p1h1sf + +p1h2sf + +p1h3sf + +p1h4sf + +p1h5sf + +p1h6sf + +p1h7sf + +p1h8sf + +p1h9sf;	
		
		document.getElementById("gTf9p1").innerHTML = p1TscrF9;	//gTf9p1 |  sTf9p1
		document.getElementById("sTf9p1").innerHTML = p1TsfF9;				
				
		//P2:				#######################
		let p2h1scr = document.getElementById("p2h1").value;
		let p2h2scr = document.getElementById("p2h2").value;
		let p2h3scr = document.getElementById("p2h3").value;		
		let p2h4scr = document.getElementById("p2h4").value;
		let p2h5scr = document.getElementById("p2h5").value;
		let p2h6scr = document.getElementById("p2h6").value;		
		let p2h7scr = document.getElementById("p2h7").value;
		let p2h8scr = document.getElementById("p2h8").value;
		let p2h9scr = document.getElementById("p2h9").value;				
		let p2TscrF9 = +p2h1scr + +p2h2scr + +p2h3scr + +p2h4scr + +p2h5scr + +p2h6scr + +p2h7scr + +p2h8scr + +p2h9scr;
		
		let p2h1sf = document.getElementById("SPp2h1").innerText;  //document.getElementById("SPp2h1").value;
		let p2h2sf = document.getElementById("SPp2h2").innerText;
		let p2h3sf = document.getElementById("SPp2h3").innerText;		
		let p2h4sf = document.getElementById("SPp2h4").innerText;
		let p2h5sf = document.getElementById("SPp2h5").innerText;
		let p2h6sf = document.getElementById("SPp2h6").innerText;		
		let p2h7sf = document.getElementById("SPp2h7").innerText;
		let p2h8sf = document.getElementById("SPp2h8").innerText;
		let p2h9sf = document.getElementById("SPp2h9").innerText;				
		let p2TsfF9 = +p2h1sf + +p2h2sf + +p2h3sf + +p2h4sf + +p2h5sf + +p2h6sf + +p2h7sf + +p2h8sf + +p2h9sf;	
		
		/*alert("Will try to calculate TOTAL gross scores & Stableford points here!\n\n"+
			  "p2Tscr = "+p2Tscr+
			  "\np2Tpts = "+p2Tsf+" | p2h1sf = "+p2h1sf);*/		// < var not picked up from 'span'?  * *
		document.getElementById("gTf9p2").innerHTML = p2TscrF9;	//gTf9p2 |  sTf9p2
		document.getElementById("sTf9p2").innerHTML = p2TsfF9;
		
		//P3:				#######################
		let p3h1scr = document.getElementById("p3h1").value;
		let p3h2scr = document.getElementById("p3h2").value;
		let p3h3scr = document.getElementById("p3h3").value;		
		let p3h4scr = document.getElementById("p3h4").value;
		let p3h5scr = document.getElementById("p3h5").value;
		let p3h6scr = document.getElementById("p3h6").value;		
		let p3h7scr = document.getElementById("p3h7").value;
		let p3h8scr = document.getElementById("p3h8").value;
		let p3h9scr = document.getElementById("p3h9").value;				
		let p3TscrF9 = +p3h1scr + +p3h2scr + +p3h3scr + +p3h4scr + +p3h5scr + +p3h6scr + +p3h7scr + +p3h8scr + +p3h9scr;
		
		let p3h1sf = document.getElementById("SPp3h1").innerText; 
		let p3h2sf = document.getElementById("SPp3h2").innerText;
		let p3h3sf = document.getElementById("SPp3h3").innerText;		
		let p3h4sf = document.getElementById("SPp3h4").innerText;
		let p3h5sf = document.getElementById("SPp3h5").innerText;
		let p3h6sf = document.getElementById("SPp3h6").innerText;		
		let p3h7sf = document.getElementById("SPp3h7").innerText;
		let p3h8sf = document.getElementById("SPp3h8").innerText;
		let p3h9sf = document.getElementById("SPp3h9").innerText;				
		let p3TsfF9 = +p3h1sf + +p3h2sf + +p3h3sf + +p3h4sf + +p3h5sf + +p3h6sf + +p3h7sf + +p3h8sf + +p3h9sf;	
		
		document.getElementById("gTf9p3").innerHTML = p3TscrF9;	//gTf9p3 |  sTf9p3
		document.getElementById("sTf9p3").innerHTML = p3TsfF9;	

		//P4:				#######################
		let p4h1scr = document.getElementById("p4h1").value;
		let p4h2scr = document.getElementById("p4h2").value;
		let p4h3scr = document.getElementById("p4h3").value;		
		let p4h4scr = document.getElementById("p4h4").value;
		let p4h5scr = document.getElementById("p4h5").value;
		let p4h6scr = document.getElementById("p4h6").value;		
		let p4h7scr = document.getElementById("p4h7").value;
		let p4h8scr = document.getElementById("p4h8").value;
		let p4h9scr = document.getElementById("p4h9").value;				
		let p4TscrF9 = +p4h1scr + +p4h2scr + +p4h3scr + +p4h4scr + +p4h5scr + +p4h6scr + +p4h7scr + +p4h8scr + +p4h9scr;
		
		let p4h1sf = document.getElementById("SPp4h1").innerText; 
		let p4h2sf = document.getElementById("SPp4h2").innerText;
		let p4h3sf = document.getElementById("SPp4h3").innerText;		
		let p4h4sf = document.getElementById("SPp4h4").innerText;
		let p4h5sf = document.getElementById("SPp4h5").innerText;
		let p4h6sf = document.getElementById("SPp4h6").innerText;		
		let p4h7sf = document.getElementById("SPp4h7").innerText;
		let p4h8sf = document.getElementById("SPp4h8").innerText;
		let p4h9sf = document.getElementById("SPp4h9").innerText;				
		let p4TsfF9 = +p4h1sf + +p4h2sf + +p4h3sf + +p4h4sf + +p4h5sf + +p4h6sf + +p4h7sf + +p4h8sf + +p4h9sf;	
		
		document.getElementById("gTf9p4").innerHTML = p4TscrF9;	//gTf9p4 |  sTf9p4
		document.getElementById("sTf9p4").innerHTML = p4TsfF9;		

		//P5:				#######################
		let p5h1scr = document.getElementById("p5h1").value;
		let p5h2scr = document.getElementById("p5h2").value;
		let p5h3scr = document.getElementById("p5h3").value;		
		let p5h4scr = document.getElementById("p5h4").value;
		let p5h5scr = document.getElementById("p5h5").value;
		let p5h6scr = document.getElementById("p5h6").value;		
		let p5h7scr = document.getElementById("p5h7").value;
		let p5h8scr = document.getElementById("p5h8").value;
		let p5h9scr = document.getElementById("p5h9").value;				
		let p5TscrF9 = +p5h1scr + +p5h2scr + +p5h3scr + +p5h4scr + +p5h5scr + +p5h6scr + +p5h7scr + +p5h8scr + +p5h9scr;
		
		let p5h1sf = document.getElementById("SPp5h1").innerText; 
		let p5h2sf = document.getElementById("SPp5h2").innerText;
		let p5h3sf = document.getElementById("SPp5h3").innerText;		
		let p5h4sf = document.getElementById("SPp5h4").innerText;
		let p5h5sf = document.getElementById("SPp5h5").innerText;
		let p5h6sf = document.getElementById("SPp5h6").innerText;		
		let p5h7sf = document.getElementById("SPp5h7").innerText;
		let p5h8sf = document.getElementById("SPp5h8").innerText;
		let p5h9sf = document.getElementById("SPp5h9").innerText;				
		let p5TsfF9 = +p5h1sf + +p5h2sf + +p5h3sf + +p5h4sf + +p5h5sf + +p5h6sf + +p5h7sf + +p5h8sf + +p5h9sf;	
		
		document.getElementById("gTf9p5").innerHTML = p5TscrF9;	//gTf9p5 |  sTf9p5
		document.getElementById("sTf9p5").innerHTML = p5TsfF9;						

					/*    √√√√√√√√√√√√ \/ BACK 9 \/ √√√√√√√√√√√√√√√    */
					
		//P1 (b9):				#######################
		let p1h10scr = document.getElementById("p1h10").value;
		let p1h11scr = document.getElementById("p1h11").value;
		let p1h12scr = document.getElementById("p1h12").value;		
		let p1h13scr = document.getElementById("p1h13").value;
		let p1h14scr = document.getElementById("p1h14").value;
		let p1h15scr = document.getElementById("p1h15").value;		
		let p1h16scr = document.getElementById("p1h16").value;
		let p1h17scr = document.getElementById("p1h17").value;
		let p1h18scr = document.getElementById("p1h18").value;				
		let p1TscrB9 = +p1h10scr + +p1h11scr + +p1h12scr + +p1h13scr + +p1h14scr + +p1h15scr + +p1h16scr + +p1h17scr + +p1h18scr;
		
		let p1h10sf = document.getElementById("SPp1h10").innerText; 
		let p1h11sf = document.getElementById("SPp1h11").innerText;
		let p1h12sf = document.getElementById("SPp1h12").innerText;		
		let p1h13sf = document.getElementById("SPp1h13").innerText;
		let p1h14sf = document.getElementById("SPp1h14").innerText;
		let p1h15sf = document.getElementById("SPp1h15").innerText;		
		let p1h16sf = document.getElementById("SPp1h16").innerText;
		let p1h17sf = document.getElementById("SPp1h17").innerText; 
		let p1h18sf = document.getElementById("SPp1h18").innerText;				
		let p1TsfB9 = +p1h10sf + +p1h11sf + +p1h12sf + +p1h13sf + +p1h14sf + +p1h15sf + +p1h16sf + +p1h17sf + +p1h18sf;	
		
		/*document.getElementById("gTf9p1").innerHTML = p1TscrF9;	//gTf9p1 |  sTf9p1
		document.getElementById("sTf9p1").innerHTML = p1TsfF9;*/
		document.getElementById("gTb9p1").innerHTML = p1TscrB9;	//gTf9p5 |  sTf9p5
		document.getElementById("sTb9p1").innerHTML = p1TsfB9;								
		


		//P2 (b9):				#######################
		let p2h10scr = document.getElementById("p2h10").value;
		let p2h11scr = document.getElementById("p2h11").value;
		let p2h12scr = document.getElementById("p2h12").value;		
		let p2h13scr = document.getElementById("p2h13").value;
		let p2h14scr = document.getElementById("p2h14").value;
		let p2h15scr = document.getElementById("p2h15").value;		
		let p2h16scr = document.getElementById("p2h16").value;
		let p2h17scr = document.getElementById("p2h17").value;
		let p2h18scr = document.getElementById("p2h18").value;				
		let p2TscrB9 = +p2h10scr + +p2h11scr + +p2h12scr + +p2h13scr + +p2h14scr + +p2h15scr + +p2h16scr + +p2h17scr + +p2h18scr;
		
		let p2h10sf = document.getElementById("SPp2h10").innerText;  //document.getElementById("SPp2h1").value;
		let p2h11sf = document.getElementById("SPp2h11").innerText;
		let p2h12sf = document.getElementById("SPp2h12").innerText;		
		let p2h13sf = document.getElementById("SPp2h13").innerText;
		let p2h14sf = document.getElementById("SPp2h14").innerText;
		let p2h15sf = document.getElementById("SPp2h15").innerText;		
		let p2h16sf = document.getElementById("SPp2h16").innerText;
		let p2h17sf = document.getElementById("SPp2h17").innerText;
		let p2h18sf = document.getElementById("SPp2h18").innerText;				
		let p2TsfB9 = +p2h10sf + +p2h11sf + +p2h12sf + +p2h13sf + +p2h14sf + +p2h15sf + +p2h16sf + +p2h17sf + +p2h18sf;	
		
		/*alert("Will try to calculate TOTAL gross scores & Stableford points here!\n\n"+
			  "p2Tscr = "+p2Tscr+
			  "\np2Tpts = "+p2Tsf+" | p2h1sf = "+p2h1sf);*/		// < var not picked up from 'span'?  * *
		document.getElementById("gTb9p2").innerHTML = p2TscrB9;	//gTf9p2 |  sTf9p2
		document.getElementById("sTb9p2").innerHTML = p2TsfB9;
		
		//P3 (b9):				#######################
		let p3h10scr = document.getElementById("p3h10").value;
		let p3h11scr = document.getElementById("p3h11").value;
		let p3h12scr = document.getElementById("p3h12").value;		
		let p3h13scr = document.getElementById("p3h13").value;
		let p3h14scr = document.getElementById("p3h14").value;
		let p3h15scr = document.getElementById("p3h15").value;		
		let p3h16scr = document.getElementById("p3h16").value;
		let p3h17scr = document.getElementById("p3h17").value;
		let p3h18scr = document.getElementById("p3h18").value;				
		let p3TscrB9 = +p3h10scr + +p3h11scr + +p3h12scr + +p3h13scr + +p3h14scr + +p3h15scr + +p3h16scr + +p3h17scr + +p3h18scr;
		
		let p3h10sf = document.getElementById("SPp3h10").innerText; 
		let p3h11sf = document.getElementById("SPp3h11").innerText;
		let p3h12sf = document.getElementById("SPp3h12").innerText;		
		let p3h13sf = document.getElementById("SPp3h13").innerText;
		let p3h14sf = document.getElementById("SPp3h14").innerText;
		let p3h15sf = document.getElementById("SPp3h15").innerText;		
		let p3h16sf = document.getElementById("SPp3h16").innerText;
		let p3h17sf = document.getElementById("SPp3h17").innerText;
		let p3h18sf = document.getElementById("SPp3h18").innerText;				
		let p3TsfB9 = +p3h10sf + +p3h11sf + +p3h12sf + +p3h13sf + +p3h14sf + +p3h15sf + +p3h16sf + +p3h17sf + +p3h18sf;	
		
		document.getElementById("gTb9p3").innerHTML = p3TscrB9;	//gTf9p3 |  sTf9p3
		document.getElementById("sTb9p3").innerHTML = p3TsfB9;	

		//P4 (b9):				#######################
		let p4h10scr = document.getElementById("p4h10").value;
		let p4h11scr = document.getElementById("p4h11").value;
		let p4h12scr = document.getElementById("p4h12").value;		
		let p4h13scr = document.getElementById("p4h13").value;
		let p4h14scr = document.getElementById("p4h14").value;
		let p4h15scr = document.getElementById("p4h15").value;		
		let p4h16scr = document.getElementById("p4h16").value;
		let p4h17scr = document.getElementById("p4h17").value;
		let p4h18scr = document.getElementById("p4h18").value;				
		let p4TscrB9 = +p4h10scr + +p4h11scr + +p4h12scr + +p4h13scr + +p4h14scr + +p4h15scr + +p4h16scr + +p4h17scr + +p4h18scr;
		
		let p4h10sf = document.getElementById("SPp4h10").innerText; 
		let p4h11sf = document.getElementById("SPp4h11").innerText;
		let p4h12sf = document.getElementById("SPp4h12").innerText;		
		let p4h13sf = document.getElementById("SPp4h13").innerText;
		let p4h14sf = document.getElementById("SPp4h14").innerText;
		let p4h15sf = document.getElementById("SPp4h15").innerText;		
		let p4h16sf = document.getElementById("SPp4h16").innerText;
		let p4h17sf = document.getElementById("SPp4h17").innerText;
		let p4h18sf = document.getElementById("SPp4h18").innerText;				
		let p4TsfB9 = +p4h10sf + +p4h11sf + +p4h12sf + +p4h13sf + +p4h14sf + +p4h15sf + +p4h16sf + +p4h17sf + +p4h18sf;	
		
		document.getElementById("gTb9p4").innerHTML = p4TscrB9;	//gTf9p4 |  sTf9p4
		document.getElementById("sTb9p4").innerHTML = p4TsfB9;		

		//P5 (b9):				#######################
		let p5h10scr = document.getElementById("p5h10").value;
		let p5h11scr = document.getElementById("p5h11").value;
		let p5h12scr = document.getElementById("p5h12").value;		
		let p5h13scr = document.getElementById("p5h13").value;
		let p5h14scr = document.getElementById("p5h14").value;
		let p5h15scr = document.getElementById("p5h15").value;		
		let p5h16scr = document.getElementById("p5h16").value;
		let p5h17scr = document.getElementById("p5h17").value;
		let p5h18scr = document.getElementById("p5h18").value;				
		let p5TscrB9 = +p5h10scr + +p5h11scr + +p5h12scr + +p5h13scr + +p5h14scr + +p5h15scr + +p5h16scr + +p5h17scr + +p5h18scr;
		
		let p5h10sf = document.getElementById("SPp5h10").innerText; 
		let p5h11sf = document.getElementById("SPp5h11").innerText;
		let p5h12sf = document.getElementById("SPp5h12").innerText;		
		let p5h13sf = document.getElementById("SPp5h13").innerText;
		let p5h14sf = document.getElementById("SPp5h14").innerText;
		let p5h15sf = document.getElementById("SPp5h15").innerText;		
		let p5h16sf = document.getElementById("SPp5h16").innerText;
		let p5h17sf = document.getElementById("SPp5h17").innerText;
		let p5h18sf = document.getElementById("SPp5h18").innerText;				
		let p5TsfB9 = +p5h10sf + +p5h11sf + +p5h12sf + +p5h13sf + +p5h14sf + +p5h15sf + +p5h16sf + +p5h17sf + +p5h18sf;	
		
		document.getElementById("gTb9p5").innerHTML = p5TscrB9;	//gTf9p5 |  sTf9p5
		document.getElementById("sTb9p5").innerHTML = p5TsfB9;								
		
					/*    √√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√.   */		
		
		document.getElementById("sTf9gp").innerHTML = +p1TsfF9 + +p2TsfF9 + +p3TsfF9 + +p4TsfF9 + +p5TsfF9;	
		document.getElementById("sTb9gp").innerHTML = +p1TsfB9 + +p2TsfB9 + +p3TsfB9 + +p4TsfB9 + +p5TsfB9;	
		document.getElementById("sT18gp").innerHTML = +p1TsfB9 + +p2TsfB9 + +p3TsfB9 + +p4TsfB9 + +p5TsfB9 + +p1TsfF9 + +p2TsfF9 + +p3TsfF9 + +p4TsfF9 + +p5TsfF9;	
					
		document.getElementById("gT18p1").innerHTML = +p1TscrF9 + +p1TscrB9;	
			document.getElementById("sT18p1").innerHTML = +p1TsfF9 + +p1TsfB9;			
		document.getElementById("gT18p2").innerHTML = +p2TscrF9 + +p2TscrB9;	
			document.getElementById("sT18p2").innerHTML = +p2TsfF9 + +p2TsfB9;			
		document.getElementById("gT18p3").innerHTML = +p3TscrF9 + +p3TscrB9;	
			document.getElementById("sT18p3").innerHTML = +p3TsfF9 + +p3TsfB9;
		document.getElementById("gT18p4").innerHTML = +p4TscrF9 + +p4TscrB9;	
			document.getElementById("sT18p4").innerHTML = +p4TsfF9 + +p4TsfB9;						
		document.getElementById("gT18p5").innerHTML = +p5TscrF9 + +p5TscrB9;	
			document.getElementById("sT18p5").innerHTML = +p5TsfF9 + +p5TsfB9;		

		document.getElementById("SPgpH1").innerHTML = +p1h1sf + +p2h1sf + +p3h1sf + +p4h1sf + +p5h1sf; 
		document.getElementById("SPgpH2").innerHTML = +p1h2sf + +p2h2sf + +p3h2sf + +p4h2sf + +p5h2sf; 
		document.getElementById("SPgpH3").innerHTML = +p1h3sf + +p2h3sf + +p3h3sf + +p4h3sf + +p5h3sf;
		document.getElementById("SPgpH4").innerHTML = +p1h4sf + +p2h4sf + +p3h4sf + +p4h4sf + +p5h4sf; 
		document.getElementById("SPgpH5").innerHTML = +p1h5sf + +p2h5sf + +p3h5sf + +p4h5sf + +p5h5sf; 
		document.getElementById("SPgpH6").innerHTML = +p1h6sf + +p2h6sf + +p3h6sf + +p4h6sf + +p5h6sf; 
		document.getElementById("SPgpH7").innerHTML = +p1h7sf + +p2h7sf + +p3h7sf + +p4h7sf + +p5h7sf; 
		document.getElementById("SPgpH8").innerHTML = +p1h8sf + +p2h8sf + +p3h8sf + +p4h8sf + +p5h8sf; 
		document.getElementById("SPgpH9").innerHTML = +p1h9sf + +p2h9sf + +p3h9sf + +p4h9sf + +p5h9sf;  
		document.getElementById("SPgpH10").innerHTML = +p1h10sf + +p2h10sf + +p3h10sf + +p4h10sf + +p5h10sf;
		document.getElementById("SPgpH11").innerHTML = +p1h11sf + +p2h11sf + +p3h11sf + +p4h11sf + +p5h11sf; 
		document.getElementById("SPgpH12").innerHTML = +p1h12sf + +p2h12sf + +p3h12sf + +p4h12sf + +p5h12sf; 
		document.getElementById("SPgpH13").innerHTML = +p1h13sf + +p2h13sf + +p3h13sf + +p4h13sf + +p5h13sf; 
		document.getElementById("SPgpH14").innerHTML = +p1h14sf + +p2h14sf + +p3h14sf + +p4h14sf + +p5h14sf; 
		document.getElementById("SPgpH15").innerHTML = +p1h15sf + +p2h15sf + +p3h15sf + +p4h15sf + +p5h15sf; 
		document.getElementById("SPgpH16").innerHTML = +p1h16sf + +p2h16sf + +p3h16sf + +p4h16sf + +p5h16sf; 
		document.getElementById("SPgpH17").innerHTML = +p1h17sf + +p2h17sf + +p3h17sf + +p4h17sf + +p5h17sf; 
		document.getElementById("SPgpH18").innerHTML = +p1h18sf + +p2h18sf + +p3h18sf + +p4h18sf + +p5h18sf;  		

		hideMENU();
		
	}	  
	