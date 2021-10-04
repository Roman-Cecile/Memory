import "../../styles/App.css";
import Books from "../Books";

const data = [
  {
    id: "1",
    title: "The Road to React",
    price: 19.99,
  },
  {
    id: "2",
    title: "The Road to GraphQL",
    price: 29.99,
  },
];

function App() {
  return (
    <div className="App">
      <Books list={data} />
    </div>
  );
}

export default App;
