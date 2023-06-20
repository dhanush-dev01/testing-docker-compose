import React, { useEffect, useState } from 'react';
import TextDisplay from './components/textdisplay';
import TextForm from './components/textsave';
const App = () => {
  const [data, setData] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('http://localhost:5000/api/data');
  //     const responseData = await response.json();
  //     setData(responseData);
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
    {/* <TextForm/> */}
    <TextDisplay/>
    </>
  );
};


export default App;
