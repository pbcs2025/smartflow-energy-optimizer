from alerter import send_alert
from flask import Flask, request, jsonify
from flask_cors import CORS
import predictor
import json, os

app = Flask(__name__)
CORS(app)

history = []

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    result = predictor.predict(data)
    result['room_id'] = data.get('room_id','unknown')
    result['timestamp'] = data.get('timestamp','')
    history.append(result)
    if result['wastage']==1 and result['confidence']>0.75:
        devices = []
        if data.get('fan_status'): devices.append('Fan')
        if data.get('light_status'): devices.append('Light')
        if data.get('ac_status'): devices.append('AC')
        send_alert(result['room_id'], data['power_consumption_w'], devices)

@app.route('/history', methods=['GET'])
def get_history():
    return jsonify(history[-50:])

if __name__ == '__main__':
    predictor.load_model()
    app.run(debug=True, port=5000)