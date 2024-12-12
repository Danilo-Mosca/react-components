/* Funzione che La Card */
function Card({ cities }) {

    const cityArray = cities.map((city) => {
        return (
            <div key={city.id} className="card cards col-6 col-sm-6 col-md-3 col-lg-3 mb-3 mt-3 p-0 column-gap-3" id="cards">
                <img src={`${city.image}`} className="card-img-top img-custom" alt={city.title} />
                <div className="card-body">
                    <h5 className="card-title">{city.title}</h5>
                    <p className="card-text">{city.content}</p>
                    <a href="#" className="btn btn-primary btn-custom">Leggi di più</a>
                </div>
            </div>
        );
    });
    return cityArray;
}
export default Card;