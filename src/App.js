import Actions from "./components/Actions";
import Countries from "./components/Countries";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="bg-gray-50 h-auto ">
        <div className="w-[1200px] mx-auto px-[27px]">
          <Actions />
          <Countries />
        </div>
      </div>
    </div>
  );
}

export default App;
