//document.getElementById("pnlBJO").textContent = " GWH added <span style='background:yellow;'>this</span>!"		
/* Easiest way to modify/REPLACE the content of an HTML element is by using the innerHTML property.
   To change the content of an HTML element, use this syntax:
				document.getElementById(id).innerHTML = new HTML */
//document.getElementById("myDIV").innerHTML = "new HTML replacing 'Front Quadrant Catch-up'!";


/* 'Front Quadrant Catch-Up' div ("myDIV") ADDENDUM (after header):	*/							
document.getElementById("myDIV").innerHTML +=				//innerText =  
	"<font color=black>CATCH-UP DRILL</font><br><br>"+
	"Assume prone position in water and <e>extend arms forward</e>; arms should be just a bit under <br>"+
	"surface of water, pointing at destination. <e>One arm then performs a regular freestyle pull</e>,<br>"+
	"starting from that extension, through the catch and finish, then it recovers to an <br>"+
	"extension, pointing at your destination, back to where it started.<br><br>"+
	"<span style='background:yellow; color:black'>Other arm is still</span>,"+
	"just keep it pointing forward. Should feel like you body is very long <br>"+
	"or extended, and you may feel pulses or instants of power as you pull, then pulses of <br>"+
	"gliding as one arm recovers but the other arm has not yet started pulling.<br><br>"+
	"The swimming arm "+
	"<A style='FONT-WEIGHT: normal; FONT-SIZE: normal; COLOR: blue'"+
		 	"onclick='AlertSLOT()' href='javascript:;'>"+
		 	"<b><span style='background:yellow;'>"+
	"catches up</span></b></A>"+	
	"to the arm that is still extended, pointing forward."+
	"<font color=red>  "+
		 		"< <span style='background:yellow;'> NB!</span></font>"+
	"<br><br>"+	
	"<A style='FONT-WEIGHT: normal; FONT-SIZE: normal; COLOR: '"+
	"		onclick='return popupINDEX(this, `index`)'"+ 
	"		href='https://www.youtube.com/watch?v=jx1Dltg49Xo'>"+
	"		https://www.youtube.com/watch?v=jx1Dltg49Xo</A>"+
	"<br>"+
	"<A style='FONT-WEIGHT: normal; FONT-SIZE: normal; COLOR: ' "+
	"		onclick='return popupINDEX(this, `index`)' "+ 
	"		href='http://www.feelforthewater.com/2014/09/clearing-up-confusion-about-front.html'> "+
	"		http://www.feelforthewater.com/2014/09/clearing-up-confusion-about-front.html</A>"+
	"<br><br>"+	
	"<e><span style='background:yellow;'><b>High Elbow Catch</b></span> Is Important!</e>"+
	"	<font color=black>< need to keep shouder up by ear to keep elbow high</font><br>"+
	"<span id='tab'>Stop over-reaching. At a point reaching too far in front of you ends up actually <br>"+
	"costing you. If you are reaching and gliding at the beginning of the stroke it <br>"+
	"becomes very difficult not to drop the wrist and elbow.<br>"+
	"Do not sacrifice a powerful catch for a longer stroke. When we over-glide we<br> naturally"+
	"end up dropping our elbow.<br>"+
	"<A style='FONT-WEIGHT: normal; FONT-SIZE: normal; COLOR: ' "+
	"		onclick='return popupINDEX(this, `index`)' "+ 
	"		href='https://www.yourswimlog.com/high-elbow-catch/'> "+
	"		https://www.yourswimlog.com/high-elbow-catch/</A>	"+
	"</span><br>	";
//  </div>
//  <br><br>


var element = document.getElementById("myDIV2");
/*
element.innerHTML += "<e>Scissor kicks</e> - <b><u>cut them out</u></b> and you'll go a lot faster.<br>"+
	"<span id='tab'>A scissor kick is a very large opening of the legs, normally when a swimmer goes to <br>"+
	"take a breath. They hurt you because of the enormous amount of drag they generate<br>It's a bit like opening up a parachute behind you.</span><br>"
*/
/* 'Leg Kick' div ("myDIV2") REPLACEMENT:	*/
element.innerHTML =
					'<font color=orange size=6><u>Leg Kick</u></font><br>'+
					'<A style="FONT-WEIGHT: normal; FONT-SIZE: normal; COLOR: "'+
							'onclick="return popupINDEX(this, `index`)"'+
							'href="http://www.swimsmooth.com/kick.html">'+ 
							'http://www.swimsmooth.com/kick.html</A><br>'+
					'<i>Not looking to get much or <e>any</e> propulsion from leg kick.<br>'+
					'Want: lift legs up; low drag; low effort.</i><br><br>'+
					'1. <e>Kick from the hip</e><br>'+
					'2. <e>Plantar flexed feet</e> (Pointing Your Toes)<br>'+
					'<span id="tab"> Presents a much lower profile to the water. Not pointing your toes will push water <br>'+
					'forwards when you kick, <b><u>slowing you dramatically</u></b>.</span><br>'+
					'4. Timing<br>'+
					'<span id="tab"><e>When the hand enters the water at the front of the stroke, the opposite <br>'+
					'leg should kick</e>. <font color=red>< <span style="background:yellow;"> ??(see below)</span></font><br>'+
					'In 2 beat kick this is the only kick, in 4 and 6 beats there are other kicks in between</span><br><br>'+
					
					'<e>Scissor kicks</e> - <b><u>cut them out</u></b> and you`ll go a lot faster.<br>'+
					'<span id="tab">A scissor kick is a very large opening of the legs, normally when a swimmer goes to <br>'+
					'take a breath. They hurt you because of the enormous amount of drag they generate<br> '+
					'It`s a bit like opening up a parachute behind you.</span><br>';
