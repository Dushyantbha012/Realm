import React from 'react'

function AnswerItem({content="", author="", likes=0 ,dislikes=0, ansdbId=""}) {
  return (
    <div>
        <div>{content}</div>
        <div>{author}</div>
        <div>{likes}</div>
        <div>{dislikes}</div>
    </div>
  )
}

export default AnswerItem
