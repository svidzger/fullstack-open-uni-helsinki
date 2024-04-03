import { useState } from 'react';

// The Header component is used to create a header element
const Header = ({ text }) => <h1>{text}</h1>;

// The Button component is used to create a button element
const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

// StatsLine component is used to display a single line of statistics
const StatsLine = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  );
};

// The Stats component displays the statistics of the feedback given
const Stats = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = (good / all) * 100 || 0;

  // If no feedback has been given, display a message
  if (all === 0) {
    return (
      <div>
        <Header text='Statistics' />
        <p>No feedback given</p>
      </div>
    );
  }
  // Otherwise, display the statistics
  return (
    <div>
      <Header text='Statistics' />
      <StatsLine text='Good' value={good} />
      <StatsLine text='Neutral' value={neutral} />
      <StatsLine text='Bad' value={bad} />
      <StatsLine text='All' value={all} />
      <StatsLine text='Average' value={average} />
      <StatsLine text='Positive' value={`${positive}%`} />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text='Give feedback please!' />
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
