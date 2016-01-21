'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function projectClick(e){
	console.log("clicked");
 	e.preventDefault();

 	$(this).css("background-color","green");
 	var projectTitle = $(this).find("p").text();
 	console.log(projectTitle);
 	var jumbotronHeader = $(".jumbotron h1");
 	console.log(jumbotronHeader);
 	jumbotronHeader.text(projectTitle);

 	$(this).find(".img").hide();

 	var containingProject = $(this).closest(".project");
 	var description = $(this).find(".project-description").text();
 	console.log(description);
 	if(description.length == 0)
 	{
 		containingProject.append("<div class='description'><p>Description of the Project</p></div>");
 	}
 	else
 	{
 		description.html("<p>Stop clicking me! You just did it at" + (newDate()) + "</p>");
 	}

 	$(this).find(".img").show();
 }

function changeWidthplusContent()
	{
		console.log("inside function change");
		var projectVal = $("#project").val()
		$(projectVal).animate(
			{
				width:$('#width').val()
			});
		var newProjectDesc = $('#description').val();
		console.log(newProjectDesc);
		var val = $(projectVal + " p").text();
		console.log(val);
		$(projectVal + " p").text(newProjectDesc);
}

function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").addClass("active");
	});

	$("#submitBtn").click(changeWidthplusContent);

	$("a.thumbnail").click(projectClick);

}

