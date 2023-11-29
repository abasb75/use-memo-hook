import { useMemo, useState } from "react";
import getItems from "./List";

const themes = {
    dark:{
        background:'#222',
        color:'#f9f921',
    },
    light:{
        background:'white',
        color:'#333333',
    }
}

function App(){
    const [ darkMode,setDarkMode ] = useState(false);
    const [query,setQuery] = useState('');

    const style = darkMode ? themes.dark : themes.light;
    const list = getItems(query);
    
    return (<>
        <input type="text" value={query} onChange={e=>setQuery(e.target.value)} placeholder="type here..."/>
        <button onClick={e=>setDarkMode(darkMode=>!darkMode)}>toggle darkMode</button>
        <hr />
        <ul style={style}>
            {list.map(item=>(<li key={item}>{item}</li>))}
        </ul>
    </>);
}
export default App;