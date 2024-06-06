# imports
from flask import Flask
#create api variable to use yourself
from api import apiKey
import datetime

x = datetime.datetime.now()
app = Flask(__name__)

@app.route("/data")

def get_time():

    return {
        'time':x
    }

if __name__ == '__main__':
    app.run()