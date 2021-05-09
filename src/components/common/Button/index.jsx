import React from 'react'

const Button = ({ content }) => {
  return (
    <div className="btn-wrapper">
      <button type="submit" className="btn btn-primary custom-btn">{content}</button>
    </div>
  )
}

export default Button;
