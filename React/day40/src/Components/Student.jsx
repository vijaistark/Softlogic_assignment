// function Student(props){
//     return (
//         <div>
//             <h2>Student detail</h2>
//             <p>name : {props.name}</p>
//             <p>age : {props.age}</p>
//             <p>course : {props.course}</p>
//         </div>
//     )
// }
// export default Student;



// export default function Student({ details }) {
//     return (
//         <ul>
//             {details.map((item, index) => (
//                 <li key={index}>{item}</li>
//             ))}
//         </ul>
//     );
// }



// export default function Student ({detail}){
//     return (
//         <div>
//             <h2>
//                 name : {detail.name}
//             </h2>
//             <h2>
//                 age : {detail.age}
//             </h2>
//             <h2>
//                 course : {detail.course}
//             </h2>
//         </div>
//     )
// }


function Student() {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: Raja</p>
      <p>Department: CSBS</p>
      <p>Year: 4</p>
    </div>
  );
}

export default Student;


