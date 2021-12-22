import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import ResponsiveAppBar from './Components/app_bar/ResponsiveAppBar';
import { Divider, Paper, useMediaQuery } from '@mui/material';
import backgroundImage from './BackgroundImage.jpg'
import HomePage from './Components/pages/HomePage';
import AboutPage from './Components/pages/AboutPage';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import ContactMePage from './Components/pages/ContactMePage';
import ProjectsPage from './Components/pages/ProjectsPage';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activePage, setActivePage] = useState(0);
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (position >= (fourthPageRef.current.offsetTop - fourthPageRef.current.scrollHeight)) {
      setActivePage(3);
    } else if (position >= (thirdPageRef.current.offsetTop - thirdPageRef.current.scrollHeight)) {
      setActivePage(2);
    } else if (position >= (secondPageRef.current.offsetTop - secondPageRef.current.scrollHeight)) {
      setActivePage(1);
    } else {
      setActivePage(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // useEffect(() => {
  //   setDarkMode(prefersDarkMode);
  // },[prefersDarkMode]);

  let theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });
  theme = responsiveFontSizes(theme);

  const homePageRef = useRef();
  const secondPageRef = useRef();
  const thirdPageRef = useRef();
  const fourthPageRef = useRef();

  const handlePageChange = (e) => {  
    // console.log(e.target.id);
    switch(e.target.id) {
      case '0':
        homePageRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '1':
        secondPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      case '2':
        thirdPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      case '3':
        fourthPageRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar darkMode={darkMode} setDarkMode={setDarkMode} handlePageChange={handlePageChange} activePage={activePage} />
        <HomePage ref={homePageRef} backgroundImage={backgroundImage} handlePageChange={handlePageChange} />
        <AboutPage ref={secondPageRef} />
        <ProjectsPage ref={thirdPageRef} />
        {/* <Divider /> */}
        <ContactMePage ref={fourthPageRef} />
      </ThemeProvider>
    </div>
  );
}

export default App;
