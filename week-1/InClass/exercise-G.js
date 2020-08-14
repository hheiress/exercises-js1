let NumberofStudents = 15;
let NumberofMentors = 8;
let Totalnumberofstudentsandmentors = NumberofStudents + NumberofMentors;

let PercentageStudents = (NumberofStudents / Totalnumberofstudentsandmentors * 100)
let PercentageMentors = (NumberofMentors / Totalnumberofstudentsandmentors * 100)

console.log("Percentage of Students: " + Math.round(PercentageStudents) + "%");
console.log("Percentage of Mentors: " + Math.round(PercentageMentors) + "%");