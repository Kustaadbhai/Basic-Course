<script>
const phase1 = [
["Computer Fundamentals: Introduction to Computers","Hardware, Software, Input Devices, Output Devices, CPU, RAM, Storage"],
["Windows & File Management","Desktop, Taskbar, File Explorer, Folders, Copy, Move, Rename"],
["Internet, Email & Cyber Security","Google Search, Gmail, Attachments, Passwords, Online Safety"],
["MS Word Basics","Interface, Saving, Formatting, Fonts"],
["Word Formatting","Paragraphs, Alignment, Spacing, Styles"],
["Word Tables & Layouts","Tables, Columns, Lists"],
["Advanced Word","Headers, Footers, TOC, Watermarks"],
["Professional Documents","CV, Cover Letter, Applications"],
["Excel Basics","Workbook, Worksheet, Cells"],
["Excel Formulas","SUM, AVERAGE, MIN, MAX, COUNT"],
["Intermediate Excel","IF, COUNTIF, Conditional Formatting"],
["Excel Reports","Charts, Sorting, Filtering"],
["PowerPoint Basics","Slides, Themes, Layouts"],
["Advanced PowerPoint","Animations, SmartArt, Charts"],
["MS Office Final Project","Complete Word, Excel & PPT Project"]
];
</script>

</div>

<div id="course"></div>

<footer>
    <h3>Final Capstone Project</h3>
    <p>
        Build a responsive portfolio website using HTML, CSS and JavaScript.
    </p>
</footer>

</div>

<script>

const course = document.getElementById("course");

const modules = [

{
title:"Phase 1 - Fundamentals & MS Office",
className:"fundamental",
start:1,
days:[
["Computer Fundamentals","Hardware, Software, CPU, RAM, Storage"],
["Windows & File Management","Desktop, Taskbar, Explorer, Folders"],
["Internet & Email","Google Search, Gmail, Cyber Security"],
["MS Word Basics","Documents, Formatting"],
["Word Formatting","Paragraphs, Styles"],
["Word Layouts","Tables, Lists, Columns"],
["Advanced Word","Headers, Footers"],
["Professional Documents","CV, Cover Letter"],
["Excel Basics","Cells, Formatting"],
["Excel Formulas","SUM, AVG, MAX, MIN"],
["Intermediate Excel","IF, COUNTIF"],
["Excel Charts","Reports and Dashboards"],
["PowerPoint Basics","Slides and Themes"],
["Advanced PowerPoint","Animations & SmartArt"],
["Office Final Project","Word + Excel + PPT"]
]
},

{
title:"Phase 2 - HTML",
className:"html",
start:16,
days:[
["Introduction to Web Development","Internet, Websites, Browser"],
["HTML Structure","html, head, body"],
["Headings & Paragraphs","Text Content"],
["Links & Images","Navigation and Images"],
["Lists & Tables","Structured Content"],
["Forms","Inputs and Forms"],
["Semantic HTML","Header, Main, Footer"],
["Audio & Video","Media Elements"],
["Navigation Menus","Multi-page Websites"],
["Project Structure","Folder Organization"],
["HTML Mini Project","Personal Profile"],
["HTML Best Practices","Clean Code"],
["Educational Website","Multi-page Site"],
["HTML Assessment","Practical Test"],
["HTML Project","School Website"]
]
},

{
title:"Phase 3 - CSS",
className:"css",
start:31,
days:[
["Introduction to CSS","Selectors"],
["Colors & Typography","Fonts and Colors"],
["Box Model","Margin Padding Border"],
["Backgrounds","Images and Gradients"],
["Flexbox","Modern Layout"],
["CSS Grid","Grid Layout"],
["Positioning","Relative Absolute Fixed"],
["Responsive Design","Mobile First"],
["Media Queries","Breakpoints"],
["Navigation Styling","Menus"],
["Cards & Components","UI Design"],
["Landing Page Design","Professional Layout"],
["Animations","Transitions"],
["CSS Assessment","Practical"],
["Responsive Project","Landing Page"]
]
},

{
title:"Phase 4 - JavaScript",
className:"js",
start:46,
days:[
["JavaScript Introduction","What is JS"],
["Variables","let const"],
["Data Types","Strings Numbers"],
["Operators","Arithmetic Logical"],
["Conditions","if else"],
["Loops","for while"],
["Functions","Reusable Code"],
["Arrays","Collections"],
["Objects","Data Structures"],
["DOM Basics","Selecting Elements"],
["DOM Manipulation","Update HTML"],
["Events","Clicks Inputs"],
["Form Validation","User Input"],
["Mini Project","Calculator"],
["Final Capstone Project","Interactive Portfolio Website"]
]
}

];

modules.forEach(module => {

const title = document.createElement("h2");
title.className="section-title";
title.innerText=module.title;

course.appendChild(title);

const timeline = document.createElement("div");
timeline.className="timeline";

module.days.forEach((day,index)=>{

const dayNumber = module.start + index;

timeline.innerHTML += `
<div class="day ${module.className}">
<div class="circle">${dayNumber}</div>

<details>
<summary>${day[0]}</summary>

<div class="content">

<span class="badge" style="background:#334155;">
Day ${dayNumber}
</span>

<h4>Topics Covered</h4>

<ul>
<li>${day[1]}</li>
</ul>

<h4>Practice Task</h4>
<p>Complete guided exercises and submit practical work.</p>

</div>
</details>

</div>
`;
});

course.appendChild(timeline);

});

document.addEventListener("click",function(e){

if(e.target.tagName==="SUMMARY"){

const current=e.target.parentElement;

document.querySelectorAll("details").forEach(item=>{

if(item!==current){
item.removeAttribute("open");
}

});

}

});

</script>
