import React, { useMemo, useState, useCallback } from "react";
//memoize component with React.emo
export const Memo = React.memo(({ name }) => {
  console.log("child render");
  return (
    <div>
      <p>MemoChild static Prop {name}</p>
    </div>
  );
})

//useCallback
export const Button = React.memo(({ lable, handleFn }) => {
  console.log("Button Fn Called");
  return <button onClick={handleFn}>{lable}</button>;
});

//useMemo

function calculateSum(num) {
  console.log("sum calculateSum");
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += i;
  }
  return sum;
}

const MemoParent = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");

  const handleFn = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  const sum = useMemo(() => {
    return calculateSum(num);
  }, [num]);
  return (
    <div>
      <div>
        <p>MemoParent count {count}</p>
        {/* <button onClick={() => setCount((prev) => prev + 1)}>inc</button> */}
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <input value={num} onChange={(e) => setNum(e.target.value)} />
        {sum}
        <br />
        <Button lable="inc" handleFn={handleFn} />
      </div>
      <Memo name="Kashi" />
    </div>
  );
};

export default MemoParent;
