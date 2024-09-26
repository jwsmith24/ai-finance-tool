import joblib
import pandas as pd
from sklearn.ensemble import (
    RandomForestRegressor,
    RandomForestClassifier,
)  # RandomForestRegressor for continuous outputs, RandomForestClassifier for discrete outputs
from sklearn.metrics import root_mean_squared_error, accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder


def train_models():
    # Load the sample dataset
    data = pd.read_csv("../resources/real_estate_loans_simulated.csv")

    # Clean the dataset (drop rows with missing values)
    data = data.dropna()

    # Encode categorical inputs (loan type)
    label_encoder = LabelEncoder()
    data["loan_type_encoded"] = label_encoder.fit_transform(data["loan_type"])

    # Split the data into features (X) and labels/targets (y)
    x = data[
        ["income", "credit_score", "loan_amount", "property_value", "loan_type_encoded"]
    ]
    y_loan_term = data["loan_term"]  # Continuous output
    y_interest_rate = data["interest_rate"]  # Discrete - 15 or 30 year term

    # Train-test split
    # 80% of the data is used to train the model and then its evaluated on 20% of it

    x_train, x_test, y_train_loan_term, y_test_loan_term = train_test_split(
        x, y_loan_term, test_size=0.2, random_state=42
    )
    x_train, x_test, y_train_interest_rate, y_test_interest_rate = train_test_split(
        x, y_interest_rate, test_size=0.2, random_state=42
    )

    # Scale inputs
    scaler = StandardScaler()
    x_train = scaler.fit_transform(x_train)
    x_test = scaler.transform(x_test)

    # Create and train the model for loan term
    model_loan_term = RandomForestClassifier(n_estimators=100, random_state=42)
    model_loan_term.fit(x_train, y_train_loan_term)

    # Create and train the model for interest rate
    model_interest_rate = RandomForestRegressor(n_estimators=100, random_state=42)
    model_interest_rate.fit(x_train, y_train_interest_rate)

    # Predict on the test set
    y_pred_loan_term = model_loan_term.predict(x_test)
    y_pred_interest_rate = model_interest_rate.predict(x_test)

    # Create a dataframe to store the results
    results = pd.DataFrame(
        {
            "Actual Loan Term": y_test_loan_term,
            "Predicted Loan Term": y_pred_loan_term,
            "Actual Interest Rate": y_test_interest_rate,
            "Predicted Interest Rate": y_pred_interest_rate,
        }
    )

    # Reset index for better readability
    results.reset_index(drop=True, inplace=True)

    # Display the first few rows of the results
    print(results.head())

    # Evaluate the models (squared=False to display RMSE for easier comparison)
    loan_term_accuracy = accuracy_score(y_test_loan_term, y_pred_loan_term)
    mse_interest_rate = root_mean_squared_error(
        y_test_interest_rate, y_pred_interest_rate
    )

    print(f"Loan Term Accuracy: {loan_term_accuracy * 100:.2f}%")
    print(f"Interest Rate Error: {mse_interest_rate:.2f}%")

    # Save the model to use later
    joblib.dump(model_loan_term, "../resources/saved-models/loan_term.pkl")
    joblib.dump(model_interest_rate, "../resources/saved-models/interest_rate.pkl")
    joblib.dump(scaler, "../resources/saved-models/scaler.pkl")
    joblib.dump(label_encoder, "../resources/saved-models/label_encoder.pkl")
    print("Models saved!")
