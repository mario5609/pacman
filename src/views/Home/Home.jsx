import React from 'react'
import Level from './Level'
import "./Home.css"
import Player from './Player'
import Settings from './Settings'
import Title from './Title'
import ContextProvider, { Context } from '../../Context/Context'
import Lost from '../../components/Lost/Lost'
import Winner from '../../components/Winner/Winner'


export default function Home() {
  return (
    <div className='theme'>
      <ContextProvider>
        <Title />
        <Player />
        <Level />
        <Settings />
        <Lost />
        <Winner />
      </ContextProvider>
    </div>
  )
}
