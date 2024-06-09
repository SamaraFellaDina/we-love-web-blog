import express from "express"
import fetchJson from './helpers/fetch-json.js'
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 6090)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

import blogData from './data.json' assert {type:'json'};


app.get('/', (request, response) => {
  // Filter the data for both semesters
  const semester2 = blogData.data.filter(blog => blog.semester === "2");
  const semester1 = blogData.data.filter(blog => blog.semester === "1");

  // Render the 'index.ejs' template with both filtered data sets
  response.render('index', { semester1, semester2 });
});


app.get('/:slug', (request, response) => {
    const slug = request.params.slug;
    const blog = blogData.data.find(p => p.slug === slug);

    if (blog) {
        response.render('article.ejs', { blog });

    } else {
        response.status(404).send('blog not found');
    }
});