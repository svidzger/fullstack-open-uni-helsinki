import { useState } from 'react';

// The Button component is used to create a button element
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // Array of anecdotes
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];
  const [selected, setSelected] = useState(0);
  // Array to store votes for each anecdote. Filled with 0s initially.
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  // Function to handle voting
  const handleVote = () => {
    setVotes(
      votes.map((vote, index) => {
        if (index === selected) {
          return vote + 1;
        } else {
          return vote;
        }
      })
    );
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <br />
      <br />
      {`Has ${votes[selected]} votes`}
      <br />
      <br />
      <Button text={'Vote'} onClick={handleVote} />
      <Button
        text={'Next anecdote'}
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      />
      <br />
      <br />
      {/* Display the anecdote with the most votes. Renders if there is any votes. */}
      {votes.some((vote) => vote > 0) ? (
        <div>
          <h2>Anecdote with most votes</h2>
          {anecdotes[votes.indexOf(Math.max(...votes))]}
          <br />
          <br />
          {`Has ${Math.max(...votes)} votes`}
        </div>
      ) : (
        <div>
          <h2>No votes yet</h2>
        </div>
      )}
    </div>
  );
};

export default App;
