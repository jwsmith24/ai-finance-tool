
# Collect financial data from the user and return as a data object
def collect_user_input():
    data = {
    'income': int(input("Enter your income: $")),
    'credit_score': int(input("Enter your credit score: ")),
    'loan_amount': int(input("Enter loan amount: $")),
    'property_value': int(input("Enter property value: $")),
    'loan_type': 'fixed' 
    }
    return data
