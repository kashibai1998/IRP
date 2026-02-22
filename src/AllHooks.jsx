('use client'); // client component
import './style.css';
import { saveUser, sendMessage } from './server';
import React, {
  useState,
  useOptimistic,
  useActionState,
  useEffect,
  useDeferredValue,
  useTransition,
  useMemo,
  useCallback,
  useImperativeHandle,
  useRef,
  use,
  Suspense,
} from 'react';
import { useActionState, useFormStatus } from 'react-dom';


export default function App() {
 
  return <div>App</div>;
}

function ChatApp1() {
  const [messages, setMessages] = useState([]);
  const [optimisticMessages, addOptimistic] = useOptimistic(
    messages,
    (state, newMsg) => [...state, newMsg]
  );

  const [state, action] = useActionState(sendMessage, null);
  const { pending } = useFormStatus();
  const [p, startTransition] = useTransition();
  return (
    <div>
      <h2>React 19 Chat</h2>
      <form
        action={action}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const message = formData.get('message');
          if (!message) return;
          startTransition(() => {
            addOptimistic(message); // update UI immediately
          });
          setMessages((prev) => [...prev, message]);

          e.target.reset();
        }}
      >
        <input name="message" placeholder="Type message" />
        <button type="submit" disabled={pending}>
          {pending ? 'Sending...' : 'Send'}
        </button>
      </form>

      <ul>
        {optimisticMessages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>

      {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
      {state?.success && <p style={{ color: 'green' }}>{state.success}</p>}
    </div>
  );
}

// export default ChatApp;
function CustomInput({ ref }) {
  useImperativeHandle(ref, () => ({
    focus: () => ref.current.focus(),
  }));

  return <input ref={ref} />;
}

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isPending, startTransition] = useTransition();

  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (currentLikes) => currentLikes + 1
  );

  async function handleLike() {
    startTransition(() => {
      addOptimisticLike();
    });

    await new Promise((res) =>
      setTimeout(() => {
        res();
        setLikes((prev) => prev + 1);
      }, 5000)
    );

    // startTransition(() => {
    // setTimeout(() => {
    //   setLikes((prev) => prev + 1);
    // }, 1000);
    // });
  }

  return (
    <div>
      <p>Likes: {likes}</p>
      <p>optimisticLikes: {optimisticLikes}</p>

      <button onClick={handleLike} disabled={isPending}>
        {isPending ? 'Liking...' : 'Like'}
      </button>
    </div>
  );
}

function UserForm() {
  const [state, setState] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = await saveUser(formData);
    setState(result);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Enter name" />
      <button type="submit">Save</button>

      {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
      {state?.success && <p style={{ color: 'green' }}>{state.success}</p>}
    </form>
  );
}

function DeferredExample() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  return (
    <div>
      <input onChange={(e) => setQuery(e.target.value)} />
      <p>Immediate: {query}</p>
      <p>Deferred: {deferredQuery}</p>
    </div>
  );
}

function TransitionExample() {
  const [text, setText] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;

    startTransition(() => {
      // setTimeout(() => {
      setText(value);
      // }, 1000);
    });
  };

  return (
    <div>
      <input onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <p>{text}</p>
    </div>
  );
}

function CallbackExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const double = useMemo(() => {
    console.log('Calculating...');
    return count * 2;
  }, [count]);

  // const double = () => {
  //   console.log('Calculating...');
  //   return count * 2;
  // };
  return (
    <div>
      <h2>Double: {double}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return <h2>Seconds: {seconds}</h2>;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

