import React from 'react'

export default function NoteCard({title, body}) {
  return (
    <article className='note-card'>
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  )
}
