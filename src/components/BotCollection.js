import React from "react";
import BotCard from './BotCard'


function BotCollection({bots, addMember, killMember }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
      {
        bots.map((bot)=>{
          return (
            <div>
              <BotCard bot={bot} killMember={killMember}/>
              <button onClick={()=>{addMember(bot)}}>Add</button>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default BotCollection;
