import requests, pymongo
from flask import Flask, jsonify, request
from requests.api import get
from flask_restful import Resource, Api
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import dotenv_values
from hillClimb import climb

config = dotenv_values(".env")
DB_USER = config["DB_USER"]
DB_PASSWORD = config["DB_PASSWORD"]

# Connects to test database 
cluster = MongoClient(f'mongodb+srv://{DB_USER}:{DB_PASSWORD}@cluster0.1lqdp.mongodb.net/test?authSource=admin&replicaSet=atlas-n32ejh-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true')
db = cluster["highpoints"]
collection = db["elevation"]

app = Flask(__name__)
CORS(app)
api = Api(app) 

class Elevation(Resource):
    def get(self, zipcode):
        # First check to see if data for zipcode is already in database 
        existingData = (collection.find_one({"_id": zipcode}))
        if existingData != None:
            print(existingData)
            return(existingData)
            
        # Get radius of coordinates from zipcode using 
        # us-zip-code-lattitude-and-longitude api from opendatasoft
        coordinates = requests.get(f"https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q={zipcode}")
        coordinates = coordinates.json()

        latitude = coordinates["records"][0]["fields"]["latitude"]
        longitude = coordinates["records"][0]["fields"]["longitude"]

        # Find elevation of point with OpenTopoData API running as microservice
        elevation = requests.get(f"http://gethighelevation.com:5000/v1/etopo1?locations={latitude},{longitude}")
        elevation = elevation.json()
        
        # Hill climbing algorithm finds the local maximum points 
        response = climb(latitude, longitude)
        
        # Add calculated data to the database 
        collection.insert_one({"_id": zipcode, "points": response["points"]})
        return jsonify(response)    
           

api.add_resource(Elevation, '/elevation/<zipcode>')

if __name__ == '__main__':
    app.run(debug=True)