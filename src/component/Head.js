import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openMenu, toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_API_URL } from '../utils/contants';
import { chacheResults } from '../utils/searchSlice';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    // console.log(searchQuery); 
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    const searchCache = useSelector((store) => store.search)
    useEffect(() => {
        // dispatch(openMenu)
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            } else {
                getSearchSuggstions()
            }

        }, 200);
        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery])
    const getSearchSuggstions = async () => {
        console.log("API-" + searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API_URL + searchQuery)
        const json = await data.json()
        console.log(json)
        setSuggestions(json[1])

        // update Cache

        dispatch(chacheResults({ [searchQuery]: json[1], }))
    }
    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg '>
            <div className='flex col-span-1'>
                <img className='h-8 cursor-pointer' onClick={toggleMenuHandler} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyU1WaTIpfe37_dLa0WT6vkwWWPkOScmMBzcNBsbNXa9ebo_ei3JSA_pN5KNWK5_Ize_w&usqp=CAU" alt="menu" />
                {/* <Link to='/'> <img className='h-8 mx-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="youtubeLogo" /></Link> */}
                <img className='h-8 mx-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="youtubeLogo" />
            </div>

            <div className='col-span-10 px-10'>
                <div>
                    <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type="text" name="" value={searchQuery} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} onChange={(e) => setSearchQuery(e.target.value)} />
                    <button className='border bordr-gary-400 px-5 py-2 rounded-r-full bg-gray-100'>🔍
                    </button>
                </div>
                {showSuggestions && <div className="fixed bg-white py-2 px-2 w-96 ml-4 shadow-lg rounded-lg border border-gray-100">
                    <ul>
                        {suggestions.map((s) => <li key={s} className='py-2 px-3 shadow-md hover:bg-gray-100'>🔍{s}</li>)}
                    </ul>
                </div>}
            </div>
            <div className='col-span-1'>
                <img className='h-8' src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="" />
            </div>
        </div>
    )
}

export default Head