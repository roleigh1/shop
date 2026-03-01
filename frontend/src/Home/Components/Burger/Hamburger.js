


function Hamburger({ isOpen }) {
  return (
    <div className="z-10 flex size-8 flex-col justify-around">
      <div
        className={`h-1 w-8 rounded transition-all duration-300 ${
          isOpen ? "rotate-45 bg-gray-500" : "rotate-0 bg-black"
        }`}
        style={{ transformOrigin: "1px" }}
      />
      <div
        className={`h-1 w-8 rounded transition-all duration-300 ${
          isOpen ? "bg-gray-500 opacity-0" : "bg-black opacity-100"
        }`}
        style={{ transformOrigin: "1px" }}
      />
      <div
        className={`h-1 w-8 rounded transition-all duration-300 ${
          isOpen ? "-rotate-45 bg-gray-500" : "rotate-0 bg-black"
        }`}
        style={{ transformOrigin: "1px" }}
      />
    </div>
  );
}



export default Hamburger;
