import Modal from "react-modal";

const MovieModal = ({movie, isModalOpen, closeModal }) => {
    return ( 
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel={movie.Title}>
            
            <div>
                <span onClick={closeModal}>
                    &times;
                </span>
                    <div className="">
                        <img src={movie.Poster} alt={movie.Title} />
                        <div className="">
                            <h2>{movie.Title}</h2>
                            <p>{movie.Year}</p>
                        </div>
                    </div>
                    <div>
                        <p>
                            <strong> 
                                Genre:
                            </strong>
                            {movie.Genre}
                        </p>
                        <p>
                            <strong> 
                                Rating:
                            </strong>
                            {movie.imdbRating}
                        </p>
                        <p>
                            <strong> 
                                Runtime:
                            </strong>
                            {movie.Runtime}
                        </p>
                        <p>
                            <strong> 
                                Cast:
                            </strong>
                            {movie.Actors}
                        </p>
                        <p>
                            {movie.Plot}
                        </p>
                    </div>
            </div>


        </Modal>
     );
}
 
export default MovieModal;