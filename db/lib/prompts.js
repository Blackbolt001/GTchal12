const questions = [
    {
        type:"list",
        message: "Please Choose from Below",
        choices: [
            {name: "Select all Departments", value:0 },
            {name: "Select all Roles", value:1 },
            {name: "Select all Employees", value:2 },
            {name: "Select all Employees by Manager ", value: 3},
            {name: "Select all Employees by Department", value:4 },
            {name: "View Department Budget usage", value:5},


            {name: "add Department", value:10 },
            {name: "add Role", value:11 },
            {name: "add Employee", value:12 },


            {name: "change Employee Role", value:20 },
            {name: "change assigned Manager for Employee", value:21 },

            {name: "Deactivate Department", value: 30},
            {name: "", value: },
            {name: "", value: },
            {name: "", value: },
            {name: "", value: },
            name:"responseSelection"
        ]

    }
]