CREATE TABLE question (
    id SERIAL PRIMARY KEY,
    question_title TEXT NOT NULL,
    option1 TEXT NOT NULL,
    option2 TEXT NOT NULL,
    option3 TEXT NOT NULL,
    option4 TEXT NOT NULL,
    right_answer TEXT NOT NULL,
    difficulty_level TEXT NOT NULL,
    category TEXT NOT NULL
);
CREATE TABLE quiz(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL
);
CREATE TABLE quiz_questions(
    quiz_id INTEGER REFERENCES quiz (id),
    question_id INTEGER REFERENCES question (id)
);