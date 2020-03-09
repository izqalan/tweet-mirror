require('dotenv').config()
import Twit from 'twit';
import config from './config';
import translate, { languages } from '@vitalets/google-translate-api';

var T = new Twit(config);

var stream = T.stream('statuses/filter', { language: ['en'], follow: [process.env.TARGET_USER_ID]})

stream.on('tweet', async function (data) {

  var tweet = data.extended_tweet == undefined || data.extended_tweet == null ? data.text : data.extended_tweet.full_text;
  var rt = data.retweeted_status ? true : false;
  var mention = data.in_reply_to_screen_name ? true : false;



  console.group(['Incoming tweet'])
  console.log(`[${process.env.TARGET_USER_ID}] tweeted: ${tweet}`)
  console.log(`[${process.env.TARGET_USER_ID}] is a RT? ${rt}`)
  console.log(`[${process.env.TARGET_USER_ID}] is a mention? ${mention}`)

  console.groupEnd()
  if (rt == false && mention == false) {
    translateThis(tweet)
  } else {
    console.warn(`[${process.env.TARGET_USER_ID}] cannot translate; condition not met!`)
  }

})

export function translateThis(tweet) {
  translate(tweet, { to: 'ja' }).then(res => {
    tweetThis(res.text);
  }).catch(err => {
    console.error(err);
  });
}

export function tweetThis(tweet) {
  var tweet = {
    status: tweet
  }
  T.post('statuses/update', tweet, tweeted);
  function tweeted(err, data, res) {
    if (err) {
      console.log(err)
    } else {
      console.log(`[${process.env.TARGET_USER_ID}] tweeted!`)
    }
  }
}

