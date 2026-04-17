import React from 'react'

const StudentList = ({ studentListData }) => {
    const sortedStudents = students.sort();
    const marks = sortedStudents.map(student => student.marks, 80-100 ? 'A' : student.marks >= 60 ? 'B' : student.marks >= 50 ? 'C' : 'F');
    const names = sortedStudents.map(student => student.name);
    const status = sortedStudents.map(student => student.marks >= 50 ? 'Pass' : 'Fail');
    const grade = sortedStudents.map(student => student.marks);
    const statusFailed = StudentList.status === 'Fail' ? '#FF0000' : '#00FF00'; 

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
                            <td>{marks[index]}</td>
                            <td>{grade[index]}</td>
                            <td>{statusFailed[index]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentList