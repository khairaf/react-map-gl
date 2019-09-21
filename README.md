data:

https://raw.githubusercontent.com/leighhalliday/mapbox-react-demo/master/src/data/skateboard-parks.json

bikin file .env.local bikin variabel dengan nama `REACT_APP_NAMATOKENTERSERAH="token yang didapat dari account mapbox setelah di akun mapbox request create new token"`
tambahkan

```js
mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
```
harus restart npm start nya biar file .env.localnya kebaca. ga perlu install package dotenv soalnya di react udh bisa jalan by default.


* add di public/index.html stylenya mapbox <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' />

* tambahkan:
```js
onViewportChange={viewport => {
        setViewport(viewport);
      }}
```
biar bisa di drag dan zoom mapnya

`mapStyle="mapbox://styles/mapbox/outdoors-v10"` untuk add style di mpnya reference: https://docs.mapbox.com/mapbox-gl-js/api/

* caraa konfigurasi untuk deploy ke Now:
        * perhatikan file package.json, .nowignore, now.json.... ada tambahan configurasi disana.

* lalu di root directory jalankan now.

https://react-map-gl.khairaf.now.sh/
