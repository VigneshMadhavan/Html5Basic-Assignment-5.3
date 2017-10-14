//function to initialize objects
function initialize(){
	
	var StudentDetails = {
			StudentName: "Vigneshwaran",
			DOB: "29 May 1983",
			Skills:['Flash','Html'],
			Address: {
				 	state: "Tamilnadu",
				  	city: "Virudhunagar",
					country: "India",
					pincode:"626001"
			},
			Degree:"BE"
		
		};
	
		
	console.log(StudentDetails);
	showDetails("Initial StudentDetails:",StudentDetails);
	StudentDetails.Eyecolor="black";
	StudentDetails.MotherName="Parama";
	delete StudentDetails.DOB;
	console.log(StudentDetails);
	showDetails("StudentDetails After Manipulation:",StudentDetails);	
	
}

function showDetails(msg,obj){
	document.writeln(msg+"<br>------------------------------<br>");
	for(var item in obj){
		if(item=="Address"){
			document.writeln("<b>Address:</b><br>");
			for (var j in obj[item]) 
			{
      			//console.log(" " + obj[item][j]);
				document.writeln("<b>"+j+"</b>::"+obj[item][j]+"<br>")
     		}
		}else{
			document.writeln("<b>"+item+"</b>::"+obj[item]+"<br>")
		}
		
		
	}
	document.writeln("------------------------------<br>");
}
initialize();

