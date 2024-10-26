def extract_frames(video_path):

    video_capture = cv2.VideoCapture(video_path)
    frames = []
    
    while True:
        ret, frame = video_capture.read()
        if not ret:
            break
        frames.append(frame)

    video_capture.release()
    return frames
