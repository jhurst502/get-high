import requests
from flask import Flask, jsonify, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class Elevation(Resource):
    def get(self, zipcode):
        # Get radius of coordinates from zipcode using 
        # us-zip-code-lattitude-and-longitude api from opendatasoft
        coordinates = requests.get(f"https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q={zipcode}")
        coordinates = coordinates.json()

        latitude = coordinates["records"][0]["fields"]["latitude"]
        longitude = coordinates["records"][0]["fields"]["longitude"]

        # Find elevation of point with OpenTopoData API running as microservice
        elevation = requests.get(f"http://159.203.122.59:5000/v1/etopo1?locations={latitude},{longitude}")
        elevation = elevation.json()
        response = elevation
        
        # Hill climbing algorithm finds the local maximum points 

        # Expand points within a 30mile radius

        # TODO look into marshmallow

        return response

api.add_resource(Elevation, '/elevation/<zipcode>')

if __name__ == '__main__':
    app.run(debug=True)