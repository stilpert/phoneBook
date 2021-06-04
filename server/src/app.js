const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./config/config')

mongoose.Promise = global.Promise

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(require('./routes/userRoutes'))

mongoose.connect(config.dbURL, config.dbOptions)
mongoose.connection
  .once('open', () => {
    console.log(`Mongoose - successful connection ...`)
    app.listen(process.env.PORT || config.port,
      () => console.log(`Server start on port ${config.port} ...`))
  })
  .on('error', error => console.warn(error))



// app.get('/contacts', (req, res) => {
//     res.send(
//         [{  
//             _id: "aaf2321412",
//             name: "Strilchuk Evgenii",
//             phones: ["+38(050)12-123-11","+38(089)12-123-21"]
//         },
//         {  
//             _id: "adfs23244as",
//             name: "Sam Cross",
//             phones: ["+38(050)12-123-11","+38(089)12-123-21"]
//         }
//     ]
//     )
// })