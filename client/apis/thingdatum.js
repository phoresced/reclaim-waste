import request from 'superagent'

// using the join in db.js getBin(thatBin)
export function whichBin(id) {
  return request
    .get(`/v1/bin/${id}`)
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.error('This error smells of ' + err)
    })
}

export function updateThing(material) {
  return request
    .patch(`/v1/ref/${material}`)
    .send(material)
    .then((res) => {
      // validateResponse('PATCH', 'v1/posts/:id', res.body)
      return res.body
    })
    .catch((err) => {
      console.error(
        'While updating your general enjoyment of life, we ran into this ' + err
      )
    })
}
