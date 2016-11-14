'use strict'

var tap = require('tap')
var unwrapContact = require('../index')

tap.throws(
  function () {
    unwrapContact()
  },
  {message: 'Missing required input: contact object'},
  'Throws if contact object not supplied'
)

tap.throws(
  function () {
    var multiple = require('./data/GetPrivatePersonsResultMultiple.json')
    unwrapContact(multiple)
  },
  {message: 'More than 1 person in contact object'},
  'Throws if contact object contains more than 1 person'
)

tap.throws(
  function () {
    var malformed = require('./data/unwrappedContact.json')
    unwrapContact(malformed)
  },
  {message: 'Malformed contact object'},
  'Throws if contact object is malformed'
)

tap.test('It returns false if no person found', function (test) {
  var contact = require('./data/GetPrivatePersonsResultNoneFound.json')
  var expected = false
  var result = unwrapContact(contact)
  tap.equal(JSON.stringify(result), JSON.stringify(expected), 'Contact returned false OK')
  test.done()
})

tap.test('It returns false if no person found', function (test) {
  var contact = require('./data/GetPrivatePersonsResultNoneFoundNull.json')
  var expected = false
  var result = unwrapContact(contact)
  tap.equal(JSON.stringify(result), JSON.stringify(expected), 'Contact returned false OK')
  test.done()
})

tap.test('It returns expected result', function (test) {
  var contact = require('./data/GetPrivatePersonsResult.json')
  var expected = require('./data/unwrappedContact.json')
  var result = unwrapContact(contact)
  tap.equal(JSON.stringify(result), JSON.stringify(expected), 'Contact unwrapped OK')
  test.done()
})
