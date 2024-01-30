/*
SubjectDisciplineList.jsx
============================================================================
 - This file includes an array object which contains a list of subjects and- 
 their corresponding disciplines.
 - These items are used in dropdown menus in forms.
- The list can be easily extended by adding more countries into this later.
============================================================================
*/

const SubjectDisciplineList = [
  {
    id: 1,
    name: "Mathematics",
    disciplines: ["Algebra", "Geometry", "Calculus"],
  },
  { id: 2, name: "Science", disciplines: ["Physics", "Chemistry", "Biology"] },
  {
    id: 3,
    name: "History",
    disciplines: ["Ancient History", "Modern History"],
  },
  { id: 4, name: "Language Arts", disciplines: ["Literature", "Grammar"] },
  {
    id: 5,
    name: "Computer Science",
    disciplines: ["Programming", "Database Management"],
  },
];

export default SubjectDisciplineList;
