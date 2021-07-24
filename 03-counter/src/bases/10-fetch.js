const apiKey = 'cgrHKIfTYvbuQ1WHzP9V5BEX31usAgss';

const petition = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

petition
    .then (resp => resp.json())
    .then ( ({data})  => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);