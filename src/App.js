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
import projects from './data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function App() {

  const [isLoading, setIsLoadting] = useState(true);
  const projectLength = projects.length;

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
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{clickable : true}}
            loop={true} //무한롤링
          >
            <Projects style={{width : `${projectLength*100}%`}}>
            {projects.map((item, index) => (
              <SwiperSlide>
                <Project key={index} project={item} />
              </SwiperSlide>
            ))}
             </Projects>
          </Swiper>
          <Footer />
      </>
      )}
    </div>
  );
}

const Projects = styled.div`
  display: flex;
`

export default App;
