from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

item_list = []
@app.route('/')
def hello():
    return "Hello World!"

    
@app.route('/postitem', methods=['POST'])
def post_item():
    data = request.json
    item_list.append(data)
    print(item_list)
    return jsonify({"message": "Item added to cart"})

@app.route('/getcart', methods=['GET'])
def get_cart():
    return jsonify(item_list)

if __name__ == '__main__':
    app.run(debug=True)