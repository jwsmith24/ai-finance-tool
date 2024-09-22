# Collect financial data from the user and return as a data object
def collect_user_input():
    data = {
    'income': int(input("Enter your income: ")),
    'credit_score': int(input("Enter your credit score: ")) 
    }
    print(f"Your credit score is {data['credit_score']} ")






