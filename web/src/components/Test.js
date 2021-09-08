import React, { useEffect, useState } from "react";

export default function Test() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("This is useEffect .....");

    document.title = `Total Click is ${count} times.`;
  });

  return (
    <div>
      <button className="text-primary" onClick={() => setCount(count + 1)}>
        Click Here
      </button>
      <p>You have Clicked {count} times.</p>
    </div>
  );
  //   const [preference, setPreference] = useState();
  //   useEffect(() => {
  //     console.log("This is because of useEffect...");
  //   });

  //   console.log("your current preference is", preference);
  //   return (
  //     <div className="flex flex-col items-center justify-items-center">
  //       <div className="flex flex-row my-5 text-primary">
  //         <button className="mr-5" onClick={() => setPreference("Services")}>
  //           Services
  //         </button>
  //         <button onClick={() => setPreference("Payments")}>Payments</button>
  //       </div>
  //       <div className="flex flex-col my-5">
  //         <ul
  //           className={`"Services" ${preference !== "Services" ? `hidden` : ""}`}
  //         >
  //           <li>Flight Booking</li>
  //           <li>Train Booking</li>
  //           <li>Bus Booking</li>
  //           <li>Cab Booking</li>
  //         </ul>
  //         <ul
  //           className={`"Services" ${preference !== "Payments" ? `hidden` : ""}`}
  //         >
  //           <li>UPI</li>
  //           <li>Gpay</li>
  //           <li>Card</li>
  //           <li>Cash</li>
  //         </ul>
  //       </div>
  //     </div>
  //   );
}

{
  /* <button onClick={() => setCount(count + 1)}>Addition</button>
      <button onClick={() => setCount(count - 1)}>Subtraction</button>
    <p>Your current value is {count} number.</p> */
}
