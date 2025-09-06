import React, { useEffect, useState } from "react";

function App() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => setShowOverlay(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', position: 'relative' }}>
      {showOverlay && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'black',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
          <div style={{
            border: '8px solid #222',
            borderTop: '8px solid #fff',
            borderRadius: '50%',
            width: 60,
            height: 60,
            animation: 'spin 1s linear infinite',
            marginBottom: 20
          }} />
          <span style={{ color: 'white', fontSize: 22, fontWeight: 'bold', letterSpacing: 2 }}>Loading...</span>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}
      <iframe
        src="/gameId=20055.html"
        title="Original HTML Game"
        style={{ width: '100vw', height: '100vh', minWidth: 320, minHeight: 480, border: 'none' }}
      />
    </div>
  );
}

export default App;
