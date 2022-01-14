import requests
import random
import math
import json
from requests.api import get


def climb(latitude, longitude):
    # Hill climbing algorithm finds the local maximum points
    # First generate 200 lat lon points within 30mile radius
    points = []
    coordsList = []
    for i in range(0, 200):
        ang = random.uniform(0, 1) * 2 * math.pi
        hyp = math.sqrt(random.uniform(0, 1)) * 0.5
        adj = math.cos(ang) * hyp
        opp = math.sin(ang) * hyp
        points.append([latitude + adj, longitude + opp])

    request = ''
    for point in points:    # send all points as one request
        latitude = point[0]
        longitude = point[1]
        request += (f"{latitude},{longitude}|")

    elevation = requests.get(
        f"https://topo.gethighelevation.com/v1/etopo1?locations={request}")
    elevation = json.loads(elevation.text)
    elevation = elevation["results"]
    for item in elevation:
        coords_details = {"elevation": None, "location": None}
        coords_details['elevation'] = item['elevation']
        coords_details['location'] = item['location']
        coordsList.append(coords_details)

    def expand_coords(elevation, latitude, longitude):

        # Hill climb algorithm for each point
        tenHighestPoints = []
        secondRequest = ''
        thirdRequest = ''
        fourthRequest = ''
        fifthRequest = ''
        for point in elevation:
            # print(point['location']['lat'])
            # expand coordinate .0005 lat and lon in every direction
            # this is broken up in to two requests due to size limits of open topo data server
            secondRequest += (f"{point['location']['lat']+.0005},{point['location']['lng']+.0005}|")
            thirdRequest += (f"{point['location']['lat']-.0005},{point['location']['lng']+.0005}|")
            fourthRequest += (f"{point['location']['lat']+.0005},{point['location']['lng']-.0005}|")
            fifthRequest += (f"{point['location']['lat']-.0005},{point['location']['lng']-.0005}|")

        # Query API for elevation of new points
        # second request
        elevation0 = requests.get(
            f"https://topo.gethighelevation.com/v1/etopo1?locations={secondRequest}")
        elevation0 = json.loads(elevation0.text)
        results = elevation0['results']
        for item in results:
            coords_details = {"elevation": None, "location": None}
            coords_details['elevation'] = item['elevation']
            coords_details['location'] = item['location']
            coordsList.append(coords_details)

        elevation1 = requests.get(
            f"https://topo.gethighelevation.com/v1/etopo1?locations={thirdRequest}")
        elevation1 = json.loads(elevation1.text)
        results1 = elevation1['results']
        for item in results1:
            coords_details = {"elevation": None, "location": None}
            coords_details['elevation'] = item['elevation']
            coords_details['location'] = item['location']
            coordsList.append(coords_details)

        elevation2 = requests.get(
            f"https://topo.gethighelevation.com/v1/etopo1?locations={fourthRequest}")
        elevation2 = json.loads(elevation2.text)
        results = elevation2["results"]
        for item in results:
            coords_details = {"elevation": None, "location": None}
            coords_details['elevation'] = item['elevation']
            coords_details['location'] = item['location']
            coordsList.append(coords_details)

        elevation3 = requests.get(
            f"https://topo.gethighelevation.com/v1/etopo1?locations={fifthRequest}")
        elevation3 = json.loads(elevation3.text)
        results = elevation3["results"]
        for item in results:
            coords_details = {"elevation": None, "location": None}
            coords_details['elevation'] = item['elevation']
            coords_details['location'] = item['location']
            coordsList.append(coords_details)

        # Add more random points to improve accuracy
        points=[]
        for i in range(0, 200):
            ang = random.uniform(0, 1) * 2 * math.pi
            hyp = math.sqrt(random.uniform(0, 1)) * 0.5
            adj = math.cos(ang) * hyp
            opp = math.sin(ang) * hyp
            points.append([latitude + adj, longitude + opp])
        
        request2 = ''
        for point in points:    # send all points as one request
            latitude = point[0]
            longitude = point[1]
            request2 += (f"{latitude},{longitude}|")

        elevation4 = requests.get(
            f"https://topo.gethighelevation.com/v1/etopo1?locations={request2}")
        elevation4 = json.loads(elevation4.text)
        elevation4 = elevation4["results"]
        for item in elevation4:
            coords_details = {"elevation": None, "location": None}
            coords_details['elevation'] = item['elevation']
            coords_details['location'] = item['location']
            coordsList.append(coords_details)
        # repeat
        points=[]
        for i in range(0, 200):
            ang = random.uniform(0, 1) * 2 * math.pi
            hyp = math.sqrt(random.uniform(0, 1)) * 0.4
            adj = math.cos(ang) * hyp
            opp = math.sin(ang) * hyp
            points.append([latitude + adj, longitude + opp])
        
        request3 = ''
        for point in points:    # send all points as one request
            latitude = point[0]
            longitude = point[1]
            request3 += (f"{latitude},{longitude}|")

        elevation5 = requests.get(
            f"https://topo.gethighelevation.com/v1/etopo1?locations={request3}")
        elevation5 = json.loads(elevation5.text)
        elevation5 = elevation5["results"]
        for item in elevation5:
            coords_details = {"elevation": None, "location": None}
            coords_details['elevation'] = item['elevation']
            coords_details['location'] = item['location']
            coordsList.append(coords_details)

        print(f"entries total {len(coordsList)}")
        
        # Sort coordsList by elevation
        quick_sort(0, len(coordsList)-1, coordsList)

        # Keep only 100 points with the highest elevations
        for i in range(0, len(coordsList)-100):
            coordsList.pop(0)

        return coordsList

    # run algorithm for 4 passes
    newPoints = expand_coords(coordsList, latitude, longitude)
    for i in newPoints:
        print(i)

    print(f"\n\n\n Second set")
    secondPoints = expand_coords(newPoints, latitude, longitude)

    for i in secondPoints:
        print(i)

    print(f"\n\n\n Third set")
    thirdPoints = expand_coords(secondPoints, latitude, longitude)

    for i in thirdPoints:
        print(i)



    # Elevation is returned in feet
    def metersToFeet(meters):
        feet = meters * 3.2808
        feet = round(feet)
        return feet

    highestPointsResponse = {
        "points": {
            "one": {
                "lat": thirdPoints[len(thirdPoints)-1]['location']['lat'],
                "lng": thirdPoints[len(thirdPoints)-1]['location']['lng'],
                "elevation": metersToFeet(thirdPoints[len(thirdPoints)-1]['elevation'])
            },
            "two": {
                "lat": thirdPoints[len(thirdPoints)-2]['location']['lat'],
                "lng": thirdPoints[len(thirdPoints)-2]['location']['lng'],
                "elevation": metersToFeet(thirdPoints[len(thirdPoints)-2]['elevation'])
            },
            "three": {
                "lat": thirdPoints[len(thirdPoints)-3]['location']['lat'],
                "lng": thirdPoints[len(thirdPoints)-3]['location']['lng'],
                "elevation": metersToFeet(thirdPoints[len(thirdPoints)-3]['elevation'])
            },
            "four": {
                "lat": thirdPoints[len(thirdPoints)-4]['location']['lat'],
                "lng": thirdPoints[len(thirdPoints)-4]['location']['lng'],
                "elevation": metersToFeet(thirdPoints[len(thirdPoints)-4]['elevation'])
            },
            "five": {
                "lat": thirdPoints[len(thirdPoints)-5]['location']['lat'],
                "lng": thirdPoints[len(thirdPoints)-5]['location']['lng'],
                "elevation": metersToFeet(thirdPoints[len(thirdPoints)-5]['elevation'])
            },
            "six": {
                "lat": thirdPoints[len(thirdPoints)-6]['location']['lat'],
                "lng": thirdPoints[len(thirdPoints)-6]['location']['lng'],
                "elevation": metersToFeet(thirdPoints[len(thirdPoints)-6]['elevation'])
            },
            "seven": {
                "lat": thirdPoints[len(thirdPoints)-7]['location']['lat'],
                "lng": thirdPoints[len(thirdPoints)-7]['location']['lng'],
                "elevation": metersToFeet(thirdPoints[len(thirdPoints)-7]['elevation'])
            },
            "eight": {
                "lat": thirdPoints[len(thirdPoints)-8]['location']['lat'],
                "lng": thirdPoints[len(thirdPoints)-8]['location']['lng'],
                "elevation": metersToFeet(thirdPoints[len(thirdPoints)-8]['elevation'])
            },
            "nine": {
                "lat": thirdPoints[len(thirdPoints)-9]['location']['lat'],
                "lng": thirdPoints[len(thirdPoints)-9]['location']['lng'],
                "elevation": metersToFeet(thirdPoints[len(thirdPoints)-9]['elevation'])
            },
            "ten": {
                "lat": thirdPoints[len(thirdPoints)-10]['location']['lat'],
                "lng": thirdPoints[len(thirdPoints)-10]['location']['lng'],
                "elevation": metersToFeet(thirdPoints[len(thirdPoints)-10]['elevation'])
            },
        }
    }

    return highestPointsResponse


