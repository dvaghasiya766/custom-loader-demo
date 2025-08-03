import { useState, useEffect } from "react";
import LoadingComponent from "./components/LoadingComponent";
import "./styles/App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <button onClick={() => setIsLoading(true)}>Show Loading</button>
          <div>
            <h1>Main Content</h1>
            <p>This content will be unmounted when loading appears</p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
