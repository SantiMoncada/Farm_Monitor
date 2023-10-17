async function regar(id){
	var s = document.getElementById("mode");
	s.disabled = true;
	id.disabled = true;
	id.style.filter = "grayscale(100%)";
	comand = "cgi-bin/regar.py?turns=1";
	//comand += turns.value;
	(window.open(comand)).close();
	//await sleep(turns.value*3700);
	await sleep(3700);
	id.style.filter = "grayscale(0%)";
	id.disabled = false;
	s.disabled = false;
}

async function iluminar(id){
	var s = document.getElementById("mode");
	s.disabled = true;
	id.disabled = true;
	id.style.filter = "grayscale(100%)";
	comand = "cgi-bin/iluminar.py?time=3";
	//comand += time.value;
	(window.open(comand)).close();
	//await sleep(time.value*1000);
	await sleep(3000);
	id.style.filter = "grayscale(0%)";
	id.disabled = false;
	s.disabled = false;
}

async function mode(){
	var s = document.getElementById("mode");
	if(s.options[s.selectedIndex].value == "schedule"){
		(document.getElementById("save_button")).disabled = false;
		(document.getElementById("save_button")).style.filter = "opacity(100%)";
			
		(document.getElementById("water_start_time")).disabled = false;
		(document.getElementById("water_start_time")).style.filter = "opacity(100%)";
			
		(document.getElementById("water_period")).disabled = false;
		(document.getElementById("water_period")).style.filter = "opacity(100%)";
		
		(document.getElementById("light_start_time")).disabled = false;
		(document.getElementById("light_start_time")).style.filter = "opacity(100%)";
		
		(document.getElementById("light_period")).disabled = false;
		(document.getElementById("light_period")).style.filter = "opacity(100%)";
		
		(document.getElementById("water_button")).disabled = true;
		(document.getElementById("water_button")).style.filter = "grayscale(100%)";
			
		(document.getElementById("light_button")).disabled = true;
		(document.getElementById("light_button")).style.filter = "grayscale(100%)";
	} else if (s.options[s.selectedIndex].value == "manual"){
		(document.getElementById("save_button")).disabled = true;
		(document.getElementById("save_button")).style.filter = "opacity(0%)";
		
		(document.getElementById("water_start_time")).disabled = true;
		(document.getElementById("water_start_time")).style.filter = "opacity(0%)";
		
		(document.getElementById("water_period")).disabled = true;
		(document.getElementById("water_period")).style.filter = "opacity(0%)";
		
		(document.getElementById("light_start_time")).disabled = true;
		(document.getElementById("light_start_time")).style.filter = "opacity(0%)";
		
		(document.getElementById("light_period")).disabled = true;
		(document.getElementById("light_period")).style.filter = "opacity(0%)";
		
		(document.getElementById("water_button")).disabled = false;
		(document.getElementById("water_button")).style.filter = "grayscale(0%)";
		
		(document.getElementById("light_button")).disabled = false;
		(document.getElementById("light_button")).style.filter = "grayscale(0%)";
	} else if(s.options[s.selectedIndex].value == "auto"){
		(document.getElementById("save_button")).disabled = true;
		(document.getElementById("save_button")).style.filter = "opacity(0%)";
		
		(document.getElementById("water_start_time")).disabled = true;
		(document.getElementById("water_start_time")).style.filter = "opacity(0%)";
		
		(document.getElementById("water_period")).disabled = true;
		(document.getElementById("water_period")).style.filter = "opacity(0%)";
		
		(document.getElementById("light_start_time")).disabled = true;
		(document.getElementById("light_start_time")).style.filter = "opacity(0%)";
		
		(document.getElementById("light_period")).disabled = true;
		(document.getElementById("light_period")).style.filter = "opacity(0%)";
		
		(document.getElementById("water_button")).disabled = true;
		(document.getElementById("water_button")).style.filter = "grayscale(100%)";
		
		(document.getElementById("light_button")).disabled = true;
		(document.getElementById("light_button")).style.filter = "grayscale(100%)";
	}
}

async function save(id){
	comand = "cgi-bin/save.py?water_start_time=";
	var s0 = document.getElementById("water_start_time");
	comand += s0.options[s0.selectedIndex].value + "&water_period=";
	var s1 = document.getElementById("water_period");
	comand += s1.options[s1.selectedIndex].value + "&light_start_time=";
	var s2 = document.getElementById("light_start_time");
	comand += s2.options[s2.selectedIndex].value + "&light_period=";
	var s3 = document.getElementById("light_period");
	comand += s3.options[s3.selectedIndex].value;
	if(comand.includes("default")){
		alert("Error Saving");
	}else{
		(window.open(comand)).close();
		alert("Config Saved");
	}
}

async function add(id){
	var name = prompt("Enter name", "default");
	var img = prompt("Image source", "default");
	var loc = prompt("Location", "default");
	if(name != null && name != "" && name != "default" && img != null && img != "" && img != "default" && loc != null && loc != "" && loc != "default"){
		alert("Success, adding new element\n\nName: " + name + "\nImage: " + img + "\nLocation: " + loc);
	} else {
		alert("Error, something gone wrong :(");
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
