import {useState} from "react";


export default function FinancialDataForm() {
    // init form state
    const [formState, setFormState] = useState({
        name: "",
        income: "",
        creditScore: "",
        cash: "",
        propertyValue: "",
        loanAmount: "",
        interestRate: "",
    });

    // On every keystroke, update current input field and pull in existing inputs
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState, // grab existing values
            [name]: value, // update target value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data:", formState);
    };

    return (
        <form id="finData" onSubmit={handleSubmit}>
            <div className={"formInputs"}>
                <div className={"inputs"}>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={"inputs"}>
                    <label htmlFor="income">Income: </label>
                    <input
                        type="number"
                        name="income"
                        id="income"
                        min={0}
                        value={formState.income}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={"inputs"}>
                    <label htmlFor="creditScore">Credit Score: </label>
                    <input
                        type="number"
                        name="creditScore"
                        id="creditScore"
                        value={formState.creditScore}
                        onChange={handleChange}
                        min="300"
                        max="850"
                        required
                    />
                </div>
                <div className={"inputs"}>
                    <label htmlFor="cash">Available Cash:</label>
                    <input
                        type="number"
                        name="cash"
                        id="cash"
                        min="0"
                        value={formState.cash}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={"inputs"}>
                    <label htmlFor="propertyValue">Property Value: </label>
                    <input
                        type="number"
                        name="propertyValue"
                        id="propertyValue"
                        min={"0"}
                        value={formState.propertyValue}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={"inputs"}>
                    <label htmlFor="loanAmount">Loan Amount: </label>
                    <input
                        type="number"
                        name="loanAmount"
                        id="loanAmount"
                        min={"0"}
                        value={formState.loanAmount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={"inputs"}>
                    <label htmlFor="interestRate">Interest Rate: </label>
                    <input
                        type="number"
                        name="interestRate"
                        id="interestRate"
                        min={"1"}
                        max={"15"}
                        step={"0.01"}
                        value={formState.interestRate}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
