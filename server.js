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
        "slug": "Simon-Riisnæs-Dagfinrud",
        "title": "Simon Riisnæs Dagfinrud",
        "presentor": "Simon Riisnæs Dagfinrud",
        "type": "presentatie",
        "short-description": "",
        "date": "16-02-2024",
        "semester":"2",
        "description": "",
        "link-Github":""
    },
      {
        "id": "2",
        "slug": "Digital-gardening",
        "title": "Digital gardening",
        "presentor": "Justus Sturkenboom",
        "type": "presentatie",
        "short-description": "Justus heeft ons meer vertelt over `digital gardening`, waarbij hij stapsgewijs laat weten hoe jij je eigen plekje claimt op het web.",
        "date": "15-03-2024",
        "semester":"2",
        "description": "<p>Justus heeft ons meer vertelt over `digital gardening`, waarbij hij stapsgewijs laat weten hoe jij je eigen plekje claimt op het web.</p><h2>Wat is Digital gardening?</h2><ul><li>Een authentieke manier van een website zonder het geprojecteerde beeld van andere websites</li><li>Freestylen</li></ul><h3>1. Iedere keer dat je web doorloopt ondek je nieuwe dingen</h3><ul><li>Typografie</li><li>Tijdlijn</li><li>Zorg dat concepten samenhangen</li></ul><h3>2. Continue groei</h3><ul><li>Het. is. nooit. af.</li></ul><h3>3. Imperfectie & publiek leren</h3><ul><li>Het hoeft niet perfect te zijn je mag de ontwikkeling laten zien.</li></ul><h3>4. Erg persoonlijk en origineel</h3><ul><li>Organiseer een tuin op jou ideeen</li></ul><h3>5. Samengaan van grote diverse inhoud</h3><ul><Li>claim jou plekje op het web</Li></ul><h3>6. onafhankelijheid</h3><ul><li>Wees de baas van je eigen data</li></ul><h3>Indieweb</h3><ul><li>oope -> Mijn link en het blijft mijn data</li><li>Pesos -> Data op eigen platform, word gedeeld op socials en platformen hebben machtiging op mijn data</li></ul>",
        "link-Github":""
    },
      {   
        "id": "3",
        "slug": "Gwen-Bogaert",
        "title": "Gwen Bogaert",
        "presentor": "Gwen Bogaert",
        "type": "presentatie",
        "short_description": "Gwen Boagaert vertelt wat over haar eigen ervaringen in het werkveld en deelt werk van haarzelf",
        "date": "26-04-2024",
        "semester":"2",
        "description": "<img src='https://camo.githubusercontent.com/513bb4504c27a3cc8119f262976e212edd7b624f97e47bf0272b855e6c2ba474/68747470733a2f2f7777772e6461746f636d732d6173736574732e636f6d2f34393134392f313637313031333830382d67726f75703735372e6a70673f666d3d77656270'><p>Gwen Bogaert werkt bij <a href='https://antinomy.studio/'>Antinomy Studio</a>, waarbij ze wat van haar werk heeft gepresenteert. Hierbij heeft ze wat van haar eigen ervaring en werkwijze vertelt.</p><ul><li>tech stack: Terugvallen io verschillende applicaties</li><li>Porno iewl</li><li>Ze heeft door verschillende projecten nieuwe ervaringen gekregen</li><li>Daarnaast leert ze op nieuwe manieren samenwerken met anderen</li><li>Je leert elke keer iets nieuws</li></ul><img src='https://private-user-images.githubusercontent.com/144009778/337978230-a397aa62-1347-4630-899e-f38b86068c1e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTc5NDEyMzMsIm5iZiI6MTcxNzk0MDkzMywicGF0aCI6Ii8xNDQwMDk3NzgvMzM3OTc4MjMwLWEzOTdhYTYyLTEzNDctNDYzMC04OTllLWYzOGI4NjA2OGMxZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYwOVQxMzQ4NTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01YWFiMTlkOWVmYmI0ODBkMzhiZTI5MjEwNGQwY2M3ZDIzNzc2OWIyNDI4NjgxMmE0NDcwNjE0ZmNlODA5NTA0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.tfR8gnkBnJwNoiHfkRZ9MkWNQVNF0_m06ig20KAeVEI'><h2>Preformance</h2><p>Zorg dat de preformance altijd op gemiddelde wachttijd blijft, de reactie van mensen zullen niet veranderen. Pas je dus aan op de verwachtingen van anderen.</p>",
        "link-Github":"https://github.com/SamaraFellaDina/we-love-web-blog/wiki/3-%E2%80%90-Gwen-Bogaert"
    },
      {   
        "id": "4",
        "slug": "Julia-Miocene",
        "title": "Julia Miocene",
        "presentor": "Julia Miocene",
        "type": "presentatie",
        "short-description": "",
        "date": "",
        "semester":"2",
        "description": "",
        "link-Github":""
    },
      {   
        "id": "5",
        "slug": "Minisymposium-over-toegankelijkheid",
        "title": "Minisymposium over toegankelijkheid",
        "presentor": "Docenten van de HVA",
        "type": "symposium",
        "short-description": "We hadden een college in de officiele collegezaal van de HVA. Daar hebben wij verschillende lichtingen gehad over toegankelijkheid. Er waren ook tolkers aanwezig.",
        "date": "",
        "semester":"1",
        "description": "<p>We hadden een college in de officiele collegezaal van de HVA. Daar hebben wij verschillende lichtingen gehad over toegankelijkheid. Er waren ook tolkers aanwezig.</p><p>Een van de presentatoren was doof, dus zij ging in gebaren taal (met de tolkers die het vertaalde) wat voor hindernissen er zijn wanneer je doof door het leven gaat. Zo zijn er dingen besproken over de belfunctie, over contact met mensen en het gebruik van het web. Verder liet ze zien dat veel functies die voor de meeste gebruikers normaal zijn, voor haar erg lastig zijn. We hebben verder meer verdiept in gebarentaal, zo heb je verschillende talen en ook dialecten. Je hebt dus gewoon limburgse gebarentaal (it blew my mind). Het was een goede introductie over het onderwerp accesibility en het heeft mij gemotiveerd om verder te kijken en in andermans schoenen te gaan staan bij het gebruik van websites, maar ook andere dingen.</p>",
        "link-Github":"https://github.com/SamaraFellaDina/we-love-web-notes/wiki/1.-Minisymposium-over-toegankelijkheid"
    },
      {
        "id": "6",
        "slug": "Tim-Borst",
        "title": "Tim Borst",
        "presentor": "Tim Borst",
        "type": "presentatie",
        "short-description": "Tim heeft zijn eigen geschiedenis verteld van toen hij klaar was met zijn CMD studie.",
        "date": "",
        "semester":"1",
        "description": "<h3>Wie is Tim Borst?</h3><p>Tim heeft zijn eigen geschiedenis verteld van toen hij klaar was met zijn CMD studie, tot en met nu. Hij is in 2006/2007 geslaagd en heeft zijn studie Communicatie Multimedia Design gehaald. Hij wou daarna erg graag het frontend vlak op, waarbij hij zijn eenmanszaak is gestart. Samen met een paar vrienden heeft hij een studio kunnen huren (die overgins erg goedkoop was). Hij heeft in het verhaal verteld dat hij eigenlijk altijd 'ja' zegt tegen een opdracht, waardoor hij ook veel klanten had. Hij en zijn vrienden hielpen elkaar met een opdracht en zagen elkaar expertises in. Uiteindelijk zijn ze samen een agency gestart wat uiteindelijk uitgroeide tot een middelgroot bedrijf. Ze hielpen bedrijven als Audi en meer. Hij heeft erg veel geleerd van de tijd. Nogmaals, hij en zijn collega's zeiden alleen maar ja, ja en ja. Hierdoor heeft hij ook dingen geleerd waar hij eerder geen verstand van had. Maar hij merkte daardoor ook dat hij steeds minder werk deed waarvan die hield. Hierdoor is hij in 2019 wegegaan bij het bedrijf wat die heeft opgericht met zijn vrienden en is hij weer voor zichzelf begonnen.</p><p>Tijdens deze reis is hij veel conflicten tegengekomen. Hij heeft geleerd ALTIJD een offerte te sturen naar een klant. En om eens een oogje te houden in de finacien. Hij vond het werk zo leuk dat hij soms de onderdelen die erbij kwamen kijken niet voor ogen had. Toch is hij erg blij dat die hier is gekomen en dit mooie werk heeft kunnen maken.</p><h4>Wat heeft hij besproken tijdens zijn lichting?</h4><p>Hij heeft erg veel verteld over zijn eigen leven. Over hoe hij is begonnen met van zijn studie, zijn werk maken. Hij heeft ook veel tips gegeven over hoe je voor jezelf begint. Hij heeft mij verder ook zien over dat het belangrijk is om ambitie te hebben voor je werk en ook een uitdaging durft aan te gaan. Hij heeft ook veel van zijn werk laten zien en verteld over met welke bedrijven hij heeft gewerkt.</p><h4>Wat heb je geleerd van zijn lichting?</h4><p>Hij heeft enorm veel werk laten zien van zichzelf, wat mij enorm veel motivatie gaf. Hij heeft ons ook veel verteld over dat het goed is om veel te leren tijdens het werk en het samenwerken met zijn collega's/vrienden. Ook vertelde hij dat hij soms meer visie moest hebben voor andere dingen als bijvoorbeeld de finacien, dat was ook erg goed om te weten. Door deze lichting kreeg ik een betere visie over hoe een toekomst na deze studie me kan bieden, naast de expertises die ik al beheers heb ik goed voor ogen hoe mijn eigen pad kan verlopen</p>",
        "link-Github":"https://github.com/SamaraFellaDina/we-love-web-notes/wiki/2.-Tim-Borst"
    },
      {   
        "id": "7",
        "slug": "Ischa-Gast",
        "title": "Ischa Gast",
        "presentor": "Ischa Gast",
        "type": "presentatie",
        "short_description": "Ischa gast is een Frontend developer die werkt voor Schiphol. In deze presentatie verteld en verdiept hij in het onderdeel accessibility",
        "date": "",
        "semester":"1",
        "description": "<h3>Wie is Ischa Gast?</h3><p>Ischa gast is een Frontend developer die werkt voor Schiphol. In deze presentatie verteld en verdiept hij in het onderdeel accessibility</p><h4>Waarover vertelde hij?</h4><p>Hij verteld in zijn presentatie veel over accessibility. Zo verteld hij ook dat veel verschillende websites (maar ook andere dingens als de tram) Niet erg toegankelijk zijn. Er word niet veel rekening gehouden met andermans beperkingen en zo gaat hij dieper in op hoe dat voor een ander kan zijn. Hij laat bijvoorbeeld zien dat de Hema eigenlijk helemaal niet een goede screenreader heeft en alleen maar overal het woord link heeft staan. Zo kan iemand niet goed een screenreader gebruiken, omdat ze gewoon niet kunnen weten waarover het gaat. Hij gaat ook dieper in over dat eigenlijk iedereen een bepering heeft.</p><p>Uiteindelijk ging hij dieper in op toegankelijkheid op het web. Hij vertelde de volgende dingen:</p><ul><li>Wanneer je goede HTML code schrijft, wordt je site al gauw makkerlijker toegankelijk. Schrijf dut goede HTML!!!</li><li>Zorg dat je alle elementen goed benoemd, dus niet zoals HEMA alles 'link' noemen. (niet echt HEMA hoor 😡)</li><li>uiteindelijk laat hij zien dat ook de site van Bunq geen goed contrast heeft, dus dat is ook erg belangrijk voor een toegankelijke website. Zo worden kleuren als blauw, groen en oranje gecombineerd met wit, terwijl dit eigenlijk niet goed samen werkt.</li><li>Werk ook samen met de mensen waarvoor je dit doet. Het is dus goed om samen te werken met mensen met een beperking.</li><li>Zorg dat belangrijke informatie gemakkelijk te verkrijgen is voor iedereen. Denk aan dingen als je vliegtuig die vertraging heeft, is best onhandig als je anders 8 uur voor niks staat de wachten omdat een website niet duidelijk aangeeft.</li><li>Hij liet uiteindelijk websites zien die geen heading hadden, GEBRUIK GEWOON EEN GOEDE HEADING.</li></ul>",
        "link-Github": "https://github.com/SamaraFellaDina/we-love-web-notes/wiki/3.-Ischa-Gast"
      },
      {   
        "id": "8",
        "slug": " Lettertypes-en-andere-typografie",
        "title": " Lettertypes en andere typografie",
        "presentor": "Sanne",
        "type": "CSS challenge",
        "short_description": "Over het gebruiken van fonts op het web",
        "date": "",
        "semester":"1",
        "description": "<p>Kijk naar de volgende sites:</p><ul><li><a href='www.Ccs-tricks.com'>www.Ccs-tricks.com</a></li><li><a href ='www.Mdn.docs.com'>www.Mdn.docs.com</a></li><li><a href='https://www.fontsquirrel.com/'>Font-squirrel.com</a></li></ul><h3>Typografie</h3><p>Er zijn verschillende manieren om een font te gebruiken voor een website.</p><h4>Een font gebruiken die standaard in het systeem staat.</h4><ul><li>Denk aan fonts als Arial, Helvetica en zo verder. Het is alleen niet gegarandeerd of deze op alle computers staat, dus het is altijd handig om meerdere fall-back fonts te gebruiken</li><li>Wat is een Fall-Back? Het staat eigenlijk voor wanneer, voor welke reden dan ook jou systeem een font kan vinden. Dat die kijkt naar de eerst volgende optie.</li></ul><h4>Font van een server halen</h4><ul><li>Je kan een font halen van een site als <a href='https://newbird.com/google-fonts/'>googlefonts.com</a> of <a href='http://adobefonts.com/'>adobefonts.com</a>. Jou site moet deze data dan als volgende ophalen om het volgens in de gerefereerde code in te voegen.</li><li>Importeren. Je kan simpelweg door naar de informatie te gaan van een font de bijbehorende code vinden die je in je eigen code kan plakken, zo wordt het font van de externe server geimporteerd naar je eigen website. Let er wel op dat je deze code standaard bovenaan de code plaats, dat is dan het eerste wat wordt geladen</li></ul><h4>Welke type fonts importeer je?</h4><ul><li>De standaard type fonts die worden geimporteerd zijn de bold & de regular en daarvan ook de italic varianten.<ul><li>Regular heeft een font weight van 400</li><li>Bold heeft een font weight van 700</li></ul></li><li>Je hebt dus 4 verschillende fonts nodig om te importeren.</li><li>Daarnaast is het handig om de font-family in de body te plaatsen.</li></ul><h4>Fonts lokaal laten importeren</h4><ul><li>Vervolgens kan je ook een font laten importeren van een interne server. Wat betekend dat? Het houdt eigenlijk in dat je een font importeerd die in je eigen mappenstructuur staat. Denk dan aan fonts als New Hero of Roboto.<ul><li>Om dit font te kunnen importeren, maak je gebruik van een @font-face. Hierdoor wordt het font geimplenmenteerd in je eigen code.</li></ul><img src='https://github.com/SamaraFellaDina/we-love-web-notes/assets/144009778/03ce733f-dc1e-49d0-b330-49ed04e7b316'></li><li>Dit is ook wellicht de beste manier van het gebruiken van fonts.</li><li>Wanneer je het font importeerd, zorg dat hij bovenaan de code staat, dit is dan het eerste wat word geimporteerd van alles.</li><li>Het beste font-bestand wat je kan gebruiken is een woff(2) bestand, zorg er wel voor dat alle varierende bestanden hiervan ook in de code staan. Denk aan bestanden als WOFF, WOFF2, TFF en zo door. Dit is handig, omdat sommige computers verouderd zijn of verouderede browsers gebruiken, waardoor de kans bestaat dat het font misschien totaal niet laadt.</li><li>@font-face kan je meerdere links geven, zodat als het systeem het ene bestand niet kan laden, er meerdere opties zijn. Dit heeft te maken met de browserversie van de gebruiker.</li><img src='https://github.com/SamaraFellaDina/we-love-web-notes/assets/144009778/5618c7bc-c491-41e1-b87f-27357a881851'></ul><h5>Wat betekenen deze bestanden?</h5><h6>Woff & Woff2</h6><p>Is een gecomprimeerde versie van OTF (OpenType) & TTF (TrueType). Dit bestand heeft ook licentie info in het font zelf zitten. Denk aan informatie over het bedrijf en de maker van het font. Dit is wellicht ook een van de meest voordelige bestanden die je kan gebruiken voor je website. Niet alleen bevat het nuttige info in het font, het laadt dus ook erg snel.</p><h6>TTF</h6><p>Ookwel bekend als TrueType font.</p><h3>overige tips</h3><ul><li>Je kan verder ook van andere sites hun fonts downloaden. Hou er rekening mee dat deze fonts ook een licentie hebben en daardoor niet zomaar voor alles kan worden gebruikt.</li><li>Er bestaat ook een site waarbij je de verschillende bestanden kan downloaden van een font. Dus wanneer je alleen het TFF bestand hebt van het font, kan je via deze site ook de overige bestanden verkrijgen. Deze site is font-squirrel.com</li><li>Er zijn ook variabele fonts, waarbij je de dikte, grootte en andere dingen aan het font kan aanpassen.</li><li><a href='https://css-tricks.com/snippets/css/using-font-face-in-css/'>https://css-tricks.com/snippets/css/using-font-face-in-css/</a></li></ul>",
        "link-Github": "https://github.com/SamaraFellaDina/we-love-web-notes/wiki/4.-CSS-challenge-5-%E2%80%90-Lettertypes-en-andere-typografie"
     }, 
     {   
        "id": "9",
        "slug": "Yolijn-van-Der-kolk",
        "title": "Yolijn van Der kolk",
        "presentor": "Yolijn van Der kolk",
        "type": "presentatie",
        "short_description": "Yolijn van Der kolk vertelt meer over design systems",
        "date": "",
        "semester":"1",
        "description": "<h3>Design systems</h3><ul><li>Design kits</li><li>Kijk bijvoorbeeld naar de styleguide van de bibliotheek.</li><li>Gebruikersonderzoek</li><li>samonalearning.design</li><li>lion-web-netify.app</li><li>NLdesignsystems.nl</li><li>google & adobe design systems</li><li>Er is een slack community die zich meer verdiept in NL design system</li></ul>",
        "link-Github": "https://github.com/SamaraFellaDina/we-love-web-notes/wiki/5.-Lichting-met-Yolijn-van-Der-kolk"
    },     
    {   
        "id": "10",
        "slug": "transitions-en-transforms",
        "title": "transitions & transforms",
        "presentor": "transitions & transforms",
        "type": "CSS challenge",
        "short_description": "Alles over Transitions en transform in css",
        "date": "",
        "semester":"1",
        "description": "<h3>Transitions</h3><p>Wat houdt transitions in? Dit zijn de properties die ervoor zorgen dat je een element kan laten in een `:hover` element. Het heet dan ook transities, omdat de vorm wijzig door bepaalde acties of triggers.</p><h4>De basics</h4><p>Voor Transitions heb je verschillende waarden die je er op kan gebruiken. Deze kunnen ook gedefineerd worden op de `x`, `y` en zelfs de `z` as. Je hebt de volgende 3 waardes:</p><ul><li>`Rotate`: laat het element natuurlijk draaien</li><li>`Translate`: Kan de plaats van een element defineren</li><li>`Scale`: Bepaalt de grootte van het element</li></ul><p>Vervolgens kan je een `:hover` animatie ook defineren op duration, delay en zelfs timing-function. Wat houdt dat in</p><ul><li>`transition-duration`: Bepaald hoe lang een animatie duurt wanneer je eroverheen hovert.</li><li>`transition-delay`: Bepaald hoelang het duurt totdat de animatie afspeeld.</li><li>`transition-timing-function`: Bepaald de flow van de animatie. Denk aan een ease, ease-in of een ease-out animatie bijvoorbeeld. Dit zijn animatieflows die ook in programma's als AfterEffect en PremierePro worden gebruikt. Verder heb je ook flows als linear, waarbij de animatie in een gelijk tempo de animatie laat verlopen. </li></ul><p>Je kan het `transition` element ook in een short-hand term bepalen.</p><img src='https://github.com/SamaraFellaDina/we-love-web-notes/assets/144009778/24ca9504-f1cd-45a5-a63b-341cb090df94'><p>Met de shorthand methode gaat de eerste waarde over de `transiton-duration`, bij de tweede waarde over `transition-delay` en de laatste over de `transition-timing-function`.</p><h4>Wat valt nog meer op?</h4><p>Je kan ook een custom timing-function geven aan een element. Je kan hem dus aanpassen, maar hoe doe je dat? Er werd een site laten zien genaamd <a href='https://matthewlein.com/tools/ceaser'>Ceaser</a>, waarbij gemakkelijk de code werd bepaald voor een transitie. Zo kan je uiteindelijk een custom transitie geven aan een animatie.</p>",
        "link-Github": "https://github.com/SamaraFellaDina/we-love-web-notes/wiki/6.-Css-challenge-transitions-&-transforms"
      },
      {   
        "id": "11",
        "slug": "Fenna-de-Wilde",
        "title": "Fenna de Wilde",
        "presentor": "Fenna de Wilde",
        "type": "presentatie",
        "short_description": "Fenna de Wilde is een creative content developer en ze is nu al twee jaar werkzaam bij Bakken & Baeck.",
        "date": "",
        "semester":"1",
        "description": "<h3>Samenvatting presentatie</h3><p>Fenna de Wilde is een creative content developer en ze is nu al twee jaar werkzaam bij Bakken & Baeck. Hiervoor had je bij Build and Amsterdam gewerkt en dat was meer e-commerce. In totaal is ze al 4.5 jaar werkzaam in de wereld van frontend & design.</p><p>Tijdens de we-love-web liet ze meerdere sites zien waar zij aan had gewerkt. Er was zelfs een site bij die genomineerd was als website van het jaar.</p><p>Ze had recentelijk ook aan een crypto website gewerkt waarbij ze de branding van crypto zelf wilde veranderen. De website heet Phantom en zij wilden de site vriendelijker eruit laten zien. Zwart kan namelijk mensen afschrikken die niks begrijpen van cryptocurrency.</p><p>In het bedrijfsleven weten vrij weinig mensen af van toegankelijkheid. Dit moet eigenlijk wel zo zijn. Als een website niet voor iedereen toegankelijk is, dan heb je er niks aan. Een website gaat vooral over bruikbaarheid en gaat om de gebruiker.</p><ul><li>Fenna de Wilde is een creative content developer en ze is nu al twee jaar werkzaam bij Bakken & Baeck.<ul><li>Hiervoor had je bij Build and Amsterdam gewerkt en dat was meer e-commerce. In totaal is ze al 4.5 jaar werkzaam in de wereld van frontend & design.</li></ul></li><li>Tijdens de we-love-web liet ze meerdere sites zien waar zij aan had gewerkt. Er was zelfs een site bij die genomineerd was als website van het jaar.</li><li>Ze had recentelijk ook aan een crypto website gewerkt waarbij ze de branding van crypto zelf wilde veranderen.<ul><li>De website heet Phantom en zij wilden de site vriendelijker eruit laten zien. Zwart kan namelijk mensen afschrikken die niks begrijpen van cryptocurrency.De website heet Phantom en zij wilden de site vriendelijker eruit laten zien. Zwart kan namelijk mensen afschrikken die niks begrijpen van cryptocurrency.</li></ul></li><li>In het bedrijfsleven weten vrij weinig mensen af van toegankelijkheid.<ul><li>Dit moet eigenlijk zo: 'Als een website niet voor iedereen toegankelijk is, dan heb je er niks aan. Een website gaat vooral over bruikbaarheid en gaat om de gebruiker.'</li></ul></li><li>Toegankelijkheidsrichtlijnen<ul><li>Focus state voor keyboard gebruikers: Niet alle gebruikers bedienen een interface met een muis. Je kunt dan een focus state toevoegen door een :focus-visible te gebruiken.</li><li>Aria attributes: Ze geven aanvullende informatie aan hulptechnologieen over het gedrag en de structuur van je code.</li><li>Aria controls: Als een element het andere element controleert. Het element dat wordt gecontroleerd krijgt een id en het andere krijgt een aria-controls.</li></ul></li><li>Zorg ervoor dat je carrousels ook toegankelijk zijn. Dit is vrij lastig als je bijvoorbeeld erdoorheen wil tabben. De carrousels moeten een role=“group” hebben.</li><li>Vermijd het gebruik van li elementen voor je slides. Als je slides verbergt, zal het aangekondigde aantal li-items niet overeenkomen met het werkelijke aantal slides.</li><li>Er zijn dus veel verschillende toegankelijkheidsprincipes in code waar rekening mee gehouden moet worden. Dit kan uiteindelijk, wanneer dit goed uitgevoerd is, gecontroleerd worden aan de hand van toegankelijkheidstesten en als er nog iets mist kan dit in een iteratie nog aangepast worden.</li></ul><h4>Toegankelijkheidsrichtlijnen</h4><ul><li>Focus state voor keyboard gebruikers: Niet alle gebruikers bedienen een interface met een muis. Je kunt dan een focus state toevoegen door een :focus-visible te gebruiken.</li><li>Aria attributes: Ze geven aanvullende informatie aan hulptechnologieen over het gedrag en de structuur van je code.</li><li>Aria controls: Als een element het andere element controleert. Het element dat wordt gecontroleerd krijgt een id en het andere krijgt een aria-controls.</li><li>Zorg ervoor dat je carrousels ook toegankelijk zijn. Dit is vrij lastig als je bijvoorbeeld erdoorheen wil tabben. De carrousels moeten een role=“group” hebben.</li><li>Vermijd het gebruik van li elementen voor je slides. Als je slides verbergt, zal het aangekondigde aantal li-items niet overeenkomen met het werkelijke aantal slides.</li></ul><p>Er zijn dus veel verschillende toegankelijkheidsprincipes in code waar rekening mee gehouden moet worden. Dit kan uiteindelijk, wanneer dit goed uitgevoerd is, gecontroleerd worden aan de hand van toegankelijkheidstesten en als er nog iets mist kan dit in een iteratie nog aangepast worden.</p><h3>Wat heb ik uit deze presentatie gehaald?</h3><p>Ik ben zelf nog niet echt op het advanced niveau van Fenna, dus de dingen die ze uitlegden kwamen me wel bekend voor, maar ik zou er zelf nog niet mee kunnen werken. Wel vond ik het interessant om te zien hoe leerlingen die op CMD of een frontend opleiding hebben gezeten veel aandacht besteden aan toegankelijkheid, waarbij veel mensen in het daadwerkelijke werkveld niet eens echt weten wat toegankelijkheid inhoudt. Ik ben wel voor inclusie, dus ik vind het goed dat er nu steeds meer aandacht aan wordt besteed.</p>",
        "link-Github": "https://github.com/SamaraFellaDina/we-love-web-notes/wiki/8.-Lichting-met-Fenna-de-Wilde"
      },
      {   
        "id": "12",
        "slug": "Julia-Miocene",
        "title": "Julia Miocene",
        "presentor": "Julia Miocene",
        "type": "presentatie",
        "short-description": "Julia Miocene is een product designer die specialiseert is in het maken van geanimeerde code en speelt hier veel mee.",
        "date": "",
        "semester":"1",
        "description": "<img src='https://private-user-images.githubusercontent.com/144009778/332064856-958058d6-c867-46d8-abbf-1c84b4f53dd9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTc5NDQzMzMsIm5iZiI6MTcxNzk0NDAzMywicGF0aCI6Ii8xNDQwMDk3NzgvMzMyMDY0ODU2LTk1ODA1OGQ2LWM4NjctNDZkOC1hYmJmLTFjODRiNGY1M2RkOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYwOVQxNDQwMzNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03MDhmNDhkMjFkNjMyYWM4MzYzN2FkZmYxZjI5YTJmNjkwNjU5ZGVmOGE2ZDQ4MTk4Nzc4NjhiNWE5NjIwN2Y2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.lxzNrM-SoiNYBI-jIYZ8VdnPyobnBynrmwqZaZgEMbM'><p><a href='https://miocene.io/'>Julia Miocene </a>is een product designer die specialiseert is in het maken van geanimeerde code en speelt hier veel mee. In haar presentatie laat ze een aantal voorbeelden zien waaraan ze heeft gewerkt. Mijn eerste impressie was dat ik het er zelf nogal gecompliceerd uit vond zien, aangezien ik veel met After Effects heb gewerkt wat heel erg anders werkt.</p><h3>Wie is Julia Miocene?</h3><p>Zij maakt veel boeiende css animaties voor verschillende bedrijven en haar doel bij het maken van deze animaties is om meer leven aan te brengen hieraan. Op <a href='https://codepen.io/miocene'>Codepen</a> vind je veel meer werk van haar waarmee zij experimenteert. Zoals het <a href='https://codepen.io/miocene/pen/PoRbQJM'>voorbeeld</a> hieronder.</p><img src='https://private-user-images.githubusercontent.com/144009778/332064599-2dfcd95f-c106-43bb-8bd4-379f7cbf4ebc.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTc5NDQzMzMsIm5iZiI6MTcxNzk0NDAzMywicGF0aCI6Ii8xNDQwMDk3NzgvMzMyMDY0NTk5LTJkZmNkOTVmLWMxMDYtNDNiYi04YmQ0LTM3OWY3Y2JmNGViYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYwOVQxNDQwMzNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hODAwNTFhNzljYzkyMWY0YjFhMWMyMGExNDgyZWYyMzNlOTY1M2RlMGIyYjhmMGRiZThkNWNjNDY4NWQ2MDNjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.pRBeU1BMKVKWcdBnruFAwopP6vqLeKDLAXKBfEkBg7g'><h3>Meer willen leren?</h3><p>Voor degenen die geïnteresseerd waren in het starten met CSS-animaties, raadde ze bronnen aan zoals Codepen.io/challenges, Cssbattle.dev, en 100daysCSS.com.</p>",
        "link-Github":"https://github.com/SamaraFellaDina/we-love-web-notes/wiki/9-%E2%80%90-Julia-Miocene"
    }
]}


app.get('/', (request, respond) => {
    respond.render('index.ejs', {blogData : blogData.data
    });
});

app.get('/:slug', (request, response) => {
    // Extract the slug from the request parameters
    const slug = request.params.slug;

    // Find the post with the matching slug in the blogData array
    const post = blogData.data.find(p => p.slug === slug);

    // Check if the post was found
    if (post) {
        // Render the 'article' view with the found post data
        response.render('article', { article: post });
    } else {
        // Send a 404 status and message if the post was not found
        response.status(404).send('Post not found');
    }
});