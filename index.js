'use strict'

function unwrapContact (contact) {
  if (!contact) {
    throw new Error('Missing required input: contact object')
  }
  var person = false

  if (contact.GetPrivatePersonsResult && contact.GetPrivatePersonsResult.PrivatePersons) {
    if (contact.GetPrivatePersonsResult.PrivatePersons.PrivatePersonBase) {
      if (contact.GetPrivatePersonsResult.PrivatePersons.PrivatePersonBase.length === 1) {
        person = contact.GetPrivatePersonsResult.PrivatePersons.PrivatePersonBase[0]
      } else {
        throw new Error('More than 1 person in contact object')
      }
    }
  } else {
    throw new Error('Malformed contact object')
  }

  return person
}

module.exports = unwrapContact
