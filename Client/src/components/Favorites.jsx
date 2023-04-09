import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { removeFav, orderCards, filterCards, reset } from '../redux/actions';


export default function Favorites({ onClose }) {
  const { myFavorites } = useSelector((state) => state)
  const dispatch = useDispatch()

  function closeFav(id) {
    onClose(id)
    dispatch(removeFav(id));
  }

  function handleOrder(event) {
    event.preventDefault()
    const { name, value } = event.target
    dispatch(orderCards(value))
  }

  function handlefilter(event) {
    event.preventDefault()
    const { name, value } = event.target
    dispatch(filterCards(value))
  }
 function resetBtton(){
  dispatch(reset())
 }
  return (
    <div>
      <select name='order' defaultValue={'DEFAULT'} onChange={handleOrder}>
        <option value='DEFAULT' disable>Select Order</option>
        <option value='Ascendente'>Ascendente</option>
        <option value='Descendente'>Descendente</option>
      </select>

      <select name='filter' defaultValue={'DEFAULT'} onChange={handlefilter}>
        <option value='DEFAULT' disable>Select Filter</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='Unknown'>Unknown</option>
      </select>
      <button onClick={resetBtton}>Reset</button>


      <span>Favorites</span>
      {myFavorites &&
        myFavorites.map((e, index) => {
          return (
            <Card
              key={index}
              id={e.id}
              name={e.name}
              status={e.status}
              species={e.species}
              gender={e.gender}
              origin={e.origin?.name}
              image={e.image}
              onClose={() => closeFav(e.id)}
            />);
        })}
    </div>
  )
}
  // function mapStateToProps(state) {
  //   return {
  //     myFavorites: state.myFavorites,
  //   };
  // }

  // function mapDispatchToProps(delet) {
  //   return {
  //     removeFav: (id) => delet(removeFav(id))
  //   };
  // }
  // export default connect(mapStateToProps, mapDispatchToProps)(Favorites)


