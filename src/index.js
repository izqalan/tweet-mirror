require('dotenv').config()
import Twit from 'twit';
import config from './config';
import translate from '@vitalets/google-translate-api';

var T = new Twit(config);

var stream = T.stream('statuses/filter', { follow: [process.env.TARGET_USER_ID], tweet_mode: 'extended' })

stream.on('tweet', async function (data) {
  var tweet = data.text;
  console.log(`[${process.env.TARGET_USER_ID}] tweeted: ${tweet}`)

  translate(tweet, { to: 'ja' }).then(res => {

    tweetThis(res.text)

  }).catch(err => {
    console.error(err);
  });
})

function tweetThis(tweet) {
  var tweet = {
    status: tweet
  }
  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, res) {
    if (err) {
      console.log(err)
    } else {
      console.log('tweeted!')
    }
  }
}