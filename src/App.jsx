import {CORE_CONCEPTS} from './data'

const reactDescription = ['Crucial', 'Important', 'Core'];


function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function Header() {
  const description = reactDescription[genRandomInt(2)];
  return (
       <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

function CoreConcept({image,title,description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              image={CORE_CONCEPTS[0].image}
              description={CORE_CONCEPTS[0].description}
            />
            
            <CoreConcept {...CORE_CONCEPTS[1]}/>  
              
            <CoreConcept {...CORE_CONCEPTS[2]}/>

              <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
    
      </main>
    </div>
  );
}

export default App;
