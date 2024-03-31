const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())

const List = {
 
    "aptitude": [
      {
        "questionName": "What is the capital of France?",
        "questionId": 1,
        "options": ["A. London", "B. Paris", "C. Berlin", "D. Rome"]
      },
      {
        "questionName": "Which of the following is a prime number?",
        "questionId": 2,
        "options": ["A. 6", "B. 11", "C. 12", "D. 15"]
      },
      {
        "questionName": "What is the square root of 144?",
        "questionId": 3,
        "options": ["A. 10", "B. 12", "C. 14", "D. 16"]
      },
      {
        "questionName": "How many sides does a hexagon have?",
        "questionId": 4,
        "options": ["A. 5", "B. 6", "C. 7", "D. 8"]
      },
      {
        "questionName": "What is 25% of 80?",
        "questionId": 5,
        "options": ["A. 15", "B. 20", "C. 25", "D. 30"]
      },
      {
        "questionName": "What is the value of pi (π) to two decimal places?",
        "questionId": 6,
        "options": ["A. 3.12", "B. 3.14", "C. 3.16", "D. 3.18"]
      },
      {
        "questionName": "Which of the following is not a type of triangle?",
        "questionId": 7,
        "options": ["A. Equilateral", "B. Isosceles", "C. Right", "D. Square"]
      },
      {
        "questionName": "What is the next number in the sequence: 2, 4, 8, 16, ...?",
        "questionId": 8,
        "options": ["A. 20", "B. 24", "C. 32", "D. 64"]
      },
      {
        "questionName": "What is the smallest prime number?",
        "questionId": 9,
        "options": ["A. 0", "B. 1", "C. 2", "D. 3"]
      },
      {
        "questionName": "If a car travels at 60 miles per hour, how far will it travel in 3 hours?",
        "questionId": 10,
        "options": ["A. 120 miles", "B. 140 miles", "C. 160 miles", "D. 180 miles"]
      },
      {
        "questionName": "If a train travels at a speed of 80 km/h, how long will it take to travel 400 kilometers?",
        "questionId": 11,
        "options": ["A. 3 hours", "B. 4 hours", "C. 5 hours", "D. 6 hours"]
      },
      {
        "questionName": "What is the next number in the sequence: 1, 4, 9, 16, ...?",
        "questionId": 12,
        "options": ["A. 24", "B. 25", "C. 36", "D. 49"]
      },
      {
        "questionName": "What is the sum of angles in a triangle?",
        "questionId": 13,
        "options": ["A. 90 degrees", "B. 180 degrees", "C. 270 degrees", "D. 360 degrees"]
      },
      {
        "questionName": "How many sides does a quadrilateral have?",
        "questionId": 14,
        "options": ["A. 3", "B. 4", "C. 5", "D. 6"]
      },
      {
        "questionName": "What is the value of 3 squared?",
        "questionId": 15,
        "options": ["A. 6", "B. 9", "C. 12", "D. 15"]
      }
    ],
    "pythonBasics": [
      {
        "questionName": "What is the output of 'print(3 * 5)' in Python?",
        "questionId": 1,
        "options": ["A. 8", "B. 12", "C. 15", "D. 20"]
      },
      {
        "questionName": "Which data type is used to store a single character in Python?",
        "questionId": 2,
        "options": ["A. int", "B. float", "C. str", "D. bool"]
      },
      {
        "questionName": "What is the result of 10 / 3 in Python?",
        "questionId": 3,
        "options": ["A. 3.333", "B. 3", "C. 3.0", "D. 4"]
      },
      {
        "questionName": "What does the 'len()' function do in Python?",
        "questionId": 4,
        "options": ["A. Returns the length of a list or string", "B. Calculates logarithm", "C. Rounds a number", "D. Finds maximum value"]
      },
      {
        "questionName": "What is the correct way to comment a single line in Python?",
        "questionId": 5,
        "options": ["A. // Comment", "B. /* Comment */", "C. # Comment", "D. <!-- Comment -->"]
      },
      {
        "questionName": "What is the result of '5' + '3' in Python?",
        "questionId": 6,
        "options": ["A. 8", "B. 53", "C. 35", "D. Error"]
      },
      {
        "questionName": "What does the 'range()' function do in Python?",
        "questionId": 7,
        "options": ["A. Generates a list of numbers", "B. Returns the length of a list", "C. Checks if a number is within a range", "D. Performs arithmetic operations"]
      },
      {
        "questionName": "Which of the following is not a valid Python variable name?",
        "questionId": 8,
        "options": ["A. _var", "B. var_1", "C. 1_var", "D. Var"]
      },
      {
        "questionName": "What is the result of 2 ** 3 in Python?",
        "questionId": 9,
        "options": ["A. 5", "B. 6", "C. 8", "D. 9"]
      },
      {
        "questionName": "What is the correct way to declare a list in Python?",
        "questionId": 10,
        "options": ["A. list = [1, 2, 3]", "B. list(1, 2, 3)", "C. list = (1, 2, 3)", "D. list = {1, 2, 3}"]
      },
      {
        "questionName": "What is the result of 'Hello' + 'World' in Python?",
        "questionId": 11,
        "options": ["A. HelloWorld", "B. Hello World", "C. HelloWorld", "D. Error"]
      },
      {
        "questionName": "What is the correct way to declare a tuple in Python?",
        "questionId": 12,
        "options": ["A. tuple = (1, 2, 3)", "B. tuple(1, 2, 3)", "C. tuple = [1, 2, 3]", "D. tuple = {1, 2, 3}"]
      },
      {
        "questionName": "What is the output of 'print(10 % 3)' in Python?",
        "questionId": 13,
        "options": ["A. 0", "B. 1", "C. 2", "D. 3"]
      },
      {
        "questionName": "Which of the following is not a valid comparison operator in Python?",
        "questionId": 14,
        "options": ["A. =", "B. ==", "C. !=", "D. >="]
      },
      {
        "questionName": "What is the correct way to access the third element of a list in Python?",
        "questionId": 15,
        "options": ["A. list[3]", "B. list(3)", "C. list{3}", "D. list.3"]
      }
    ],
    "javaBasics": [
      {
        "questionName": "Which of the following is not a valid Java keyword?",
        "questionId": 1,
        "options": ["A. class", "B. interface", "C. function", "D. enum"]
      },
      {
        "questionName": "What is the result of 5 + 2 * 3 in Java?",
        "questionId": 2,
        "options": ["A. 21", "B. 11", "C. 15", "D. 9"]
      },
      {
        "questionName": "Which of the following is not a valid data type in Java?",
        "questionId": 3,
        "options": ["A. int", "B. float", "C. char", "D. string"]
      },
      {
        "questionName": "What is the output of 'System.out.println(3 == 5)' in Java?",
        "questionId": 4,
        "options": ["A. true", "B. false", "C. 3", "D. 5"]
      },
      {
        "questionName": "What does the 'static' keyword mean in Java?",
        "questionId": 5,
        "options": ["A. The method can be accessed without creating an instance of the class", "B. The method can only be accessed within the same class", "C. The method cannot be overridden", "D. The method must be overridden in subclasses"]
      },
      {
        "questionName": "Which symbol is used for single-line comments in Java?",
        "questionId": 6,
        "options": ["A. //", "B. /* */", "C. #", "D. <!-- -->"]
      },
      {
        "questionName": "What is the output of 'System.out.println(10 / 3)' in Java?",
        "questionId": 7,
        "options": ["A. 3", "B. 3.0", "C. 4", "D. 7"]
      },
      {
        "questionName": "Which of the following is a loop statement in Java?",
        "questionId": 8,
        "options": ["A. if", "B. for", "C. switch", "D. class"]
      },
      {
        "questionName": "What is the result of '5 == 5' in Java?",
        "questionId": 9,
        "options": ["A. true", "B. false", "C. Syntax Error", "D. Runtime Error"]
      },
      {
        "questionName": "What does the 'break' statement do in Java?",
        "questionId": 10,
        "options": ["A. Exits the loop or switch statement", "B. Skips the current iteration of a loop", "C. Resumes the next iteration of a loop", "D. Throws an exception"]
      },
      {
        "questionName": "Which of the following is not a valid access modifier in Java?",
        "questionId": 11,
        "options": ["A. public", "B. private", "C. protected", "D. internal"]
      },
      {
        "questionName": "What is the output of 'System.out.println(7 / 2)' in Java?",
        "questionId": 12,
        "options": ["A. 3.5", "B. 3", "C. 4", "D. 7"]
      },
      {
        "questionName": "Which statement is used to exit from a loop in Java?",
        "questionId": 13,
        "options": ["A. break", "B. continue", "C. exit", "D. stop"]
      },
      {
        "questionName": "What is the result of '5 < 3' in Java?",
        "questionId": 14,
        "options": ["A. true", "B. false", "C. Syntax Error", "D. Runtime Error"]
      },
      {
        "questionName": "Which keyword is used to define a subclass in Java?",
        "questionId": 15,
        "options": ["A. extends", "B. implements", "C. subclass", "D. inherits"]
      }
    ],
    "CLanguagebasics": [
        {
          "questionName": "What is the output of 'printf(\"%d\", 5 * 3);' in C?",
          "questionId": 1,
          "options": ["A. 8", "B. 12", "C. 15", "D. 20"]
        },
        {
          "questionName": "Which data type is used to store a single character in C?",
          "questionId": 2,
          "options": ["A. int", "B. float", "C. char", "D. bool"]
        },
        {
          "questionName": "What is the result of 10 / 3 in C?",
          "questionId": 3,
          "options": ["A. 3.333", "B. 3", "C. 3.0", "D. 4"]
        },
        {
          "questionName": "What does the 'sizeof()' function do in C?",
          "questionId": 4,
          "options": ["A. Returns the size of a variable or data type in bytes", "B. Calculates logarithm", "C. Rounds a number", "D. Finds maximum value"]
        },
        {
          "questionName": "What is the correct way to comment a single line in C?",
          "questionId": 5,
          "options": ["A. // Comment", "B. /* Comment */", "C. # Comment", "D. <!-- Comment -->"]
        },
        {
          "questionName": "What is the result of '5' + '3' in C?",
          "questionId": 6,
          "options": ["A. 8", "B. 53", "C. 35", "D. Error"]
        },
        {
          "questionName": "What does the 'break' statement do in C?",
          "questionId": 7,
          "options": ["A. Exits the loop or switch statement", "B. Skips the current iteration of a loop", "C. Resumes the next iteration of a loop", "D. Throws an exception"]
        },
        {
          "questionName": "Which of the following is a loop statement in C?",
          "questionId": 8,
          "options": ["A. if", "B. for", "C. switch", "D. class"]
        },
        {
          "questionName": "What is the result of '5 == 5' in C?",
          "questionId": 9,
          "options": ["A. true", "B. false", "C. Syntax Error", "D. Runtime Error"]
        },
        {
          "questionName": "What is the correct way to declare a constant in C?",
          "questionId": 10,
          "options": ["A. const int VALUE = 5;", "B. constant int VALUE = 5;", "C. #define VALUE 5", "D. const VALUE = 5;"]
        },
        {
          "questionName": "Which symbol is used for single-line comments in C?",
          "questionId": 11,
          "options": ["A. //", "B. /* */", "C. #", "D. <!-- -->"]
        },
        {
          "questionName": "What is the output of 'printf(\"%f\", 10 / 3);' in C?",
          "questionId": 12,
          "options": ["A. 3.333", "B. 3", "C. 3.0", "D. 4"]
        },
        {
          "questionName": "Which statement is used to exit from a loop in C?",
          "questionId": 13,
          "options": ["A. break", "B. continue", "C. exit", "D. stop"]
        },
        {
          "questionName": "What is the result of '5 < 3' in C?",
          "questionId": 14,
          "options": ["A. true", "B. false", "C. Syntax Error", "D. Runtime Error"]
        },
        {
          "questionName": "Which keyword is used to define a function in C?",
          "questionId": 15,
          "options": ["A. func", "B. define", "C. function", "D. def"]
        }
      ]
  }

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/exam',(req,res)=>{
    res.json(List)
})

app.get('/exam/:name',(req,res)=>{
    const name = req.params.name
    console.log(name);
    if(Object.keys(List).includes(name))
    {
        res.json(List[name])
    }
    else{
       res.send('<h1>No Data Found</h1>')
    }
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))