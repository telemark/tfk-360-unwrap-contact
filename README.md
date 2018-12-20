[![Build Status](https://travis-ci.org/telemark/tfk-360-unwrap-contact.svg?branch=master)](https://travis-ci.org/telemark/tfk-360-unwrap-contact)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-360-unwrap-contact/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-360-unwrap-contact?branch=master)
[![Code Climate](https://codeclimate.com/github/telemark/tfk-360-unwrap-contact/badges/gpa.svg)](https://codeclimate.com/github/telemark/tfk-360-unwrap-contact)
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

cd into directory and install dependencies

```sh
$ npm install
```

## Usage

Pass a result from GetPrivatePersonsResult

```javascript
const unwrapContact = require('tfk-360-unwrap-contact')
const result = {
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

const contact = unwrapContact(result)
 
console.log(contact)
```

returns

```JavaScript
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
