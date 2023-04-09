
import { Link } from "react-router-dom";
import {  useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../redux/actions'
import { useEffect, useState } from 'react';


export default function Card(props) {
   
   const { id,
       name, 
       status, 
       species, 
       gender, 
       origin, 
       image, 
       onClose, 
      } = props;

      const dispatch = useDispatch(); 
      const [isFav, setIsFav] = useState(false);
      const { myFavorites } = useSelector((s) => s);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav(props));
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

function superClose(){
   onclose(id);
   dispatch(removeFav(id));
}

   return (
      <div className="card">
         <button onClick={superClose}>X</button>
         <Link to={`/detail/${id}`}><h3>{name}</h3></Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin?.name}</h2>
         <img src={image} alt={name} />
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
      </div>
   );
}
// function mapStateToProps(state){ 
//    return{
//       myFavorites: state.myFavorites
//    };
// }

// function mapDispatchToProps(dispatch) {
//    return {
//       addFav: (ch) => dispatch(addFav(ch)),
//       removeFav: (id) => dispatch(removeFav(id)),
//    };
// }

// export default connect( mapStateToProps, mapDispatchToProps )(Card)
