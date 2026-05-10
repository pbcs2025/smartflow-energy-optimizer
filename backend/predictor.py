import joblib
import numpy as np

rf_model = None

def load_model():
    global rf_model
    rf_model = joblib.load('../models/random_forest_model.pkl')
    print("Model loaded.")

def predict(data):
    features = [
        data['hour_of_day'],
        data['day_of_week_num'],
        data['is_break_period'],
        data['is_after_hours'],
        data['occupancy'],
        data['fan_status'],
        data['light_status'],
        data['power_consumption_w'],
        data.get('rolling_avg_30min', 0),
        data.get('lag_1h_power', 0)
    ]
    X = np.array(features).reshape(1, -1)
    label = int(rf_model.predict(X)[0])
    prob = float(rf_model.predict_proba(X)[0][1])
    return {'wastage': label, 'confidence': round(prob, 3)}