// import React, { useRef } from "react";

// export default function UseRefTest() {
//   const inputEle = useRef(null);

//   const ButtonClick = () => {
//     inputEle.current.focus();
//   };
//   return (
//     <div>
//       <input ref={inputEle} type="text" />

//       <button onClick={ButtonClick}>Click to focus</button>
//     </div>
//   );
// }

// import React, { useRef } from "react";

// export default function useRefTest() {
//   const inputEle = useRef(null);

//   const focusButton = () => {
//     inputEle.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputEle} type="text" />
//       <button onClick={focusButton}>Click here to focus</button>
//     </div>
//   );
// }

// import React, { useRef } from "react";

// export default function useRefTest() {
//   const inputEle = useRef(null);
//   const focusButton = () => {
//     inputEle.current.focus();
//   };
//   return (
//     <div>
//       <input ref={inputEle} type="text" />
//       <button onClick={focusButton}>Click here to focus</button>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log("this is count..", count);
  const previous = useRef(0);
  useEffect(() => {
    previous.current = count;
  });
  console.log("this is previous", previous);
  return (
    <div>
      <h4>previous: {previous.current}</h4>
      <h5>current: {count}</h5>
      <button onClick={() => setCount(count + 1)}>Plus One +1</button>
    </div>
  );
}
