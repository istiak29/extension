import Comments from "./Component/Comments";
import Feedback from "./Component/feedback";
import Overall from "./Component/Overall";

const App = () => {
  return (
    <div className="max-w-5xl mx-auto my-8 border-2 border-green-800">
      <h2>This is our extension</h2>

      <div className="border-2 border-purple-600 my-8 flex flex-col-2 justify-around">
        <div>
          <h2>This is custom comment dynamic headline</h2>
          <Comments></Comments>
        </div>
        <div>
          <h2>This is the overall percentage</h2>
          <Overall></Overall>
        </div>
      </div>


      <div className="">
        <Feedback></Feedback>
      </div>
    </div>

  );
};

export default App;