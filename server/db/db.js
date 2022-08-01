const connection = require('./connection')

function getBins(db = connection) {
  return db('bins').select()
}

function getBin(thatBin, db = connection) {
  return (
    db('bins')
      // .join('things', 'bins.materials_id', 'things.id')
      .select()
      .where('bins.id', thatBin)
      .first()
  )
}

// call whichBin when reading the bin rules and to return bin details when searching a material
function whichBin(db = connection) {
  return db('things').join('bins', 'things.id', 'bins.materials_id')
}

function newBin(newBin, db = connection) {
  return db('bins').insert(newBin) /* id +1? */
}

module.exports = { getBins, getBin, whichBin, newBin }

// TODO: Update bin, add bin, update thing, add thing
