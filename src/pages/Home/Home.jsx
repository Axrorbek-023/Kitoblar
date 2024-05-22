import React, { useContext } from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import Card from '../../components/Card/Card'
import { adib } from '../../data/adib'
import { Context } from '../../Context/Context'  
import { useLocation } from 'react-router-dom'

function Home() {
  let {search, setSearch} = useContext(Context) 
  let location = useLocation().pathname
  
  return (
    <div className='container'>
      <Hero/> 
      <ul className="home__list">
        {
          location == '/' ? adib.filter((i)=> i.name.toLowerCase().includes(search.toLowerCase())).map((item, index)=>(
            <li key={index} className="home__item">
              <Card item={item}/>
            </li>
          )) : null
        }
      </ul>
    </div>
  )
}

export default Home