
//处理get请求，传入参数对象拼接
let formatUrl = obj => {
  let params = Object.values(obj).reduce((a, b, i) => `${a}${Object.keys(obj)[i]}=${b}&`, '?');
  return params.substring(0, params.length - 1);
};

/** get */
export const GetFetch = (url, params) => {
  return fetch(url)
        .then(response => response && response.json())
        .catch(error => new Error(error));
};


/** post */
export const PostFetch = (url, data) => {
  const option = {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  }
  // console.log('option:',option)
  return fetch(url, option)
        .then(response => response.json())
        .catch(error => new Error(error));
};


