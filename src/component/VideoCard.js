import React from 'react'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
        <div className='p-2 m-2 w-72 shadow-lg rounded-lg'>
            <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
            <ul>
                <li title={title} className='font-bold py-2 truncate '>{title}</li>
                <li className='truncate'>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard