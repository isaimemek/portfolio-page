const Background = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-black transition-all">
      {children}
    </div>
  );
};

export default Background;
