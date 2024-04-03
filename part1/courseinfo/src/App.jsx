const App = () => {
  // The course object contains the course name and its parts
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  // The Header component is used to display the course name
  const Header = (props) => {
    return <h1>{props.course.name}</h1>;
  };

  // The Part component is used to create a paragraph element for each part
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    );
  };

  // The Content component is used to display the parts of the course
  const Content = () => {
    return course.parts.map((part, index) => {
      return <Part key={index} part={part} />;
    });
  };

  // The Total component is used to display the total number of exercises
  const Total = (props) => {
    const sum = props.parts.reduce((sum, part) => sum + part.exercises, 0);
    return <p>Total number of exercises is {sum}</p>;
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
