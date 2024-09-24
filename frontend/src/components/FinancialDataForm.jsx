import { useState } from "react";

export default function FinancialDataForm() {
  // init form state
  const [formState, setFormState] = useState({
    income: "",
    creditScore: "",
    cash: "",
    propertyValue: "",
    loanAmount: "",
    interestRate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
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
      <div>
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
      <div>
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
      <div>
        <label htmlFor="creditScore">Credit Score: </label>
        <input
          type="number"
          name="creditScore"
          id="creditScore"
          value={formState.creditScore}
          onChange={handleChange}
          min="0"
          max="850"
          required
        />
      </div>
      <div>
        <label htmlFor="cash">Available Cash: $</label>
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
      <div>
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
      <div>
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
      <div>
        <label htmlFor="interestRate">Interest Rate: </label>
        <input
          type="number"
          name="interestRate"
          id="interestRate"
          min={"0"}
          value={formState.interestRate}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
