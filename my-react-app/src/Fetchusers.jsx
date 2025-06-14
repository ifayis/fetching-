import { useEffect, useState } from 'react';
import Listed from './listed';

function FetchUsers() {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => {
        const firstTenIds = data.slice(0, 10);
        setIds(firstTenIds);
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return <Listed ids={ids} />;
}
export default FetchUsers;