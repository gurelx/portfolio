// Databases
const education = [
    {
        Title: "Ontario Advanced Diploma",
        Field: "Computer Programming",
        Institution: "Seneca College",
        Date: "Ongoing"
    },
    {
        Title: "Master's Degree",
        Field: "City Planning",
        Institution: "Middle East Technical University",
        Date: "2021"
    },
    {
        Title: "Bachelor's Degree",
        Field: "City and Regional Planning",
        Institution: "Middle East Technical University",
        Date: "2019"
    }
];

const skills = [
    {
        Title: "C",
        Concepts: ["Learned the basics of programming concepts like functions and loops", 
            "Designed algorithms to code mini projects", 
            "Worked with files, created applictions that read and write data to them", 
            "Have the basic knowledge about the modular design",
            "Worked with structs and arrays as an introduction to Object Oriented Programming"]
    },
    {
        Title: "Linux",
        Concepts: ["Executed Linux commands to manage files and directories", 
            "Edited text files using common text editors in order to configure the system and write scripts", 
            "Wrote shell scripts to solve programming problems, including customizing user environments to improve working efficiency", 
            "Have the understanding of directory layout of a typical Linux system",
            "Used Linux pipes and file redirection to manipulate data",
            "Used simple regular expressions to define patterns"]
    },
    {
        Title: "C++",
        Concepts: ["Learned the basics of Object Oriented Programming", 
            "Worked with classes and objects in a class hierarchy", 
            "Wrote public, private, and protected attributes, abstract classes, and virtual class methods",
            "Have the understanding of dynamic memory allocation and the knowledge of avoiding memory leaks", 
            "Worked with overloaded functions and wrote function templates",
            "Have the basic knowledge of iostream and iofstream to read from and write to stream"]
    },
    {
        Title: "Web Development",
        Concepts: ["Developed web client applications that confirm to current standards and best practices", 
            "Have the basic knowledge of HTML, CSS, and JavaScript", 
            "Wrote public, private, and protected attributes, abstract classes, and virtual class methods",
            "Used DOM manipulation in JavaScript to dynamically create HTML items", 
            "Used CSS to style the webpages",
            "Used JavaScript to validate user input like forms in a webpage"]
    },
    {
        Title: "Database Development",
        Concepts: ["Have the basic knowledge of database concepts and database management systems", 
            "Applied a relational model with constraints to develop a database", 
            "Used Oracle and SQL to compose and manipulate data to solve business problems, and maintain the data",
            "Examined a database to optimise interactions with a simple business application",
            "Used relational diagrams and normailzation to demonstrate the relation between data tables",
            "Applied database privilege and privacy policies to control user access to a database"]
    },
];


// Education Section
function displayEducation()
{
    let parent = document.getElementById("row");

    for(let i = 0; i < education.length ; i++)
    {
        // Create box for each education
        let box = document.createElement("div");
        box.setAttribute("id", "box");

        // Date of education
        let main_date = document.createElement("h3");
        main_date.setAttribute("id", "date");
        let date = document.createTextNode(education[i].Date);
        main_date.appendChild(date);
        box.appendChild(main_date);

        // Title of education
        let main_title = document.createElement("h2");
        main_title.setAttribute("id", "title");
        let title = document.createTextNode(education[i].Title);
        main_title.appendChild(title);
        box.appendChild(main_title);

        // Field of education
        let main_field = document.createElement("h3");
        main_field.setAttribute("id", "field");
        let field = document.createTextNode(education[i].Field);
        main_field.appendChild(field);
        box.appendChild(main_field);

        // Institution
        let main_inst = document.createElement("h3");
        main_inst.setAttribute("id", "institution");
        let institution = document.createTextNode(education[i].Institution);
        main_inst.appendChild(institution);
        box.appendChild(main_inst);

        parent.appendChild(box);
    }
}

// Skills section
function displaySkills() 
{
    let parent = document.getElementById("row2");

    for(let i = 0; i < skills.length ; i++)
    {
        // Create a list for details of the skills
        let skillList = document.createElement("ul");

        // Create box for each skill
        let box = document.createElement("div");
        box.setAttribute("id", "box");

        // Title of the skill
        let main_title = document.createElement("h2");
        main_title.setAttribute("id", "title");
        let title = document.createTextNode(skills[i].Title);
        main_title.appendChild(title);
        box.appendChild(main_title);

        // Create list elements and append them to the skillbox
        for(let n = 0 ; n < skills[i].Concepts.length; n++)
        {
            let concept = document.createElement("li");
            concept.setAttribute("id", "concept");
            let concept_text = document.createTextNode(skills[i].Concepts[n]);
            concept.appendChild(concept_text);
            skillList.appendChild(concept);
        }

        box.appendChild(skillList);
        parent.appendChild(box);
    }
}

// Text area to be shown if the 'other' is selected in the form
function textArea() 
{
    let option = document.querySelector(".other");
    let text = document.getElementById("other_reason");
    let textArea = document.getElementById("textarea");

    // Display the textarea and make it required
    if(option.checked) 
    {
        text.style.display = "block";
        textArea.setAttribute('required', '');
    }
    // Hide the textarea and remove required
    else 
    {
        text.style.display = "none";
        textArea.required = false;
    }
}

// Form validation
var err = "";
function formCheck()
{
    // Return of the function
    var ret = false;
    err = ""; // reset errors
    
    // Check functions
    nameCheck();
    emailCheck();
    postalCheck();
    provinceCheck();

    // Append error to the span
    document.getElementById("errors").innerHTML = err;
    
    // If there is no error return true
    if (err == "")
    {
        ret = true;
    }
    return ret;
}

// Validate the name
function nameCheck() 
{
    var fname = document.querySelector(".fname");
    var lname = document.querySelector(".lname");

    var corr_name = /^[A-Za-z]+$/; // Only characters

    // Validate first name
    if(!fname.value.match(corr_name))
    {
        err+= "*Please enter a valid first name (only characters)<br>"; 
    }

    // Validate last name
    if(!lname.value.match(corr_name))
    {
        err+= "*Please enter a valid last name (only characters)<br>"; 
    }
}

// Validate the email
function emailCheck() 
{
    var email = document.querySelector(".email");

    // Extended validation for emails adding to 'input type=email'
    var corr_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

    // Validate user input
    if(!email.value.match(corr_email))
    {
        err+= "*Please enter a valid email<br>"; 
    }
}

// Validate the postal code
function postalCheck()
{
    var code = document.querySelector(".postal");

    // Validation for Canadian postal codes
    var corr_code = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]●?[0-9][A-Z][0-9]$/;

    // Validate user input
    if(!code.value.match(corr_code))
    {
        err+= "*Please enter a valid postal code<br>"; 
    }
}

// Validate the province
function provinceCheck()
{
    let province = document.querySelector(".provinces").value;

    // Validate that a province is selected
    if (province == 0) 
    {
        err += "*Please select a Province<br>";
    }
}

function main() {
    displayEducation();
    displaySkills();
}

addEventListener("DOMContentLoaded", main);
