import Artwork from "../components/Artwork";
import ArtworkInfo from "../Artwork.json"

function Digital() {
  return (
    <div>
      {ArtworkInfo.map((art) => {
        if(art.type === "Digital") {
          return <Artwork key={art.title} image={art.imageSrc} title={art.title} description={art.description} date={art.date} style={{ alignSelf: 'center' }}/>;
        }
      })}
    </div>
  );
}

export default Digital;