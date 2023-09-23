import { useState } from "react"; 
import Alert from "react-bootstrap/Alert";


export default function CustomAlert() {
    const [show, setShow] = useState(true);

    if (!show) {
        return null; 
    }

    return (
        <Alert style={{textAlign:"center",}} variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Thank you for your order</Alert.Heading>
            <p>
                You gonna receive an Email soon with your order 
            </p>
        </Alert>
    );
}
