// const request = require('request')
// import { randomNonce } from '../randomNonce';
import sigGenerator from '../signatureGenerator';

export default class FlickrService {
  static async requestToken() {
    // returns signature, nonce, and timestamp
      // const oauth_nonce = randomNonce(11);
      // const oauth_timestamp = Math.floor(Date.now() / 1000);
      console.log(sigGenerator());
    
    // // place values in URL request
    // try {
    //   let response = await fetch(`https://www.flickr.com/services/oauth/request_token?oauth_callback=http://www.example.com&oauth_consumer_key=${process.env.API_KEY}&oauth_nonce=${oauth_nonce}&oauth_signature=${oauth}&oauth_signature_method=HMAC-SHA1&oauth_timestamp=${oauth_timestamp}$oauth_version=1.0`);
    //   if (!response.ok) {
    //     throw Error(response.status);
    //   }
    //   return response.json();
    // } catch(err) {
    //   return err;
    }
  }


// next function will be using the token 
// // const token = {
//   key: '370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb',
//   secret: 'LswwdoUaIvS8ltyTt5jkRh4J50vUPVVHtR2YPi5kE',
// }