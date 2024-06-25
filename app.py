from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/users', methods=['GET'])
def sedUsers():
    all_users = []
    
    #東京太郎のappend
    tokyoTaro = {'id':1, 'name':'東京太郎','gender_cd':'m', 'gender':'男', 'email':'taro@hogehoge.com'}
    all_users.append(tokyoTaro)

    #神奈川花子のappend
    kanagawaHanako = {'id':2, 'name':'神奈川花子','gender_cd':'f','gender':'女','email':'hanako@fugafuga.com'}
    all_users.append(kanagawaHanako)

    return jsonify(all_users)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)