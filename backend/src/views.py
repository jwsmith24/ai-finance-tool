from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/test', methods=['POST'])
def handle_data():
    data = request.get_json()
    response = {
        'message': 'Data received by the python backend!',
        'data': data
    }
    return jsonify(response)


if __name__ == "__main__":
    app.run(debug=True)
