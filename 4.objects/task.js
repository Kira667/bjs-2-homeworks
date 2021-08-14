function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

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

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  setSubject(subjectName) {
    this.subject = subjectName;
  }

  addMark(mark) {
    if (this.marks === undefined) {
      this.marks = [];
      this.marks.push(mark);
    } else {
      this.marks.push(mark);
    }
  }

  addMarks(...markArr) {
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
  }

  getAverage() {
    let sum = 0;
    let avg = 0;

    this.marks.forEach(function (value) {
      sum += value;
    });
    avg = sum / this.marks.length;

    return avg;
  }

  exclude(reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
  }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");
