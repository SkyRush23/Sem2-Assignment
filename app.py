from flask import Flask, render_template, request, redirect, url_for
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB Connection
client = MongoClient("mongodb+srv://25bcnb53:POKE_neil#mongodb@kjus2cluster.xouj5lw.mongodb.net/?appName=KJUs2Cluster")
db = client["PortfolioDB"]
collection = db["Contacts"]

# Home Route
@app.route("/")
def home():
    return render_template("index.html")

# Form Submit Route
@app.route("/submit", methods=["POST"])
def submit():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        message = request.form.get("message")

        # Insert into MongoDB
        collection.insert_one({
            "name": name,
            "email": email,
            "message": message
        })

        return redirect(url_for("home", success="true"))

if __name__ == "__main__":
    app.run(debug=True)