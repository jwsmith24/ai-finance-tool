import {useState} from "react";

export function ResultsWidget() {
    const [responseData, setResponseData] = useState(null); // no initial parameters

    const sendDataToServer = async () => {
        const data = {name: "this is data sent from the react frontend"};

        try {
            const response = await fetch('http://127.0.0.1:8000/api', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            setResponseData(result);

        } catch (error) {
            console.error('Error sending data to backend', error)
        }
    }

    return (
        <div>
            <button onClick={sendDataToServer}>Send Data</button>
            {responseData && (
                <div>
                    <h3>Response from Backend:</h3>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}