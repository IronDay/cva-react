import Button from "./components/Button";

function App() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Button
        handleClick={(count: number) => alert(count)}
        intent="secondary"
        size="lg"
        className="text-[8px] text-white"
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
