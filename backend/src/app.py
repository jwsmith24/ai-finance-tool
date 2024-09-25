import joblib
import pandas as pd
from userPrediction import collect_user_input
from models import train_models

# Train and save models
train_models()

# Load trained models, scaler, and encoder
model_loan_term = joblib.load("/app/resources/saved-models/loan_term.pkl")
model_interest_rate = joblib.load("/app/resources/saved-models/interest_rate.pkl")
scaler = joblib.load("/app/resources/saved-models/scaler.pkl")
label_encoder = joblib.load("/app/resources/saved-models/label_encoder.pkl")


def predict_user_input(user_data):
    # Create data frame (ensure input is a single-row DataFrame)
    data = pd.DataFrame([user_data])

    # Encode loan type
    data["loan_type_encoded"] = label_encoder.transform(data["loan_type"])

    # Select relevant features from the DataFrame
    x_input = data[
        ["income", "credit_score", "loan_amount", "property_value", "loan_type_encoded"]
    ]

    # Scale the input data using the same scalar fitted on training data
    x_input_scaled = scaler.transform(x_input)

    # Make predictions
    predicted_loan_model = model_loan_term.predict(x_input_scaled)
    predicted_interest_model = model_interest_rate.predict(x_input_scaled)

    return predicted_loan_model[0], predicted_interest_model[0]


# Generate predictions from user input
user_input = collect_user_input()
predicted_loan_term, predicted_interest_rate = predict_user_input(user_input)

# Display predictions
print(f"Your predicted Loan Term: {round(predicted_loan_term)} years")
print(f"Your predicted Interest Rate: {predicted_interest_rate:.2} %")
