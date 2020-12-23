import './App.css';
import {Box} from "./components/Box";

function App() {
    const test = [
        {
            text: 'test1'
        },
        {
            text: 'test2'
        },
        {
            text: 'test3'
        },
        {
            text: 'test4'
        },
        {
            text: 'test5'
        },
    ];

    return (
        <div className="App">
            {
                test.map((item, index) => <Box key={index} text={item.text}/>)
            }
        </div>
    );
}

export default App;

