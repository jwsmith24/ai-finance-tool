from flask import Flask, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)



@app.route("/fish", methods=["GET"])
def fish():
    return jsonify({"message": "you've reached the API"})


if __name__ == "__main__":
    app.run(debug=True)
