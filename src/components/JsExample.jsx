// @ts-nocheck

const data = {
  title: "hello world",
  text: "lorem ipsum dolor sit amet",
};

const JsExample = () => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      {/* next two lines will throw errors when ran. */}
      <p>{text}</p>
      <p>{data.body}</p>
    </div>
  );
};

export default JsExample;
