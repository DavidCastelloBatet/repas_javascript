const apiKey = 'GcMNlstqnvOdBp0PrhH4FvxrvdhTVVZj';

// almacenamos la respuesta del api
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
// la respuesta la transformamos en la promesa de un json "leible"
  .then( resp => resp.json() )
// que nos  regresa el objeto  json "data" con el que podemos trabajar
  .then( data => {
// al ser un objeto, mediante notacion por punto podemos acceder al paramatro que nos
// interesa.
    console.log(data.data.images.original.url);
// desestructuramos para que nos sea mas cómodo trabajar con el parámetro elejido.
    const {url} = data.data.images.original;
    console.log(url)

    // representar en navegador.
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn)