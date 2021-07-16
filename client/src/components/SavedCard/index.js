import React from 'react';
import './style.css';

const SavedCard = ({ title, authors, description, image, link, Button }) => {

    return (
        <div className='savedCard'>
            <div className='savedTop'>
                <section>
                    <h5 className='savedTitle'>{title}</h5>
                    <h6 className='savedAuthors'>{authors}</h6>
                </section>
                <section className='savedRight'>
                    {/* when clicked sends user to link */}
                    <button className='View'>
                        <a href={link} target='_blank' rel='noopener noreferrer'>
                            View
                        </a>
                    </button>
                    {/* when clicked runs function to delete book */}
                    <Button />
                </section>
            </div>
            <div className='savedBottom'>
                <img className='savedPhoto' src={image} alt='book' />
                <p className='savedDescription'>{description}</p>
            </div>
        </div>
    )
};

export default SavedCard;