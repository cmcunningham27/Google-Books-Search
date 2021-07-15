import React from 'react';
import './style.css';

const SavedCard = ({ title, authors, description, image, link, Button }) => {

    return (
        <div className='savedCard'>
            <div className='top'>
                <section>
                    <h5 className='title'>{title}</h5>
                    <h6 className='authors'>{authors}</h6>
                </section>
                <section className='right'>
                    <button className='View'>
                        <a href={link} target='_blank' rel='noopener noreferrer'>
                            View
                        </a>
                    </button>
                    <Button />
                </section>
            </div>
            <div className='bottom'>
                <img src={image} alt='book' />
                <p className='description'>{description}</p>
            </div>
        </div>
    )
};

export default SavedCard;