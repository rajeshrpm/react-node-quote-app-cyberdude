// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <header className="px-4 py-2 bg-rose-500">
        <h4 className="font-semibold text-xl">Quotes Ready!</h4>
      </header>
      {/* <h1 className="text-3xl font-bold underline">
        Quotes will Display here!
      </h1> */}

      <div className="bg-white rounded p-10 shadow">
        <blockquote className="text-xl italic font-semibold text-gray-900">
          "Flowbite is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application."
        </blockquote>
      </div>
    </>
  );
}

export default App;
