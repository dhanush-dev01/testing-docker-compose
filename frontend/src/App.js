import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/api/data');
      const responseData = await response.json();
      setData(responseData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{data.message}</h1>
      <p>{data.timestamp}</p>
    </div>
  );
};


export default App;
