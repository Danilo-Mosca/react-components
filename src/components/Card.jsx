// Importo i CSS Modules delle Card
import style from "../card.module.css";
/* Funzione che La Card */
function Card({ cities }) {
    // Mappo props cities per popolare le card
    const cityArray = cities.map((city) => {
        return (
            <div key={city.id} className={`${style.cards} card col-6 col-sm-6 col-md-3 col-lg-3 mb-3 mt-3 p-0 column-gap-3`}>
                <img src={`${city.image}`} className={`card-img-top ${style["img-custom"]}`} alt={city.title} />
                <div className="card-body">
                    <h5 className="card-title">{city.title}</h5>
                    <p className="card-text">{city.content}</p>
                    <a href="#" className={`btn btn-primary ${style.btncustom}`}>Leggi di più</a>
                </div>
            </div>
        );
    });
    return cityArray;
}
export default Card;