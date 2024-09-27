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
    const inputClass = 'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'

    const formFields = [
        {id: 1, label: 'First Name', type: 'text', name: 'firstName', placeHolder: 'First name'},
        {
            id: 2,
            label: 'Income',
            type: 'number',
            name: 'income',
            placeHolder: 'Annual income in dollars'
        },
        {
            id: 3,
            label: 'Credit Score',
            type: 'number',
            name: 'creditScore',
            placeHolder: 'Three-digit credit score'
        },
        {
            id: 4,
            label: 'Available Cash',
            type: 'number',
            name: 'cash',
            placeHolder: 'Liquid assets in dollars'
        },
        {
            id: 5,
            label: 'Property Value',
            type: 'number',
            name: 'propertyValue',
            placeHolder: 'Property value in dollars'
        },
        {
            id: 6,
            label: 'Loan Amount',
            type: 'number',
            name: 'loanAmount',
            placeHolder: 'Loan amount in dollars'
        },
        {
            id: 7,
            label: 'Interest Rate',
            type: 'number',
            name: 'interestRate',
            placeHolder: '#.## %'
        },
    ]

    return (
        <form id="finData" onSubmit={handleSubmit}
              className={"max-w-lg p-6 mx-auto bg-white shadow-lg rounded-lg"}>
            <h2 className={"text-2xl font-bold mb-4 text-left"}>Financial Data</h2>

            {formFields.map((field) => (
                <div key={field.id} className={'mb-3'}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                        type={field.type}
                        name={field.name}
                        id={field.id}
                        value={formState[field.name]}
                        onChange={handleChange}
                        required
                        className={inputClass}
                    />
                </div>
            ))}

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
