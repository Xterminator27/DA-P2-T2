import { useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  // if one wants to re-render the page every time the count value changes
  // useEffect(() => {
    // const init = 0;
    // setCount(init + count);
    // console.log(count);
  // });

    // else use this, keep in mind that the count will start from 1 in this example and page doesnt re-render
    useEffect(() => {
      const init = 1;
      setCount(init + count);
    }, []);

  return (
    <div>
      <p>Counter: {count}</p> 
      {/* starts from 1 because useEffect runs in the beginning and the value of the  */}
      <button className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline" onClick={() =>{setCount(count+1)}}>Increase Count</button>
    </div>
  );
}
