import React from "react";

function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-items-center md:py-8 py-12 bg-primary text-white">
      <div className="flex flex-col md:flex-row w-9/12">
        <div className="w-full md:w-full md:mx-2 flex flex-col">
          <div className="flex flex-col text-center">
            <h4 className="text-lg font-bold mb-1">ValuePitch</h4>
            <h4 className="text-xs text-gray-200 mt-1">
              Copyright &copy; ValuePitch
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
