	function DROP() {		//alert("Working on 'DROP' function . . .");
							/*						
							for (var p = 1; p < 6; p++) {
								for (var h = 1; h < 19; h++) {
									document.getElementById('TDp'+p+'h'+h).style.background = "black";
								}
							}	
							*/
		//alert("Will insert code to 'drop' a player here.");

		pl1 = document.getElementById("p1NAME").value;
		pl2 = document.getElementById("p2NAME").value;
		pl3 = document.getElementById("p3NAME").value;
		pl4 = document.getElementById("p4NAME").value;
		pl5 = document.getElementById("p5NAME").value;
		
		//H1ptT = +document.getElementById("SPp1h1").innerText + +document.getElementById("SPp2h1").innerText + +document.getElementById("SPp3h1").innerText + +document.getElementById("SPp4h1").innerText + +document.getElementById("SPp5h1").innerText;
		//H2ptT = +document.getElementById("SPp1h2").innerText + +document.getElementById("SPp2h2").innerText + +document.getElementById("SPp3h2").innerText + +document.getElementById("SPp4h2").innerText + +document.getElementById("SPp5h2").innerText;
		//H3ptT = +document.getElementById("SPp1h3").innerText + +document.getElementById("SPp2h3").innerText + +document.getElementById("SPp3h3").innerText + +document.getElementById("SPp4h3").innerText + +document.getElementById("SPp5h3").innerText;		
		//alert("Player to be dropped: "+Dp+"\n"+"H1ptT = "+H1ptT);


		Dp = document.getElementById("pDROPPED").value;
		var newH1ptT; var newH2ptT; var newH3ptT; var newH4ptT; var newH5ptT; var newH6ptT; var newH7ptT; var newH8ptT; var newH9ptT;
		
		var H1ptT = document.getElementById("SPtH1").innerHTML; 
		var H2ptT = document.getElementById("SPtH2").innerHTML;
		var H3ptT = document.getElementById("SPtH3").innerHTML;
		var H4ptT = document.getElementById("SPtH4").innerHTML;
		var H5ptT = document.getElementById("SPtH5").innerHTML;
		var H6ptT = document.getElementById("SPtH6").innerHTML;
		var H7ptT = document.getElementById("SPtH7").innerHTML;
		var H8ptT = document.getElementById("SPtH8").innerHTML;
		var H9ptT = document.getElementById("SPtH9").innerHTML;
		var H10ptT = document.getElementById("SPtH10").innerHTML;
		var H11ptT = document.getElementById("SPtH11").innerHTML;
		var H12ptT = document.getElementById("SPtH12").innerHTML;
		var H13ptT = document.getElementById("SPtH13").innerHTML;
		var H14ptT = document.getElementById("SPtH14").innerHTML;
		var H15ptT = document.getElementById("SPtH15").innerHTML;
		var H16ptT = document.getElementById("SPtH16").innerHTML;
		var H17ptT = document.getElementById("SPtH17").innerHTML;
		var H18ptT = document.getElementById("SPtH18").innerHTML;
		
		//alert("Dp = "+Dp+" | pl3 = "+pl3);
		//for (var h = 1; h < 4; h++) {
			//alert("hole = "+h);
			if (Dp == pl1) {
				//alert("Dp = "+pl1)
				newH1ptT = H1ptT - +document.getElementById("SPp1h1").innerText;
				newH2ptT = H2ptT - +document.getElementById("SPp1h2").innerText;
				newH3ptT = H3ptT - +document.getElementById("SPp1h3").innerText;
				newH4ptT = H4ptT - +document.getElementById("SPp1h4").innerText;
				newH5ptT = H5ptT - +document.getElementById("SPp1h5").innerText;	
				newH6ptT = H6ptT - +document.getElementById("SPp1h6").innerText;
				newH7ptT = H7ptT - +document.getElementById("SPp1h7").innerText;
				newH8ptT = H8ptT - +document.getElementById("SPp1h8").innerText;
				newH9ptT = H9ptT - +document.getElementById("SPp1h9").innerText;
				newH10ptT = H10ptT - +document.getElementById("SPp1h10").innerText;
				newH11ptT = H11ptT - +document.getElementById("SPp1h11").innerText;
				newH12ptT = H12ptT - +document.getElementById("SPp1h12").innerText;
				newH13ptT = H13ptT - +document.getElementById("SPp1h13").innerText;
				newH14ptT = H14ptT - +document.getElementById("SPp1h14").innerText;
				newH15ptT = H15ptT - +document.getElementById("SPp1h15").innerText;
				newH16ptT = H16ptT - +document.getElementById("SPp1h16").innerText;
				newH17ptT = H17ptT - +document.getElementById("SPp1h17").innerText;
				newH18ptT = H18ptT - +document.getElementById("SPp1h18").innerText;
			}
			if (Dp == pl2) {
				//alert("Dp = "+pl2)
				newH1ptT = H1ptT - +document.getElementById("SPp2h1").innerText;
				newH2ptT = H2ptT - +document.getElementById("SPp2h2").innerText;	
				newH3ptT = H3ptT - +document.getElementById("SPp2h3").innerText;
				newH4ptT = H4ptT - +document.getElementById("SPp2h4").innerText;
				newH5ptT = H5ptT - +document.getElementById("SPp2h5").innerText;
				newH6ptT = H6ptT - +document.getElementById("SPp2h6").innerText;
				newH7ptT = H7ptT - +document.getElementById("SPp2h7").innerText;
				newH8ptT = H8ptT - +document.getElementById("SPp2h8").innerText;
				newH9ptT = H9ptT - +document.getElementById("SPp2h9").innerText;
				newH10ptT = H10ptT - +document.getElementById("SPp2h10").innerText;
				newH11ptT = H11ptT - +document.getElementById("SPp2h11").innerText;
				newH12ptT = H12ptT - +document.getElementById("SPp2h12").innerText;
				newH13ptT = H13ptT - +document.getElementById("SPp2h13").innerText;
				newH14ptT = H14ptT - +document.getElementById("SPp2h14").innerText;
				newH15ptT = H15ptT - +document.getElementById("SPp2h15").innerText;
				newH16ptT = H16ptT - +document.getElementById("SPp2h16").innerText;
				newH17ptT = H17ptT - +document.getElementById("SPp2h17").innerText;
				newH18ptT = H18ptT - +document.getElementById("SPp2h18").innerText;
			}
			if (Dp == pl3) {
				//alert("Dp = "+pl3);
				/*for (var h = 1; h < 19; h++) {
					newH+h+ptT = H+h+ptT - +document.getElementById("SPp3h"+h).innerText;
				}*/
				newH1ptT = H1ptT - +document.getElementById("SPp3h1").innerText;
				newH2ptT = H2ptT - +document.getElementById("SPp3h2").innerText;
				newH3ptT = H3ptT - +document.getElementById("SPp3h3").innerText;
				newH4ptT = H4ptT - +document.getElementById("SPp3h4").innerText;
				newH5ptT = H5ptT - +document.getElementById("SPp3h5").innerText;
				newH6ptT = H6ptT - +document.getElementById("SPp3h6").innerText;
				newH7ptT = H7ptT - +document.getElementById("SPp3h7").innerText;
				newH8ptT = H8ptT - +document.getElementById("SPp3h8").innerText;
				newH9ptT = H9ptT - +document.getElementById("SPp3h9").innerText;
				newH10ptT = H10ptT - +document.getElementById("SPp3h10").innerText;
				newH11ptT = H11ptT - +document.getElementById("SPp3h11").innerText;
				newH12ptT = H12ptT - +document.getElementById("SPp3h12").innerText;
				newH13ptT = H13ptT - +document.getElementById("SPp3h13").innerText;
				newH14ptT = H14ptT - +document.getElementById("SPp3h14").innerText;
				newH15ptT = H15ptT - +document.getElementById("SPp3h15").innerText;
				newH16ptT = H16ptT - +document.getElementById("SPp3h16").innerText;
				newH17ptT = H17ptT - +document.getElementById("SPp3h17").innerText;
				newH18ptT = H18ptT - +document.getElementById("SPp3h18").innerText;
			}
			if (Dp == pl4) {
				//alert("Dp = "+pl4);
				newH1ptT = H1ptT - +document.getElementById("SPp4h1").innerText;
				newH2ptT = H2ptT - +document.getElementById("SPp4h2").innerText;
				newH3ptT = H3ptT - +document.getElementById("SPp4h3").innerText;
				newH4ptT = H4ptT - +document.getElementById("SPp4h4").innerText;
				newH5ptT = H5ptT - +document.getElementById("SPp4h5").innerText;
				newH6ptT = H6ptT - +document.getElementById("SPp4h6").innerText;
				newH7ptT = H7ptT - +document.getElementById("SPp4h7").innerText;
				newH8ptT = H8ptT - +document.getElementById("SPp4h8").innerText;
				newH9ptT = H9ptT - +document.getElementById("SPp4h9").innerText;
				newH10ptT = H10ptT - +document.getElementById("SPp4h10").innerText;
				newH11ptT = H11ptT - +document.getElementById("SPp4h11").innerText;
				newH12ptT = H12ptT - +document.getElementById("SPp4h12").innerText;
				newH13ptT = H13ptT - +document.getElementById("SPp4h13").innerText;
				newH14ptT = H14ptT - +document.getElementById("SPp4h14").innerText;
				newH15ptT = H15ptT - +document.getElementById("SPp4h15").innerText;
				newH16ptT = H16ptT - +document.getElementById("SPp4h16").innerText;
				newH17ptT = H17ptT - +document.getElementById("SPp4h17").innerText;
				newH18ptT = H18ptT - +document.getElementById("SPp4h18").innerText;
			}
			if (Dp == pl5) {
				//alert("Dp = "+pl5);
				newH1ptT = H1ptT - +document.getElementById("SPp5h1").innerText;
				newH2ptT = H2ptT - +document.getElementById("SPp5h2").innerText;
				newH3ptT = H3ptT - +document.getElementById("SPp5h3").innerText;
				newH4ptT = H4ptT - +document.getElementById("SPp5h4").innerText;
				newH5ptT = H5ptT - +document.getElementById("SPp5h5").innerText;	
				newH6ptT = H6ptT - +document.getElementById("SPp5h6").innerText;
				newH7ptT = H7ptT - +document.getElementById("SPp5h7").innerText;
				newH8ptT = H8ptT - +document.getElementById("SPp5h8").innerText;
				newH9ptT = H9ptT - +document.getElementById("SPp5h9").innerText;
				newH10ptT = H10ptT - +document.getElementById("SPp5h10").innerText;
				newH11ptT = H11ptT - +document.getElementById("SPp5h11").innerText;
				newH12ptT = H12ptT - +document.getElementById("SPp5h12").innerText;
				newH13ptT = H13ptT - +document.getElementById("SPp5h13").innerText;
				newH14ptT = H14ptT - +document.getElementById("SPp5h14").innerText;
				newH15ptT = H15ptT - +document.getElementById("SPp5h15").innerText;
				newH16ptT = H16ptT - +document.getElementById("SPp5h16").innerText;
				newH17ptT = H17ptT - +document.getElementById("SPp5h17").innerText;
				newH18ptT = H18ptT - +document.getElementById("SPp5h18").innerText;
			}			
			if (Dp == "") {
				//alert("Dp = "+"");
				newH1ptT = H1ptT; newH2ptT = H2ptT; newH3ptT = H3ptT; newH4ptT = H4ptT; newH5ptT = H5ptT;
				newH6ptT = H6ptT; newH7ptT = H7ptT; newH8ptT = H8ptT; newH9ptT = H9ptT; 
				newH10ptT = H10ptT;
				newH11ptT = H11ptT; newH12ptT = H12ptT; newH13ptT = H13ptT; newH14ptT = H14ptT; newH15ptT = H15ptT;
				newH16ptT = H16ptT; newH17ptT = H17ptT; newH18ptT = H18ptT;
			}
			
		alert("Player to be dropped: "+Dp+"\n"+"H1ptT = "+H1ptT+" | newH1ptT = "+newH1ptT);
					  /* Problem if pt is minus (-)!
					  	 BUT - max = par + HCP strokes + 2 > net dbl bogey > 0 so should be OK. */
						 
		document.getElementById("H1ptT").innerText = newH1ptT;	
		document.getElementById("H2ptT").innerText = newH2ptT;	
		document.getElementById("H3ptT").innerText = newH3ptT;	
		document.getElementById("H4ptT").innerText = newH4ptT;	
		document.getElementById("H5ptT").innerText = newH5ptT;	
		document.getElementById("H6ptT").innerText = newH6ptT;	
		document.getElementById("H7ptT").innerText = newH7ptT;	
		document.getElementById("H8ptT").innerText = newH8ptT;	
		document.getElementById("H9ptT").innerText = newH9ptT;	
		document.getElementById("H10ptT").innerText = newH10ptT;
		document.getElementById("H11ptT").innerText = newH11ptT;	
		document.getElementById("H12ptT").innerText = newH12ptT;	
		document.getElementById("H13ptT").innerText = newH13ptT;	
		document.getElementById("H14ptT").innerText = newH14ptT;	
		document.getElementById("H15ptT").innerText = newH15ptT;	
		document.getElementById("H16ptT").innerText = newH16ptT;	
		document.getElementById("H17ptT").innerText = newH17ptT;	
		document.getElementById("H18ptT").innerText = newH18ptT;
	
		var newF9t = +newH1ptT + +newH2ptT + +newH3ptT + +newH4ptT + +newH5ptT + +newH6ptT + +newH7ptT + +newH8ptT + +newH9ptT;	//alert("newF9t = "+newF9t);
		var newB9t = +newH10ptT + +newH11ptT + +newH12ptT + +newH13ptT + +newH14ptT + +newH15ptT + +newH16ptT + +newH17ptT + +newH18ptT;
		var new18t = +newF9t + +newB9t;
		document.getElementById("Df9ptT").innerText = newF9t;	//newH18ptT;  f9ptT
		document.getElementById("Db9ptT").innerText = newB9t;	//newH18ptT;
		document.getElementById("D18ptT").innerText = new18t;	//newH18ptT;	
	
			document.getElementById("DROPcheck").style.visibility = "visible";			
			document.getElementById("pDone").innerText = Dp;		
			document.getElementById("pDone").style.visibility = "visible";
			//document.getElementById("pDROPPED").value = "";		
			
							/*	
							if (Dp == pl1) {	
								for (var h = 1; h < 19; h++) {
									document.getElementById('TDp1h'+h).style.background = "gray";
								}			
							}
							if (Dp == pl2) {	
								for (var h = 1; h < 19; h++) {
									document.getElementById('TDp2h'+h).style.background = "gray";
															//'TDp2h16'
								}			
							}		
							if (Dp == pl3) {	
								for (var h = 1; h < 19; h++) {
									document.getElementById('TDp3h'+h).style.background = "gray";
								}			
							}	
							if (Dp == pl4) {	
								for (var h = 1; h < 19; h++) {
									document.getElementById('TDp4h'+h).style.background = "gray";
								}			
							}	
							if (Dp == pl5) {	
								for (var h = 1; h < 19; h++) {
									document.getElementById('TDp5h'+h).style.background = "gray";
								}			
							}			
							*/
			
	}
	
	
	function ADD() {			//alert("Working on 'ADD' function . . .");
		alert("Enter added players POINTS by hole\nthen touch/click 'ADD-IN'");
		
		//var GROUPh1PTS = +document.getElementById("SPgpH1").innerText;		
		var GROUPh1PTS = +document.getElementById("SPtH1").innerHTML; 
		//alert("Group T pts for H1 = "+GROUPh1PTS);		//document.getElementById('SPgpH1').innerText);
		
		/*document.getElementById('newH1ptT').innerHTML = +document.getElementById("SPgpH1").innerHTML + +document.getElementById('ptsADDh1').value;*/ 
		
		/*
		for (var h = 1; h < 19; h++) {
			document.getElementById('newH'+h+'ptT').innerHTML = +document.getElementById("SPgpH"+h).innerHTML + +document.getElementById('ptsADDh'+h).value; 
		}
		*/
		for (var h = 1; h < 19; h++) {
			document.getElementById('newH'+h+'ptT').innerHTML = +document.getElementById("SPtH"+h).innerHTML + +document.getElementById('ptsADDh'+h).value; 
		}
		/*alert("document.getElementById('newH1ptT').innerHTML = "+document.getElementById('newH1ptT').innerHTML+"\n"+
			  "document.getElementById('SPgpH1').innerHTML = "+document.getElementById('SPgpH1').innerHTML+"\n"+
			  "document.getElementById('ptsADDh1').value = "+document.getElementById('ptsADDh1').value);*/
		//SPp1h1
		// ptsADDh1 + [our h1 T pts] >> H1ptT
		
		var ptsADDf9 = 0;
		for (var h = 1; h < 10; h++) {
			ptsADDf9 = ptsADDf9 + +document.getElementById('ptsADDh'+h).value; 
		}
		document.getElementById('ptsADDf9').value = ptsADDf9; 			//alert("ptsADDf9 = "+ptsADDf9);
		
		var ptsADDb9 = 0;
		for (var h = 10; h < 19; h++) {
			ptsADDb9 = ptsADDb9 + +document.getElementById('ptsADDh'+h).value; 
		}
		document.getElementById('ptsADDb9').value = ptsADDb9;
		//ptsADDf9 | f9ptT | 
		//ptsADDb9 | b9ptT | 
		//ptsADD18 | 18ptT |

		var f9ptT = 0;
		for (var h = 1; h < 10; h++) {
			f9ptT = f9ptT + +document.getElementById('newH'+h+'ptT').innerHTML; 
			//f9ptT = f9ptT + +document.getElementById("SPtH"+h).innerHTML; 
					//+document.getElementById("SPtH1").innerHTML
		}
		alert("f9ptT = "+f9ptT);
		document.getElementById('newf9ptT').innerHTML = f9ptT;
		
		var b9ptT = 0;
		for (var h = 10; h < 19; h++) {
			b9ptT = b9ptT + +document.getElementById('newH'+h+'ptT').innerHTML; 
		}
		//alert("f9ptT = "+f9ptT);
		document.getElementById('newb9ptT').innerHTML = b9ptT;
		
		document.getElementById('new18ptT').innerHTML = +document.getElementById('newb9ptT').innerHTML + +document.getElementById('newb9ptT').innerHTML;
		//document.getElementById('ptsADD18').value = ptsADDf9;
		
		//ptsADD18 | new18ptT :
		document.getElementById('ptsADD18').value = +document.getElementById('ptsADDf9').value + +document.getElementById('ptsADDb9').value;		
		document.getElementById('new18ptT').innerHTML = +document.getElementById('newf9ptT').innerHTML + +document.getElementById('newb9ptT').innerHTML;		
		
	}	
	
	function SHOWpHCs() {
		alert(""+
			localStorage.getItem('z1NAME') + "\t" + localStorage.getItem('z2NAME') + "\t" + localStorage.getItem('z3NAME') + " \t" + localStorage.getItem('z4NAME') + "\t\t" + 
			localStorage.getItem('z5NAME') +
			"\n"+
			localStorage.getItem('z1HC') + " \t" + localStorage.getItem('z2HC') + "\t" + localStorage.getItem('z3HC') + "\t" + localStorage.getItem('z4HC') + "\t\t" + localStorage.getItem('z5HC') );	
								//localStorage.setItem('z1HC'
								
			document.getElementById('HCedit').style.display="";
					//id="HCedit" style="display:none;"
	}

	function addP5col() {
		if ( document.getElementById('5Ph1').style.display=="none" ) {
			document.getElementById('5Plbl').style.display="";
			document.getElementById('5Phead1').style.display="";	//5Phead1
			document.getElementById('5Phead2').style.display="";
			document.getElementById('TDp5NAME').style.display="";	
			document.getElementById('TDp5HC').style.display="";
			for (var h = 1; h < 19; h++) {
				document.getElementById('5Ph'+h).style.display="";
					//document.getElementById('5Ph2').style.display="";
			}
			document.getElementById('p5fT').style.display="";
				document.getElementById('SPp5fT').style.display="";
			document.getElementById('p5bT').style.display=""; //p5bT
				document.getElementById('SPp5bT').style.display="";
			document.getElementById('p5T18').style.display=""; //p5T18
				document.getElementById('SPp5T18').style.display="";
		}
		else { 
			document.getElementById('5Plbl').style.display="none";
			for (var h = 1; h < 19; h++) {
				document.getElementById('5Ph'+h).style.display="none";
					//document.getElementById('5Ph2').style.display="";
				document.getElementById('5Phead1').style.display="none";	//5Phead1
				document.getElementById('5Phead2').style.display="none";
				document.getElementById('TDp5NAME').style.display="none";	
				document.getElementById('TDp5HC').style.display="none";
			}
			document.getElementById('p5fT').style.display="none";
				document.getElementById('SPp5fT').style.display="none";
			document.getElementById('p5bT').style.display="none";
				document.getElementById('SPp5bT').style.display="none";
			document.getElementById('p5T18').style.display="none";
				document.getElementById('SPp5T18').style.display="none";
		}
		
		
					/* id="p5fT" style="display:none;" <!-- inline block -->
					   		id='SPpfT' style="display:none;
					   id='SPpbT' style="display:none;"
					   		id='SPp5bT
					   id="p5T18" style="display:none;"> <!-- display:inline block; --> 
					   id='SPp5T18' style="display:none;" */
	}		
	
	function showDROP() {
		//alert("Will try to display DROP & ADD-IN row . . .");
		if ( document.getElementById('DROP/ADDrow').style.display=="none" ) {
			document.getElementById('DROP/ADDrow').style.display=""; //shows the row!
		}
		else {
			document.getElementById('DROP/ADDrow').style.display="none"; //hides the row!			
		}
	}