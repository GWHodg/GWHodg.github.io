//How to save a javascript variable:
  localStorage.setItem("mykey",99); // set a variable
  var varNumber = localStorage.getItem("mykey"); // retrieve variable
  

	function calcALL() {
		/*alert("UNIVERSAL Stableford Point Calculation\n\n"+". . .");*/
		// H1/p1:
		UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
				  document.getElementById("HCPh1").value, document.getElementById("p1h1").value,
				  document.getElementById("PARh1").value, 0, 1, 'SPp1h1' );         
	 		// H1/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh1").value, document.getElementById("p2h1").value,
					  document.getElementById("PARh1").value, 0, 1, 'SPp2h1' );         
			// H1/p3
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh1").value, document.getElementById("p3h1").value,
					  document.getElementById("PARh1").value, 0, 1, 'SPp3h1' );   
			// H1/p4
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh1").value, document.getElementById("p4h1").value,
					  document.getElementById("PARh1").value, 0, 1, 'SPp4h1' );   
			// H1/p5
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh1").value, document.getElementById("p5h1").value,
					  document.getElementById("PARh1").value, 0, 1, 'SPp5h1' );       					  

		// H2/p1:
		UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
				  document.getElementById("HCPh2").value, document.getElementById("p1h2").value,
				  document.getElementById("PARh2").value, 0, 2, 'SPp1h2' );         
			// H2/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh2").value, document.getElementById("p2h2").value,
					  document.getElementById("PARh2").value, 0, 2, 'SPp2h2' );         
			// H2/p3:
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh2").value, document.getElementById("p3h2").value,
					  document.getElementById("PARh2").value, 0, 2, 'SPp3h2' );
			// H2/p4:
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh2").value, document.getElementById("p4h2").value,
					  document.getElementById("PARh2").value, 0, 2, 'SPp4h2' );
			// H2/p5:
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh2").value, document.getElementById("p5h2").value,
					  document.getElementById("PARh2").value, 0, 2, 'SPp5h2' );					  
				
		// H3/p1:		/*	xxxxxxxxxxxxxxxxx	*/			  
	UNIVcalc(document.getElementById("p1NAME").value,document.getElementById("p1HC").value,document.getElementById("HCPh3").value, document.getElementById("p1h3").value,document.getElementById("PARh3").value,0,3,'SPp1h3');	 
				  			/*	xxxxxxxxxxxxxxxxx	*/		
			// H3/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh3").value, document.getElementById("p2h3").value,
					  document.getElementById("PARh3").value, 0, 3, 'SPp2h3' ); 
			// H3/p3:
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh3").value, document.getElementById("p3h3").value,
					  document.getElementById("PARh3").value, 0, 3, 'SPp3h3' ); 
			// H3/p4:
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh3").value, document.getElementById("p4h3").value,
					  document.getElementById("PARh3").value, 0, 3, 'SPp4h3' ); 
			// H3/p5:
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh3").value, document.getElementById("p5h3").value,
					  document.getElementById("PARh3").value, 0, 3, 'SPp5h3' ); 

		// H4/p1:
		UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
				  document.getElementById("HCPh4").value, document.getElementById("p1h4").value,
				  document.getElementById("PARh4").value, 0, 4, 'SPp1h4' );         
			// H2/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh4").value, document.getElementById("p2h4").value,
					  document.getElementById("PARh4").value, 0, 4, 'SPp2h4' );         
			// H2/p3:
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh4").value, document.getElementById("p3h4").value,
					  document.getElementById("PARh4").value, 0, 4, 'SPp3h4' );
			// H2/p4:
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh4").value, document.getElementById("p4h4").value,
					  document.getElementById("PARh4").value, 0, 4, 'SPp4h4' );
			// H2/p5:
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh4").value, document.getElementById("p5h4").value,
					  document.getElementById("PARh4").value, 0, 4, 'SPp5h4' );						  
			  
		// H5/p1:
		UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
				  document.getElementById("HCPh5").value, document.getElementById("p1h5").value,
				  document.getElementById("PARh5").value, 0, 5, 'SPp1h5' );         
			// H5/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh5").value, document.getElementById("p2h5").value,
					  document.getElementById("PARh5").value, 0, 5, 'SPp2h5' );         
			// H5/p3:
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh5").value, document.getElementById("p3h5").value,
					  document.getElementById("PARh5").value, 0, 5, 'SPp3h5' );
			// H5/p4:
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh5").value, document.getElementById("p4h5").value,
					  document.getElementById("PARh5").value, 0, 5, 'SPp4h5' );
			// H5/p5:
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh5").value, document.getElementById("p5h5").value,
					  document.getElementById("PARh5").value, 0, 5, 'SPp5h5' );		

		// H6/p1:
		UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
				  document.getElementById("HCPh6").value, document.getElementById("p1h6").value,
				  document.getElementById("PARh6").value, 0, 6, 'SPp1h6' );         
			// H6/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh6").value, document.getElementById("p2h6").value,
					  document.getElementById("PARh6").value, 0, 6, 'SPp2h6' );         
			// H6/p3:
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh6").value, document.getElementById("p3h6").value,
					  document.getElementById("PARh6").value, 0, 6, 'SPp3h6' );
			// H6/p4:
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh6").value, document.getElementById("p4h6").value,
					  document.getElementById("PARh6").value, 0, 6, 'SPp4h6' );
			// H6/p5:
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh6").value, document.getElementById("p5h6").value,
					  document.getElementById("PARh6").value, 0, 6, 'SPp5h6' );			

		// H7/p1:
		UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
				  document.getElementById("HCPh7").value, document.getElementById("p1h7").value,
				  document.getElementById("PARh7").value, 0, 7, 'SPp1h7' );         
			// H7/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh7").value, document.getElementById("p2h7").value,
					  document.getElementById("PARh7").value, 0, 7, 'SPp2h7' );         
			// H7/p3:
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh7").value, document.getElementById("p3h7").value,
					  document.getElementById("PARh7").value, 0, 7, 'SPp3h7' );
			// H7/p4:
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh7").value, document.getElementById("p4h7").value,
					  document.getElementById("PARh7").value, 0, 7, 'SPp4h7' );
			// H7/p5:
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh7").value, document.getElementById("p5h7").value,
					  document.getElementById("PARh7").value, 0, 7, 'SPp5h7' );	
					  
		// H8/p1:
		UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
				  document.getElementById("HCPh8").value, document.getElementById("p1h8").value,
				  document.getElementById("PARh8").value, 0, 8, 'SPp1h8' );         
			// H8/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh8").value, document.getElementById("p2h8").value,
					  document.getElementById("PARh8").value, 0, 8, 'SPp2h8' );         
			// H8/p3:
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh8").value, document.getElementById("p3h8").value,
					  document.getElementById("PARh8").value, 0, 8, 'SPp3h8' );
			// H8/p4:
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh8").value, document.getElementById("p4h8").value,
					  document.getElementById("PARh8").value, 0, 8, 'SPp4h8' );
			// H8/p5:
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh8").value, document.getElementById("p5h8").value,
					  document.getElementById("PARh8").value, 0, 8, 'SPp5h8' );	
					  
		// H9/p1:
		UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
				  document.getElementById("HCPh9").value, document.getElementById("p1h9").value,
				  document.getElementById("PARh9").value, 0, 9, 'SPp1h9' );         
			// H9/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh9").value, document.getElementById("p2h9").value,
					  document.getElementById("PARh9").value, 0, 9, 'SPp2h9' );         
			// H9/p3:
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh9").value, document.getElementById("p3h9").value,
					  document.getElementById("PARh9").value, 0, 9, 'SPp3h9' );
			// H9/p4:
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh9").value, document.getElementById("p4h9").value,
					  document.getElementById("PARh9").value, 0, 9, 'SPp4h9' );
			// H9/p5:
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh9").value, document.getElementById("p5h9").value,
					  document.getElementById("PARh9").value, 0, 9, 'SPp5h9' );						  

			/* 	√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√ \/ BACK 9 \/ √√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√√	  */
			
		// H10/p1:
		UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
				  document.getElementById("HCPh10").value, document.getElementById("p1h10").value,
				  document.getElementById("PARh10").value, 0, 10, 'SPp1h10' );         
			// H10/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh10").value, document.getElementById("p2h10").value,
					  document.getElementById("PARh10").value, 0, 10, 'SPp2h10' );         
			// H10/p3:
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh10").value, document.getElementById("p3h10").value,
					  document.getElementById("PARh10").value, 0, 10, 'SPp3h10' );
			// H10/p4:
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh10").value, document.getElementById("p4h10").value,
					  document.getElementById("PARh10").value, 0, 10, 'SPp4h10' );
			// H10/p5:
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh10").value, document.getElementById("p5h10").value,
					  document.getElementById("PARh10").value, 0, 10, 'SPp5h10' );						  			
					  
		// H11/p1:
		UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
				  document.getElementById("HCPh11").value, document.getElementById("p1h11").value,
				  document.getElementById("PARh11").value, 0, 11, 'SPp1h11' );         
			// H11/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh11").value, document.getElementById("p2h11").value,
					  document.getElementById("PARh11").value, 0, 11, 'SPp2h11' );         
			// H11/p3:
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh11").value, document.getElementById("p3h11").value,
					  document.getElementById("PARh11").value, 0, 11, 'SPp3h11' );
			// H11/p4:
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh11").value, document.getElementById("p4h11").value,
					  document.getElementById("PARh11").value, 0, 11, 'SPp4h11' );
			// H11/p5:
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh11").value, document.getElementById("p5h11").value,
					  document.getElementById("PARh11").value, 0, 11, 'SPp5h11' );
					  
		// H12/p1:
		UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
				  document.getElementById("HCPh12").value, document.getElementById("p1h12").value,
				  document.getElementById("PARh12").value, 0, 12, 'SPp1h12' );         
			// H12/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh12").value, document.getElementById("p2h12").value,
					  document.getElementById("PARh12").value, 0, 12, 'SPp2h12' );         
			// H12/p3:
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh12").value, document.getElementById("p3h12").value,
					  document.getElementById("PARh12").value, 0, 12, 'SPp3h12' );
			// H12/p4:
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh12").value, document.getElementById("p4h12").value,
					  document.getElementById("PARh12").value, 0, 12, 'SPp4h12' );
			// H12/p5:
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh12").value, document.getElementById("p5h12").value,
					  document.getElementById("PARh12").value, 0, 12, 'SPp5h12' );					  
					  
		// H13/p1:
		UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
				  document.getElementById("HCPh13").value, document.getElementById("p1h13").value,
				  document.getElementById("PARh13").value, 0, 13, 'SPp1h13' );         
			// H13/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh13").value, document.getElementById("p2h13").value,
					  document.getElementById("PARh13").value, 0, 13, 'SPp2h13' );         
			// H13/p3:
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh13").value, document.getElementById("p3h13").value,
					  document.getElementById("PARh13").value, 0, 13, 'SPp3h13' );
			// H13/p4:
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh13").value, document.getElementById("p4h13").value,
					  document.getElementById("PARh13").value, 0, 13, 'SPp4h13' );
			// H13/p5:
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh13").value, document.getElementById("p5h13").value,
					  document.getElementById("PARh13").value, 0, 13, 'SPp5h13' );					  					  
					  
		// H14/p1:
		UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
				  document.getElementById("HCPh14").value, document.getElementById("p1h14").value,
				  document.getElementById("PARh14").value, 0, 14, 'SPp1h14' );         
			// H14/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh14").value, document.getElementById("p2h14").value,
					  document.getElementById("PARh14").value, 0, 14, 'SPp2h14' );         
			// H14/p3:
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh14").value, document.getElementById("p3h14").value,
					  document.getElementById("PARh14").value, 0, 14, 'SPp3h14' );
			// H14/p4:
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh14").value, document.getElementById("p4h14").value,
					  document.getElementById("PARh14").value, 0, 14, 'SPp4h14' );
			// H14/p5:
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh14").value, document.getElementById("p5h14").value,
					  document.getElementById("PARh14").value, 0, 14, 'SPp5h14' );					  
					  
		// H15/p1:
		UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
				  document.getElementById("HCPh15").value, document.getElementById("p1h15").value,
				  document.getElementById("PARh15").value, 0, 15, 'SPp1h15' );         
			// H15/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh15").value, document.getElementById("p2h15").value,
					  document.getElementById("PARh15").value, 0, 15, 'SPp2h15' );         
			// H15/p3:
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh15").value, document.getElementById("p3h15").value,
					  document.getElementById("PARh15").value, 0, 15, 'SPp3h15' );
			// H15/p4:
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh15").value, document.getElementById("p4h15").value,
					  document.getElementById("PARh15").value, 0, 15, 'SPp4h15' );
			// H15/p5:
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh15").value, document.getElementById("p5h15").value,
					  document.getElementById("PARh15").value, 0, 15, 'SPp5h15' );

		// H16/p1:
		UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
				  document.getElementById("HCPh16").value, document.getElementById("p1h16").value,
				  document.getElementById("PARh16").value, 0, 16, 'SPp1h16' );         
			// H16/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh16").value, document.getElementById("p2h16").value,
					  document.getElementById("PARh16").value, 0, 16, 'SPp2h16' );         
			// H16/p3:
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh16").value, document.getElementById("p3h16").value,
					  document.getElementById("PARh16").value, 0, 16, 'SPp3h16' );
			// H16/p4:
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh16").value, document.getElementById("p4h16").value,
					  document.getElementById("PARh16").value, 0, 16, 'SPp4h16' );
			// H16/p5:
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh16").value, document.getElementById("p5h16").value,
					  document.getElementById("PARh16").value, 0, 16, 'SPp5h16' );		
		
		// H17/p1:
		UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
				  document.getElementById("HCPh17").value, document.getElementById("p1h17").value,
				  document.getElementById("PARh17").value, 0, 17, 'SPp1h17' );         
			// H17/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh17").value, document.getElementById("p2h17").value,
					  document.getElementById("PARh17").value, 0, 17, 'SPp2h17' );         
			// H17/p3:
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh17").value, document.getElementById("p3h17").value,
					  document.getElementById("PARh17").value, 0, 17, 'SPp3h17' );
			// H17/p4:
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh17").value, document.getElementById("p4h17").value,
					  document.getElementById("PARh17").value, 0, 17, 'SPp4h17' );
			// H17/p5:
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh17").value, document.getElementById("p5h17").value,
					  document.getElementById("PARh17").value, 0, 17, 'SPp5h17' );		
		
		// H18/p1:
		UNIVcalc( document.getElementById("p1NAME").value, document.getElementById("p1HC").value, 
				  document.getElementById("HCPh18").value, document.getElementById("p1h18").value,
				  document.getElementById("PARh18").value, 0, 18, 'SPp1h18' );         
			// H18/p2:
			UNIVcalc( document.getElementById("p2NAME").value, document.getElementById("p2HC").value, 
					  document.getElementById("HCPh18").value, document.getElementById("p2h18").value,
					  document.getElementById("PARh18").value, 0, 18, 'SPp2h18' );         
			// H18/p3:
			UNIVcalc( document.getElementById("p3NAME").value, document.getElementById("p3HC").value, 
					  document.getElementById("HCPh18").value, document.getElementById("p3h18").value,
					  document.getElementById("PARh18").value, 0, 18, 'SPp3h18' );
			// H18/p4:
			UNIVcalc( document.getElementById("p4NAME").value, document.getElementById("p4HC").value, 
					  document.getElementById("HCPh18").value, document.getElementById("p4h18").value,
					  document.getElementById("PARh18").value, 0, 18, 'SPp4h18' );
			// H18/p5:
			UNIVcalc( document.getElementById("p5NAME").value, document.getElementById("p5HC").value, 
					  document.getElementById("HCPh18").value, document.getElementById("p5h18").value,
					  document.getElementById("PARh18").value, 0, 18, 'SPp5h18' );					  
        		  			  
					  
	}
	function UNIVcalc(name,Phc,Hhcp,Hscr,Hpar,Hpts,hole,PTSid) {
			var IFnote;
		if ( Hscr != 0 ) {
			if (Phc<19) {
				if (+Hhcp <= +Phc) {	//if (Hhcp<=Phc) {
					IFnote = "in UNIVcalc Phc<19/Hhcp("+Hhcp+")<=Phc("+Phc+") . . .";
					if (Hscr-1 == Hpar ) {Hpts = 2;} //net par
					else if (Hscr-2 == Hpar ) {Hpts = 1;} //net bogie
					else if (Hscr-0 == Hpar ) {Hpts = 3;} //net birdie
					else if (+Hscr + +1 == Hpar ) {Hpts = 4;} //net EAGLE
						else if (+Hscr + +2 == Hpar ) {Hpts = 5;} //net DBL EAGLE (albatross)
					else {Hpts = 0;}	//net ^ bogie:			
				}
				else {   // HC < 19 but <Hhc!
					IFnote = "in UNIVcalc Phc<19/else [Hhcp>Phc] . . .";
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
					IFnote = "in UNIVcalc Phc>18/Hhcp("+Hhcp+")<=(Phc-18) . . .\n{Phc-18 = "+alertPhc+"}";
					if (Hscr-2 == Hpar ) {Hpts = 2;} //net par
					else if (Hscr-3 == Hpar ) {Hpts = 1;} //net bogie
					else if (Hscr-1 == Hpar ) {Hpts = 3;} //net birdie
					else if (+Hscr + +0 == Hpar ) {Hpts = 4;} //net EAGLE
						else if (+Hscr + +1 == Hpar ) {Hpts = 5;} //net DBL EAGLE (albatross)
					else {Hpts = 0;}	//net ^ bogie:			
				}
				else {   // HC > 18 but <Hhc!
					IFnote = "in UNIVcalc Phc>18/else [Hhcp>Phc-18]!";
					
					if (Hscr-1 == Hpar ) {Hpts = 2;} //net par
					else if (Hscr-2 == Hpar ) {Hpts = 1;} //net bogie
					else if (Hscr-0 == Hpar ) {Hpts = 3;} //net birdie
					else if (+Hscr + +1 == Hpar ) {Hpts = 4;} //net EAGLE
						else if (+Hscr + +2 == Hpar ) {Hpts = 5;} //net DBL EAGLE (albatross)
					else {Hpts = 0;}	//net ^ bogie:			
				}
			}	
			
			if (+Hscr>0) {
				/*alert("Now trying to develop a UNIVERSAL SF point calculator\n\n"+
					  "PLAYER = "+name+" | HOLE: "+hole+"\n"+
					  "Phc = "+Phc+"\n"+
					  "Hhcp = "+Hhcp+"\n"+
					  "Hscr = "+Hscr+"\n"+
					  "Hpar = "+Hpar+"\n"+
					  "Hpts = "+Hpts+"\n"+
					  "\t\t[PTSid: "+PTSid+"]\n\n"+
					  IFnote);*/
			}
			document.getElementById(PTSid).innerHTML = Hpts;	
			
			holePTtots();		
			/*document.getElementById("H1ptT").innerText = +document.getElementById("SPp1h1").innerText + +document.getElementById("SPp2h1").innerText + +document.getElementById("SPp3h1").innerText + +document.getElementById("SPp4h1").innerText + +document.getElementById("SPp5h1").innerText;*/
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

	
	var GLOBALinput = 'GWH';
    var H1ptT; var H2ptT; var H3ptT; var H4ptT; var H5ptT; var H6ptT; var H7ptT; var H8ptT; var H9ptT;	
	var H10ptT; var H11ptT; var H12ptT; var H13ptT; var H14ptT; var H15ptT; var H16ptT; var H17ptT; var H18ptT;
	
	function holePTtots() {
		H1ptT = +document.getElementById("SPp1h1").innerText + +document.getElementById("SPp2h1").innerText + +document.getElementById("SPp3h1").innerText + +document.getElementById("SPp4h1").innerText + +document.getElementById("SPp5h1").innerText;
	    document.getElementById("H1ptT").innerText = H1ptT;						
		
		H2ptT = +document.getElementById("SPp1h2").innerText + +document.getElementById("SPp2h2").innerText + +document.getElementById("SPp3h2").innerText + +document.getElementById("SPp4h2").innerText + +document.getElementById("SPp5h2").innerText;
		document.getElementById("H2ptT").innerText = H2ptT;
		
		H3ptT = +document.getElementById("SPp1h3").innerText + +document.getElementById("SPp2h3").innerText + +document.getElementById("SPp3h3").innerText + +document.getElementById("SPp4h3").innerText + +document.getElementById("SPp5h3").innerText;
		document.getElementById("H3ptT").innerText = H3ptT;		
		
		H4ptT = +document.getElementById("SPp1h4").innerText + +document.getElementById("SPp2h4").innerText + +document.getElementById("SPp3h4").innerText + +document.getElementById("SPp4h4").innerText + +document.getElementById("SPp5h4").innerText;
		document.getElementById("H4ptT").innerText = H4ptT;		
		
		H5ptT = +document.getElementById("SPp1h5").innerText + +document.getElementById("SPp2h5").innerText + +document.getElementById("SPp3h5").innerText + +document.getElementById("SPp4h5").innerText + +document.getElementById("SPp5h5").innerText;
		document.getElementById("H5ptT").innerText = H5ptT;		

		H6ptT = +document.getElementById("SPp1h6").innerText + +document.getElementById("SPp2h6").innerText + +document.getElementById("SPp3h6").innerText + +document.getElementById("SPp4h6").innerText + +document.getElementById("SPp5h6").innerText;
		document.getElementById("H6ptT").innerText = H6ptT;	

		H7ptT = +document.getElementById("SPp1h7").innerText + +document.getElementById("SPp2h7").innerText + +document.getElementById("SPp3h7").innerText + +document.getElementById("SPp4h7").innerText + +document.getElementById("SPp5h7").innerText;
		document.getElementById("H7ptT").innerText = H7ptT;		

		H8ptT = +document.getElementById("SPp1h8").innerText + +document.getElementById("SPp2h8").innerText + +document.getElementById("SPp3h8").innerText + +document.getElementById("SPp4h8").innerText + +document.getElementById("SPp5h8").innerText;
		document.getElementById("H8ptT").innerText = H8ptT;		
		
		H9ptT = +document.getElementById("SPp1h9").innerText + +document.getElementById("SPp2h9").innerText + +document.getElementById("SPp3h9").innerText + +document.getElementById("SPp4h9").innerText + +document.getElementById("SPp5h9").innerText;
		document.getElementById("H9ptT").innerText = H9ptT;	

		document.getElementById("f9ptT").innerText = +H1ptT + +H2ptT + +H3ptT + +H4ptT + +H5ptT + +H6ptT + +H7ptT + +H8ptT + +H9ptT;			
		
		
		H10ptT = +document.getElementById("SPp1h10").innerText + +document.getElementById("SPp2h10").innerText + +document.getElementById("SPp3h10").innerText + +document.getElementById("SPp4h10").innerText + +document.getElementById("SPp5h10").innerText;
		document.getElementById("H10ptT").innerText = H10ptT;			
		
		H11ptT = +document.getElementById("SPp1h11").innerText + +document.getElementById("SPp2h11").innerText + +document.getElementById("SPp3h11").innerText + +document.getElementById("SPp4h11").innerText + +document.getElementById("SPp5h11").innerText;
		document.getElementById("H11ptT").innerText = H11ptT;	
		
		H12ptT = +document.getElementById("SPp1h12").innerText + +document.getElementById("SPp2h12").innerText + +document.getElementById("SPp3h12").innerText + +document.getElementById("SPp4h12").innerText + +document.getElementById("SPp5h12").innerText;
		document.getElementById("H12ptT").innerText = H12ptT;		

		H13ptT = +document.getElementById("SPp1h13").innerText + +document.getElementById("SPp2h13").innerText + +document.getElementById("SPp3h13").innerText + +document.getElementById("SPp4h13").innerText + +document.getElementById("SPp5h13").innerText;
		document.getElementById("H13ptT").innerText = H13ptT;		

		H14ptT = +document.getElementById("SPp1h14").innerText + +document.getElementById("SPp2h14").innerText + +document.getElementById("SPp3h14").innerText + +document.getElementById("SPp4h14").innerText + +document.getElementById("SPp5h14").innerText;
		document.getElementById("H14ptT").innerText = H14ptT;					
		
		H15ptT = +document.getElementById("SPp1h15").innerText + +document.getElementById("SPp2h15").innerText + +document.getElementById("SPp3h15").innerText + +document.getElementById("SPp4h15").innerText + +document.getElementById("SPp5h15").innerText;
		document.getElementById("H15ptT").innerText = H15ptT;		
	
		H16ptT = +document.getElementById("SPp1h16").innerText + +document.getElementById("SPp2h16").innerText + +document.getElementById("SPp3h16").innerText + +document.getElementById("SPp4h16").innerText + +document.getElementById("SPp5h16").innerText;
		document.getElementById("H16ptT").innerText = H16ptT;					
		
		H17ptT = +document.getElementById("SPp1h17").innerText + +document.getElementById("SPp2h17").innerText + +document.getElementById("SPp3h17").innerText + +document.getElementById("SPp4h17").innerText + +document.getElementById("SPp5h17").innerText;
		document.getElementById("H17ptT").innerText = H17ptT;		

		H18ptT = +document.getElementById("SPp1h18").innerText + +document.getElementById("SPp2h18").innerText + +document.getElementById("SPp3h18").innerText + +document.getElementById("SPp4h18").innerText + +document.getElementById("SPp5h18").innerText;
		document.getElementById("H18ptT").innerText = H18ptT;	

		document.getElementById("b9ptT").innerText = +H10ptT + +H11ptT + +H12ptT + +H13ptT + +H14ptT + +H15ptT + +H16ptT + +H17ptT + +H18ptT;					
		
		document.getElementById("18ptT").innerText = +H10ptT + +H11ptT + +H12ptT + +H13ptT + +H14ptT + +H15ptT + +H16ptT + +H17ptT + +H18ptT + +H1ptT + +H2ptT + +H3ptT + +H4ptT + +H5ptT + +H6ptT + +H7ptT + +H8ptT + +H9ptT;					
		
	}
	
	function enterHscr() {			//(SCRinput) {
			//alert("SCRinput = " + SCRinput+"\n\tGLOBALinput = "+GLOBALinput);
		let sliderVAL = document.getElementById("demo").innerText;				//value;
		if (GLOBALinput == "p1h1") {
			document.getElementById("p1h1").value = sliderVAL;		
		}
		if (GLOBALinput == "p2h1") { document.getElementById("p2h1").value = sliderVAL; }
		if (GLOBALinput == "p3h1") { document.getElementById("p3h1").value = sliderVAL; }		
		document.getElementById(GLOBALinput).value = sliderVAL;	//	**
			document.getElementById("check").style.visibility = "visible";	//	**
		
	}

	function changeGLOBAL(SCRinput) {		// < display slider! *

		//document.getElementById(SCRinput).onfocus = function() { document.getElementById("TD"+SCRinput).style.background = "lime"; }


		GLOBALinput = SCRinput;	//"ADD";
		//document.getElementById("SLIDER").style.visibility="visible";
			document.getElementById("check").style.visibility = "hidden";	//	**
		
		const nameArray = GLOBALinput.split("h");
			let pNUM = nameArray[0]; 
			var pNAME;
			if ( pNUM=="p1" ) { pNAME = document.getElementById("p1NAME").value; }
			if ( pNUM=="p2" ) { pNAME = document.getElementById("p2NAME").value; }
			if ( pNUM=="p3" ) { pNAME = document.getElementById("p3NAME").value; }
			if ( pNUM=="p4" ) { pNAME = document.getElementById("p4NAME").value; }
			if ( pNUM=="p5" ) { pNAME = document.getElementById("p5NAME").value; }
			//alert("pNUM = "+pNUM+"\npNAME = "+pNAME);
		document.getElementById("p&h").value = pNAME+" "+nameArray[1]; 		//GLOBALinput;
			document.getElementById("focusIPT").value = pNAME+" "+nameArray[1]; 		//GLOBALinput;
		
		document.getElementById("myRange").value = 0;	//value="0";	// < **
			document.getElementById("demo").innerHTML = 0;
		
		//alert("SCRinput =" +GLOBALinput);	
		//document.getElementById(SCRinput).style.background = "yellow";	
		//document.getElementById("TD"+GLOBALinput).style.background = "orange";	
		//document.getElementById(SCRinput).onfocus = function() { document.getElementById(SCRinput).style.background = "lime"; }
		//document.getElementById(SCRinput).blur = function() { document.getElementById(SCRinput).style.background = "orange"; }

		
	}

	function FOCUSfn(SCRinput) {			/* FOCUSfn(x,SCRinput) { */
		  	//alert("'this' variable = "+x);
			//x.style.background = "yellow";
			//document.getElementById("TD"+x).background = "red";
		//x.style.border = "1px solid red";
		
		GLOBALinput = SCRinput;
		const nameArray = GLOBALinput.split("h");
			let pNUM = nameArray[0]; 
			var pNAME;
			if ( pNUM=="p1" ) { pNAME = document.getElementById("p1NAME").value; }
			if ( pNUM=="p2" ) { pNAME = document.getElementById("p2NAME").value; }
			if ( pNUM=="p3" ) { pNAME = document.getElementById("p3NAME").value; }
			if ( pNUM=="p4" ) { pNAME = document.getElementById("p4NAME").value; }
			if ( pNUM=="p5" ) { pNAME = document.getElementById("p5NAME").value; }
				//alert("pNUM = "+pNUM+"\npNAME = "+pNAME);	
		document.getElementById("focusIPT").style.background = "red";
			document.getElementById("focusIPT").style.color = "white";
			document.getElementById("focusIPT").value = pNAME+" "+nameArray[1]; 		//GLOBALinput;
		document.getElementById("TD"+SCRinput).style.background = "red";   //TDp1h1
			//changeGLOBAL(x);
	}
	function BLURfn(SCRinput) {
		  	//alert("'this' variable = "+x);
			//x.style.background = "yellow";
			//document.getElementById("TD"+x).background = "red";
		//x.style.border = "0px solid red";
		document.getElementById("TD"+SCRinput).style.background = "black";
		document.getElementById("focusIPT").style.background = "white";
			document.getElementById("focusIPT").style.color = "maroon";
			document.getElementById("focusIPT").value = "GSmac3x"; 		//GLOBALinput;
	}	
	
	function hideSLIDE() {
		document.getElementById("SLIDER").style.visibility="hidden";
			document.getElementById("check").style.visibility="hidden";
	}
	function showSLIDE() {
		//if (document.getElementById("SLIDER").style.visibility=="hidden") {	
			document.getElementById("SLIDER").style.visibility="visible";
						/* document.getElementById("menu23").style.display="block"; */		 //inline 	
		//}	
			hideMENU();			
	}	
	
	function focusNextElement() {
		//alert("Trying to go UP 1 'tabindex' in 'focus'!");		
		//let index = document.getElementById(GLOBALinput).tabIndex;

		/* To get the last N characters of a string in JavaScript, call the slice() method on the string, passing -N as an argument. For example, str. slice(-3) returns a new string containing the last 3 characters of str */
		const GBLIPlast2 = GLOBALinput.slice(-2);
		let length = GLOBALinput.length;
		/*alert("GBLIPlast2 = "+GBLIPlast2+"\n\t\t[GLOBALinput: "+GLOBALinput+"]\n"+
			  "length = "+length);*/

		var Pno; var Hno;
			const gblARY = GLOBALinput.split("");
			Pno = gblARY[1]; 
			if( length==4 ) {
				Hno = gblARY[3];		// + gblARY[4];
			}
			else { Hno = GBLIPlast2; }
		var newHno; var newPno;
				if ( Pno==5 ) { newHno = +Hno + +1; newPno = 1;}
				else { newPno = +Pno + +1; newHno = Hno; }
			
		/*alert("at end of 'focusNextElement' function!\n"+		//index = "+index+"\n"+
			  "Pno = "+Pno+" | Hno = "+Hno+"\n"+
			  "newHno = "+newHno+" | newPno = "+newPno);*/
			  
		document.getElementById("p"+newPno+"h"+newHno).focus();	  
		//alert(document.activeElement.tabIndex);		
		changeGLOBAL("p"+newPno+"h"+newHno);
  	}		
	function focusPreviousElement() {
		const GBLIPlast2 = GLOBALinput.slice(-2);
		let length = GLOBALinput.length;
		
		var Pno; var Hno;
			const gblARY = GLOBALinput.split("");
			Pno = gblARY[1]; 
			if( length==4 ) {
				Hno = gblARY[3];
			}
			else { Hno = GBLIPlast2; }
			
		var newHno; var newPno;
				if ( Pno==1 ) { newHno = +Hno - +1; newPno = 5; }		//+Pno - +1;}
				else { newPno = +Pno - +1; newHno = Hno; }
		
		/*alert("at end of 'focusPreviousElement' function!\nindex = "+index+"\n"+
			  "Pno = "+Pno+" | Hno = "+Hno+"\n"+
			  "newHno = "+newHno+" | newPno = "+newPno);*/
			  
		document.getElementById("p"+newPno+"h"+newHno).focus();	  
		//alert(document.activeElement.tabIndex);		
		changeGLOBAL("p"+newPno+"h"+newHno);
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
	
						/* 	√√√√√√√√√√√√√√√√√  \/ SAVE \/  √√√√√√√√√√√√√√√√   */
	
	function save() {
		alert("Just take a screenshot!\n\n" +
			  "Will 'save' some selected input variables to 'localStorage' for later retrieval . . .");
		//https://stackoverflow.com/questions/21012580/is-it-possible-to-write-data-to-file-using-only-javascript
		/* https://stackoverflow.com/questions/29357931/how-to-save-a-javascript-variable:
					- can use localStorage on client side:
							<script>
							  localStorage.setItem("mykey",99); // set a variable
							  var varNumber = localStorage.getItem("mykey"); // retrieve variable
							</script> */
		localStorage.setItem("mykey",99); // set a variable
		localStorage.setItem("guy1",document.getElementById("p1NAME").value); // set a variable
		localStorage.setItem("guy2",document.getElementById("p2NAME").value); // set a variable
		//var varNumber = localStorage.getItem("mykey"); // retrieve variable
		//alert("'varNumber' variable to test 'localStorage' = "+varNumber);
		localStorage.setItem("guy3",document.getElementById("p3NAME").value); 
		localStorage.setItem("guy3HC",document.getElementById("p3HC").value); 
		localStorage.setItem("guy3H1scr",document.getElementById("p3h1").value); 
		localStorage.setItem("guy3H1pts",document.getElementById("SPp3h1").innerText); 
		localStorage.setItem("grpH1pts",document.getElementById("SPgpH1").innerText); 
		localStorage.setItem("grpF9pts",document.getElementById("sTf9gp").innerText); 		
	}
	function retrieve() {
		var varNumber = localStorage.getItem("mykey"); // retrieve variable
		var varName = localStorage.getItem("guy1"); // retrieve variable
		var varName2 = localStorage.getItem("guy2"); // retrieve variable
		
		var vGUY3 = localStorage.getItem("guy3");
		var vG3hc = localStorage.getItem("guy3HC");
		var vG3h1sc = localStorage.getItem("guy3H1scr");
		var vG3h1pt = localStorage.getItem("guy3H1pts");
		var vGPh1pt = localStorage.getItem("grpH1pts");
		var vGPf9pt = localStorage.getItem("grpF9pts");
		
		/* onchange: */
		var vG2h3sc = localStorage.getItem("guy2H3scr"); /* < onchange test! */
		var vG1h3s = localStorage.getItem("g1H3s");	
			var vG3h3s = localStorage.getItem("g3H3s");
			var vG4h3s = localStorage.getItem("g4H3s");
			var vG5h3s = localStorage.getItem("g5H3s");			
		
		alert("'varNumber' variable to test 'localStorage' = "+varNumber+"\n"+
			 "'guy1/varName' variable = "+varName+"\n"+
			 "'guy2/varName2' variable = "+varName2+"\n\n"+
			 "vGUY3: "+vGUY3+" | vG3hc: "+vG3hc+"\n"+
			 "vG3h1sc: "+vG3h1sc+" | vG3h1pt: "+vG3h1pt+"\n"+
			 "vGPh1pt: "+vGPh1pt+" | vGPf9pt: "+vGPf9pt+"\n\n"+
			 	"vG2h3sc/guy2H3scr (onchange) = " + vG2h3sc+"\n"+
				"vG1h3s/g1H3s (onchange) = " + vG1h3s+"\n"+
				"\t\tvG3h3s (onchange) = " + vG3h3s+"\n"+
				"\t\tvG4h3s (onchange) = " + vG4h3s+"\n"+
				"\t\tvG5h3s (onchange) = " + vG5h3s);
		
	}	

	function replace() {	 
		/* onchange: */
		document.getElementById("DATE").value = localStorage.getItem("DATE");

		
		document.getElementById("p1NAME").value = localStorage.getItem("g1NAME");
			document.getElementById("p2NAME").value = localStorage.getItem("g2NAME");
			document.getElementById("p3NAME").value = localStorage.getItem("g3NAME");
			document.getElementById("p4NAME").value = localStorage.getItem("g4NAME");
			document.getElementById("p5NAME").value = localStorage.getItem("g5NAME");
		document.getElementById("p1HC").value = localStorage.getItem("g1HC");
			document.getElementById("p2HC").value = localStorage.getItem("g2HC");
			document.getElementById("p3HC").value = localStorage.getItem("g3HC");
			document.getElementById("p4HC").value = localStorage.getItem("g4HC");
			document.getElementById("p5HC").value = localStorage.getItem("g5HC");	
			

		var vG1h1s = localStorage.getItem("g1H1s");	var vG2h1s = localStorage.getItem("g2H1s");
		var vG3h1s = localStorage.getItem("g3H1s"); var vG4h1s = localStorage.getItem("g4H1s");
		var vG5h1s = localStorage.getItem("g5H1s");			
		var vG1h2s = localStorage.getItem("g1H2s");	var vG2h2s = localStorage.getItem("g2H2s");
		var vG3h2s = localStorage.getItem("g3H2s"); var vG4h2s = localStorage.getItem("g4H2s");
		var vG5h2s = localStorage.getItem("g5H2s");			
		var vG1h3s = localStorage.getItem("g1H3s");	var vG2h3s = localStorage.getItem("g2H3s"); /* test! */
		var vG3h3s = localStorage.getItem("g3H3s"); var vG4h3s = localStorage.getItem("g4H3s");
		var vG5h3s = localStorage.getItem("g5H3s");			
		/*var vG1h4s = localStorage.getItem("g1H4s");	var vG2h4s = localStorage.getItem("G2H4s");
		var vG3h4s = localStorage.getItem("g3H4s"); var vG4h4s = localStorage.getItem("g4H4s");
		var vG5h4s = localStorage.getItem("g5H4s");*/	
		
		/*alert("Will now try to put player3 H3 score (vG3h3s="+vG3h3s+") in it's input box (id='p3h3)!\n"+
			  "\t\t\t + others . . .\n\n"+
			  "vG2h1s = "+vG2h1s+" | vG2h2s = "+vG2h2s);*/
		
		document.getElementById("p1h1").value = vG1h1s; document.getElementById("p2h1").value = vG2h1s;
		document.getElementById("p3h1").value = vG3h1s; document.getElementById("p4h1").value = vG4h1s;
		document.getElementById("p5h1").value = vG5h1s;
		document.getElementById("p1h2").value = vG1h2s; document.getElementById("p2h2").value = vG2h2s;
		document.getElementById("p3h2").value = vG3h2s; document.getElementById("p4h2").value = vG4h2s;
		document.getElementById("p5h2").value = vG5h2s;
		document.getElementById("p1h3").value = vG1h3s; document.getElementById("p2h3").value = vG2h3s; /* << */
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
	
			
		hideMENU();
			 		
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
						localStorage.setItem('g'+n+'H'+h+'s',""); document.getElementById("p"+n+"h"+h).value = "";
					}
			}
			
			localStorage.setItem("DATE",""); document.getElementById("DATE").value = ""; 
			localStorage.setItem("g1NAME",""); document.getElementById("p1NAME").value = ""; 
				localStorage.setItem("g2NAME",""); document.getElementById("p2NAME").value = ""; 
				localStorage.setItem("g3NAME",""); document.getElementById("p3NAME").value = ""; 
				localStorage.setItem("g4NAME",""); document.getElementById("p4NAME").value = ""; 
				localStorage.setItem("g5NAME",""); document.getElementById("p5NAME").value = ""; 
			localStorage.setItem("g1HC",""); document.getElementById("p1HC").value = ""; 
				localStorage.setItem("g2HC",""); document.getElementById("p2HC").value = ""; 
				localStorage.setItem("g3HC",""); document.getElementById("p3HC").value = ""; 
				localStorage.setItem("g4HC",""); document.getElementById("p4HC").value = ""; 
				localStorage.setItem("g5HC",""); document.getElementById("p5HC").value = ""; 
			
		}
		
		//alert("g1H1s POST 'clear' = " +  localStorage.getItem("g1H1s"));
		
		hideMENU();		
	}
	
						/* 	√√√√√√√√√√√√√√√√√  ^ SAVE ^  √√√√√√√√√√√√√√√√   */
	
	function pHCcolors() {		//pHCcolors(player) {
		let HCpl1 = document.getElementById("p1HC").value;
		let HCpl2 = document.getElementById("p2HC").value;
		let HCpl3 = document.getElementById("p3HC").value;
		let HCpl4 = document.getElementById("p4HC").value;
		let HCpl5 = document.getElementById("p5HC").value;
			/*
			let HOLE1hc = document.getElementById("HCPh1").value;
			let HOLE2hc = document.getElementById("HCPh2").value;
			let HOLE3hc = document.getElementById("HCPh3").value;
			let HOLE4hc = document.getElementById("HCPh4").value;
			*/ 
		/*alert("Will try to change input box colors based on player HC!\n"+
			  "\nhisHC (p1HC) = "+HCpl1);*.		//+"\nHOLE1hc = "+HOLE1hc);       player =  "+player
			//document.getElementById("p1h1").style.background = "pink";
		/*		if ( (hisHC-18) > HOLE1hc) {
					document.getElementById("p1h3").style.background = "slategray";
					document.getElementById("p1h3").style.color = "white";
				}
				else if ( hisHC > HOLE1hc ) { 
					document.getElementById("p1h1").style.background = "lightgray";
				}
		*/		
		var STKbtnLBL = document.getElementById("STROKESbtn").innerHTML;
		var shtSTKbtn = STKbtnLBL.substr(0,7);
		//alert("In 'pHCcolors()'' fn!\nshtSTKbtn = "+shtSTKbtn);
			//alert("In 'pHCcolors()'' fn!\nSTKbtnLBL = "+STKbtnLBL+"\tshtSTKbtn = "+shtSTKbtn);
		if ( shtSTKbtn=="Display" ) {
				for (var h = 1; h < 19; h++) {
					//alert("hole = "+h);
					HOLEhc = document.getElementById("HCPh"+h).value;
					//if (h==5) {alert("h==5 & HOLEhc = "+HOLEhc); }
					if ( (HCpl1-18) >= +HOLEhc) {
						document.getElementById("p1h"+h).style.background = "green";	//"slategray";
						document.getElementById("p1h"+h).style.color = "white";
					}
					else if ( +HCpl1 >= +HOLEhc ) { 
						//if (h=5) {alert("h = 5 & HOLEhc = "+HOLEhc); }
						document.getElementById("p1h"+h).style.background = "lime";
					}
					
					if ( (HCpl2-18) >= +HOLEhc) { document.getElementById("p2h"+h).style.background = "green"; document.getElementById("p2h"+h).style.color = "white"; }
					else if ( +HCpl2 >= +HOLEhc ) { document.getElementById("p2h"+h).style.background = "lime"; }			
					
					if ( (HCpl3-18) >= +HOLEhc) { document.getElementById("p3h"+h).style.background = "green"; document.getElementById("p3h"+h).style.color = "white"; }
					else if ( +HCpl3 >= +HOLEhc ) { document.getElementById("p3h"+h).style.background = "lime"; }
		
					if ( (HCpl4-18) >= +HOLEhc) { document.getElementById("p4h"+h).style.background = "green"; document.getElementById("p4h"+h).style.color = "white"; }
					else if ( +HCpl4 >= +HOLEhc ) { document.getElementById("p4h"+h).style.background = "lime"; }
		
					if ( (HCpl5-18) >= +HOLEhc) { document.getElementById("p5h"+h).style.background = "green"; document.getElementById("p5h"+h).style.color = "white"; }
					else if ( +HCpl5 >= +HOLEhc ) { document.getElementById("p5h"+h).style.background = "lime"; }			
				
				}
									/* for loop:
									for (let i = 0; i < 5; i++) {
									  text += "The number is " + i + "<br>";
									} */
				document.getElementById("STROKESbtn").innerHTML = "HIDE Stroke Holes";
					//document.getElementById("STROKESbtn").innerText = "HIDE Stroke Holes";
				document.getElementById("postMNUtd").innerHTML =
										"<span style='font-size:10px; background:lime; border:1px solid black; color:black;'>&nbsp;1&nbsp;</span>"+
										"<span style='font-size:10px; background:green; border:1px solid black; '>&nbsp;2&nbsp;</span>"+
										"<span style='font-size:10px; background:white; border:1px solid black; color:black;'>&nbsp;0&nbsp;</span>";					
		}			
		else { 
			remCOLORS(); 
			document.getElementById("STROKESbtn").innerHTML = "Display Stroke Holes";
		}			
			
	}	

	function remCOLORS() {
		alert("Will try to REMOVE hole stroke colors!");
		for (var h = 1; h < 19; h++) {
			document.getElementById("p1h"+h).style.background = "linen";
				document.getElementById("p1h"+h).style.color = "black";
			document.getElementById("p2h"+h).style.background = "linen";
				document.getElementById("p2h"+h).style.color = "black";			
			document.getElementById("p3h"+h).style.background = "linen";
				document.getElementById("p3h"+h).style.color = "black";			
			document.getElementById("p4h"+h).style.background = "linen";
				document.getElementById("p4h"+h).style.color = "black";			
			document.getElementById("p5h"+h).style.background = "linen";
				document.getElementById("p5h"+h).style.color = "black";			
		}
	}
	
	function showNOTES() {
		if (document.getElementById("CODEnotes").style.visibility=="visible") {
			document.getElementById("CODEnotes").style.visibility="hidden"; //inline 	
		}		
		else {
			document.getElementById("CODEnotes").style.visibility="visible"; //inline 	
		}
		
		hideMENU();		
	}	
	
	function showDROP() {
		if (document.getElementById("DROPdiv").style.visibility=="visible") {
			document.getElementById("DROPdiv").style.visibility="hidden"; 
			document.getElementById("DROPcheck").style.visibility="hidden";
			
			document.getElementById("pDone").style.visibility = "hidden";
		}		
		else {
			document.getElementById("DROPdiv").style.visibility="visible";
		}
		
		hideMENU();		
	}		
	
	function DROP() {
													
							for (var p = 1; p < 6; p++) {
								for (var h = 1; h < 19; h++) {
									document.getElementById('TDp'+p+'h'+h).style.background = "black";
								}
							}	
							
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
			
		alert("Player to be dropped: "+Dp);	//+"\n"+"H1ptT = "+H1ptT+" | newH1ptT = "+newH1ptT);
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
	
		var newF9t = +newH1ptT + +newH2ptT + +newH3ptT + +newH4ptT + +newH5ptT + +newH6ptT + +newH7ptT + +newH8ptT + +newH9ptT;
		var newB9t = +newH10ptT + +newH11ptT + +newH12ptT + +newH13ptT + +newH14ptT + +newH15ptT + +newH16ptT + +newH17ptT + +newH18ptT;
		var new18t = +newF9t + +newB9t;
		document.getElementById("f9ptT").innerText = newF9t;	//newH18ptT;
		document.getElementById("b9ptT").innerText = newB9t;	//newH18ptT;
		document.getElementById("18ptT").innerText = new18t;	//newH18ptT;	
	
			document.getElementById("DROPcheck").style.visibility = "visible";			
			document.getElementById("pDone").innerText = Dp;		
			document.getElementById("pDone").style.visibility = "visible";
			//document.getElementById("pDROPPED").value = "";		
			
			
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
							
			
	}
	
	function showINFO() {
		if (document.getElementById("ROUNDnote").style.visibility=="visible") {
			document.getElementById("ROUNDnote").style.visibility="hidden"; 
		}		
		else {
			document.getElementById("ROUNDnote").style.visibility="visible";
		}
		hideMENU();		
	}		
	
	function NEslide() {
		//alert("in 'NEslide' fn! Will try to move slider UP.");
		document.getElementById("SLIDER").style.top = '50px';
	}
	function SWslide() {
		//alert("in 'SWslide' fn! Will try to move slider DOWN.");
		document.getElementById("SLIDER").style.top = '300px';
	}			
	
	function FULLtbl() {
		//alert("in 'FULLtbl' fn! Will try to ^ table height.");
		if ( document.getElementById("FULLbtn").innerText == "+" ) {
			document.getElementById("TBLbody").style.height = "100%";	//'800px';
			document.getElementById("FULLbtn").innerText = "-";
			document.getElementById("FULLbtn2").innerText = "-";
			
			/*document.getElementById("DROPdiv").style.position = 'fixed';	//"fixed";
			document.getElementById("DROPdiv").style.left = "700px";	//"800px";
			document.getElementById("DROPdiv").style.top = "100px";*/
					//position:fixed; left:20em; top:300px;  	/*left:30em; top:40px;*/  
		}
		else { 
			document.getElementById("TBLbody").style.height = "430px";	//300px';
			document.getElementById("FULLbtn").innerText = "+";
			document.getElementById("FULLbtn2").innerText = "+";
					/*
					document.getElementById("DROPdiv").style.position = "fixed";
					document.getElementById("DROPdiv").style.left = '50%';
					document.getElementById("DROPdiv").style.top = '42%';
					*/		//document.getElementById("DROPdiv").style.height = "400px;";
					
					//document.getElementById("DROPdiv").style.top = "100px";
		}
		
				//table.table2 tbody { height:300px; 	
		hideMENU();					
	}
	
	
	function restrictTAB() {
				/* How to ignore HTML element from tabindex:
						https://stackoverflow.com/questions/5192859/how-to-ignore-html-element-from-tabindex 
					- just add the attribute disabled to the element 
					- element.tabIndex = -1	*/
		if ( document.getElementById("p5NAME").style.background!="slategray" ) {
				for (var p = 2; p < 6; p++) {
						if ( document.getElementById("p"+p+"NAME").value == "" ) {
							//alert("p5NAME element is empty! Will disable it's inputs.");
							for (var h = 1; h < 19; h++) {
								document.getElementById('p'+p+'h'+h).setAttribute('disabled', '');
							}		
							for (var h = 1; h < 19; h++) {
								document.getElementById('p'+p+'h'+h).style.background = "slategray";
							}	
							document.getElementById("p"+p+"NAME").style.background = "slategray";	
							document.getElementById("p"+p+"HC").style.background = "slategray";				
						} 					
						/*
						else { 
							//alert("p5NAME element is NOT empty! How do you ENABLE a 'disabled' input?");
							//document.getElementById('p5h1').setAttribute('disabled', false); 
							for (var h = 1; h < 19; h++) {
								document.getElementById("p"+p+"h"+h).disabled = false;
							}
							for (var h = 1; h < 19; h++) {
								document.getElementById('p'+p+'h'+h).style.background = "ivory"; //ivory";
							}	
							document.getElementById("p"+p+"NAME").style.background = "ivory"; //"ivory";	
							document.getElementById("p"+p+"HC").style.background = "ivory"; //"ivory";		
						}
						*/
				}	
		}	
		else {
			alert("Will try to re-enable P4 & P5 inputs . . .");			
			for (var p = 2; p < 6; p++) {
				if ( document.getElementById("p"+p+"NAME").value == "" ) {
					for (var h = 1; h < 19; h++) {
						document.getElementById("p"+p+"h"+h).disabled = false;
						document.getElementById('p'+p+'h'+h).style.background = "beige";
					}	
					document.getElementById("p"+p+"NAME").style.background = "beige";	
					document.getElementById("p"+p+"HC").style.background = "beige";		
				}					
			}			
		}
		//alert("p5h1 tabIndex = " + document.getElementById("p5h1").style.tabIndex);
		hideMENU();		
	}	
	
	function FULLdrop() {
		//alert("in 'FULLdrop' fn! Will try to ^ div height.");
		if ( document.getElementById("fullDRPbtn").innerText == "+" ) {
			document.getElementById("DROPdiv").style.height = '650px';	//"100%";	//'800px';
			document.getElementById("fullDRPbtn").innerText = "-";
		}
		else { 
			document.getElementById("DROPdiv").style.height = "400px";	//'300px';
			document.getElementById("fullDRPbtn").innerText = "+";
		}
	}
	
	function changeZOOM() {
		//In js you can change zoom by:
		if ( document.getElementById("ZOOMbtn").innerText == "ZOOM +" ) {
			document.body.style.zoom="250%";
					//document.getElementById("TBLbody").style.height = "1200px";	//150%";	// 300px; '800px';
			document.getElementById("ZOOMbtn").innerText = "ZOOM -";
			
				//const width = window.innerwidth; alert("The viewport's width is "+ width);
			/*
			const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
			const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
			alert("vw = "+ vw + "| vh = "+ vh);
			*/
		}
		else { 
			document.body.style.zoom="100%";
			document.getElementById("ZOOMbtn").innerText = "ZOOM +";
		}
	
		
	}
	
				/*    ++++++++++++++++++++++ May/23 ++++++++++++++++++++++++++++++++    */
				
		function showHCs() {
			if (document.getElementById("pHCdiv").style.visibility=="visible") {
				document.getElementById("pHCdiv").style.visibility="hidden"; //inline 	
			}		
			else {
				document.getElementById("pHCdiv").style.visibility="visible"; //inline 	
			}	
		}
	
		function setHC(pNO,pNM) {
			var number = pNO[1];
			    var whCHC = Math.round(localStorage.getItem('WHchc') * 100/100); 
			 			alert("whCHC (fr locStor) = "+whCHC);	//.toFixed(0)
						/* Math.round(x * 100) / 100; is the easiest, simplest way to round to two decimal places. */
				var jsCHC = Math.round(localStorage.getItem('JSchc') * 100/100); 
				var tcCHC = Math.round(localStorage.getItem('TCchc') * 100/100); 
				var bpCHC = Math.round(localStorage.getItem('BPchc') * 100/100); 
				var brCHC = Math.round(localStorage.getItem('BRchc') * 100/100); 
				var dpCHC = Math.round(localStorage.getItem('DPchc') * 100/100); 
				var dzCHC = Math.round(localStorage.getItem('DZchc') * 100/100); 
				var abCHC = Math.round(localStorage.getItem('ABchc') * 100/100); 
				var pkCHC = Math.round(localStorage.getItem('PKchc') * 100/100); 
				var wrCHC = Math.round(localStorage.getItem('WRchc') * 100/100); 
				var gfCHC = Math.round(localStorage.getItem('GFchc') * 100/100);
				var pdCHC = Math.round(localStorage.getItem('PDchc') * 100/100); 
				var sjCHC = Math.round(localStorage.getItem('SJchc') * 100/100); 
				var gnCHC = Math.round(localStorage.getItem('GNchc') * 100/100); 
				var cmCHC = Math.round(localStorage.getItem('CMchc') * 100/100); 
				var jdCHC = Math.round(localStorage.getItem('JDchc') * 100/100); 
					var u1CHC = Math.round(localStorage.getItem('U1chc') * 100/100);
					var u2CHC = Math.round(localStorage.getItem('U2chc') * 100/100);		
			alert("Will try to auto set player HC here!\n\t\tpNO = "+pNO+" | 'number' var = "+number+"\n\n"+
				  "jsCHC (fr locStor) = "+jsCHC+"\n\n"+
				  "PL \t            RAWchc                   \t\t   ROUNDEDchc\n"+
				  "wh \t "+ localStorage.getItem('WHchc') + " \t\t " + whCHC + "\n"+
				  "pk \t "+ localStorage.getItem('PKchc') + " \t\t " + pkCHC + "\n"+
				  "dz \t "+ localStorage.getItem('DZchc') + " \t\t " + dzCHC + "\n"+
				  "sj \t "+ localStorage.getItem('SJchc') + " \t\t " + sjCHC + "\n"+
				  "js \t "+ localStorage.getItem('JSchc') + " \t\t " + jsCHC + "\n"+
				  "gf \t "+ localStorage.getItem('GFchc') + " \t\t " + gfCHC + "\n"+
				  "br \t "+ localStorage.getItem('BRchc') + " \t\t " + brCHC + "\n"+
				  "pd \t "+ localStorage.getItem('PDchc') + " \t\t " + pdCHC + "\n"+
				  "bp \t "+ localStorage.getItem('BPchc') + " \t\t " + bpCHC + "\n");
			if (pNM=="wH") {document.getElementById(pNO+"HC").value = whCHC; localStorage.setItem('g'+number+'HC',whCHC);}  //23
			if (pNM=="jS") {document.getElementById(pNO+"HC").value = jsCHC; localStorage.setItem('g'+number+'HC',jsCHC);} //16
			if (pNM=="tC") {document.getElementById(pNO+"HC").value = tcCHC; localStorage.setItem('g'+number+'HC',tcCHC);}
			if (pNM=="bP") {document.getElementById(pNO+"HC").value = bpCHC; localStorage.setItem('g'+number+'HC',bpCHC);}
			if (pNM=="bR") {document.getElementById(pNO+"HC").value = brCHC; localStorage.setItem('g'+number+'HC',brCHC);}
				//if (pNM=="jS") {document.getElementById(pNO+"HC").value = jsCHC; localStorage.setItem('g'+number+'HC',jsCHC);} 
				/*JSchc/15 */
			if (pNM=="dP") {document.getElementById(pNO+"HC").value = dpCHC; localStorage.setItem('g'+number+'HC',dpCHC);}
			if (pNM=="dZ") {document.getElementById(pNO+"HC").value = dzCHC; localStorage.setItem('g'+number+'HC',dzCHC);}
			if (pNM=="aB") {document.getElementById(pNO+"HC").value = abCHC; localStorage.setItem('g'+number+'HC',abCHC);}
			if (pNM=="pK") {document.getElementById(pNO+"HC").value = pkCHC; localStorage.setItem('g'+number+'HC',pkCHC);}
			if (pNM=="wR") {document.getElementById(pNO+"HC").value = wrCHC; localStorage.setItem('g'+number+'HC',wrCHC);}
			if (pNM=="gF") {document.getElementById(pNO+"HC").value = gfCHC; localStorage.setItem('g'+number+'HC',gfCHC);}
			if (pNM=="Pd") {document.getElementById(pNO+"HC").value = pdCHC; localStorage.setItem('g'+number+'HC',pdCHC);}
			if (pNM=="sJ") {document.getElementById(pNO+"HC").value = sjCHC; localStorage.setItem('g'+number+'HC',sjCHC);}
			if (pNM=="gN") {document.getElementById(pNO+"HC").value = gnCHC; localStorage.setItem('g'+number+'HC',gnCHC);}
			if (pNM=="cM") {document.getElementById(pNO+"HC").value = cmCHC; localStorage.setItem('g'+number+'HC',cmCHC);}
			if (pNM=="jD") {document.getElementById(pNO+"HC").value = jdCHC; localStorage.setItem('g'+number+'HC',jdCHC);}
				if (pNM=="u1") {document.getElementById(pNO+"HC").value = u1CHC; localStorage.setItem('g'+number+'HC',u1CHC);}
				if (pNM=="u2") {document.getElementById(pNO+"HC").value = u2CHC; localStorage.setItem('g'+number+'HC',u2CHC);}
		}	
		
		function CHChelp() {
			alert("CALCULATING COURSE HANDICAP:\n\n"+
				  "Blue Tees Slope & Course Ratings: 131/68.9\n"+
				  "Course Handicap = Handicap Index x (Slope Rating ÷ 113) + (Course Rating – par)\n\n"+
				  "21.8 X (131/113 = 1.159) + (68.9-70 = -1.1) SHOULD EQUAL 24 = 24(.17)!\n"+
				  "IF HI = 19.9 CH = 21.96 = 22 *");
		}

		function fillHIs() {
			//alert("Trying to FILL HIs!");										  //Apr/23:
			document.getElementById("whHI").value = localStorage.getItem("WHhi"); // 21.1
			document.getElementById("jsHI").value = localStorage.getItem("JShi"); // 14.4
			document.getElementById("tcHI").value = localStorage.getItem("TChi"); // 17.6
			document.getElementById("bpHI").value = localStorage.getItem("BPhi"); // 15.2
			document.getElementById("brHI").value = localStorage.getItem("BRhi"); // 16.1
					/* whCHC" onchange="localStorage.setItem('WHchc */
			document.getElementById("dpHI").value = localStorage.getItem("DPhi"); // 12.8
			document.getElementById("dzHI").value = localStorage.getItem("DZhi"); // 18.5
			document.getElementById("abHI").value = localStorage.getItem("ABhi"); // 17.7
			document.getElementById("pkHI").value = localStorage.getItem("PKhi"); // 10.5
			document.getElementById("wrHI").value = localStorage.getItem("WRhi"); // 13.7
			document.getElementById("gfHI").value = localStorage.getItem("GFhi"); // 16.1
			document.getElementById("pdHI").value = localStorage.getItem("PDhi"); // 17.2
			document.getElementById("sjHI").value = localStorage.getItem("SJhi"); // 18.4
			document.getElementById("gnHI").value = localStorage.getItem("GNhi"); // 14.1
			document.getElementById("cmHI").value = localStorage.getItem("CMhi"); // 14.0
			document.getElementById("jdHI").value = localStorage.getItem("JDhi"); // 16.3
			document.getElementById("u1HI").value = localStorage.getItem("U1hi"); // 
			document.getElementById("u2HI").value = localStorage.getItem("U2hi"); // 
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
		

		
		function wrong_sel_alert() {
			if (document.getElementById('sel').value != "") {
				alert("Your response is submitted");				
				if ( document.getElementById('sel').value=="1" ) { 
					alert("You're in!\n\tWill load 'GSpxl'."); 
					location.href='../GSsplash.html';
						//location.href='GITmnu.html';
				}
				if ( document.getElementById('sel').value=="2" ) { 
					alert("You selected 'GSmac'. Will RELOAD this page."); 
					location.href='GSmacSPLSH.html';
						//location.href='GITmnu.html';
					}				
			} else {
				alert("Please fill selection field");
			}
		}

		function showHOMEsel() {
			//alert("Will try to code for pix or mac GS selection!");
			if (document.getElementById("macHOMEdiv").style.visibility=="visible") {
				document.getElementById("macHOMEdiv").style.visibility="hidden"; //inline 	
			}		
			else {
				document.getElementById("macHOMEdiv").style.visibility="visible"; //inline 	
			}	
		}
		

	//SLIDER stuff:
	var slider = document.getElementById("myRange");
	var output = document.getElementById("demo");
	output.innerHTML = slider.value;	
	slider.oninput = function() {
	  output.innerHTML = this.value;
  	}	
	
	
		function calcCHC() {
					/* VGC Golf Canada Course Rating  68.9 / 131 (Apr/23) */
			let whHI = document.getElementById("whHI").value;								
				let whCHC = +whHI * (131/113) + (68.9-70);	/* 21.8 X (131/113) + (68.9-70) */
					alert("Trying to calc CHC!\n\twhHI = "+whHI+"\n"+
					"\twhCHC = "+whCHC.toFixed(1) );    /* numb = numb.toFixed(2); */
				localStorage.setItem('WHchc',whCHC);	// < **!
				document.getElementById("whCHC").value = whCHC.toFixed(0);
			let jsHI = document.getElementById("jsHI").value;								
				let jsCHC = +jsHI * (131/113) + (68.9-70); 	//alert("jsCHC = "+jsCHC.toFixed(1) ); 
				localStorage.setItem('JSchc',jsCHC);
				document.getElementById("jsCHC").value = jsCHC.toFixed(0);
			let tcHI = document.getElementById("tcHI").value;								
				let tcCHC = +tcHI * (131/113) + (68.9-70);
					//alert("tcCHC = "+tcCHC.toFixed(1) ); 
				localStorage.setItem('TCchc',tcCHC);
				document.getElementById("tcCHC").value = tcCHC.toFixed(0);
			let bpHI = document.getElementById("bpHI").value;								
				let bpCHC = +bpHI * (131/113) + (68.9-70); 	//alert("bpCHC = "+bpCHC.toFixed(1) ); 
				document.getElementById("bpCHC").value = bpCHC.toFixed(0);
				localStorage.setItem('BPchc',bpCHC);
			let brHI = document.getElementById("brHI").value;								
				let brCHC = +brHI * (131/113) + (68.9-70); 	//alert("brCHC = "+brCHC.toFixed(1) ); 
				localStorage.setItem('BRchc',brCHC);
				document.getElementById("brCHC").value = brCHC.toFixed(0);
				
			let dpHI = document.getElementById("dpHI").value; let dpCHC = +dpHI * (131/113) + (68.9-70); 
				localStorage.setItem('DPchc',dpCHC);
				document.getElementById("dpCHC").value = dpCHC.toFixed(0);
			let dzHI = document.getElementById("dzHI").value; let dzCHC = +dzHI * (131/113) + (68.9-70); 
				localStorage.setItem('DZchc',dzCHC);
				document.getElementById("dzCHC").value = dzCHC.toFixed(0);
			let abHI = document.getElementById("abHI").value; let abCHC = +abHI * (131/113) + (68.9-70); 
				localStorage.setItem('ABchc',abCHC);
				document.getElementById("abCHC").value = abCHC.toFixed(0);	
			let pkHI = document.getElementById("pkHI").value; let pkCHC = +pkHI * (131/113) + (68.9-70); 
				localStorage.setItem('PKchc',pkCHC);
				document.getElementById("pkCHC").value = pkCHC.toFixed(0);
			let wrHI = document.getElementById("wrHI").value; let wrCHC = +wrHI * (131/113) + (68.9-70); 
				localStorage.setItem('WRchc',wrCHC);
				document.getElementById("wrCHC").value = wrCHC.toFixed(0);
			let gfHI = document.getElementById("gfHI").value; let gfCHC = +gfHI * (131/113) + (68.9-70); 
				localStorage.setItem('GFchc',gfCHC);
				document.getElementById("gfCHC").value = gfCHC.toFixed(0);	
			
			let pdHI = document.getElementById("pdHI").value; let pdCHC = +pdHI * (131/113) + (68.9-70); 
				localStorage.setItem('PDchc',pdCHC);
				document.getElementById("pdCHC").value = pdCHC.toFixed(0);
			let sjHI = document.getElementById("sjHI").value; let sjCHC = +sjHI * (131/113) + (68.9-70); 
				localStorage.setItem('SJchc',sjCHC);
				document.getElementById("sjCHC").value = sjCHC.toFixed(0);
			let gnHI = document.getElementById("gnHI").value; let gnCHC = +gnHI * (131/113) + (68.9-70); 
				localStorage.setItem('GNchc',gnCHC);
				document.getElementById("gnCHC").value = gnCHC.toFixed(0);
			let cmHI = document.getElementById("cmHI").value; let cmCHC = +cmHI * (131/113) + (68.9-70); 
				localStorage.setItem('CMchc',cmCHC);
				document.getElementById("cmCHC").value = cmCHC.toFixed(0);
			let jdHI = document.getElementById("jdHI").value; let jdCHC = +jdHI * (131/113) + (68.9-70); 
				localStorage.setItem('JDchc',jdCHC);
				document.getElementById("jdCHC").value = jdCHC.toFixed(0);

			let u1HI = document.getElementById("u1HI").value; let u1CHC = +u1HI * (131/113) + (68.9-70); 
				localStorage.setItem('U1chc',u1CHC);
				document.getElementById("u1CHC").value = u1CHC.toFixed(0);
			let u2HI = document.getElementById("u2HI").value; let u2CHC = +u2HI * (131/113) + (68.9-70); 
				localStorage.setItem('U2chc',u2CHC);
				document.getElementById("u2CHC").value = u2CHC.toFixed(0);				
			
		}
			
 /*        &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& May/23 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&     */
 
 	function NextInput() {
		var currentInput = document.getElementById('p&h').value;
		//alert("Will try to > next input!\n\tcurrentInput = "+currentInput);
		
		var P1 = localStorage.getItem('g1NAME');
		var P2 = localStorage.getItem('g2NAME');
		var P3 = localStorage.getItem('g3NAME');
		var P4 = localStorage.getItem('g4NAME');
		var P5 = localStorage.getItem('g5NAME');
		
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
			  
		if ( cP==P4 && P5!="" ) { 
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
		
		var P1 = localStorage.getItem('g1NAME');
		var P2 = localStorage.getItem('g2NAME');
		var P3 = localStorage.getItem('g3NAME');
		var P4 = localStorage.getItem('g4NAME');
		var P5 = localStorage.getItem('g5NAME');
		
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
		localStorage.setItem('g'+cPno+'H'+cH+'s',slideVAL);
			//localStorage.setItem('g3H4s',slideVAL);	
			alert("g"+cPno+"H"+cH+"s 'localStorage' value = "+localStorage.getItem('g'+cPno+'H'+cH+'s'));	
			
		document.getElementById('check').style.visibility = 'visible';	
		
		
		//document.getElementById('h'+cH+'p'+cPno).innerHTML = slideVAL;
		replace();
		
	}
		
	function PrevInput() {
		var currentInput = document.getElementById('p&h').value;
		//alert("Will try to > PREVIOUS input!\n\tcurrentInput = "+currentInput);
		
		var P1 = localStorage.getItem('g1NAME');
		var P2 = localStorage.getItem('g2NAME');
		var P3 = localStorage.getItem('g3NAME');
		var P4 = localStorage.getItem('g4NAME');
		var P5 = localStorage.getItem('g5NAME');
		
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
				