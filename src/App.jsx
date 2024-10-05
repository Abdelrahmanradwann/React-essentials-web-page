import {CORE_CONCEPTS, EXAMPLES} from './data'
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {useState} from 'react';  // hooks 


function App() {

  let [selectedTab, setSelectedTab] = useState('');

  function handleSelect(item) {
    selectedTab = setSelectedTab(item)
  }
  console.log(selectedTab)

  return (
    <div>
      <Header />
      <main>
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

        <section id="examples">
          <menu>
            <TabButton isSelected={selectedTab=='components'} onSelect = {() => handleSelect('components')} >Component</TabButton>
            <TabButton isSelected={selectedTab=='jsx'} onSelect = {() => handleSelect('jsx')} >JSX</TabButton>
            <TabButton isSelected={selectedTab=='props'} onSelect = {() => handleSelect('props')} >Props</TabButton>
            <TabButton isSelected={selectedTab=='state'} onSelect = {() => handleSelect('state')} >State</TabButton>
          </menu>
          {!selectedTab && <p>Please select a topic</p>}
          {selectedTab && <div id='tab-content'>
            <h2> {EXAMPLES[selectedTab].title} </h2>
            <p> {EXAMPLES[selectedTab].description} </p>
            <pre>
                <code> {EXAMPLES[selectedTab].code} </code>
            </pre>
          </div>
          }  
        </section>
    
      </main>
    </div>
  );
}

export default App;
