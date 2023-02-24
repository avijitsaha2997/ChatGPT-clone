/** @format */

"use client";

import React from "react";
import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

import ChatRow from "./ChatRow";
import { collection, orderBy, query } from "firebase/firestore";
import ModelSelection from "./ModelSelection";

function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, erorr] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );
  return (
    <div className='p-2 flex flex-col h-screen relative'>
      <div className='flex-1'>
        <div>
          <NewChat />

          <div className='hidden sm:inline'>
            <ModelSelection />
          </div>

          <div className='flex flex-col space-y-2 my-2'>
            {loading && (
              <div className='animate-pulse text-center text-white'>
                <p>Loading Chats...</p>
              </div>
            )}

            {/*Map the chats */}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>

      {session && (
        <div
          className='p-2 w-auto rounded-lg flex items-center justify-center space-x-4 bg-[#343541] border border-1 border-gray-600 hover:opacity-50 cursor-pointer'
          onClick={() => signOut()}>
          <img
            src={session.user?.image!}
            alt='Profile Pic'
            className='h-10 w-10 rounded-full cursor-pointer'
          />
          <p className='text-white'>Sign Out</p>
        </div>
      )}
    </div>
  );
}

export default SideBar;
