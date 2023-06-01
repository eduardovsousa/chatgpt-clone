'use client'

import Sidebar from "@/components/Sidebar"
import { useState } from "react"

const Page = () => {
  const [sideBarOpened, setSideBarOpened] = useState(false);

  const closeSidebar = () => {}

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sideBarOpened}
        onClose={closeSidebar}
      >

      </Sidebar>
      <section className="flex flex-col w-full">
        ...
      </section>
    </main>
  )
}

export default Page