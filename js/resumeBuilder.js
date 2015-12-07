/*
My resume.
 */

 var bio = {
    "name": "Roman Fomenko",
    "role": "Android Developer",
    "contacts": {
        "mobile": "223-322-223-322  :-)",
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
var education = {
    "schools": [
    {
        "name": "National Mining University",
        "city": "Dnipropetrovsk",
        "degree": "Specialist",
        "majors":["Mining Engineer"],
        "dates": "2004-2009",
        "url": "www.nmu.org.ua"
    }
    ],
    "onlineCourses": [
    {
        "title": "Android development",
        "school": "Online school from e-Legion and Google",
        "dates": 2015,
        "url": "http://learndroid.e-legion.ru/"
    }
    ]
};

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




