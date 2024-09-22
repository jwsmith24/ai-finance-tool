# Prepare model, collect user inputs, return predictions

import joblib
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, LabelEncoder
from userPrediction import collect_user_input


# Load trained models
model_loan_term = joblib.load("../resources/saved-models/loan_term.pkl")
model_interest_rate = joblib.load("../resources/saved-models/interest_rate.pkl")

