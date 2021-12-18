import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import ResponsiveAppBar from './Components/app_bar/ResponsiveAppBar';
import { Paper, useMediaQuery } from '@mui/material';
import backgroundImage from './BackgroundImage.jpg'
import HomePage from './Components/pages/HomePage';
import AboutPage from './Components/pages/AboutPage';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  },[prefersDarkMode]);

  let theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });
  theme = responsiveFontSizes(theme);

  const homePageRef = useRef();
  const secondPageRef = useRef();

  const handlePageChange = (el) => {  
    console.log(el.target.id);
    switch(el.target.id) {
      case '0':
        homePageRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '1':
        secondPageRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar darkMode={darkMode} setDarkMode={setDarkMode} handlePageChange={handlePageChange} />
        <HomePage ref={homePageRef} backgroundImage={backgroundImage} />
        <AboutPage ref={secondPageRef} />
      </ThemeProvider>
    </div>
  );
}

export default App;
