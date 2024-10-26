import cv2
import numpy as np

def analyze_video(video_uri):
    video_capture = cv2.VideoCapture(video_uri)
    exercises = []
    reps = []
    calories = 0

    # This is a simple simulation. You would replace this with real analysis logic.
    while video_capture.isOpened():
        ret, frame = video_capture.read()
        if not ret:
            break

        # Example logic: Simulate detection of exercises
        exercises.append('Push-up')
        reps.append(10)  # Simulated rep count
        calories += 50  # Simulated calories burned per exercise

    video_capture.release()

    return {
        "exercises": exercises,
        "reps": reps,
        "calories": calories
    }
