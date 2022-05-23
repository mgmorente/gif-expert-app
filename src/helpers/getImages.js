export const getImages = async (category) => {
    const key = 'mDakXXWPvZIWXuoWHEVnBiwVNrTPGuMP';
    const api = `http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=10`

    const resp = await fetch(api);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}