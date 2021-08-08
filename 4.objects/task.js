
//class University {
  //constructor(arrStudents) {
   // this.setNewStudents(arrStudents)
  //}

  //setNewStudents(arrStudents) {
   // this.students = arrStudents;
 // }

  //findAllStudentsByName(name) {
  //  return this.students.slice().filter(student => student.name === name);
  //}

 // findAllStudentsByAge(age) {
  //  return this.students.slice().filter(student => student.age === age);
  //}

  //findAllStudentsByGender(gender) {
   // return this.students.slice().filter(student => student.gender === gender);
 // }
//}

//class Student {
  //constructor({name, gender, age}) {
    //this.name = name;
    //this.gender = gender;
    //this.age = age;
  //}

  //setNewAge(age) {
   // this.age = age;
  //}

  //setNewGender(gender) {
   // this.gender = gender;
  //}

  //setNewName(name) {
   // this.name = name;
  //}
//}

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}


//const student10 = new Student("Михаил", "male", "22");
//const student11 = new Student({name: 'Михаил', age: 29, gender: 'male'});
//const student12 = new Student({name: 'Виктория', age: 20, gender: 'female'});
//const student13 = new Student({name: 'Игорь', age: 23, gender: 'male'});
//const student14 = new Student({name: 'Мария', age: 20, gender: 'female'});
//const student15 = new Student({name: 'Маша', age: 22, gender: 'female'});


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