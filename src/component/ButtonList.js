import React from 'react'
import Button from './Button'

const ButtonList = () => {
    return (
        <div className='flex '>
            <Button name="All" />
            <Button name="Gaming" />
            <Button name="Songs" />
            <Button name="Live" />
            <Button name="Cooking" />
            <Button name="All" />
            <Button name="Gaming" />
            <Button name="Songs" />
            <Button name="Live" />
            <Button name="Cooking" />
           
            {/* Build Scroll here */}
        </div>
    )
}

export default ButtonList