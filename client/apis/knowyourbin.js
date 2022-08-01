import request from 'superagent'

// ADD NEW BIN
export function writeBin(data) {
  return request
    .post('/api/v1/bin')
    .send(data)
    .then((res) => {
      // The functions below are written on lines 39-50
      // validateNoSnakeCase(res.body)
      // validatePostResponse('POST', '/api/v1/bin', res.body)
      return res.body
    })
    .catch(errorHandler('POST', '/api/v1/bin'))
  /* Expect data to be form-submitted object:
  TODO: Get rules, notes, location, and image URL working
  before figuring out the difficult datatypes
  ! (generate bin id; materials array, collectionday) 
  ~ Hint: maybe split into array? */
}

// READ THAT BIN
// actions/forthings passes material id; actions/forbins passes bin id
export function getBin(id) {
  console.log('getBin apiFunc receives ', id)
  return request
    .get(`/v1/bin/${id}`)
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.error('This error smells of ' + err)
    })
}

export function getBins() {
  return request
    .get(`/api/v1/bin/all`)
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.error('This error smells of ' + err)
    })
}

// TODO: UPDATE BIN

// function validateNoSnakeCase(response) {
//   const hasSnakeCase = Object.keys(response).some((key) => key.includes('_'))
//   if (hasSnakeCase) {
//     throw Error('Error: you should not be returning properties in snake_case')
//   }
// }

// function validatePostResponse(method, route, post) {
//   if (!post) {
//     throw Error(`Error: ${method} ${route} should return a blog post`)
//   }
// }

function errorHandler(method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(
        `Error: You need to implement an API route for ${method} ${route}`
      )
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}
