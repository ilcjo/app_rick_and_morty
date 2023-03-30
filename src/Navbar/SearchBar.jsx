export default function SearchBar( props ) {
   return (
      <div>
          <input type='search' />
         <button onClick={() => props.onSearch( document.querySelector( 'input[type="search"]' ).value)}>Agregar</button>  
      </div>
   );
}
 
