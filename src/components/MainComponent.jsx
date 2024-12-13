import Card from "./Card";
// Importo l'oggetto cities
import cities from '../data/cities';

export default function MainComponent() {
    const arrayCity = [...cities];  
    return (
        // Mappo props cities per popolare le card
        arrayCity.map((city) => {
            return <Card citiesProps={city} key={city.id} />
        }
        )
    );
}