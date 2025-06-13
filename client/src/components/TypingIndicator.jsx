
const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-newsmate-message-bot rounded-2xl rounded-tl-none px-4 py-3">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
