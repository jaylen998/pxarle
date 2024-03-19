import pandas as pd
from flask import Flask
from flask_bootstrap import Bootstrap
from flask import jsonify
import flask
from jieba import analyse
import random

app =Flask(__name__,static_url_path='/static')


@app.route('/charts2')
def charts():
    return flask.render_template('charts2.html',args=flask.request.args)
    
@app.route('/')
def index():
    return flask.render_template('index_demo_1.html')    
    
@app.route('/data2')
def data2():
    haa = flask.request.args.get('haa')
    tfidf = analyse.extract_tags(haa,withWeight = True)
    b=[]
    for i,x in enumerate(tfidf):
        tmp = {'id':i+1,'keyword':x[0],'tfidf':x[1]}
        b.append(tmp)

    return jsonify(b)
    

@app.route('/data3')
def data3():
    haa = flask.request.args.get('haa')
    x = haa.count('f')
    xx = random.randint(0,100)
    
    kentaa = [
    {
        "category": "Evaluation",
        "value": xx,
        "target": 0
    }]
    return jsonify(kentaa)

@app.route('/login')
def login():
    return flask.render_template('login2.html')
   
   
@app.route('/about')
def about():
    return flask.render_template('index_demo about.html')
   
@app.route("/test",methods=['POST','GET'])
def test():
    haa = flask.request.args.get('haa')
    x = str(haa).count('f')
    return str(x)
'''
'''

'''
@app.route('/')
def home():
  
    if flask.request.args.get('mx') !=None:
       mx = flask.request.args.get('mx')

    return render_template('index.html')
'''

if __name__ == "__main__":
    app.run(debug=True)
