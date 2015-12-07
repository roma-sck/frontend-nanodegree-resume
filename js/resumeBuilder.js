/*
My resume.
 */

 var bio = {
    "name": "Roman Fomenko",
    "role": "Android Developer",
    "contacts": {
        "mobile": "223-322-223-322",
        "email": "roma.sck@gmail.com",
        "github": "roma-sck@github.com",
        "location": "Dnipropetrovsk"
    },
    "skills": ["Java Core", "Android SDK", "HTML/CSS", "JS", "Git", "SQL"],
    "bioPic": "images/croco.jpg",
    "welcomeMessage": "Hi to all!"
};

var name = bio.name;
var formattedName = HTMLheaderName.replace('%data%', name);

var role = bio.role;
var formatterRole = HTMLheaderRole.replace('%data%', role);

$('#header').prepend(formatterRole);
$('#header').prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").prepend(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);


if (bio.skills.length > 0)
{
    var formattedSkills;
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills)
    {
            formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkills);
    }
}


var work = {
    "jobs": [
    {
        "employer": "ALAVES SPECTRANS LTD",
        "title": "Manager of business and management",
        "dates": "2009-2011",
        "description": "Organization of oversized shipments"
    },
    {
        "employer": "EVRAZ DMZ Petrovskogo",
        "title": "Last position – “Engineer of II category”",
        "dates": "2011-2015",
        "description": "Monitoring and analysis of targets and their actual implementation, reporting, presentations to management"
    }
    ]
};

function displayWork() 
{
    for (job in work.jobs) 
    {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formatedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
        $(".work-entry:last").append(formatedDescription);
    }
}

displayWork();


// $(document).click(function(loc) {
// 	var x = loc.pageX;
// 	var y = loc.pageY;

// 	logClicks(x,y);
// });


// /*function changes name "jOhN dOe" to "John DOE"*/
// function inName(name)
// {
//     name = name.trim().split(" ");
//     console.log(name);
//     name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//     name[1] = name[1].toUpperCase();
//     return name[0] + " " + name[1];
// }

//$("#main").append(internationalizeButton);

var education = {
    "school":
    {
        "name": "National Mining University",
        "city": "Dnipropetrovsk",
        "degree": "Specialist",
        "majors":["Mining Engineer"],
        "dates": "2004-2009",
        "url": "www.nmu.org.ua"
    },
    "courses": [
    {
        "title": "Fundamentals of the Java programming language",
        "school": "Corporate Training Center \"SeeTech\"",
        "dates": "2014 ",
        "url": "http://seetech.com.ua"
    },
    {
        "title": "Android development",
        "school": "Online school from e-Legion and Google",
        "dates": "2015 ",
        "url": "http://learndroid.e-legion.ru/"
    },
    {
        "title": "JavaScript Crash Course",
        "school": "Udacity",
        "dates": "2015 ",
        "url": "http://www.udacity.com/course/ud804"
    }
    ]
};

function displayEducation()
{
    $('#education').append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace('%data%', education.school.name);
    $(".education-entry:last").append(formattedName);
    var formattedDates = HTMLschoolDates.replace('%data%', education.school.dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace('%data%', education.school.city);
    $(".education-entry:last").append(formattedLocation);
    var formattedMajor = HTMLschoolMajor.replace('%data%', education.school.majors);
    $(".education-entry:last").append(formattedMajor);

  
    for (course in education.courses)
    {
        var formattedTitle = HTMLonlineTitle.replace('%data%', education.courses[course].title);
        $(".education-entry:last").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace('%data%', education.courses[course].school);
        $(".education-entry:last").append(formattedSchool);
        var formattedDates = HTMLonlineDates.replace('%data%', education.courses[course].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace('%data%', education.courses[course].url);
        $(".education-entry:last").append(formattedURL);
    }
}

displayEducation();



var projects = {
    "projects": [
    {
        "title": "Censor News Reader",
        "dates": "2015",
        "description": "Simple Android news reader from http://censor.net.ua. Source code : https://github.com/roma-sck/Censor-News-Reader",
        "image" : "https://raw.githubusercontent.com/roma-sck/frontend-nanodegree-resume/master/proj_screenshot.jpg"
    }
    ]
};

projects.display = function()
    {
        for (project in projects.projects)
        {
            $('#projects').append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title)
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates)
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description)
            $(".project-entry:last").append(formattedDescription);
			var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].image)
            $(".project-entry:last").append(formattedImage);
        }

    }

projects.display();
