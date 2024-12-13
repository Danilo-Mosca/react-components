// Importo i CSS Modules delle Card
import style from "../card.module.css";

/* Funzione che crea le Cards */
function Card({ citiesProps }) {
    return (
        <div className={`${style.cards} card col-6 col-sm-6 col-md-3 col-lg-3 mb-3 mt-3 p-0 column-gap-3`}>
            <img src={`${citiesProps.image}`} className={`card-img-top ${style["img-custom"]}`} alt={citiesProps.title} />
            <div className="card-body">
                <h5 className="card-title">{citiesProps.title}</h5>
                <p className="card-text">{citiesProps.content}</p>
                <a href="#" className={`btn btn-primary ${style.btncustom}`}>Leggi di più</a>
            </div>
        </div>
    );
}
export default Card;