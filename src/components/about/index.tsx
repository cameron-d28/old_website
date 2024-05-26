const About = () => {
  const quotes = [
    "do not go where the path may lead, go instead where there is no path and leave a trail",
    "the voyage of the best ship is a zigzag line of a hundred tacks. see the line from a sufficient distance, and it straightens itself to the average tendency. your genuine action will explain itself, and will explain your other genuine actions. your conformity explains nothing.",
  ];
  return (
    <div>
      <p>my name is cameron davis</p>
      {/* cycle through quotes */}
      {quotes.map((quote) => (
        <p key={quote}>{quote}</p>
      ))}
      <a href="/">home</a>
    </div>
  );
};

export default About;
