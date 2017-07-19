/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*var formattedName=HTMLheaderName.replace("%data%","karthik");
var formattedRole=HTMLheaderRole.replace("%data%","web developer");
*/

var skills=["java", "html", "css"];
var bio={
	"name": "Karthikeya Godavarthi",
	"role": "Software Developer",
	"contact": {
		"mail": "karthikeya.vamsi123@gmail.com",
		"mobile": "845-389-5986",
		"github": "https://github.com/karthikknight"
	},
	"image": "images/fry.jpg",
	"welcomeMsg": "Hi, Welcome",
	"skills": skills
}
var work={
	"jobs": [
	{
		"title": "Software Developer",
		"employer": "Tech Mahindra",
		"client": "Nissan USA",
		"years": "11/2014 to 12/2015",
		"city": "Chennai",
		"description": "Maintenance and enhancement of groovy based web-applications for Nissan and Infiniti owner portal."
	},{
		"title": "Associate Software Developer",
		"employer": "Tech Mahindra",
		"client": "Volvo Cars",
		"years": "04/2014 to 11/2014",
		"city": "Chennai",
		"description": "Developed and maintained M2M java-based, production critical, applications used in the manufacturing facility."
	},{
		"title": "Sales Analyst",
		"employer": "Tech Mahindra",
		"client": "-",
		"years": "10/2013 to 04/2014",
		"city": "Hyderabad",
		"description": "SPOC for the Accounts Receivables, of the European Operations, valued at over 100 Million USD."
	}]

}
var projects={
	"projects":[
		{
			"title": "Portfolio",
			"description":"Created a responsive website (http://karthikeya.atwebpages.com/) optimized for mobile and desktop performance using HTML5, CSS3, JQuery and Bootstrap. ",
			"images": ["images/NOP.jpg", "nissan.jpg", ""]	
		},
		{
			"title": "Interactive Resume",
			"description":"An interactive application which reads the resume content from a JSON file and dynamically displays it within a provided template. Developed primarily using HTML5, CSS3, JavaScript and jQuery.",
			"images": ["images/NOP.jpg", "nissan.jpg", ""]	
		}
	]
}
var education={
	"schools": [
		{
			"institute": "State University of New York at New Paltz",
			"grad": "Dec 2017",
			"major": "Computer Science",
			"degree": "Master of Sciences"
		},{
			"institute": "JNTUK",
			"grad": "May 2013",
			"major": "Electrical and Electronics Engineering",
			"degree": "Bachelor of Technology"
		}
	],
	"onlineCourses": {
		"title": "Front-End Web Developer Nanodegree",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
}

var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
var welcomeMsg=HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var email=HTMLemail.replace("%data%", bio.contact.mail);
var phone=HTMLemail.replace("%data%", bio.contact.mobile);
var img=HTMLbioPic.replace("%data%", bio.image);


$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#footerContacts").append(email);
$("#footerContacts").append(phone);
$("#header").prepend(img);


//code for skills
var formattedSkills=HTMLskills.replace("%data%",bio.skills);
if(skills){
	$("#header").append(HTMLskillsStart);
	$("#skills").append(formattedSkills);
}
displayWork();
//code for WorkExperience
function displayWork(){
	for (var job=0; job<work.jobs.length; job++){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer=HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle=formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedYears=HTMLworkDates.replace("%data%", work.jobs[job].years);
		var formattedCity=HTMLworkLocation.replace("%data%", work.jobs[job].city);
		var formattedDescription=HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedYears);
		$(".work-entry:last").append(formattedCity);
		$(".work-entry:last").append(formattedDescription);
	}
}
//code ofr clicks
/*$(document).click(function(loc) {
  var x=loc.pageX;
  var y=loc.pageY;
  logClicks(x,y);
});*/

projects.display=function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
	}
}
//code for internationlisation
$("#header").append(internationalizeButton);
function inName(name){
	name=name.trim().split(" ");
	console.log(name);
	
}