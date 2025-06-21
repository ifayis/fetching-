import { useEffect, useState } from 'react';
import Listed from './listed';

function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => {
        const firstTenUsers = data.slice(0, 10);
        setUsers(firstTenUsers);
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return <Listed ids={users} />;
}

export default FetchUsers;
