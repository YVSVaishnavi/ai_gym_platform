from flask import Flask, request, jsonify
from video_analysis_module import analyze_video
from utils.db import init_db

app = Flask(__name__)
init_db()  

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    video_uri = data.get('videoUri')
    results = analyze_video(video_uri)
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
