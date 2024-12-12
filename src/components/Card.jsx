/* Funzione che La Card */
function Card() {
    const title = "Il Mio blog";
    return (
        <div className="card cards" id="cards">
            <img src="https://placehold.co/600x400" className="card-img-top img-custom" alt="immagine 600x400px" />
            <div className="card-body">
                <h5 className="card-title">Titolo del post</h5>
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus culpa excepturi ullam quas ab autem rerum quisquam debitis atque accusamus rem, temporibus blanditiis inventore, fugit odit?</p>
                <a href="#" className="btn btn-primary btn-custom">Leggi di più</a>
            </div>
        </div>
    );
}
export default Card;