// To APPEND HTML code to "myDIV2" div:
/* element.innerHTML += "<br>+++++++++++ Appended code from 'wSjavaSWM.js' file ++++++++++++++++<br>";
element.innerHTML += "<br><b><u>Elmer's <span style='background:yellow;'>additional HTML code</span></u></b> (Nov25; 10:16)<br><br>"; */


var element3 = document.getElementById("myDIV3");
/* 'Catch & Pull' div ("myDIV3") REPLACEMENT:	*/
element3.innerHTML =
	"<font color=orange size=6><u>Catch & Pull</u></font> (Nov27/21)<br>"+
	"<A style='FONT-WEIGHT: normal; FONT-SIZE: normal; COLOR: '"+
	"		onclick='return popupINDEX(this, `index`)' "+
	"		href='http://www.swimsmooth.com/catch.html'>"+
	"		http://www.swimsmooth.com/catch.html</A><br>"+
	"Lock on & press the water <u>back</u> behind you. Contrast this to what most swimmers <br>"+
	"do - pressing the water down at the front of the stroke rather than back.<br> <br>	"+
	"Palm looks at bottom of pool, but with <e><u>finger tips angled slightly down</u></e>.<br>"+
	"This should be <e><u>flexed from the wrist</e> (not from the knuckles)</u>. Need to keep <br>"+
	"palm flat and open, <u>fingers closed</u> loosely together.<br><br>"+
	"At full reach and without dropping your elbow, <u>feel like you are tipping your<br>"+
	"finger-tips over the front of a barrel (again flexing at the wrist)</u>, which <br>"+
	"will <b>start the catch</b>.<br>"+
	"At the same time start <e><b>bending the elbow</b></e> and pressing back on the water with <br>"+
	"the forearm in a near-vertical position.<br>"+
	"This is what keeping your <e>elbows high on the catch</e> is all about.<br><br>";

var element4 = document.getElementById("myDIV4");
/* 'Bend Like Becky' div ("myDIV4") REPLACEMENT:	*/
element4.innerHTML =
	"<font color=orange size=6><u>Bend Like Becky</u></font> <font size=1>(Nov 27/21 9:16 AM)</font><br>	<A style='FONT-WEIGHT: normal; FONT-SIZE: normal; COLOR: ' onclick='return popupINDEX(this, `index`)' href='http://www.swimsmooth.com/improve/intermediate/bend it-like-becky'> http://www.swimsmooth.com/improve/intermediate/bend-it-like-becky</A><br> <font color=maroon>Catch And Pull <span style='background:yellow;'> Pull-Through Technique</font></span><br><br><e>As press water backwards, elbow is bent to 110 deg</e> > perfect leverage to press water <br>backwards, propelling forwards. Aim for an elbow bend of between 100 and 120 deg.<br>	Many swimmers pull through with a very <e>straight arm</e> which places a lot of load on the <br>	shoulder and <e>produces much less propulsion</e>.<br>	<IMG style='WIDTH: 350px; HEIGHT: 150px; background-color:yellow; border: 2px black solid;' 	alt='Elbow Pull' src='HighElbowCatch.jpg' ><font color=orange>PULL:</font> <font color=maroon>									<u>high-elbow catch position</u></font><br><br>	Also <e>hand is directly below shoulder as pull through</e>. If you press wide of this or <br>	cross the centre line then you will snake down the pool and waste a lot of energy.	<e><b>SUBTLY</b> tip wrist right at front of stroke</e>, just before starting the catch - helps initiate a <br>	<e><b><u>high-elbow catch position</u></b></e>. NB because it helps bring the fingers and hand downwards to <br>	initiate 'the catch' (the point at which you start to gain purchase on the water at the <br>	very front of the stroke). Initiation from the wrist brings the hand and forearm downwards <br>	into the classic high elbow catch position. <e>Can now press the water backwards, not <br>	downwards</e>, which is the essence of a great propulsive technique. It is possible to over-do<br>	this action and point the fingertips too far downwards.<br>	<e>Do not rush the catch</e> but engage with the water and progressively press it backward, helping <br>	you generate more propulsion for less effort.<br>";


