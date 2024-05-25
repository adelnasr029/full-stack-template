require('dotenv').config();
const express = require('express');
const cors = require('cors');
const supabase = require('./config/supabaseConfig');
const itemRoutes = require('./routes/itemRoutes')

const app = express()

const port = process.env.PORT || 4000

//Test connection to Supabase
supabase.from('items').select('id').range(0,0)
.then(response => {
    if(response.data){
        console.log('Connected to Supabase Successfully')
    }else if(response.error){
        console.error('Erro connecting to Supbase', response.error.message)
    }
})

app.use(cors())
app.use(express.static('public')) //tells server static folder location

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.set('view engine', 'ejs')

//Routes 
app.use('/', itemRoutes)
//Start the server
app.listen(port, () => {
    console.log(`Server running on : http://localhost:${port}`)
})

module.exports.supabase = supabase;