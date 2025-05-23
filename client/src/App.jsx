import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CloudSaveProvider } from './context/CloudSaveContext';
import { EventProvider } from './context/EventContext';
import { ComboProvider } from './context/ComboContext';
import { CloudSaveStatus } from './components/CloudSaveStatus';
import { EventListComponent } from './components/EventList';
import { ComboDisplay } from './components/ComboDisplay';
import styled from 'styled-components';
import StartScreen from './components/StartScreen';
import Menu from './components/Menu';
import CharacterCreation from './components/CharacterCreation';
import WeaponSelection from './components/WeaponSelection';
import FirstHunt from './components/FirstHunt';
import Settings from './components/Settings';
import Instructions from './components/Instructions';
import Credits from './components/Credits';
import Multiplayer from './components/Multiplayer';
import CreateRoom from './components/CreateRoom';
import Achievements from './components/Achievements';
import './styles/App.css';

const AppContainer = styled.div`
  font-family: 'Press Start 2P', cursive;
  background-color: #000;
  color: #fff;
  min-height: 100vh;
`;

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showCredits, setShowCredits] = useState(false);

  return (
    <CloudSaveProvider>
      <EventProvider>
        <ComboProvider>
          <Router>
            <AppContainer
              onMouseDown={() => {
                const { handleClickStart } = useCombo();
                handleClickStart();
              }}
              onMouseUp={(e) => {
                const { handleClickEnd } = useCombo();
                handleClickEnd(e);
              }}
            >
              <Routes>
                <Route path="/" element={<StartScreen />} />
                <Route path="/menu" element={<Menu 
                  onSettingsClick={() => setShowSettings(true)}
                  onInstructionsClick={() => setShowInstructions(true)}
                  onCreditsClick={() => setShowCredits(true)}
                />} />
                <Route path="/character-creation" element={<CharacterCreation />} />
                <Route path="/weapon-selection" element={<WeaponSelection />} />
                <Route path="/first-hunt" element={<FirstHunt />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/instructions" element={<Instructions />} />
                <Route path="/credits" element={<Credits />} />
                <Route path="/multiplayer" element={<Multiplayer />} />
                <Route path="/multiplayer/create" element={<CreateRoom />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/events" element={<EventListComponent />} />
              </Routes>

              {showSettings && (
                <Settings onClose={() => setShowSettings(false)} />
              )}

              {showInstructions && (
                <Instructions onClose={() => setShowInstructions(false)} />
              )}

              {showCredits && (
                <Credits onClose={() => setShowCredits(false)} />
              )}
              <CloudSaveStatus />
              <ComboDisplay />
            </AppContainer>
          </Router>
        </ComboProvider>
      </EventProvider>
    </CloudSaveProvider>
  );
}

export default App; 