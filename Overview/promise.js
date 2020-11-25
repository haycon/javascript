//Example from web dev simplified youtube
/* function watchTutorialPromise(callback, errorCallback) {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':(',
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: 'Watching cat meme',
        message: 'Cat meme > Webdev',
      });
    } else {
      resolve('Thumbs up');
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log('Success: ' + message);
  })
  .catch((error) => {
    console.log(error.name + ' ' + error.message);
  });

  
 */

const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded');
});

Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);
