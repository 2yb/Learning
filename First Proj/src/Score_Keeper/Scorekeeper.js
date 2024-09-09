import React from "react";
import { useState } from "react";

export const ScoreKeeper = () => {
  const [p1Score, setp1Score] = useState(0);
  const [p2Score, setp2Score] = useState(0);
  const [isgameOver, setisgameOver] = useState(false);
  const [winningScore, setwinningScore] = useState(3);
  const updateScore = (setScore, reset) => {
    if (reset) {
      setp1Score(0);
      setp2Score(0);
      setisgameOver(false);
      return;
    }

    setScore((prevScore) => prevScore + 1);
  };

  const selectChangeHandler = (e) => {
    setwinningScore(parseInt(e.target.value));
  };

  React.useEffect(() => {
    if (p1Score === winningScore || p2Score === winningScore) {
      setisgameOver(true);
    }
  }, [p1Score, p2Score]);
  React.useEffect(() => {
    updateScore(setp1Score, true);
  }, [winningScore]);

  const getColor = (score) => {
    if (!isgameOver) return "black";
    if (score == winningScore) return "green";
    return "red";
  };

  return (
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <div class="card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img
                    src="https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3784&q=80"
                    alt=""
                  />
                </figure>
              </div>
              <header class="card-header">
                <p class="card-header-title">Ping Pong Score Keeper</p>
              </header>
              <div class="card-content">
                <div class="content">
                  <h1 class="title is-1">
                    <span id="p1Display" style={{ color: getColor(p1Score) }}>
                      {p1Score}
                    </span>{" "}
                    to
                    <span id="p2Display" style={{ color: getColor(p2Score) }}>
                      {p2Score}
                    </span>
                  </h1>
                  <p class="subtitle">Use the buttons below to keep score</p>

                  <label for="playto" class="label is-large is-inline">
                    Playing To
                  </label>
                  <div class="select is-rounded">
                    <select name="" id="playto" onChange={selectChangeHandler}>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                    </select>
                  </div>
                </div>
              </div>
              <footer class="card-footer">
                <button
                  id="p1Button"
                  class="is-primary button card-footer-item is-large"
                  onClick={() => updateScore(setp1Score)}
                  disabled={isgameOver}
                >
                  +1 Player One
                </button>
                <button
                  id="p2Button"
                  class="is-info button card-footer-item is-large"
                  onClick={() => updateScore(setp2Score)}
                  disabled={isgameOver}
                >
                  +1 Player Two
                </button>
                <button
                  id="reset"
                  class="is-danger button card-footer-item is-large"
                  onClick={() => {
                    updateScore(setp1Score, true);
                  }}
                >
                  Reset
                </button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoreKeeper;
