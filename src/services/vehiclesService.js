import axios from 'axios'
export const vehiclesService = {
    getAll
}
const base_url = 'https://swapi.py4e.com/api/vehicles/'
let vehicles = []
async function getAll() {
    let data = await query()
    vehicles = data.data.results
    let loading = true
    while (data.data.next) {
        data = await query(data.data.next)
        vehicles = vehicles.concat(data.data.results)
        loading = !!data.data.next
        if (!loading) {
            return manipulateData()
        }
    }
}

async function query(url = base_url) {
    return await axios.get(url)
}


async function manipulateData() {
    for (let i = 0; i < vehicles.length; i++) {
        const v = vehicles[i]
        const pilotPromises = v.pilots.map(p => {
            return axios.get(p)
        })
        await Promise.all(pilotPromises).then(res => {
            v.sum = 0
            v.pilotNames = []
            v.planets = []
            res.map(async item => {
                const pilot = item.data
                const homeworldResult = await axios.get(pilot.homeworld)
                const hometown = homeworldResult.data
                v.pilotNames.push(pilot.name)
                v.planets.push({ name: hometown.name, population: hometown.population })
                v.sum = v.sum + (!!+hometown.population ? +hometown.population : 0)
                return v
            })
        })

    }
    vehicles.sort((a, b) => a.sum < b.sum ? 1 : -1)
    return vehicles
}