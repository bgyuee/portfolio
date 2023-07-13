import './App.scss';
import Home from './pages/Home';
import Loading from './pages/Loading';
import Profile from './pages/Profile';
import Footer from './pages/Footer';
import Header from './components/Header';
import { useEffect, useRef, useState } from 'react';
import Background from './components/Background';
import { scroller } from 'react-scroll';
import Mousemove from './components/Mousemove';
import MouseWheelup from './components/MouseWheelup';
import Projects from './pages/Projects';


function App() {

  const [isLoading, setIsLoading] = useState(false);

  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = useRef([homeRef, profileRef, projectsRef, contactRef]);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [homeMove, setHomeMove] = useState(false);

  const [profilePage, setProfilePage] = useState(false);
  const [projectPage, setProjectPage] = useState(false);
  const [contactPage, setContactPage] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!isScrolling) {
        setIsScrolling(true);
        if (e.deltaY > 0) {
          setActiveSection((prev) => Math.min(prev + 1, sectionRefs.current.length - 1));
        } else {
          setActiveSection((prev) => Math.max(prev - 1, 0));
        }
        e.preventDefault();
  
        setTimeout(() => {
          setIsScrolling(false);
        }, 500);
      } else {
        e.preventDefault();
      }
    };
  
    window.addEventListener("wheel", handleWheel, { passive: false });
  
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isScrolling]);

  useEffect(() => {
  if (sectionRefs.current[activeSection] && sectionRefs.current[activeSection].current) {
    sectionRefs.current[activeSection].current.scrollIntoView({ behavior: "smooth" });
  }

  if(activeSection === 1) setProfilePage(true);
  if(activeSection === 2) setProjectPage(true);
  if(activeSection === 3) setContactPage(true);
}, [activeSection]);
  
  useEffect(() => {
    if(homeMove) {
      scroller.scrollTo("home", {
        duration: 500,
        smooth: true,
      });
      setHomeMove(false);
      setActiveSection(0);
    }
  }, [homeMove])

  return (
    <div className="App">
      <Background />
      {!isLoading ? (
        <Loading setIsLoading={setIsLoading} />
      ) : (
        <>
          <Header 
            homeRef={homeRef}
            profileRef={profileRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
            setAppActiveSection={setActiveSection}
          />
          <Home homeRef={homeRef} />
          <Profile 
            profileRef={profileRef} 
            activeSection={activeSection} 
            profilePage={profilePage}
            />
          <Projects 
            projectsRef={projectsRef} 
            id="projects"
            projectPage={projectPage} />
          <Footer 
            contactRef={contactRef} 
            contactPage={contactPage}
          />
          {activeSection !== 3 ? (
            <Mousemove />
          ):
          (
            <MouseWheelup setHomeMove={setHomeMove} />
          )}
      </>
      )}
    </div>
  );
}

export default App;
