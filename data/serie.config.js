const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://rr012345.github.io",
  "baseurl": "/rosemberg",
  "title": "Rosemberg Sandoval",
  "subtitle": "Muerte, Dolor, Violemcia, Marginalidad",
  "credits": "Por Juan Echeverría | Imagenes cortesía Rosemberg Sandoval",
  "copyright": "Todos los derechos reservados, 2026",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "autor",
        "label": "Autor",
        "type": "text"
      },
      {
        "key": "fecha",
        "label": "Fecha",
        "type": "text"
      },
      {
        "key": "descripcion",
        "label": "Descripción",
        "type": "text"
      },
      {
        "key": "medio",
        "label": "Medio",
        "type": "text"
      },
      {
        "key": "gesto",
        "label": "Gesto",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "label",
      "fecha",
      "descripcion",
      "medio",
      "gesto"
    ]
  }
};
export default config;