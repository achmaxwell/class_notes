// API Application Programming Interface
/* an interface between them without the use of less abstract language
    - two types of API's
        - browser API
          built into the browser and able to expose data from browser and environment, ex: DOM API
          allowing us to style page, make popup windows appear, etc.
        - third party API's
          requires retrieval of their code from the web, such as GoogleMaps API
            - object based - have containers for the data (JSON format)  
 */

// HTTP request
/* defined set of request methods which indicate an action to be preformed
    REST - representational state transfer
    architectural style for stateless of communication
    - GET retrieves resources by id
    - POST creates a new resource
    - PUT updates a resource using an id
    - DELETE removes specific resource using an id
all of these reach an Endpoint
    - url that a client app uses to communicate with the server
 */

    let cardImg = document.querySelector('body > div > div > div.card-img > img')
    let name = document.querySelector('.name');
    let ability = document.querySelector('.ability');
    let weight = document.querySelector('.weight');
    let generateBtn = document.querySelector('.submit-btn')

    generateBtn.addEventListener('click', (e) => {
        e.preventDefault()

        let id = document.querySelector('.search-input').value;

        // fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) // GET request
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         console.log(data.name)

        //         name.innerText = data.name;
        //         cardImg.src = data.sprites.front_shiny;
        //         ability.innerText = data.abilities[0].ability.name;
        //         weight.innerText = data.weight;
        //     })

        async function getPokemon() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json();
            //console.log(data)

            name.innerText = data.name;
            cardImg.src = data.sprites.front_shiny;
            ability.innerText = data.abilities[0].ability.name;
            weight.innerText = data.weight;
        }

        getPokemon();
    })