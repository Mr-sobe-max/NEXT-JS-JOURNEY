"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const useRouterPage = () => {
    const router = useRouter()

    const navigate = (page : string) => {
        router.push(`/${page}`);
    }
  return (
    <div>
      User Router Demonstration
      <br />
      <button onClick={() => navigate("")}>GO TO HOME</button><br />
      <button onClick={() => navigate("Link1")}>GO TO LINK 1</button><br />
      <button onClick={() => navigate("Link2")}>GO TO LINK 2</button>
    </div>
  )
}

export default useRouterPage
