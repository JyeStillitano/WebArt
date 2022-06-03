import Header from "./components/Header"
import Artwork from "./components/Artwork"

const allArt = [
  {
    imageSrc: "/images/FaceIt.jpg",
    title: 'Face It',
    description: 'Doodle.',
    date: Date('June 1, 2022').toString()
  },
  {
    imageSrc: "/images/Ripley.png",
    title: 'Ripley',
    description: 'Unfinished. Ellen Ripley (Sigourney Weaver) in Aliens.',
    date: Date('March 27, 2022').toString()
  },
  {
    imageSrc: "/images/Aldrich - Devourer of Gods.jpg",
    title: 'Aldrich - Devourer of Gods',
    description: 'Aldrich, Dark Souls III boss.',
    date: Date('January 31, 2022').toString()
  }
]

function App() {
  return (
    <div className="container">
      <Header logo="/Signature.jpg"/>
      {allArt.map((art) => (
        <Artwork image={art.imageSrc} title={art.title} description={art.description} date={art.date} style={{ alignSelf: 'center' }}/>
      ))}
    </div>
  );
}

export default App;