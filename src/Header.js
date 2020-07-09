import React from 'react'

const Header = (props) => {
  const { title } = props;
  return (
    <header>
      <h1 data-testid="h1tag" className="sample">
        {title}
      </h1>
    </header>
  )
}

export default Header
