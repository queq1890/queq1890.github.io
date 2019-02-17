import React, { useState } from 'react'
import UserName from './UserName'
import SocialLink from './SocialLink'

const App = () => {
  const [open, toggle] = useState(false)

  return (
    <div className="app-container">
      <UserName open={open} toggle={toggle} />
      <SocialLink open={open} toggle={toggle} />
    </div>
  )
}

export default App
