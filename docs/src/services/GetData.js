function GetData({keyword}){
  const apiKey = 'DbXQWofnhyYMNBO9AupFJW7CO4V3MBZE';
  const apiURL =
  `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=30&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response;
      if(Array.isArray(data)) {
        const gifs = data.map(image =>
          image.images.downsized_medium);
        return gifs;
      }
    });
}

export default GetData;
