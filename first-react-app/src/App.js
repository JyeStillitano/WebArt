import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from "./components/Header";
import Artwork from "./components/Artwork";

const theme = createTheme({
  palette: {
    primary: {
      light: '#6d6d6d',
      main: '#424242',
      dark: '#1b1b1b'
    },
    secondary: {
      light: '#ffffff',
      main: '#e8eaf6',
      dark: '#b6b8c3'
    },
  },
});

const allArt = [
  {
    imageSrc: "/images/FaceIt.jpg",
    title: "Face It",
    date: "June 1, 2022"
  },
  {
    imageSrc: "/images/Ripley.png",
    title: "Ripley",
    description: "Unfinished. Ellen Ripley (Sigourney Weaver) in Aliens.",
    date: "March 27, 2022"
  },
  {
    imageSrc: "/images/The Dancer-unfinished.jpg",
    title: "The Dancer",
    description: "The Dancer, Dark Souls III boss.",
    date: "January 31, 2022"
  }
]

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        {/* Logo */}
        <Header logo={process.env.PUBLIC_URL + "/Signature.jpg"}/>
        {/* Navigation Bar */}
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
        >
          <ButtonGroup variant="text" size="large">
            <Button>Digital</Button>
            <Button>Drawing</Button>
            <Button>Sculpting</Button>
          </ButtonGroup>
        </Box>
        {/* Content */}
        {allArt.map((art) => (
          <Artwork key={art.title} image={art.imageSrc} title={art.title} description={art.description} date={art.date} style={{ alignSelf: 'center' }}/>
        ))}
      </div>
    </ThemeProvider>
  );
}

export default App;