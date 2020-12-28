import './App.css';

import {block1, block2, block3} from "./components/task1/newspaper-blocks";
import {Newspaper} from "./components/task1/Newspaper,jsx";


function App() {

    return (
        <div className="App">

            {
                block1.map((item) => <Newspaper heading={item.heading} subtitle={item.subtitle} article={item.article}/>)
            }
            {
                block2.map((item) => <Newspaper heading={item.heading} subtitle={item.subtitle} article={item.article}/>)
            }
            {
                block3.map((item) => <Newspaper heading={item.heading} subtitle={item.subtitle} article={item.article}/>)
            }
        </div>
    );
}

export default App;

