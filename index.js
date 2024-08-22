// const formRef = document.querySelector('.js-feedback-form');
// const textareaRef = document.querySelector('.js-feedback-form textarea');

// formRef.addEventListener('submit', handleFormSubmit);
// textareaRef.addEventListener('input', handleTextareaInput);




// function handleTextareaInput(event){
//     const message = event.currentTarget.value
//     c
//     localStorage.setItem('message', message)
// }


// function getValueFromLocalStorage(){
//     const message = localStorage.getItem('message')
    
// }
const studentForm = document.getElementById('studentForm');
const studentsTableBody = document.getElementById('studentsTable').querySelector('tbody');


const students = localStorage.getItem('students');
console.log(students);
const parsedStudents = students ? JSON.parse(students): []
createStudentsMurkup(parsedStudents);
console.log(students);

studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
const form = e.currentTarget
    const student = {
        id: Date.now(),
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        age: form.elements.age.value,
        course: form.elements.course.value,
        faculty: form.elements.faculty.value
    }
    console.log(student);
    parsedStudents.push(student)
    localStorage.setItem('students', JSON.stringify(parsedStudents))

    form.reset();
    

    createStudentsMurkup(parsedStudents)
    
});




function createStudentsMurkup(students) {
    console.log(students);
    const studentsMarkup = students.map((student) => {
        console.log(student.lastName);
        return `
<tr>
<td>${student.id}</td>
<td>${student.firstName}</td>
<td>${student.lastName}</td>
<td>${student.age}</td>
<td>${student.course}</td>
<td>${student.faculty}</td>
<td>
<button class="btn btn-warning btn-sm" onclick="editStudent(${student.id})">Edit</button>
<button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.id})">Delete</button>
</td>
</tr>
`
    }).join()
    studentsTableBody.insertAdjacentHTML("beforeend", studentsMarkup)
}


function deleteStudent(studentId) {
  
    const studentIndex = parsedStudents.findIndex(student => student.id === studentId);
    
    if (studentIndex !== -1) {
        parsedStudents.splice(studentIndex, 1);
    
        localStorage.setItem('students', JSON.stringify(parsedStudents));
        
        updateStudentsTable();
    }
}

function updateStudentsTable() {
    
    studentsTableBody.innerHTML = '';
    
    createStudentsMurkup(parsedStudents);
}


function createStudentsMurkup(students) {
    const studentsMarkup = students.map((student) => {
        return `
<tr>
<td>${student.id}</td>
<td>${student.firstName}</td>
<td>${student.lastName}</td>
<td>${student.age}</td>
<td>${student.course}</td>
<td>${student.faculty}</td>
<td>
<button class="btn btn-warning btn-sm" onclick="editStudent(${student.id})">Edit</button>
<button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.id})">Delete</button>
</td>
</tr>
`;
    }).join('');
    studentsTableBody.innerHTML = studentsMarkup;
}
