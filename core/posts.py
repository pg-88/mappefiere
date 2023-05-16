from db import db
import json
from fastapi import FastAPI
import uvicorn

app = FastAPI()
    
class create_dict(dict): 
  
    # __init__ function 
    def __init__(self): 
        self = dict() 
          
    # Function to add key:value 
    def add(self, key, value): 
        self[key] = value

## Query JSON all  ##

@app.get('/allstand')
def json_all_stand():
    '''Create JSON with all stand row'''

    cur = db.cursor()
    cur.execute("SELECT * FROM stand")
    all_stand = cur.fetchall()
    all_stand_dict = create_dict()
    for row in all_stand:
        all_stand_dict.add(row[0],({
            "n_stand":row[0],
            "name_stand":row[1],
            "category":row[2],
            "descritpion":row[3],
            "n_pavilion":row[4],
            "website":row[5]}))
    
    
    all_stand_json = json.dumps(all_stand_dict,indent=4)
    
    return all_stand_dict

@app.get('/allpavilion')
def json_all_pavilion():
    '''Create JSON with all pavilion row'''

    cur = db.cursor()
    cur.execute("SELECT * FROM pavilion")
    all_pavilion = cur.fetchall()
    all_pavilion_dict = create_dict()
    for row in all_pavilion:
        all_pavilion_dict.add(row[0],({
            "n_pavilion":row[0],
            "name_conference":row[1],
        }))
    
    all_pavilion_json = json.dumps(all_pavilion_dict,indent=4)

    return all_pavilion_dict

@app.get('/allfiere')
def json_all_fiere():
    '''Create JSON with all fiere row'''

    cur = db.cursor()
    cur.execute("SELECT * FROM fiere")
    all_fiere = cur.fetchall()
    all_fiere_dict = create_dict()
    for row in all_fiere:
        all_fiere_dict.add(row[0],({
            "name_conference":row[0],
            "city":row[1],
            "address":row[2],
            "date":row[3],
            "website":row[4],
            "map":row[5],
            "download_map":row[6],
            "id_conference":row[7],}))
    
    all_fiere_json = json.dumps(all_fiere_dict,indent=4)

    return all_fiere_dict

## Query JSON with filter ##

@app.get('/allstand{query_where}={query_id}')
def json_filter_stand(query_where:str,query_id:str):
    '''Create JSON with row selected by filter '''

    query = "SELECT * FROM stand WHERE {}={}"
    cur = db.cursor()
    cur.execute(query.format(query_where,query_id))
    results = cur.fetchall()
    my_dict = create_dict()
    for row in results:
        my_dict.add(row[0],({
            "n_stand":row[0],
            "name_stand":row[1],
            "category":row[2],
            "description":row[3],
            "n_pavilion":row[4],
            "website":row[5]}))

    results_json = json.dumps(my_dict)

    return my_dict

@app.get('/allpavilion{query_where}={query_id}')
def json_filter_pavilion(query_where:str,query_id:str):
    '''Create JSON with row selected by filter '''

    query = "SELECT * FROM pavilion WHERE {}={}"
    cur = db.cursor()
    cur.execute(query.format(query_where,query_id))
    result = cur.fetchall()
    my_dict = create_dict()
    for row in result:
        my_dict.add(row[0],({
            "n_pavilion":row[0],
            "name_conference":row[1],
        }))
    
    results_json = json.dumps(my_dict)

    return my_dict

@app.get('/allfiere{query_where}={query_id}')
def json_filter_fiere(query_where:str,query_id:str):
    '''Create JSON with row selected by filter '''
    
    query = "SELECT * FROM fiere WHERE {}={}"
    cur = db.cursor()
    cur.execute(query.format(query_where,query_id))
    result = cur.fetchall()
    my_dict = create_dict()
    for row in result:
        my_dict.add(row[0],({
            "name_conference":row[0],
            "city":row[1],
            "address":row[2],
            "date":row[3],
            "website":row[4],
            "map":row[5],
            "download_map":row[6],
            "id_conference":row[7],
        }))
    
    results_json = json.dumps(my_dict)

    return my_dict


if __name__ == "__main__":
    uvicorn.run("posts:app",host="127.0.0.1",port=8000,reload=True)