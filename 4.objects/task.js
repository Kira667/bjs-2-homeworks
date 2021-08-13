function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
      this.marks = [];
      this.marks.push(mark);
  } else {
      this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (...markArr) {
  if (this.marks === undefined) {
      this.marks = [];
      for (let ind of markArr) {
          this.marks.push(ind);
      }
  } else {
      markArr.forEach(function (val) {
          this.marks.push(val);
      });
  }
};

Student.prototype.getAverage = function () {
  let sum = 0;
  let avg = 0;

  this.marks.forEach(function (value) {
      sum += value;
  });
  avg = sum / this.marks.length;

  return avg;
};

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
};
//const university1 = new University([
//student10, student11, student12, student13, student14, student15
//]);

//console.log(university1);
// const studentsMihail = university1.findAllStudentsByName('Михаил');
 //console.log(studentsMihail);

//const studentsAge20 = university1.findAllStudentsByAge(20);
//console.log(studentsAge20);