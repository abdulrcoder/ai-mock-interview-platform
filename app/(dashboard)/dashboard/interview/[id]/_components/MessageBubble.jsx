const MessageBubble = ({ message, time, isUser, aiImage, userImage, isAI }) => {
  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } items-end space-x-3`}
    >
      {/* Display AI Image if not user */}
      {!isUser && (
        <img
          src={aiImage}
          alt="AI Profile"
          className="w-8 h-8 mb-8 rounded-full flex"
        />
      )}

      {/* Display User Image if user */}
      {isUser && (
        <img
          src={userImage}
          alt="User Profile"
          className="w-8 h-8 mb-8 rounded-full flex"
        />
      )}

      <div
        className={`flex flex-col max-w-xs p-3 rounded-lg shadow-md ${
          isUser
            ? "bg-purple-600 text-white ml-auto"
            : isAI
            ? "bg-blue-700 text-white"
            : "bg-gray-800 text-gray-200"
        }`}
      >
        <p className="text-sm">{message}</p>
        <span className="text-xs text-gray-400 mt-2 self-end">{time}</span>
      </div>
    </div>
  );
};

export default MessageBubble;
