import client from '$lib/apiClient'
import { readSingleton, readItems } from '@directus/sdk'

export async function load() {
  const recursos = await client.request(readSingleton('recursos', {
    fields: ['*', {
      recursos: [
        {
          item: {
            recurso_grupo: ["*", "recursos.*", "recursos.recurso.*"]
          }
        }
      ]
    }]
  }))

	return {
		recursos
	}
}

export const prerender = true;




// {
//   "id": 1,
//   "user_updated": "3aabe3ec-e326-448f-9f9a-f66bac8a5d86",
//   "date_updated": "2024-07-29T20:22:02.295Z",
//   "recursos": [
//     {
//       "item": {
//         "id": "f77c23bb-39a8-4b97-a8d1-1cc24a09fb5d",
//         "title": "Curso de Datos Abiertos y Hacking Cívico",
//         "description": null,
//         "categoria": null,
//         "recursos": [
//           {
//             "id": 5,
//             "recurso_grupo_id": "f77c23bb-39a8-4b97-a8d1-1cc24a09fb5d",
//             "item": "2",
//             "collection": "recurso"
//           }
//         ]
//       }
//     },
//     {
//       "item": {
//         "id": "faceab4d-1b38-4a36-acf1-1a6fc8097622",
//         "title": "Jornadas de Hacking Cívico (CMX)",
//         "description": null,
//         "categoria": null,
//         "recursos": [
//           {
//             "id": 4,
//             "recurso_grupo_id": "faceab4d-1b38-4a36-acf1-1a6fc8097622",
//             "item": "3",
//             "collection": "recurso"
//           }
//         ]
//       }
//     },
//     {
//       "item": {
//         "id": "c08ac2c5-01c1-4b0a-a9d3-7d568d6fe353",
//         "title": "Jornada de datos abiertos",
//         "description": null,
//         "categoria": "eventos",
//         "recursos": [
//           {
//             "id": 6,
//             "recurso_grupo_id": "c08ac2c5-01c1-4b0a-a9d3-7d568d6fe353",
//             "item": "2",
//             "collection": "recurso"
//           }
//         ]
//       }
//     }
//   ]
// }