

const Header = () => {
  return (
    <div className="flex  flex-col items-center gap-2 mt-3">
      <h1 className="text-cyan-800 font-bold text-2xl font-sans transition-all duration-300">
        Counter App
      </h1>
      <p className="text-gray-400 sm:text-md text-xs text-center">
        Press the button below to increase the count 😉
      </p>
    </div>
  );
};

export default Header;
