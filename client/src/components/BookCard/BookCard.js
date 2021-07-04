import React from 'react';

const BookCard = () => {

    return (
        <div>
            <div className='top'>
                <section>
                    <h6 className='title'>Title</h6>
                    <p className='authors'>Authors</p>
                </section>
                <section>
                    <button className='View'>
                        ViewButton
                    </button>
                    <button className='Save'>
                        SaveButton
                    </button>
                </section>
            </div>
            <div className='bottom'>
                <img src='IMAGE' alt='book' />
                <p className='description'>Description</p>
            </div>
        </div>
    )
}

export default BookCard;