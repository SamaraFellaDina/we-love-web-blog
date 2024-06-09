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

const blogData = {
    "data": [
      {   
        "id": "1",
        "title": "Fenna de Wilde",
        "color": "#3498db",
        "emoji": "📱",
        "short_description": "Over haar projecten en werk",
        "date": "",
        "description": "<h2>Samenvatting presentatie</h2><p>Fenna de Wilde is een creative content developer en ze is nu al twee jaar werkzaam bij Bakken & Baeck. Hiervoor had je bij Build and Amsterdam gewerkt en dat was meer e-commerce. In totaal is ze al 4.5 jaar werkzaam in de wereld van frontend & design.Tijdens de we-love-web liet ze meerdere sites zien waar zij aan had gewerkt. Er was zelfs een site bij die genomineerd was als website van het jaar.Ze had recentelijk ook aan een crypto website gewerkt waarbij ze de branding van crypto zelf wilde veranderen. De website heet Phantom en zij wilden de site vriendelijker eruit laten zien. Zwart kan namelijk mensen afschrikken die niks begrijpen van cryptocurrency.In het bedrijfsleven weten vrij weinig mensen af van toegankelijkheid. Dit moet eigenlijk wel zo zijn. Als een website niet voor iedereen toegankelijk is, dan heb je er niks aan. Een website gaat vooral over bruikbaarheid en gaat om de gebruiker.</p><h3>Toegankelijkheidsrichtlijnen</h3><ul><li>Focus state voor keyboard gebruikers: Niet alle gebruikers bedienen een interface met een muis. Je kunt dan een focus state toevoegen door een `:focus-visible` te gebruiken.</li><li>Focus state voor keyboard gebruikers: Niet alle gebruikers bedienen een interface met een muis. Je kunt dan een focus state toevoegen door een `:focus-visible` te gebruiken.</li><li>`Aria controls:` Als een element het andere element controleert. Het element dat wordt gecontroleerd krijgt een id en het andere krijgt een aria-controls.</li><li>Zorg ervoor dat je carrousels ook toegankelijk zijn. Dit is vrij lastig als je bijvoorbeeld erdoorheen wil tabben. De carrousels moeten een role=“group” hebben.</li><li>Vermijd het gebruik van li elementen voor je slides. Als je slides verbergt, zal het aangekondigde aantal li-items niet overeenkomen met het werkelijke aantal slides.</li></ul><p>Er zijn dus veel verschillende toegankelijkheidsprincipes in code waar rekening mee gehouden moet worden. Dit kan uiteindelijk, wanneer dit goed uitgevoerd is, gecontroleerd worden aan de hand van toegankelijkheidstesten en als er nog iets mist kan dit in een iteratie nog aangepast worden.</p><h3>Wat heb ik uit deze presentatie gehaald?</h3><p>Ik ben zelf nog niet echt op het advanced niveau van Fenna, dus de dingen die ze uitlegden kwamen me wel bekend voor, maar ik zou er zelf nog niet mee kunnen werken. Wel vond ik het interessant om te zien hoe leerlingen die op CMD of een frontend opleiding hebben gezeten veel aandacht besteden aan toegankelijkheid, waarbij veel mensen in het daadwerkelijke werkveld niet eens echt weten wat toegankelijkheid inhoudt. Ik ben wel voor inclusie, dus ik vind het goed dat er nu steeds meer aandacht aan wordt besteed.</p>"
      },
      {   
        "id": "2",
        "title": "Ischa Gast",
        "color": "#e74c3c",
        "emoji": "🔥",
        "short-description": "",
        "date": "",
        "description": "\n<p>Fenna de Wilde is een creative content developer en ze is nu al twee jaar werkzaam bij Bakken & Baeck. Hiervoor had je bij Build and Amsterdam gewerkt en dat was meer e-commerce. In totaal is ze al 4.5 jaar werkzaam in de wereld van frontend & design.Tijdens de we-love-web liet ze meerdere sites zien waar zij aan had gewerkt. Er was zelfs een site bij die genomineerd was als website van het jaar.Ze had recentelijk ook aan een crypto website gewerkt waarbij ze de branding van crypto zelf wilde veranderen. De website heet Phantom en zij wilden de site vriendelijker eruit laten zien. Zwart kan namelijk mensen afschrikken die niks begrijpen van cryptocurrency.In het bedrijfsleven weten vrij weinig mensen af van toegankelijkheid. Dit moet eigenlijk wel zo zijn. Als een website niet voor iedereen toegankelijk is, dan heb je er niks aan. Een website gaat vooral over bruikbaarheid en gaat om de gebruiker.</p><h3>Toegankelijkheidsrichtlijnen</h3><ul><li>Focus state voor keyboard gebruikers: Niet alle gebruikers bedienen een interface met een muis. Je kunt dan een focus state toevoegen door een `:focus-visible` te gebruiken.</li><li>Focus state voor keyboard gebruikers: Niet alle gebruikers bedienen een interface met een muis. Je kunt dan een focus state toevoegen door een `:focus-visible` te gebruiken.</li><li>`Aria controls:` Als een element het andere element controleert. Het element dat wordt gecontroleerd krijgt een id en het andere krijgt een aria-controls.</li><li>Zorg ervoor dat je carrousels ook toegankelijk zijn. Dit is vrij lastig als je bijvoorbeeld erdoorheen wil tabben. De carrousels moeten een role=“group” hebben.</li><li>Vermijd het gebruik van li elementen voor je slides. Als je slides verbergt, zal het aangekondigde aantal li-items niet overeenkomen met het werkelijke aantal slides.</li></ul><p>Er zijn dus veel verschillende toegankelijkheidsprincipes in code waar rekening mee gehouden moet worden. Dit kan uiteindelijk, wanneer dit goed uitgevoerd is, gecontroleerd worden aan de hand van toegankelijkheidstesten en als er nog iets mist kan dit in een iteratie nog aangepast worden.</p><h3>Wat heb ik uit deze presentatie gehaald?</h3><p>Ik ben zelf nog niet echt op het advanced niveau van Fenna, dus de dingen die ze uitlegden kwamen me wel bekend voor, maar ik zou er zelf nog niet mee kunnen werken. Wel vond ik het interessant om te zien hoe leerlingen die op CMD of een frontend opleiding hebben gezeten veel aandacht besteden aan toegankelijkheid, waarbij veel mensen in het daadwerkelijke werkveld niet eens echt weten wat toegankelijkheid inhoudt. Ik ben wel voor inclusie, dus ik vind het goed dat er nu steeds meer aandacht aan wordt besteed.</p>\n"
      },
      {   
        "id": "3",
        "title": "Julia Miocene",
        "color": "#8e44ad",
        "emoji": "🌸",
        "short-description": "",
        "date": "",
        "description": ""
      },
      {   
        "id": "4",
        "title": "Simon Riisnæs Dagfinrud",
        "color": "#2ecc71",
        "emoji": "🔋",
        "short-description": "",
        "date": "",
        "description": ""
      },
      {   
        "id": "5",
        "title": "Tim borst",
        "color": "#2ecc71",
        "emoji": "🔋",
        "short-description": "",
        "date": "",
        "description": ""
      },
      {
        "id": "6",
        "title": "Yolijn van der Kolk",
        "color": "#2ecc71",
        "emoji": "🔋",
        "short-description": "",
        "date": "",
        "description": ""
      },
      {
        "id": "7",
        "title": "Justus",
        "color": "#2ecc71",
        "emoji": "🔋",
        "short-description": "",
        "date": "",
        "description": ""
    }
]}

app.get('/', (request, respond) => {
    respond.render('index', { blogData });
  });