"use client";

import ChatArea from "@/components/ChatArea";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Chat } from "@/types/Chat";
import { useState } from "react";

const Page = () => {
  const [sideBarOpened, setSideBarOpened] = useState(false);
  const [chatActive, setChatActive] = useState<Chat>({
    id: "123",
    title: "blblvla",
    messages: [
      { id: "99", author: "me", body: "opaaa" },
      { id: "100", author: "ai", body: "opaaa" },
    ],
  });

  const [AILoading, setAILoading] = useState(false);

  const openSidebar = () => setSideBarOpened(true);
  const closeSidebar = () => setSideBarOpened(false);

  const handleClearConversations = () => {};

  const handleNewChat = () => {};

  const handleSendMessage = () => {};

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sideBarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        ...
      </Sidebar>
      <section className="flex flex-col w-full">
        <Header
          openSidebarClick={openSidebar}
          title={`Bla bla bla`}
          newChatClick={handleNewChat}
        />

        <ChatArea chat={chatActive} />

        <Footer disabled={AILoading} onSendMessage={handleSendMessage} />
      </section>
    </main>
  );
};

export default Page;
