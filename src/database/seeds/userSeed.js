const seeder = require("mongoose-seed")

seeder.connect("mongodb://localhost/MongoCRUD", () => {
    seeder.loadModels([
        "src/database/models/UserModel.ts"
    ])
    seeder.clearModels(["users"])
    seeder.populateModels(data, () => {
        seeder.disconnect()
    })
    
})

const data = [
    {
        "model": "users",
        "documents": [
            {
                "name": "Rafael",
                "email": "rafael@gmail.com"
            }
        ]
    }
]