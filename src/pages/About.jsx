import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='about'>
        <Card>
        
            <Link to="/">
            <h2>
            
            About</h2>
            </Link>

        </Card>
     
    </div>
  )
}

export default About
