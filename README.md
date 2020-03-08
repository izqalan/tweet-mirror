# Tweet mirror
> Tweet translator mirror bot

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
[![Build Status](https://travis-ci.com/izqalan/tweet-mirror.svg?branch=master)](https://travis-ci.com/izqalan/tweet-mirror)

<img src="https://i.imgur.com/T7xi9Fz.png" height="300">

## Prerequisite
1. [Have twitter dev account](https://developer.twitter.com/)

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
git clone https://github.com/izqalan/tweet-mirror
npm install
```

Populate .env with your twitter app credentials and your access token
```
CONSUMER_KEY= BOT_CONSUMER_KEY
CONSUMER_SECRET= BOT_CONSUMER_SECRET
ACCESS_TOKEN= BOT_ACCESS_TOKEN
ACCESS_TOKEN_SECRET= BOT_ACCESS_TOKEN_SECRET
TARGET_USER_ID= MAIN_ACCOUNT_USER_ID
```

To get userId for your account got to https://twitter.com/settings/your_twitter_data/account


## Contributing

1. Fork it (<https://github.com/izqalan/tweet-mirror/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[wiki]: https://github.com/izqalan/bnm-api/wiki
