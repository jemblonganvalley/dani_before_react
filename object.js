
// object
let userData = {
    // object key   :   object value
    username: "fadliselaz",
    address: "depok",
    phone: "081213655573"
}

// destruct
let username = userData.username // string fadliselaz
let address = userData.address
let phone = userData.phone


// reassign object value
userData.username = 'Dani'

// create new object key and add data
userData.email = "fadliselaz@gmail.com"

// array index of     0            1        2       3    4                 5
let adminData = ["fadliselaz", "evalia", "fauzi", true, 123, { name: "fadliselaz", age: 3 }]

let dummyData = [
    {
        id: 1,
        username: "fadliselaz"
    },
    {
        id: 2,
        username: "evalia"
    }
]

// array method
dummyData.map((elem) => { console.info(elem) })