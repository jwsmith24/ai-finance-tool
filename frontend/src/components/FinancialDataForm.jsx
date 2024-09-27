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
        <form id="finData" onSubmit={handleSubmit} className={"max-w-lg p-6 mx-auto bg-white shadow-lg rounded-lg"}>
            <h2 className={"text-2xl font-bold mb-4 text-left"}>Financial Data</h2>
            <div className={"mb-4"}>
                <label htmlFor="name" className={"block text-sm font-medium text-gray-700 mb-2"}>Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className={"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"}
                    placeholder={"FirstName LastName"}
                />
            </div>
            <div className={"mb-4"}>
                <label htmlFor="income">Income: </label>
                <input
                    type="number"
                    name="income"
                    id="income"
                    min={0}
                    value={formState.income}
                    onChange={handleChange}
                    required
                    className={"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"}
                    placeholder={"Annual income in dollars"}
                />
            </div>
            <div className={"mb-4"}>
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
                    className={"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"}
                    placeholder={"3-digit credit score"}
                />
            </div>
            <div className={"mb-4"}>
                <label htmlFor="cash">Available Cash:</label>
                <input
                    type="number"
                    name="cash"
                    id="cash"
                    min="0"
                    value={formState.cash}
                    onChange={handleChange}
                    required
                    className={"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"}
                    placeholder={"Liquid assets in dollars"}
                />
            </div>
            <div className={"mb-4"}>
                <label htmlFor="propertyValue">Property Value: </label>
                <input
                    type="number"
                    name="propertyValue"
                    id="propertyValue"
                    min={"0"}
                    value={formState.propertyValue}
                    onChange={handleChange}
                    required
                    className={"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"}
                    placeholder={"Property value in dollars"}
                />
            </div>
            <div className={"mb-4"}>
                <label htmlFor="loanAmount">Loan Amount: </label>
                <input
                    type="number"
                    name="loanAmount"
                    id="loanAmount"
                    min={"0"}
                    value={formState.loanAmount}
                    onChange={handleChange}
                    required
                    className={"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"}
                    placeholder={"Loan amount in dollars"}
                />
            </div>
            <div className={"mb-4"}>
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
                    className={"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"}
                    placeholder={"x.xx%"}
                />
            </div>
            <div className={"text-center"}>
                <button
                    type="submit"
                    className={"px-6 py-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 text-white font-semibold rounded"}
                >Submit
                </button>
            </div>
        </form>
    );
}
