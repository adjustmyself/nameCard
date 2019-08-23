console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const location_p = document.querySelector('#location-p')
const summary_p = document.querySelector('#summary-p')
const temperature_p = document.querySelector('#temperature-p')
const rainrate_p = document.querySelector('#rainrate-p')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    // setup the default content of paragraphs
    location_p.textContent = 'Loading...'
    summary_p.textContent = ''
    temperature_p.textContent = ''
    rainrate_p.textContent = ''

    fetch('/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                location_p.textContent = data.error
            } else {
                location_p.textContent = 'Location: '+ data.location
                summary_p.textContent = 'Summary: '+ data.summary
                temperature_p.textContent = 'Currently: '+ data.temperature +' outsite.'
                rainrate_p.textContent = 'Rain rate: '+data.rainrate
            }
        })
    })
})