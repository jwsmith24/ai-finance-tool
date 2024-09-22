# ai-finance-tool
Sandbox to play around with AI/ML concepts and APIs in Python

## Running the program
Navigate to the `/testAI/` directory and run `python3 main.py`

First the program will use the provided data (located in /resources) to train the models for interest rate and loan term predictions. Then it will prompt the user for their information and provide a personalized prediction.

> The trained models are stored in `/resources/saved-models/`.

### Example Results

Using a basic forest regression model on a sample data set with 100 decision tress, the model provides interest rate and loan term predictions.

The error for loan term predictions on the sample data (1000 entries) is +/- 8 months. The error for interest rate predictions is +/- 1%.

![Example results](resources/forest-regression-example.png)

## Terms

Features - Input data provided to the model  
Label/Target(s) - Output data we want to predict with the model

## ML Algorithms

- Linear regression
    - Used for predicting continuous values
    - Assumes linear relationship between input features and output labels
    - Great when data is roughly linear
    - Sucks when data isn't linear

- Random Forest
    - builds a ton of decision trees
    - each tree makes a prediction
    - final result is either the average predication of all the trees (regression task) or the majority vote (classification task)
    - Great for data with complex relationships or non-linear data

