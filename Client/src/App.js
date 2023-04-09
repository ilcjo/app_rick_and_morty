import './App.css';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import Details from './components/Details';
import Login from './components/Login'
import About from './components/About';
import Favorites from './components/Favorites';

function App() {

   let navi = useNavigate();
   let location =  useLocation();
   const  USER = 'Ovilc';
   const PASSWORD = 'Password123';
   const [access, setAccess] = useState(false);
   const [characters, setCharacters] = useState([]);

   function login (userData){
      if(USER === userData.user && PASSWORD === userData.password){
         setAccess(true)
         navi('/home')
      }
   }

   useEffect(() => {
      !access && navi('/');
   }, [access]);


   function onSearch(id) {
      axios.get(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               let existe = characters.find((cha) => cha.id === data.id)
               if (existe) {
                  alert('Ya existe')
               } else {
                  setCharacters((oldChars) => [...oldChars, data]);
               }
            } else {
               alert('¡No hay personajes con este ID!');
            }
         });
   }

   function onClose(id) {
      setCharacters((oldChars) => {
         return oldChars.filter((ch) => ch.id !== id)
      });
   }
    
    function logOut(){
      setAccess(false)
      navi('/')
    } 

   return (

      <div className='App'>
      {
         location.pathname === '/' ? null:<NavBar onSearch={onSearch} logOut={logOut}/>
      }
         <Routes>
            <Route path='/' element={<Login login={login}/> }></Route>
            <Route path='/home' element={<Cards onClose={onClose} characters={characters}></Cards>}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/favorites' element={<Favorites onClose={onClose}></Favorites>}></Route>
            <Route path='/detail/:id' element={<Details />}></Route>
            
         </Routes>


      </div>
   );
}

export default App;

