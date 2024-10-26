import sqlite3

def init_db():
    conn = sqlite3.connect('gym_app.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS workouts (
            id INTEGER PRIMARY KEY,
            exercise TEXT,
            reps INTEGER,
            calories INTEGER
        )
    ''')
    conn.commit()
    conn.close()
