type DogJson = {
  message: string,
  status: string
}

const getDogImage = async () : Promise<DogJson> => {
  const url = 'https://dog.ceo/api/breeds/image/random'
  const res = await fetch(url, { method: 'get' })
  .then( response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error('error')
  })
  .catch( e => console.log(e.message))
  console.log(res)
  return res
}
