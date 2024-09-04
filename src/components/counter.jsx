import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Component() {
    const [num, setNum] = useState(0);
    console.log(num)
    const handleClick = () => {
        let Count = setNum(num + 1)
    }
    const clear = () =>{
        let Count = setNum(0)
    }
    return (
        <>
            <Card style={{ width: '18rem'  }}>
                <Card.Body>
                    <Card.Title>Counter</Card.Title>
                    <Card.Text>
                        {num}
                    </Card.Text>
                    <Button variant="outline-info" onClick={handleClick}>Add 1</Button>
                    <Button variant="outline-danger" className="mx-2" onClick={clear}>CLear</Button>

                </Card.Body>
            </Card>
        </>
    );




}
export default Component