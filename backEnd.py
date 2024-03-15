# imports
from flask import Flask
from api import apiKey
import json
from polygon import RESTClient
import datetime
import requests


app = Flask(__name__)

@app.route("/")

def hello():
    return "hello there"
    print(apiKey)

if __name__ == "__main__":
    hello()
    app.run()