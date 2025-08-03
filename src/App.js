import { useState, useEffect } from "react";
import LoadingComponent from "./components/LoadingComponent";
import ParticleBackground from "./components/ParticleBackground";
import "./styles/App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      <ParticleBackground />
      <div className="app-container">
        {isLoading ? (
          <LoadingComponent />
        ) : (
          <>
            <button 
              className="show-loading-btn" 
              onClick={() => setIsLoading(true)}
            >
              Show Loading
            </button>
            <div className="main-content">
              <h1>Main Content</h1>
              <p>This content will be unmounted when loading appears</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
