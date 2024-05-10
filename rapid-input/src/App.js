import React, { useState, useEffect } from 'react';
import socket from './socket/socket';
import Header from './components/Header';
import FeatureMenu from './components/FeatureMenu';
import Timer from './components/Timer';
import TextDisplay from './components/TextDisplay';
import RestartButton from './components/RestartButton';

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [presentValues, setPresentValues] = useState({
    selectedLanguage: 'Python',
    isCommentsEnabled: false,
    selectedTime: 15
  });
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerCompleted, setTimerCompleted] = useState(false);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFeatureMenuUpdate(data) {
      setPresentValues(data);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('feature_menu_updated', onFeatureMenuUpdate);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('feature_menu_updated', onFeatureMenuUpdate);
    };
  }, []);

  const handleLanguageChange = (event) => {
    setPresentValues(prevState => ({
      ...prevState,
      selectedLanguage: event.target.value
    }));
    handleFeatureMenuUpdate();
  };

  const handleCommentsToggle = () => {
    setPresentValues(prevState => ({
      ...prevState,
      isCommentsEnabled: !prevState.isCommentsEnabled
    }));
    handleFeatureMenuUpdate();
  };

  const handleTimeChange = (time) => {
    setPresentValues(prevState => ({
      ...prevState,
      selectedTime: time
    }));
    handleFeatureMenuUpdate();
  };

  const handleFeatureMenuUpdate = () => {
    socket.emit("update_feature_menu", presentValues);
  };

  const handleTimerCompletion = () => {
    setTimerCompleted(true);
    setTimerStarted(false);
  };

  const handleRestart = () => {
    // Logic to handle restart
  };

  const timeOptions = [15, 30, 45, 60, 90, 120, 180, 240, 300];

  return (
    <div className="App">
      <Header />
      <FeatureMenu
        presentValues={presentValues}
        onLanguageChange={handleLanguageChange}
        onCommentsToggle={handleCommentsToggle}
        onTimeChange={handleTimeChange}
        timeOptions={timeOptions}
      />
      {!timerCompleted && (
        <>
          <TextDisplay />
          {!timerStarted && <RestartButton onClick={handleRestart} />}
          {timerStarted && (
            <Timer
              onCompletion={handleTimerCompletion}
            />
          )}
        </>
      )}
      <RestartButton />
    </div>
  );
}

export default App;
