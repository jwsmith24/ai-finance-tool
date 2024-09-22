import joblib
import pandas as pd
from userPrediction import collect_user_input
from forestRegression import train_models

# Load trained models, scaler, and encoder
model_loan_term = joblib.load("../resources/saved-models/loan_term.pkl")
model_interest_rate = joblib.load("../resources/saved-models/interest_rate.pkl")
scaler = joblib.load("../resources/saved-models/scaler.pkl")
label_encoder = joblib.load("../resources/saved-models/label_encoder.pkl")

def predict_user_input(input):
    # Create data frame (ensure input is a single-row DataFrame)
    data = pd.DataFrame([input])

    # Encode loan type
    data['loan_type_encoded'] = label_encoder.transform(data['loan_type'])

    # Select relevant features from the DataFrame
    X_input = data[['income', 'credit_score', 'loan_amount', 'property_value', 'loan_type_encoded']]

    # Scale the input data using the same scaler fitted on training data
    X_input_scaled = scaler.transform(X_input)

    # Make predictions
    predicted_loan_term = model_loan_term.predict(X_input_scaled)
    predicted_interest_rate = model_interest_rate.predict(X_input_scaled)

    return predicted_loan_term[0], predicted_interest_rate[0]

# Train and save models
train_models()

# Generate predictions from user input
input = collect_user_input()
predicted_loan_term, predicted_interest_rate = predict_user_input(input)

# Display predictions
print(f"Your predicted Loan Term: {round(predicted_loan_term)} years")
print(f"Your predicted Interest Rate: {predicted_interest_rate:.2} %")
