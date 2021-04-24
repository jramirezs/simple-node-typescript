import https from 'https';

/**
 * Gets random music genre from binaryjazz API
 */
export const getRandomGenre = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    https.get('https://binaryjazz.us/wp-json/genrenator/v1/genre/', (response) => {
      response.setEncoding('utf8');
      let body = '';

      response.on('data', (data) => {
        body += data;
      });
      response.on('end', () => {
        resolve(JSON.parse(body));
      });
      response.on('error', (error) => {
        reject(error);
      });
    });
  });
};
