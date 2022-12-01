import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import {useState, useEffect} from 'react'

function BotsPage() {
const [bots, setBots] = useState([])
const [army, setArmy] = useState([])

useEffect(() => {
  const request = async () => {
    let req = await fetch('http://localhost:3000/bots')
    let res = await req.json()
    setBots(res)
  }
  request()
}, [])

const addMember = (bot) => {
  if(army.includes(bot))return;
  setArmy([...army, bot])
}

const removeMember = (bot) => {
  setArmy(army.filter(member => member !== bot))
}

const killMember = async (bot) => {
let req = await fetch(`http://localhost:3000/bots/${bot.id}`, {
 method: 'DELETE' 
})
setArmy(army.filter(member => member.id !== bot.id))
}

  return (
    <div>
      <YourBotArmy army={army} removeMember={removeMember}/>
      <BotCollection bots={bots} addMember={addMember} killMember={killMember}/>
    </div>
  )
}

export default BotsPage;
