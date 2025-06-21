function Listed({ ids }) {
  return (
    <div>
      <h2>First 10 Users:</h2>
      <ul>
        {ids.map((user) => (
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
