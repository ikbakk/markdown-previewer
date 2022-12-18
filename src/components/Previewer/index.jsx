import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Previewer = ({ form }) => {
  return (
    <div id='preview' className=' prose'>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{form}</ReactMarkdown>
    </div>
  )
}

export default Previewer
