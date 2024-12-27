from pymongo import MongoClient

def db_connect():
    client = MongoClient("127.0.0.1", 27017)
    database = client.VisionDB
    profiles = database.profile
    return profiles