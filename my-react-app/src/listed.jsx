// import seperate from 'App.jsx'


// function separate(){
//     let b = first()
//     return (
//        <p>{ b.clice(0,10)}</p>
//     )
// }

// export default seperate

// function Listed({ ids }) {
//   return (
//     <ul>
//       {ids.map((id) => (
//         <li key={id}>User ID: {id}</li>
//       ))}
//     </ul>
//   );
// }

// export default Listed;



function Listed({ users }) {
  return (
    <div>
      <h2>First 10 Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>ID:</strong> {user.id} <br />
            <strong>Name:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listed;


