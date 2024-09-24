from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html", name="jake")


@app.route("/fish", methods=["GET"])
def fish():
    return jsonify({"message": "FISHHHHHHH! (you've reached the API)"})


if __name__ == "__main__":
    app.run(debug=True)
