import { useState } from 'react'
import Editor from './components/Editor'
import Previewer from './components/Previewer'

function App() {
  const [form, setForm] = useState(`
  # [Repo for this project](https://github.com/ikbakk/markdown-previewer)
  # heading \n 
  ## heading2 \n
  ![This is image](https://google.com) \n
  [This is Link](https://google.com) \n
  \`<div>Inline Code\` \n
  \`\`\`
  const thisIsCode = (params) => {
    return params + 1
  } 
  \`\`\` \n
  **Bold Text**\n

  >BLockquote \n

  1. List1
  2. List2
  `)
  const handleChange = (e) => {
    setForm(e.target.value)
  }
  return (
    <div className='p-10'>
      <div className='mockup-window border bg-base-300'>
        <Editor form={form} handleChange={handleChange} />
        <div className='flex justify-start px-10 py-16 bg-base-200'>
          <Previewer form={form} />
        </div>
      </div>
    </div>
  )
}

export default App
