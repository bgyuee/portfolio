import './App.scss';
import Home from './pages/Home';
import Loading from './pages/Loading';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Footer from './pages/Footer';
import styled from 'styled-components';
import Header from './components/Header';
import { useEffect, useRef, useState } from 'react';
import Background from './components/Background';
import projects from './data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import { scroller } from 'react-scroll';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const mouse = `${process.env.PUBLIC_URL}/images/mouse.png`;
const wheelDown = `${process.env.PUBLIC_URL}/images/wheelDown.png`;
const wheelUp = `${process.env.PUBLIC_URL}/images/wheelUp.png`;

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const projectLength = projects.length;
  const [validationModal, setValidationModal] = useState(false);

  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = useRef([homeRef, profileRef, projectsRef, contactRef]);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [homeMove, setHomeMove] = useState(false);

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
          <Profile profileRef={profileRef} />
          <Swiper 
            ref={projectsRef} 
            id="projects"
            className={validationModal && 'swiperRemove'}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{clickable : true}}
            loop={true} //무한롤링
          >
            <Projects style={{width : `${projectLength*100}%`}}>
                
            {projects.map((item, index) => (
              <SwiperSlide key={index}>
                <Project
                  project={item} 
                  validationModal={validationModal} 
                  setValidationModal={setValidationModal} 
                  />
              </SwiperSlide>
                  ))}
             </Projects>
          </Swiper>
          <Footer contactRef={contactRef} />
          {activeSection !== 3 ? (
            <div className="mosemove">
            <div className='mouse'  style={{background:`url(${mouse}) no-repeat 50% 50%`}} />
            <div className='mouseWheelDown' style={{background:`url(${wheelDown}) no-repeat 50% 50%`}} />
        </div>
          ):
          (
            <div className='mosemove mouseWheelUp'>
              <div className='mouseWheelUp' style={{background:`url(${wheelUp}) no-repeat 50% 50%`}}
              onClick={() => setHomeMove(true)}
              />
            </div>
          )}
      </>
      )}
    </div>
  );
}

const Projects = styled.div`
  display: flex;
`

export default App;
