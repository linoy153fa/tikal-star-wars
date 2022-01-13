import axios from 'axios'
export const planetsService = {
    getAll
}
const base_url = 'https://swapi.py4e.com/api/planets/'
let planets = []
async function getAll() {
    let data = await query()
    planets = data.data.results
    while (data.data.next) {
        data = await query(data.data.next)
        planets = planets.concat(data.data.results)
    }
    console.log({ planets });
    return planets
}

async function query(url = base_url) {
    return await axios.get(url)
}


