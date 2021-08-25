import React from "react";

function Header() {
  return (
    <>
      <header className="flex flex-col relative w-full justify-items-center items-center bg-primary">
        <div className="flex w-full text-center mb-3 mt-3">
          <div className="w-full">
            <a href="/" className="w-full md:w-auto">
              <h1 className="text-lg text-center font-bold text-white">
                ValuePitch
              </h1>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
