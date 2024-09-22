import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# load in the sample dataset
data = pd.read_csv("real_estate_loans_simulated.csv")

# clean the data set (drop rows that are missing values)
data = data.dropna()

# encode categorical inputs (loan type)
label_encoder = LabelEncoder()
data['loan_type_encoded'] = label_encoder.fit_transform(data['loan_type'])

# Split the data into features === inputs (X) and labels === outputs (y)

X = data[['income', 'credit_score', 'loan_amount', 'property_value', 'loan_type_encoded']]
y = data[['loan_term', 'interest_rate']]


# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# scale inputs
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
y_train = scaler.fit_transform(y_train)

# Check the result
print(f"Training set size: {X_train.shape}")
print(f"Test set size: {X_test.shape}")

# Create the model
model = RandomForestClassifier(n_estimators=100, random_state=42)

# train the model
model.fit(X_train, y_train)

# predict on the test set
y_pred = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Model accuracy: {accuracy * 100:.2f}%")

