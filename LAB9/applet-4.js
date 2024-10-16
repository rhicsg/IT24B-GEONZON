class StudentList{

    constructor(dataUrl){
        this.dataUrl = dataUrl;
        this.students = [];
        this.init();
    }

    async init(){
        await this.fetchData();
        this.renderStudentList(this.students);
        this.bindSearchEvent;
    }

    async fetchData(){
        try {
            const response = await fetch(this.dataUrl);
            this.students = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error)

        }
        
        }

        renderStudentList(students){
            const StudentListContainer = document.getElementById('studentList');
            StudentListContainer.innerHTML = students.map(students =>
                `<button class=" btn btn-primary" style="margin-top:15px; width:25rem">
                ${student.student_name} | ${student.student_program}
                </button><br>`
            ).join('');
        }

        bindSearchEvent(){
            const studentSearchBar = document.getElementById('studentSearchbar');
            const StudentSearchListContainer = document.getElementById('studentSearchList');

            studentSearchBar.addEventListener ('input', () => {
                this.filterStudents(studentSearchBar.value, StudentSearchListContainer);
            });

            this.renderStudentList(this.students, studentSearchListContainer);
            }

            
        }

    
    
