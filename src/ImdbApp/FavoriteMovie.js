const FavoriteMovie = (props) => {

    const handleRemove = (e) =>
    {   
        e.stopPropagation();
        props.removeFavorite(props.movie);
    }

    const handleShowModal = () =>
    {
        props.showModal(props.movie)
    }
    return ( 
        <div className="box">
        <li onClick={handleShowModal}>
            <img src={props.movie.Poster} alt={props.movie.Title}/>
            <div className="poster">
               
                <h4>{props.movie.Title}</h4>
                <p>Year: {props.movie.Year} Rated: {props.movie.Rated}</p>
            </div>
            <button onClick={handleRemove}>
                Remove movie
            </button>
        </li>
        </div>
       );
}
 
export default FavoriteMovie;
