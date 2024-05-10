from flask import Flask, jsonify, request
from flask_socketio import SocketIO, emit
from flask_cors import CORS

app = Flask(__name__)
CORS(app,resources={r"/*":{"origins":"*"}})
socketio = SocketIO(app,cors_allowed_origins="*")

# Initialize present/live values of the feature menu
feature_menu_values = {
    "selectedLanguage": "Python",
    "isCommentsEnabled": False,
    "selectedTime": 15
}

@socketio.on("connect")
def connected():
    print(request.sid)
    print("client has connected")
    emit("connect",{"data":f"id: {request.sid} is connected"})
# WebSocket event handler for when a client disconnects
@socketio.on("disconnect")
def handle_disconnect():
    print(f"user disconnected")
    emit("disconnect",f"user {request.sid} disconnected",broadcast=True)

# WebSocket event handler for receiving updated values of the feature menu from the frontend
@socketio.on("update_feature_menu")
def handle_update_feature_menu(data):
    global feature_menu_values
    feature_menu_values = data
    print(f"The Features Selected by the user are: {feature_menu_values}")
    # Broadcast the updated feature menu values to all connected clients
    emit('feature_menu_updated', feature_menu_values, broadcast=True)

# Route to get present/live values of the feature menu
@app.route('/get-feature-menu', methods=['GET'])
def get_feature_menu():
    return jsonify(feature_menu_values)


@app.route('/')
def index():
    return jsonify({"message": "Welcome to the Feature Menu API"})

if __name__ == '__main__':
    # Start the Flask-SocketIO server
    socketio.run(app, debug=True,port=5000)
