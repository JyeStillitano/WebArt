import Artwork from "../components/Artwork";
import ArtworkInfo from "../Artwork.json"

function Sculpture() {
    return (
        <div>
            {ArtworkInfo.map((art) => {
                if(art.type === "Sculpture") {
                    return <Artwork key={art.title} image={art.imageSrc} title={art.title} description={art.description} date={art.date} style={{ alignSelf: 'center' }}/>;
                }
            })}
        </div>
    );
}

export default Sculpture;