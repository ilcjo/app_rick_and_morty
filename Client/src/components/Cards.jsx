import Card from './Card';
import styles from '../styles/cards.module.css'


export default function Cards({ characters, onClose }) {
    return (
        <div className={styles['.cards-container']}>
            
                {characters && characters.map((character, index) => {
                    return (

                        <Card
                            key={index}
                            id={character.id}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            gender={character.gender}
                            origin={character.origin?.name}
                            image={character.image}
                            onClose={onClose}
                        />);
                })}
            </div>
    )
};

