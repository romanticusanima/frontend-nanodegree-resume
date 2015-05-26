//$("#main").append("Malai Anastasiia");

// var awesomeThoughts = "I am Anastasiia and I am AWESOME!";
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//$("#main").append(funThoughts );

var formattedName = HTMLheaderName.replace("%data%", "Malai Anastasiia");
var formattedRole = HTMLheaderRole.replace("%data%", "Web developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// var s = "audacity";
// s = s[1].toUpperCase() + s.slice(2);
// console.log(s);

// var skills = ["HTML", "CSS", "JavaScript"];
var bio = {
  "name" : "Anastasiia",
  "age" : 25,
  "role" : "Web developer",
  "contacts" : {
    "mobile" : "063 192 01 26",
    "email" : "nst90@yandex.ru",
  },
  "message" : "I am awesome!",
  "skills" : ["HTML", "CSS", "JavaScript"],
  "picture" : "images/me.jpg"
};

var work = {
  "jobs": [
    {
      "position" : "Front-end developer",
      "employer" : "Logic IT Solutions",
      "years" : "January 2015 - current",
      "city" : "Kyiv",
      "description" : "web development"
    },
    {
      "position" : "Web developer",
      "employer" : "Alpha-Med Ukraine",
      "years" : "June 2014 - December 2014",
      "city" : "Kyiv",
      "description" : "web development"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Battle of The Nations",
      "dates" : "2015",
      "desctiption" : "web site for Prague event"
    }
  ]
}

// var education = {
//   "name" : "National Aviation University",
//   "faculty" : "Control systems",
//   "grad_year" : "2012",
//   "city" : "Kyiv"
// }

// $("#main").append(work["position"]);
// $("#main").append(education.name);

var education = {
  "schools": [
    {
      "name" : "National Aviation University",
      "city" : "Kyiv",
      "degree" : "Bachelor",
      "major" : "Control systems",
      "dates" : "2011"
    },
    {
      "name" : "National Aviation University",
      "city" : "Kyiv",
      "degree" : "Master",
      "major" : "Project management",
      "dates" : "2011"
    }
  ],
  "onlineCourses" : [
  {
    "title" : "Javascript",
    "school" : "Udacity",
    "dates" : 2015,
    "url" : "https://www.udacity.com"
   }
  ]
}


//////////////////////////////////////////////////////////////
// var sampleArray = [0,0,7];

// var incrementLastArrayElement = function(_array) {
//     var newArray = [];
//     // Your code should make newArray equal to an array that has the same
//     // values as _array, but the last number has increased by one.
//     newArray = _array;
//     n = newArray.length - 1;
//     m = _array.length - 1;
//     newArray[n] = _array[m] + 1;
//     // For example:
//     // _array = [1, 2, 3];
//     // turns into:
//     // newArray = [1, 2, 4];
//     return newArray;
// };

// Did your code work? The line below will tell you!
// console.log(incrementLastArrayElement(sampleArray));
// function incrementLastArrayElement(_array)  {
//     var newArray = [];
//     newArray = _array.slice(0);
//     var lastNumber = newArray.pop();
//     newArray.push(lastNumber + 1);
//     return newArray;
// }
////////////////////////////////////////////////////
// var name = "AlbERt EINstEiN";

// function nameChanger(oldName) {
//     var finalName = oldName;
//     // Your code goes here!
//     var names = oldName.split(" ");
//     names[1] = names[1].toUpperCase();
//     names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//     finalName = names.join(" ");
//     // Don't delete this line!
//     return finalName;
// };

// Did your code work? The line below will tell you!
// console.log(nameChanger(name));
/////////////////////////////////////////////////////
// var charEscape = function(_html) {
//     var newHTML = _html;

//     newHTML = _html.replace(/</g, "&lt;");
//     newHTML = newHTML.replace(/>/g, "&gt;");

//     return newHTML;
// };
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
}
