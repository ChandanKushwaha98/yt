import React from 'react'

const commentsData = [
    {
        name: "Chandan Kushwaha",
        text: "lorem ipsum",
        replies: [{
            name: "Chandan Kushwaha",
            text: "lorem ipsum",
            replies: []
        },
        {
            name: "Chandan Kushwaha",
            text: "lorem ipsum",
            replies: []
        },
        {
            name: "Chandan Kushwaha",
            text: "lorem ipsum",
            replies: [{
                name: "Chandan Kushwaha",
                text: "lorem ipsum",
                replies: []
            },
            {
                name: "Chandan Kushwaha",
                text: "lorem ipsum",
                replies: []
            },
            {
                name: "Chandan Kushwaha",
                text: "lorem ipsum",
                replies: [{
                    name: "Chandan Kushwaha",
                    text: "lorem ipsum",
                    replies: []
                },
                {
                    name: "Chandan Kushwaha",
                    text: "lorem ipsum",
                    replies: [{
                        name: "Chandan Kushwaha",
                        text: "lorem ipsum",
                        replies: []
                    },
                    {
                        name: "Chandan Kushwaha",
                        text: "lorem ipsum",
                        replies: []
                    },
                    ]
                },
                {
                    name: "Chandan Kushwaha",
                    text: "lorem ipsum",
                    replies: []
                }]
            }]
        }]
    },
    {
        name: "Chandan Kushwaha",
        text: "lorem ipsum",
        replies: []
    },
    {
        name: "Chandan Kushwaha",
        text: "lorem ipsum",
        replies: []
    },
    {
        name: "Chandan Kushwaha",
        text: "lorem ipsum",
        replies: []
    },
    {
        name: "Chandan Kushwaha",
        text: "lorem ipsum",
        replies: []
    }
]


const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img className='w-12 h-12' src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="user" />
        <div className="px-3">
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>

}
const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div className="" key={index}>
            <Comment data={comment} />
            <div className="pl-5 border border-l-black ml-5">
                <CommentsList key={index} comments={comment.replies} />
            </div>
        </div>
    )
    )
}

const CommentsContainer = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Comments:</h1>
            {/* <Comment data={commentsData[0]} /> */}
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer