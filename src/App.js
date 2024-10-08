import Container from "./components/Container";

function App() {
  setInterval(()=>(document.title==="Youtube Caption Generator")?document.title="Caption Generator":document.title="Youtube Caption Generator",1000)
  return (
    <div className="App bg-gray-100 flex flex-col items-center justify-center min-h-screen p-4">
      <Container />
    </div>
  );
}

export default App;