# Quicksort algorithm 
def partition(start, end, array):
     
    # Initializing pivot's index to start
    pivot_index = start
    pivot = array[pivot_index]['elevation']
     
    # This loop runs till start pointer crosses
    # end pointer, and when it does we swap the
    # pivot with element on end pointer
    while start < end:
         
        # Increment the start pointer till it finds an
        # element greater than  pivot
        while start < len(array) and array[start]['elevation'] <= pivot:
            start += 1
             
        # Decrement the end pointer till it finds an
        # element less than pivot
        while array[end]['elevation'] > pivot:
            end -= 1
         
        # If start and end have not crossed each other,
        # swap the numbers on start and end
        if(start < end):
            array[start], array[end] = array[end], array[start]
     
    # Swap pivot element with element on end pointer.
    # This puts pivot on its correct sorted place.
    array[end], array[pivot_index] = array[pivot_index], array[end]
    
    # Returning end pointer to divide the array into 2
    return end
     
# The main function that implements QuickSort
def quick_sort(start, end, array):
     
    if (start < end):
         
        # p is partitioning index, array[p]
        # is at right place
        p = partition(start, end, array)
         
        # Sort elements before partition
        # and after partition
        quick_sort(start, p - 1, array)
        quick_sort(p + 1, end, array)
         