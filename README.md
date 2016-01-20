[![Build Status](https://travis-ci.org/telemark/tfk-360-unwrap-contact.svg?branch=master)](https://travis-ci.org/telemark/tfk-360-unwrap-contact)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-360-unwrap-contact/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-360-unwrap-contact?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-360-unwrap-contact

Module for unwrapping a contact from Public360's GetPrivatePersonsResult

## Installation

From npm

```sh
$ npm install tfk-360-unwrap-contact
```

From GitHub

```sh
$ git clone git@github.com:telemark/tfk-360-unwrap-contact.git
```

cd into directory and run setup

```sh
$ npm run setup
```

## Usage

Pass a result from GetPrivatePersonsResult

```javascript
'use strict'

var unwrapContact = require('tfk-360-unwrap-contact')
var result = {
  GetPrivatePersonsResult: {
    Successful: true,
    PrivatePersons: {
      PrivatePersonBase: [
        {
          Email: 'xxx',
          FirstName: 'xxx',
          LastName: 'xxx',
          PersonalIdNumber: 'xxx',
          PhoneNumber: 'xxx',
            PrivateAddress: {
              Area: '',
              Country: 'NOR',
              County: '',
              State: '',
              StreetAddress: '<HEMMELIG ADRESSE>',
              ZipCode: '',
              ZipPlace: ''
            }
          }
        ]
      }
    }
  }
}
var contact = unwrapContact(result)
 
console.log(contact)

```

returns

```javascript
{
  Email: 'xxx',
  FirstName: 'xxx',
  LastName: 'xxx',
  PersonalIdNumber: 'xxx',
  PhoneNumber: 'xxx',
    PrivateAddress: {
      Area: '',
      Country: 'NOR',
      County: '',
      State: '',
      StreetAddress: '<HEMMELIG ADRESSE>',
      ZipCode: '',
      ZipPlace: ''
    }
}
```

##License
[MIT](LICENSE)