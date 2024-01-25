const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
];

/*Henter ut overskriften til navbar*/ 
document.getElementById("1").innerHTML = resources[0].category;
document.getElementById("2").innerHTML = resources[1].category;
document.getElementById("3").innerHTML = resources[2].category;
document.getElementById("4").innerHTML = resources[3].category;
document.getElementById("5").innerHTML = resources[4].category;

//Sjekker at den finner arrayet!
console.log(resources)


//Koden er generert av BlackBox.ai, https://www.blackbox.ai/chat/expert-javascript, delen nedenfor er stort sett generert med hjelp av ai og inneholder mindre endringer.
/*Chaten er linket her, fant ikke ut hvordan den skulle løses og fant ikke nok info om dette på nettet så måtte få hjelp av ai...
(blackbox.ai, 2024)   https://www.blackbox.ai/share/c9d8b912-24e0-49de-ac8d-a5f0d6d73181
*/
const buttons = document.querySelectorAll('nav button');
const resourceElements = document.querySelectorAll('.content');

buttons.forEach((button, category) => {
  button.dataset.category = category;
  button.addEventListener('click', () => ShowAllInfoResources(button.dataset.category));
});

function ShowAllInfoResources(category) {
  resourceElements.forEach(element => {
    element.innerHTML = '';
  });

  const selectedResource = resources[category];
  const resourceElement = resourceElements[0];
  resourceElement.innerHTML = `
    <h2>${selectedResource.category}</h2>
    <p>${selectedResource.text}</p>
    <ul></ul>
    <ul>
      ${selectedResource.sources.map(source => `
        <li><a href="${source.url}" target="_blank">${source.title}</a></li>
      `).join('')}
    </ul>
  `;
}