let totalTasks = 0;
let completedTasks = 0;

function addTask(){

const subject =
document.getElementById("subject").value;

const task =
document.getElementById("task").value;

if(subject === "" || task === ""){
alert("Please fill all fields");
return;
}

totalTasks++;

const li =
document.createElement("li");

li.innerHTML = `
<input
type="checkbox"
onchange="toggleTask(this)"
>

<b>${subject}</b> :
${task}
`;

document
.getElementById("taskList")
.appendChild(li);

updateProgress();

document
.getElementById("subject")
.value="";

document
.getElementById("task")
.value="";
}

function toggleTask(box){

if(box.checked){
completedTasks++;
}
else{
completedTasks--;
}

updateProgress();
}

function updateProgress(){

let percent = 0;

if(totalTasks > 0){
percent =
Math.round(
(completedTasks/totalTasks)*100
);
}

document
.getElementById("bar")
.style.width =
percent + "%";

document
.getElementById("progressText")
.innerText =
percent + "% Complete";
}

let time = 1500;
let interval;

function startTimer(){

clearInterval(interval);

interval =
setInterval(()=>{

if(time <= 0){
clearInterval(interval);
alert("Pomodoro Complete!");
return;
}

time--;

const mins =
Math.floor(time/60);

const secs =
time%60;

document
.getElementById("timer")
.innerText =
`${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;

},1000);
}

function resetTimer(){

clearInterval(interval);

time = 1500;

document
.getElementById("timer")
.innerText = "25:00";
}

function updateAttendance(){

const value =
document
.getElementById("attendance")
.value;

document
.getElementById("attendanceDisplay")
.innerText =
`Current: ${value}%`;
}

document
.getElementById("themeBtn")
.addEventListener("click",()=>{

document.body
.classList.toggle("dark");

});