import React from 'react'
import { Link} from "react-router-dom";
import surat from '../photos/muammet_surat.JPG'


function Index() {
    return (
        <div className='main-index'>
             <img src={surat} className="App-logo" alt="logo" />
          <p>
            Hi there!!  My name  is <span style={{ color: 'red', fontSize: '1.5rem' }}>Muhammetnur</span>
          </p>
          <p>I am blender learner and here is my very first frojects:)</p>
             
          <Link to='/main' >
            <h4>Let`s go.......</h4>
          </Link>
        </div>
    )
}

export default Index
