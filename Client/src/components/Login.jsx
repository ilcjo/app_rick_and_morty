import  styles from '../styles/Login.module.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validate from '../validation';

export default function Login(props) {


    const [userData, setUserData] = useState({
        user: "",
        password: "",  
    });

    const [errors, setErrors] = useState({
        user: "",
        password: ""
    });


    function handleChange(event) {
        setUserData({
            ...userData,
                 
            [event.target.name]: event.target.value
        })
        setErrors(
            validate({
                ...userData,
                [event.target.name]: event.target.value
            })
        );
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.login(userData)
        const aux = Object.keys(errors)

        if (aux.length === 0) {

            setUserData({
                user: "",
                password: ""
            })

            setErrors({
                user: "",
                password: ""
            })

            return alert("Bienvenido")
        }

        return alert("No fue posible entrar en tu Mundo")
    }
    return (

        <form  className={styles.container} onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                type="text"
                name='user'
                onChange={handleChange}
                value={userData.user}
                placeholder='Tu Alter-ego aquí'></input>
            <p className='danger'>{errors.user}</p>
            <label>Password:</label>
            <input
                type="password"
                name='password'
                onChange={handleChange}
                value={userData.password}
                placeholder='Tu Alter-ego aquí'></input>
            <p className='danger'>{errors.password}</p>
            {
                Object.keys(errors).length === 0 ? (

                    <Link to="/home"> <button type='submit'>Ingresar</button> </Link>
                ) : null}
        </form>
    )
}
