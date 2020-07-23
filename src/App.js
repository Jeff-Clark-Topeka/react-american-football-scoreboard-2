//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const homeTd = () => setHomeScore(homeScore + 7);
  const homeFg = () => setHomeScore(homeScore + 3);
  const awayTd = () => setAwayScore(awayScore + 7);
  const awayFg = () => setAwayScore(awayScore + 3);

  return ( 
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Chiefs</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">49ers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTd}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFg}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTd}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFg}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
