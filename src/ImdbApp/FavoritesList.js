import FavoriteMovie from "./FavoriteMovie";

const FavoritesList = (props) => {
    return (
        <div className="content">
            <h3>My favorite Movies</h3>
            {props.favorites.length > 0 ? (
                <div className="movie-content">
                    
            <ol>
                {props.favorites.map(movie => (
                    <FavoriteMovie movie={movie} key= {movie.imdbID} removeFavorite={props.removeFavorite} showModal={props.showModal}/>
                    
                    ))}
            </ol> </div>  ): (
                <p>You have no Favorite movies yet </p>
            )}
        </div>
      );
}
 
export default FavoritesList;