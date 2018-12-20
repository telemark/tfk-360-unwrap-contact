const resolve = (path, obj) => {
  return path.split('.').reduce((prev, curr) => {
    return prev ? prev[curr] : undefined
  }, obj)
}

module.exports = contact => {
  if (!contact) {
    throw new Error('Missing required input: contact object')
  } else if (!contact.GetPrivatePersonsResult) {
    throw new Error('Malformed contact object')
  }
  const person = resolve('GetPrivatePersonsResult.PrivatePersons.PrivatePersonBase', contact) || resolve('GetPrivatePersonsResult.PrivatePersons.PrivatePersonResult', contact)
  if (!person) {
    return false
  } else if (person.length === 1) {
    return person[0]
  } else if (person.length >= 1) {
    throw new Error('More than 1 person in contact object')
  } else {
    throw new Error('Malformed contact object')
  }
}
