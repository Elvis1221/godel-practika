import React from 'react'
import './App.css';

import {newspaperBlock} from "./components/task1/newspaper-blocks";
import {Newspaper} from "./components/task1/Newspaper";


function App() {

    return (
        <div className="App">

            {
                newspaperBlock.map((item) => <Newspaper heading={item.heading} subtitle={item.subtitle} article={item.article}/>)
            }

        </div>
    );
}

export default App;

