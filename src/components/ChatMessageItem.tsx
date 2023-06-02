import { ChatMessage } from "@/types/ChatMessage";
import IconUserLarge from "./icons/IconUserLarge";
import IconRobot from "./icons/IconRobot";

type Props = {
  item: ChatMessage;
};

const ChatMessageItem = ({ item }: Props) => {
  return (
    <div className={`py-5 ${item.author === "ai" && "bg-gray-600/50"}`}>
      <div className="max-w-4xl m-auto flex">
        
        <div
          className={`w-10 h-10 flex justify-center items-center mx-4 md:ml-0 rounded ${
            item.author === "ai" ? "bg-transparent" : "bg-blue-900"
          }`}
        >
          {item.author === "me" && <IconUserLarge width={24} height={24} />}
          {item.author === "ai" && <IconRobot width={48} height={48} />}
        </div>

        <div className="flex-1 text-base whitespace-pre-wrap">{item.body}</div>
      </div>
    </div>
  );
};

export default ChatMessageItem;
