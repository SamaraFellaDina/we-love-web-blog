// importeren
import express, { response } from "express"
import fetchJson from './helpers/fetch-json.js'
const app = express()

// stel de mappen in
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const blogData = fetchJson("./public/data.json")
// "./public/data.json"

app.get("/", (request, response) => {
  fetchJson(blogData).then((data) => {
    console.log(data)
    response.render("index.ejs", {data:data})
  })
})

// Een port aanroepen om alles op te hosten
app.set('port', process.env.PORT || 9090)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})