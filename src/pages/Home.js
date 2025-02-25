import Artwork from "../components/Artwork"
import ArtworkInfo from "../Artwork.json"

function Home() {
  return (
    <div class="HomeContent">
      <div>
        {ArtworkInfo.map((art) => {
          return (
            <Artwork
              key={art.title}
              image={art.imageSrc}
              title={art.title}
              description={art.description}
              date={art.date}
              style={{ alignSelf: "center" }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
