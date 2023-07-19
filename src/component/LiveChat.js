import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomNames, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("")

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages)

    // Polling

    useEffect(() => {

        const i = setInterval(() => {
            // console.log('API Polling');
            dispatch(addMessage({ name: generateRandomNames(), message: makeRandomMessage(25) }))
        }, 2000)

        return () => clearInterval(i)
    }, [])

    return (
        <>
            <div className='p-2 ml-2 w-full h-[500px] border border-black bg-slate-100 rounded-lg overflow-y-scroll '>
                <div> {chatMessages.map((c, index) => <ChatMessage key={index} message={c.message} name={c.name} />)}</div>

            </div>
            <form className="w-full ml-2 p-2 border border-black" onSubmit={(e) => {
                e.preventDefault(); console.log("Onform submit", liveMessage)
                dispatch(addMessage({ name: "Chandan Kushwaha", message: liveMessage }))
                setLiveMessage("")
            }} >
                <input className='w-95 px-2' type='text' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
                <button className='px-2 mx-2 bg-green-500'>Send</button>
            </form>
        </>
    )
}

export default LiveChat