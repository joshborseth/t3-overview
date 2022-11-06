const data = {
  title: "hello world",
  text: "lorem ipsum dolor sit amet",
};
const TsExample = () => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      {/* next two lines appear as errors right in our code editor so that we can easily fix it. */}
      <p>{text}</p>
      <p>{data.body}</p>
    </div>
  );
};

export default TsExample;

//this example uses 'type inference' to infer the type of data
//if we hover over data, we can see that it is inferred as an object with title and text properties
//the t3 stack leverages the power of typescript and 'type inference'.
