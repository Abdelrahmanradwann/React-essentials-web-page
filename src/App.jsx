
const reactDescription = ['Crucial', 'Important', 'Core'];


function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function Header() {
  return (
    <p>
      <h2>
        Hi there, I'm learning React.js
      </h2>
    </p>
  );
}
function App() {
  const description = reactDescription[genRandomInt(2)];
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <Header />
      </main>
    </div>
  );
}

export default App;
