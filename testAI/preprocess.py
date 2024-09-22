import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder

# load in the sample dataset
data = pd.read_csv("real_estate_loans_simulated.csv")

# clean the data set (drop rows that are missing values)
data = data.dropna()

# encode categorical inputs (loan type)
label_encoder = LabelEncoder()
data['loan_type_encoded'] = label_encoder.fit_transform(data['loan_type'])

# scale numerical inputs
numerical_columns = ['income', 'credit_score', 'loan_amount', 'property_value']
scaler = StandardScaler()
data[numerical_columns] = scaler.fit_transform(data[numerical_columns])

# Split the data into features === inputs (X) and labels === outputs (y)

X = data[['income', 'credit_score', 'loan_amount', 'property_value', 'loan_type_encoded']]
y = data[['loan_term', 'interest_rate']]


# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Check the result
print(f"Training set size: {X_train.shape}")
print(f"Test set size: {X_test.shape}")

