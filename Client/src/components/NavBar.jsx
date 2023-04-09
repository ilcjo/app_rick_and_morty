import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import styles from '../styles/NavBar.module.css';
import About from './About';
import Details from './Details';
import Favorites from './Favorites';



export default function NavBar({onSearch, logOut}) {
  return (
    <div className={styles.nav}>
    <Link to="/home"><button>Home</button></Link>
    <Link to="/favorites" element={<Favorites/>}><button>Favorites</button></Link>
    <Link to="/about" element={<About/>}><button>About</button></Link>
    <Link to="/details" element={<Details/>}></Link>
    <SearchBar onSearch={onSearch} />
    <button onClick={logOut}>LogOut</button>
   
    </div>
  )
}
