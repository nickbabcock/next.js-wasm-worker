import { useEffect, useRef } from "react";

const Page = () => {
  const workerRef = useRef();
  useEffect(() => {
    if (workerRef.current === undefined) {
      workerRef.current = new Worker(new URL("../lib/worker.js", import.meta.url));
    }
  }, []);

  return (
    <button onClick={() => workerRef.current.postMessage([])}>Click</button>
  );
};

export default Page;
