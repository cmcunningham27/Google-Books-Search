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
            <div className='bottom'>
                <img src={image} alt='book' />
                <p className='description'>{description}</p>
            </div>
        </div>
    )
};

export default SavedCard;