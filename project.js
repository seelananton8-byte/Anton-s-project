const student = {
  name: "John",
rollNumber: 12,
marks: {
 math: 85,
science: 92,
english: 78
};
getTotalMarks: function(){
  let total = 0;
  for(let subject in this.marks){
    total += this.marks[subject];
  }
 return total;
};
getAverage: function(){
  const total = this.getTotalMarks();
  const subjects = object.keys(this.marks).length;
  return total/subjects;
}
getGrade: function(){
  const avg = this.getAverage();
  if(avg >= 80) return "A";
  else if(avg >=60) return "B";
  else if(avg >=40) return "c";
  else return "F";
};
getDetails: fuction(){
  return `${this.name} (Roll ${this.rollNumber}) got grade ${this.getGrade()};
  };
  console.log("Total Marks: ",
  student.getTotalMarks());
  console.log("Average Marks:",
  student.getAverage());
  console.log("Grade:",
  student.getGrade());
  console.log(student.getDetails());

