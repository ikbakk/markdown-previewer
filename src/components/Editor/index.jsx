import React from 'react'

const Editor = ({ handleChange, form }) => {
  return (
    <div className='p-10'>
      <textarea
        id='editor'
        onChange={handleChange}
        className='textarea flex w-full textarea-ghost h-52'
        placeholder='Put your code here'>
        {form}
      </textarea>
    </div>
  )
}

export default Editor
