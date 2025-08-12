import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, AuthLoading, useQuery } from "convex/react";

function App() {
  return (
    <main>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <Content />
      </Authenticated>
      <AuthLoading>
        <p>Still loading</p>
      </AuthLoading>
    </main>
  );
}

function Content() {
  const tasks = useQuery(api.tasks.get);
  const messages = useQuery(api.messages.getForCurrentUser);
  {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
  return <div>Authenticated content: {messages?.length}</div>;
}

/*
function App() {
  const tasks = useQuery(api.tasks.get);
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>
        {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/

export default App
