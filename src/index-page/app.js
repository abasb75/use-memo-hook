import { Link } from "react-router-dom";

export default function App(){
    return (<>
        <ul>
            <li><Link to="without-use-memo">Without Use Memo</Link></li>
            <li><Link to="with-use-memo">With Use Memo</Link></li>
        </ul>
    </>);
}