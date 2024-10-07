import Container from "./components/Container";

function App() {
  setInterval(()=>(document.title==="Youtube Caption Generator")?document.title="Caption Generator":document.title="Youtube Caption Generator",1000)
  return (
    <div className="App w-screen min-h-screen bg-gray-50 flex justify-center p-10 max-[519px]:p-2">
      <Container />
    </div>
  );
}

export default App;
