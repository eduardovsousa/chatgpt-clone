"use client";

import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const Page = () => {
  const [sideBarOpened, setSideBarOpened] = useState(false);

  const closeSidebar = () => {
    setSideBarOpened(false);
  };

  const handleClearConversations = () => {};

  const handleNewChat = () => {};

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sideBarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        
      </Sidebar>
      <div className="w-16 h-screen">Teste</div>
      <section className="flex flex-col w-full">
        <button onClick={() => setSideBarOpened(true)}>Abr</button>
      </section>
    </main>
  );
};

export default Page;
