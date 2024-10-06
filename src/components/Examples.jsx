import {useState} from 'react';  // hooks 
import TabButton from "./TabButton"
import { CORE_CONCEPTS, EXAMPLES } from "../data"
import Section from './Section'
import Tabs from './Tabs'
export default function Examples() {

    let [selectedTab, setSelectedTab] = useState('components');

    function handleSelect(item) {
        setSelectedTab(item)
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs buttons = { CORE_CONCEPTS.map((i) => {
                return <TabButton isSelected={selectedTab==i.title.toLowerCase()} onSelect = {() => handleSelect(i.title.toLowerCase())} >{i.title}</TabButton>
             })
            }>          
            {selectedTab &&
                <div id='tab-content'>
                    <h2> {EXAMPLES[selectedTab].title} </h2>
                    <p> {EXAMPLES[selectedTab].description} </p>
                    <pre>
                        <code> {EXAMPLES[selectedTab].code} </code>
                    </pre>
                </div>
            }     
            </Tabs>
        </Section>
    )
}