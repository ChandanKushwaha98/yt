import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center shadow-sm p-2'>
            <img className='h-8' src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="" />
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage