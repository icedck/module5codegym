import {useState} from 'react';

export default function Counter() {
    let [count, setCount] = useState(0);

    const handleClick = () =>{
        setCount(count + 1);
    }

    return(
        <div>
            gia tri {count}
            <div>
                <button onClick={handleClick}>Click</button>
            </div>
        </div>
    )
}