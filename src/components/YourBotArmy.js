import React from "react";

function YourBotArmy({army, removeMember}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {
            army.map((bot)=>{
              return (
                <div>
                  <img src={bot.avatar_url} alt='robot in party' />
                  <button onClick={()=>{removeMember(bot)}}>X</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
