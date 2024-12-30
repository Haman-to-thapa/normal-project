
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Sales Report",
        "taskDescription": "Compile and update the monthly sales report.",
        "taskDate": "2024-12-20",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Prepare slides for the Q1 business strategy.",
        "taskDate": "2024-12-22",
        "category": "Management"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Customer Feedback Review",
        "taskDescription": "Review feedback from the last product release.",
        "taskDate": "2024-12-18",
        "category": "Customer Relations"
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Ishaan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Market Analysis",
        "taskDescription": "Conduct market analysis for the upcoming campaign.",
        "taskDate": "2024-12-21",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Weekly Team Meeting",
        "taskDescription": "Attend and contribute to the weekly team meeting.",
        "taskDate": "2024-12-19",
        "category": "Management"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Advika",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Inventory Check",
        "taskDescription": "Complete inventory verification for the warehouse.",
        "taskDate": "2024-12-20",
        "category": "Operations"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true,
        "taskTitle": "Deliver Training",
        "taskDescription": "Conduct employee training session for new hires.",
        "taskDate": "2024-12-15",
        "category": "Training"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Submit Expense Report",
        "taskDescription": "Finalize and submit the expense report for November.",
        "taskDate": "2024-12-10",
        "category": "Finance"
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Riya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "System Update",
        "taskDescription": "Apply updates to the internal software system.",
        "taskDate": "2024-12-19",
        "category": "IT"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Plan Event",
        "taskDescription": "Plan the upcoming company event.",
        "taskDate": "2024-12-25",
        "category": "HR"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Aryan",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Research Competitor Products",
        "taskDescription": "Analyze features and pricing of competitor products.",
        "taskDate": "2024-12-23",
        "category": "Research"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Employee Records",
        "taskDescription": "Update the employee database with recent changes.",
        "taskDate": "2024-12-18",
        "category": "HR"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "Vikram",
    "email": "admin@example.com",
    "password": "123"
  }
];



export const setlocalStorage = () => {
   localStorage.setItem("employees", JSON.stringify(employees))
   localStorage.setItem("admin", JSON.stringify(admin) )
  }

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    return{employees, admin}
   

  }