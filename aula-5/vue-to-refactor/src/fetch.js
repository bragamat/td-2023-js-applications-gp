const api = {
  fetch: async () => {
    const API_URL = 'https://swapi.dev/api/planets'
    const res = await fetch(API_URL, { method: 'GET' })
    const data = await res.json()

    return data
  }
}

export const fetchAPI = api.fetch

const globals = {
  globalAPI: api.fetch
}

export default globals
