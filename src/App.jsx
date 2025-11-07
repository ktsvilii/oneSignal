import { useEffect } from 'react';

const APP_ID = import.meta.env.VITE_ONE_SIGNAL_APP_ID;

function App() {
  useEffect(() => {
    window.OneSignalDeferred = window.OneSignalDeferred || [];

    window.OneSignalDeferred.push(async function (OneSignal) {
      await OneSignal.init({
        appId: APP_ID,
        notifyButton: { enable: true },
      });
    });
  }, []);

  return <div>React App</div>;
}

export default App;
