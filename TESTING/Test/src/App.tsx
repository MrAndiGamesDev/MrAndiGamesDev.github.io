// import React from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="offline"></div>

      <div className="online">
        <div className="load"></div>
        <div className="container">
          <h1>MrAndiGamesDev's Portfolio</h1>
          <p>Welcome to my portfolio! I'm a passionate Roblox developer and game creator.</p>
        
          <h2>About Me</h2>
          <p>I specialize in creating engaging Roblox experiences and managing game development projects. My goal is to bring joy and excitement to players through innovative gameplay and immersive environments.</p>
        
          <h2>My Projects</h2>
        
          <div className="projects">
            <div className="project">
              <h3>Roblox Group: MrAndi Games</h3>
              <p>A collaborative space for game development and community engagement.</p>
              <a href="https://www.roblox.com/groups/17082880/MrAndi-Games">Visit Group</a>
            </div>
            <div className="project">
              <h3>Upcoming Projects</h3>
              <p>Stay tuned for exciting new Roblox games and experiences!</p>
              <a href="https://www.roblox.com/games/12430041994/Gravity-But-With-Sword-Fight-In-Dev">Gravity But With Sword Fight In Dev</a>
            </div>
          </div>
        
          <h2>Connect With Me</h2>
          <div className="mylinks">
            <a href="https://discord.gg/VV6njGz7Br">Discord Server</a>
            <a href="https://www.roblox.com/users/3362493084/profile">Roblox Profile</a>
            <a href="https://www.roblox.com/groups/17082880/MrAndi-Games">Roblox Group</a>
          </div>
        </div>
        <div className="copyrightcontainer">
          <h2>Made with love by MrAndiGamesDev(MrAndiScripted)</h2>
        </div>
      </div>
    </>
  )
}

export default App
