import './App.scss';
import Home from './pages/Home';
import Loading from './pages/Loading';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Footer from './pages/Footer';
import styled from 'styled-components';
import Header from './components/Header';
import { useState } from 'react';
import Background from './components/Background';

function App() {

  const [isLoading, setIsLoadting] = useState(true);

  return (
    <div className="App">
      {!isLoading ? (
        <Loading />
      ) : (
        <>
          <Background />
          <Header />
          <Home />
          <Profile />
          <Projects>
            <Project />
          </Projects>
          <Footer />
      </>
      )}
    </div>
  );
}

const Projects = styled.div`
`

export default App;
