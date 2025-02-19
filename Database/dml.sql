
INSERT INTO question (id, question_title, option1, option2, option3, option4, right_answer, difficulty_level, category)
VALUES
    (1, 'What is a class in Java?', 'A function', 'An object', 'A data structure', 'A loop', 'An object', 'Easy', 'java'),
    (2, 'What does OOP stand for?', 'Object-Oriented Programming', 'Object Ordering Process', 'Operating Overloaded Pointers', 'Order of Operations', 'Object-Oriented Programming', 'Easy', 'java'),
    (3, 'What is a list in Python?', 'A type of loop', 'A built-in function', 'A data structure', 'An object', 'A data structure', 'Easy', 'python'),
    (4, 'Which data structure uses First-In-First-Out (FIFO) order?', 'Stack', 'Queue', 'Array', 'LinkedList', 'Queue', 'Medium', 'python'),
    (5, 'What is a constructor?', 'A member of a class', 'A loop in Python', 'A data type', 'A special method', 'A special method', 'Medium', 'java'),
    (6, 'Which sorting algorithm has the worst-case time complexity of O(n^2)?', 'Merge Sort', 'Quick Sort', 'Insertion Sort', 'Bubble Sort', 'Bubble Sort', 'Hard', 'python'),
    (7, 'In Java, what is used to create an instance of a class?', 'Class', 'Method', 'Object', 'Constructor', 'Constructor', 'Easy', 'java'),
    (8, 'Which keyword is used to define a variable that won’t be reassigned?', 'static', 'final', 'constant', 'immutable', 'final', 'Easy', 'java'),
    (9, 'What is the output of 4 ^ 3 in Python?', '7', '64', '81', '12', '64', 'Easy', 'python'),
    (10, 'What does the term "polymorphism" refer to in programming?', 'Using multiple inheritance', 'Ability to take multiple forms', 'Manipulating data', 'Using multiple programming languages', 'Ability to take multiple forms', 'Medium', 'java'),
    (11, 'What is the purpose of the "self" parameter in Python class methods?', 'It refers to the current instance of the class', 'It is used to call parent class methods', 'It is a keyword for loops', 'It is a data type', 'It refers to the current instance of the class', 'Medium', 'python'),
    (12, 'Which of the following is not a primitive data type in Java?', 'int', 'boolean', 'char', 'string', 'string', 'Medium', 'java'),
    (13, 'What is the time complexity of a binary search?', 'O(n)', 'O(log n)', 'O(n^2)', 'O(1)', 'O(log n)', 'Medium', 'python'),
    (14, 'What keyword is used to inherit a class in Python?', 'extends', 'inherits', 'super', 'class', 'class', 'Easy', 'python'),
    (15, 'Which type of loop is ideal for situations where the number of iterations is known?', 'for loop', 'while loop', 'do-while loop', 'until loop', 'for loop', 'Easy', 'java'),
    (16, 'What is the purpose of "import" in Python?', 'To export data', 'To create a backup', 'To include external modules', 'To print output', 'To include external modules', 'Easy', 'python'),
    (17, 'In Java, which access modifier provides the widest visibility?', 'public', 'private', 'protected', 'package-private', 'public', 'Easy', 'java'),
    (18, 'What is a lambda function in Python?', 'A function that uses the "lambda" keyword', 'A function with multiple return values', 'A function with no parameters', 'An anonymous inline function', 'An anonymous inline function', 'Medium', 'python'),
    (19, 'What is a linked list?', 'A type of array', 'A linear data structure', 'A collection of objects', 'A group of classes', 'A linear data structure', 'Medium', 'java'),
    (20, 'Which operator is used to concatenate strings in Python?', '&', '+', '*', '++', '+', 'Easy', 'python'),
    (21, 'What does JVM stand for?', 'Java Virtual Machine', 'Just Virtual Memory', 'JavaScript Virtual Machine', 'Java Version Manager', 'Java Virtual Machine', 'Easy', 'java'),
    (22, 'In Python, what is the main difference between a tuple and a list?', 'Tuples are mutable, lists are not', 'Lists are ordered, tuples are not', 'Tuples can store mixed data types, lists cannot', 'Lists have a fixed size, tuples do not', 'Tuples can store mixed data types, lists cannot', 'Medium', 'python'),
    (23, 'What is the purpose of the "finally" block in a try-catch-finally statement?', 'To handle exceptions', 'To define a fallback value', 'To execute code regardless of exceptions', 'To terminate the program', 'To execute code regardless of exceptions', 'Medium', 'java'),
    (24, 'What is a dictionary in Python?', 'A sorted collection of elements', 'A data structure used for searching', 'An ordered sequence of elements', 'A key-value store', 'A key-value store', 'Easy', 'python'),
    (25, 'Which keyword is used to define a subclass in Java?', 'child', 'extends', 'inherits', 'subclass', 'extends', 'Easy', 'java'),
    (26, 'What is the purpose of the "pass" statement in Python?', 'To stop the execution of a loop', 'To indicate an empty code block', 'To raise an exception', 'To terminate the program', 'To indicate an empty code block', 'Easy', 'python'),
    (27, 'What is a class in Java?', 'Steve Jobs', ' James Gosling', 'Rasmus Lerdorf', 'Dennis Ritchie', 'An object', 'Easy', 'C'),
    (28, 'Which of the following is not a valid C variable name?', ' int number', 'float rate', 'int variable_count', 'int $main', 'int $main', 'Easy', 'C'),
    (29, 'Which is valid C expression?', 'int my_num = 100,000', 'int my_num = 100000', 'int my num = 1000', 'int $my_num = 10000', 'int $my_num = 10000','Easy', 'C'),
    (30, 'Which of the following cannot be a variable name in C?', 'volatile', 'true', 'friend', 'export', 'volatile', 'Easy', 'C'),
    (31, 'Which of the following typecasting is accepted by C language?', 'Widening conversions','Narrowing conversions' ,'Widening & Narrowing conversions',' None of the mentioned', 'Widening & Narrowing conversions','Easy', 'C'),
    (32, 'Which of the following return-type cannot be used for a function in C?', 'char *','struct', 'void', 'none of the mentioned', ' None of the mentioned','Easy', 'C'),
    (33, ' What is the sizeof(char) in a 32-bit C compiler?', ' 1 bit','2 bits', '1 Byte', '2 Bytes', ' 1 Byte','Easy', 'C'),
    (34, 'The standard header _______ is used for variable list arguments (…) in C.', '<stdio.h >','<stdlib.h>', '<math.h>', '<stdarg.h>', ' <stdio.h >','Easy', 'C');


-- INSERT INTO quiz (id, title)
-- VALUES
-- (1,	'JQuiz'),
-- (2,	'PYQuiz'),
-- (3,	'CQuiz');

-- INSERT INTO quiz_questions(quiz_id, question_id)
-- VALUES
-- (1,	19),
-- (1,	21),
-- (1,	7),
-- (1,	10),
-- (2,	3),
-- (2,	4),
-- (2,	9),
-- (2,	11),
-- (2,	18),
-- (3,	30),
-- (3,	31),
-- (3,	32),
-- (3,	33),
-- (3,	34);