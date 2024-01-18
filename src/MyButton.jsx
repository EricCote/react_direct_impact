import {useState} from "react";
import {Button} from "react-bootstrap";

let count = 0

export default  function MyButton() {
    let [count,setCount] = useState(0)

    const render = useRender();

    return <Button onClick={() => (setCount(count + 1))}>The count is: {count}</Button>
}

function useRender() {
    const [set] = useState()
    function render() {
        set({})
    }
}