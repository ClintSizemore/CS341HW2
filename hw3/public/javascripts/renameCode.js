function changeText() {
	let special=document.getElementById("specialText").value; //sourced 'document.getElementById' from W3 schools practice
	console.log(special);
	if (special.toLowerCase().includes("vegan")) {
		document.getElementById("special").innerHTML="CHEESECAKE CONTAINS DAIRY";
		console.log("User Wanted Vegan CHEESEcake");
	}
	else {
		document.getElementById("quantity").hidden = true;
		document.getElementById("toppingTable").hidden = true;
		document.getElementById("notes").hidden = true;
		document.getElementById("textTable").hidden = true;
	}
}
function changeDate(month) { //Changes the dropdown to siplay the selected month
	document.getElementById("dateButton").innerHTML = month;
}
