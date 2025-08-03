import Lottie from 'lottie-react';
import loadingAnimation from '../assets/Stress Management.json';
import '../styles/App.css';

const LoadingComponent = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="brand-section">
          <h1 className="brand-title">Campus360</h1>
          <p className="brand-subtitle">Campus Management System</p>
        </div>
        
        <div className="lottie-container">
          <Lottie animationData={loadingAnimation} loop={true} style={{width: 500, height: 500}} />
        </div>
        
        <p className="loading-text">Fetching data... Please wait</p>
      </div>
    </div>
  );
};

export default LoadingComponent;