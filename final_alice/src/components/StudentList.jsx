import React from 'react'

const StudentList = ({ students }) => {
    const sortedStudents = students.sort();
    const marks = sortedStudents.map(student => student.grade, 80-100 ? 'A' : student.grade >= 60 ? 'B' : student.grade >= 50 ? 'C' : 'F');
    const names = sortedStudents.map(student => student.name);
    const status = sortedStudents.map(student => student.grade >= 50 ? 'Pass' : 'Fail');
    const grade = sortedStudents.map(student => student.grade);

    return (
        <div className="student-list">
            <h2>Student List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Grade</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedStudents.map((student, index) => (
                        <tr key={index}>
                            <td>{names[index]}</td>
                            <td>{grade[index]}</td>
                            <td>{marks[index]}</td>
                            <td>{status[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentList