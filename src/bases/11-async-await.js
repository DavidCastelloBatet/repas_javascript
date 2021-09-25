

const getImagen = async() => {

  try {
    const apiKey = 'GcMNlstqnvOdBp0PrhH4FvxrvdhTVVZj';
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    // data sin desestructurar
    // const data = await respuesta.json()
    // const {url} = data.data.images.original;
  
    // desestructurando
    const {data} = await respuesta.json();
    const {url} = data.images.original;
  
    // representar en navegador.
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    
  } catch (error) {
    // manejo del error
    
  }
}

getImagen();