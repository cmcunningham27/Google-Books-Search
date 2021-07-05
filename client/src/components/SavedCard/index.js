import React from 'react';

const BookCard = ({key, title, authors, description, image, link, Button}) => {
    console.log(key);

    return (
        <div>
            <div className='top'>
                <section>
                    <h6 className='title'>{title}</h6>
                    <p className='authors'>{authors}</p>
                </section>
                <section>
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