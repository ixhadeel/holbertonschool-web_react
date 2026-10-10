interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Sara',
  lastName: 'Ali',
  age: 21,
  location: 'Riyadh',
};

const student2: Student = {
  firstName: 'Nora',
  lastName: 'Ahmed',
  age: 22,
  location: 'Jeddah',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student: Student) => {
  const row = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});

document.body.appendChild(table);
