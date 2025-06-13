import { formatMessageTime } from "@/utils/dateUtils";
import MarkdownWrapper from "@/utils/MarkdownWrapper.jsx";
import { FaUser, FaRobot } from "react-icons/fa";

const ChatMessage = ({ message, isUser }) => {
  const { text, timestamp } = message;
  const formattedTime = formatMessageTime(timestamp);

  return (
    <div
      className={`flex items-end mb-4  ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && <FaRobot className="text-gray-500 text-lg mr-2 mb-1" />}

      <div
        className={`relative px-4 py-2 rounded-2xl max-w-[75%] sm:max-w-[60%] text-sm shadow 
          ${
            isUser
              ? "bg-green-100 text-gray-900 rounded-br-none "
              : "bg-white text-gray-900 rounded-bl-none"
          }
        `}
      >
        <div className="whitespace-pre-wrap">
          {/* {text} */}
          <MarkdownWrapper review={text} />
        </div>
        <span className="text-xs text-gray-500 block text-right mt-1">
          {formattedTime}
        </span>
      </div>

      {isUser && <FaUser className=" text-green-600 text-lg ml-2 mb-1" />}
    </div>
  );
};

export default ChatMessage;
