import React from 'react'
import './FirstBlock.css'

const FirstBlock = () => {
    return (
        <div className='first_block_container'>
            <div className='first_block'>
                <img src="/images/first_block_first.jpg" alt="Image" />
                <h1>IT'S A CLASSIC</h1>
                <p>Stand back and appreciate this unassuming style icon.
                    Our home line-up is now available in Brown.
                </p>
                <button type="button">FIND OUT MORE</button>
            </div>
            <div className='second_block'>
                <img src="/images/first_project_second.jpg" alt="Image" />
                <h1>INCOMPARABLE STYLE</h1>
                <p>Let us introduce you to your new obsession. Our home line-up is now available
                    in Cream.
                </p>
                <button type="button">FIND OUT MORE</button>
            </div>
        </div>
    )
}

export default FirstBlock