# API Documentation for Student ERP System

## Overview
This document provides an overview of the API endpoints available in the Student ERP System. The API allows for management of students, courses, enrollments, attendance, grades, and authentication.

## Endpoints

### 1. Students
#### - Get Student
**GET /api/students/{studentId}**  
**Description:** Retrieves the details of a student by their ID.  
**Example Request:**  
```
GET /api/students/1
```
**Example Response:**  
```json  
{  
  "id": 1,  
  "name": "John Doe",  
  "email": "john.doe@example.com",  
  "enrollmentYear": 2022  
}  
```

#### - Create Student
**POST /api/students**  
**Description:** Creates a new student.  
**Example Request:**  
```json  
{  
  "name": "Jane Smith",  
  "email": "jane.smith@example.com",  
  "enrollmentYear": 2023  
}  
```
**Example Response:**  
```json  
{  
  "id": 2,  
  "message": "Student created successfully"  
}  
```

### 2. Courses
#### - Get Courses
**GET /api/courses**  
**Description:** Retrieves a list of all courses.  
**Example Request:**  
```
GET /api/courses
```
**Example Response:**  
```json  
[{  
  "id": 1,  
  "title": "Computer Science 101",  
  "credits": 3  
}]
```

### 3. Enrollments
#### - Enroll Student in Course
**POST /api/enrollments**  
**Description:** Enrolls a student in a specific course.  
**Example Request:**  
```json  
{  
  "studentId": 1,  
  "courseId": 1  
}  
```
**Example Response:**  
```json  
{  
  "message": "Student enrolled successfully"  
}  
```

### 4. Attendance
#### - Mark Attendance
**POST /api/attendance**  
**Description:** Marks attendance for a specific student and class.  
**Example Request:**  
```json  
{  
  "studentId": 1,  
  "courseId": 1,  
  "date": "2023-03-03"  
}  
```
**Example Response:**  
```json  
{  
  "message": "Attendance marked successfully"  
}  
```

### 5. Grades
#### - Submit Grade
**POST /api/grades**  
**Description:** Submits a grade for a student in a course.  
**Example Request:**  
```json  
{  
  "studentId": 1,  
  "courseId": 1,  
  "grade": "A"  
}  
```
**Example Response:**  
```json  
{  
  "message": "Grade submitted successfully"  
}  
```

### 6. Authentication
#### - Login
**POST /api/auth/login**  
**Description:** Authenticates a user and returns a token.  
**Example Request:**  
```json  
{  
  "email": "john.doe@example.com",  
  "password": "yourpassword"  
}  
```
**Example Response:**  
```json  
{  
  "token": "your.jwt.token",  
  "message": "Login successful"  
}  
```

### Conclusion
This API documentation outlines the key functionalities of the Student ERP System and provides example requests and responses for a range of operations.