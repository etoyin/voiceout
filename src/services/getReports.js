
export const getReports = (data) => {
  const state = data.state.toLowerCase();

  if(data && state !== ''){
    return new Promise((resolve, reject) => {
      fetch('https://voiceout-api.herokuapp.com/api/?state=' + state)
      .then( data => data.json())
      .then( response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      })
    })
  }
  else{
    return new Promise((resolve, reject) => {
      fetch('https://voiceout-api.herokuapp.com/api/')
      .then( data => data.json())
      .then( response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      })
    }) 
  }
}