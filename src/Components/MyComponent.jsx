import {useState} from 'react';
function MyComponent(){
    const [items, setItems] = useState(['Autunm','Spring','Winter','Summer']);
    const [inputValue, setInputValue] = useState('');
    const addItems = () => {
        setItems([...items,inputValue]);
        setInputValue(''); //đặt lại để ô input trống sau khi thêm một value
    }
    const removeItems = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }
    return (
        <>
            <h1>Seasons</h1>
            <ul>
                {items.map((item, index) =>(
                
                <li key={index} >{item}
                <button onClick={() => removeItems(index)}>Remove</button>
                </li>
                
                ))}
            </ul>
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={addItems}>Add</button>
        </>
    )
}
export default MyComponent