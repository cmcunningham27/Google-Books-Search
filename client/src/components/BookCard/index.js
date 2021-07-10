import React from 'react';
import './style.css';

const BookCard = ({title, authors, description, image, link, Button}) => {
    console.log(link);

    return (
        <div className='bookCard'>
            <div className='top'>
                <section className='left'>
                    <h6 className='title'>{title}</h6>
                    <p className='authors'>{authors}</p>
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
}

export default BookCard;