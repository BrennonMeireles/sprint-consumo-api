# IP to Location (Node.js and browser)

<p>
<a href="https://apiip.net"><img alt="apiip.net website status" src="https://img.shields.io/website?down_color=red&down_message=offline&label=apiip.net%20website&up_color=success&up_message=online&url=https%3A%2F%2Fapiip.net%2F"> </a>
<a href="https://status.apiip.net/"><img alt="Uptime Robot status" src="https://img.shields.io/uptimerobot/status/m789879229-16fa66289487470e7544d58a?label=API%20status"></a>
<a href="https://status.apiip.net/"><img alt="Uptime Robot ratio (30 days)" src="https://img.shields.io/uptimerobot/ratio/m789879229-16fa66289487470e7544d58a?label=API%20uptime%20%2830%20days%29"></a>
<img alt="Snyk Vulnerabilities for npm package" src="https://img.shields.io/snyk/vulnerabilities/npm/apiip.net">
<img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/Apiipnet/apiip.net">
<img alt="npm downloads" src="https://img.shields.io/npm/dw/apiip.net?label=npm%20downloads">
<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/Apiipnet/apiip.net">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/apiipnet/apiip.net">
<img alt="NPM licence" src="https://img.shields.io/npm/l/apiip.net?color=green">
<img alt="npm version" src="https://img.shields.io/npm/v/apiip.net">

</p>
Find geolocation data from IP addresses (e.g. city, country, lat/long) using the apiip.net API.

apiip.net provides 1.000 free requests per month. For higher plans, check out the [website](https://apiip.net)

## Installation

You need to get your API key from here: https://apiip.net/get-started and you'll get 1.000 free requests/month

Install the package with:

```sh
npm install apiip.net
# or
yarn add apiip.net
```

## Usage

The package needs to be configured with your account's API key, which is available in the [Apiip.net Dashboard](https://apiip.net/user/dashboard)

```javascript
const apiip = require('apiip.net')('YOUR_API_KEY');

apiip
  .getLocation()
  .then((results) => console.log(results))
  .catch((error) => console.error(error));
```

Or using ES6 modules and async/await:

```javascript
import Apiip from 'apiip.net';
const apiip = Apiip('YOUR_API_KEY');

(async () => {
  console.log(await apiip.getLocation());
})();
```

## HTTPS Encryption

By default, the SSL/TLS is turned on, if you want to disabled it just pass the options parameter

#### Example

```javascript
const apiip = require('apiip.net')('YOUR_API_KEY', { ssl: false });
```

Or using ES6 module import

```javascript
import Apiip from 'apiip.net';
const apiip = Apiip('YOUR_API_KEY', { ssl: false });
```

## Configuration

Call getLocation method with config object

```javascript
const apiip = require('apiip.net')('YOUR_API_KEY');

apiip
  .getLocation({
    ip: '67.250.186.196', // '67.250.186.196, 188.79.34.191, 60.138.7.24' - for bulk request
    output: 'xml',
    fields: 'city, countryName, currency.name',
    languages: 'es',
  })
  .then((results) => console.log(results))
  .catch((error) => console.error(error));
```

| Option      | Type     | Description                                                                                                | Default      |
| ----------- | -------- | ---------------------------------------------------------------------------------------------------------- | ------------ |
| `ip`        | `string` | _Optional_. Get location about the specify IP or multiple IPs.                                             | Requester IP |
| `output`    | `string` | _Optional_. Specify response format, XML or JSON.                                                          | JSON         |
| `fields`    | `string` | _Optional_. Specify response fields.                                                                       | All fields   |
| `languages` | `string` | _Optional_. Specify response language.                                                                     | EN           |
| `callback`  | `string` | _Optional_. The callback function name ([JSONP Callbacks](https://www.w3schools.com/js/js_json_jsonp.asp)) | -            |

## Example complete response

```javascript
{
  "ip": "67.250.186.196",
  "continentCode": "NA",
  "continentName": "North America",
  "countryCode": "US",
  "countryName": "United States",
  "countryNameNative": "United States",
  "regionCode":"NY"
  "regionName":"New York"
  "cityGeoNameId":5128581,
  "city": "New York",
  "postalCode": "10001",
  "latitude": 40.8271,
  "longitude": -73.9359,
  "capital": "Washington D.C.",
  "phoneCode": "1",
  "countryFlagEmoj": "🇺🇸",
  "countryFlagEmojUnicode": "U+1F1FA U+1F1F8",
  "isEu": false,
  "borders": [
    "CAN",
    "MEX"
  ],
  "topLevelDomains": [
    ".us"
  ],
  "languages": {
    "en": {
      "code": "en",
      "name": "English",
      "native": "English"
    }
  },
  "currency": {
    "code": "USD",
    "name": "US Dollar",
    "symbol": "$",
    "number": "840",
    "rates": {
      "EURUSD": 0.99518
    }
  },
  "timeZone": {
    "id": "America/New_York",
    "currentTime": "10/26/2021, 2:54:10 PM",
    "code": "EDT",
    "timeZoneName": "EDT",
    "utcOffset": -14400
  },
   "userAgent": {
    "isMobile": false,
    "isiPod": false,
    "isTablet": false,
    "isDesktop": true,
    "isSmartTV": false,
    "isRaspberry": false,
    "isBot": false,
    "browser": "Chrome",
    "browserVersion": "100.0.4896.127",
    "operatingSystem": "Windows 10.0",
    "platform": "Microsoft Windows",
    "source": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"
  },
  "connection": {
    "asn": 12271,
    "isp": "Charter Communications Inc"
  },
  "security": {
    "isProxy": false,
    "isBogon": false,
    "isTorExitNode": false,
    "isCloud": false,
    "isHosting": false,
    "isSpamhaus": false,
    "suggestion": "allow",
    "network": "67.250.176.0/20"
  }
}

```

## More Information

- [API Documentation](https://apiip.net/documentation)