var element5 = document.getElementById("myDIV5");
/* 'Kick Timing' div ("myDIV5') REPLACEMENT:	*/
element5.innerHTML =
	"<font color=orange size=6><u>Kick Timing</u></font> <font size=1>(Nov 27/21 9:48 AM)</font><br>	<A style='FONT-WEIGHT: normal; FONT-SIZE: normal;COLOR: 'onclick='return popupINDEX(this, `index`)' href='https://www.usms.org/fitness-and-training/articles-and-videos/articles/kick-timing-101'>https://www.usms.org/fitness-and-training/articles-and-videos/articles/kick-timing-101</A><br><font color=maroon>Two-, Four, and Six-Beat Kicking Patterns</font><br><br><font color=silver>Compare it to walking. When you are walking, as your left leg swings forward your <br>right arm swings forward as counterbalance. 1 <e><b>downward</b> kick should <br>always be timed with the recovery of the <b><u>opposite</u></b> arm</e> as it slices in to forward <br>extension.<br>Count the kick as it snaps <b>down</b>, not up, as you would if you were running and counting <br>foot strikes - the foot strike happens immediately after the leg swings forward, not when <br>it swings back on recovery.<br><br><span style='background:yellow;'><font color=maroon><b><u>Six-beat kick</font></u></b></span>:Think of this <b><i>common</i></b> kick pattern as being <br>similar to the <e>timing of a waltz</e>: Count 'One-two-three; one-two-three' or <br>'Right-two-three; left-two-three' and so on. In short, you should complete six <br>kicks per stroke cycle or three kicks per single arm stroke. The <e>first kick is down</e>, <br>timed <e>with the opposite recovery arm spearing to forward</e> extension. So, in this pattern,<br>the <e>right leg kicks down (one) and <b>rotates the torso to the <u>left skating edge</u></e>, which is <br>followed by a downward kick on the left side (two). The third beat comes with the right <br>leg kicking down (three), then the left leg kicks down (one). Next, the torso rotates to <br>the right skating edge, which is followed by another downward right kick (two)  <br>and finallya downward left kick (three). <br></font>"+
	"<br>&nbsp;&nbsp;&nbsp;&nbsp;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++<br><br>The start of the <e>propulsive</e> phase of the arm stroke always coincides with a downward<br>motion of the leg on the <e><u>same</u></e> side.<br><A style='FONT-WEIGHT: normal; FONT-SIZE: normal; COLOR: 'onclick='return popupINDEX(this, `index`)' href='http://www.enjoy-swimming.com/flutter-kick.html'>http://www.enjoy-swimming.com/flutter-kick.html</A><br>In the <e><u><b>six-beat kick</b></u></e>, each leg kicks three times per stroke cycle. Consider the <br>movements of the right arm and the right leg. The <span style='background:black;'>first downbeat of the leg occurs<br>during the forward extension of the <e>same</e> arm</span>. The second downbeat of the leg occurs<br>during the upsweep of the arm. The third downbeat of the leg occurs during<br>the recovery of the arm. The left leg moves in opposition to the right leg.<br><br>	In the <e><u><b>two-beat kick</b></u></e> you kick once with each leg per stroke cycle.<br>The <e>downbeat</e> of the <e>right leg</e> occurs during the <e>propulsive phase</e> of the <e>right arm</e> <br>stroke (insweep and upsweep to be precise).<br><br>"+
	"  &nbsp;&nbsp;&nbsp;&nbsp;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++<br><br>Downward leg kick and the finish of the arm `push` phase are timed together.<br> <A style='FONT-WEIGHT: normal; FONT-SIZE: normal; COLOR: 'onclick='return popupINDEX(this, `index`)' href='https://swimcoachingblog.com/2013/03/12/frontcrawl-timing-pt-1-arms-and-legs/'>https://swimcoachingblog.com/2013/03/12/frontcrawl-timing-pt-1-arms-and-legs/</A><br><span id='tab'><font color=orange> http://www.youtube.com/watch?v=VbelgVrdsSk</font></span><br>In the <e>two beat</e> kick the <e>right leg kicks downwards as the right arm<br> finishes the push phase</e>.  In the two beat kick there is a distinctive pause between kicks; <br>(L)kick-pause-(R)kick-pause. . . and in the <e>six beat</e> kick instead of the pause a swimmer <br>squeezes in two additional kicks; <e>(L)kick-two quick kicks-(R)kick-two quick kicks</e>.<br><br>";

							/*	+++++++++++++++++++++++	*/

/* innerText gives you a style-aware, representation of the text that tries to match what`s rendered in by the browser this means:
		innerText applies text-transform and white-space rules
		innerText trims white space between lines and adds line breaks between items
		innerText will not return text for invisible items
*/
//var x = document.getElementById('test');
		//element.innerHTML: Sets or gets the HTML syntax describing the element's descendants
//x.innerHTML
	// => "
	// =>   Warning: This element contains <code>code</code> and <strong>strong language</strong>.
	// => "

		//This is part of the W3C's DOM Parsing and Serialization Specification. Note it's a property of Element objects.
//node.innerText
		//Sets or gets the text between the start and end tags of the object
//x.innerText
	// => "Warning: This element contains code and strong language."




