import React from 'react'
import './App.css';

import {newsPaperBlock} from "./components/task1/paper-block/newspaper-blocks";
import {Newspaper} from "./components/task1/newsPaper/Newspaper";


function App() {

    return (
        <div className="App">

            {
                newsPaperBlock.map((item) => <Newspaper heading={item.heading} subtitle={item.subtitle}
                                                        article={item.article}/>)
            }

        </div>
    );
}

export default App;

