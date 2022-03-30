import React from 'react'

export default function Team(props) {
  const { details } = props

  if (!details) {
    return <h3>Loading friend's info</h3>
  }

  return (
    <div className='friend container'>
      <h2>{details.username}</h2>
      <p>@: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}
