import Artwork from "../components/Artwork";
import ArtworkInfo from "../Artwork.json"

function Drawing() {
    return (
        <div>
            {ArtworkInfo.map((art) => {
                if(art.type === "Drawing") {
                return <Artwork key={art.title} image={art.imageSrc} title={art.title} description={art.description} date={art.date} style={{ alignSelf: 'center' }}/>;
                }
            })}
        </div>
    );
}

export default Drawing;