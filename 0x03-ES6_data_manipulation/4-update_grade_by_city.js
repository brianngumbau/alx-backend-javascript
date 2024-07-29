export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const newStudents = student;
    newStudents.grade = 'N/A';
    for (const gradeInfo of newGrades) {
      if (newStudents.id === gradeInfo.studentId) {
        newStudents.grade = gradeInfo.grade;
      }
    }
    return newStudents;
  });
}
