import Container from "./components/Container";

function App() {
  setInterval(()=>(document.title==="YouTube Timestamp Generator")?document.title="Video Summary Generator":document.title="YouTube Timestamp Generator",1000)
  return (
    <div className="App bg-gray-100 flex flex-col items-center justify-center min-h-screen p-4">
      <Container />
    </div>
  );
}

export default App;
