/** @format */
import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
      <h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>

      <div className='flex space-x-2 text-center'>
        <div>
          <div className='flex flex-col items-center justify-center mb-4'>
            <SunIcon className='h-8 w-8' />
            Examples
          </div>

          <div className='space-y-2'>
            <p className='infoText'>"Explain Something To Me"</p>
            <p className='infoText'>
              "What is the difference a dog and a cat?"
            </p>
            <p className='infoText'>"What is the color of sun?"</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-4'>
            <BoltIcon className='h-8 w-8' />
            Capabilities
          </div>

          <div className='space-y-2'>
            <p className='infoText'>"Change the ChatGPT Model to use"</p>
            <p className='infoText'>
              "Messeges are stored in Firebase's Firestore"
            </p>
            <p className='infoText'>
              "Hot toast notifications when ChatGPT is thinking"
            </p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-4'>
            <ExclamationTriangleIcon className='h-8 w-8' />
            Limitations
          </div>

          <div className='space-y-2'>
            <p className='infoText'>
              "May occasionally generate incorrect information"
            </p>
            <p className='infoText'>
              "May occasionally produce harmful instructions or based content"
            </p>
            <p className='infoText'>
              "Limited knowdlwdge of world and events after 2020"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
