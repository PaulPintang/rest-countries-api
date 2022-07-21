import Actions from "./components/Actions";
import Countries from "./components/Countries";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="w-[1000px] mx-auto px-[27px]">
        <Actions />
        <Countries />
      </div>
    </div>
  );
}

export default App;
