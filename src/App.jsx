import Counter from "./components/Counter";
import APIDataFetching from "./components/APIDataFetching";
import WindowResize from "./components/WindowResize";
import Timer from "./components/Timer";
import Form from "./components/Form";
import ThemeSwitcher from "./components/ThemeSwitcher";
import OnlineStatus from "./components/OnlineStatus";
import Search from "./components/Search";

function App() {
  return (
    <div className=" space-y-5">
      <div className="min-h-2.5 bg-gradient-to-r from-orange-200 via-white to-pink-100 flex justify-center items-center">
        <h1 className="text-6xl font-semibold text-red-400  text-center mt-10 mb-6 text-shadow-lg tracking-wide">
           React UseEffect Tasks
        </h1>
      </div>
      <Counter />
      <APIDataFetching />
      <WindowResize />
      <Timer />
      <Form />
      <ThemeSwitcher />
      <OnlineStatus />
      <Search />
    </div>
  );
}

export default App;
