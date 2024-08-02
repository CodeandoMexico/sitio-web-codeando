import client from '$lib/apiClient'
import { readItems } from '@directus/sdk'

export async function load() {

  const conocimientos = await client.request(readItems('subseccion', {

    fields: [
      "*", 
    {
      recursos: ["*",
        {
          authors: 
          ["*", 
            {
              authors_id: ["*"]
            }
          ]
        }
      ]
    }
  ],
  }))

  const recursos = await client.request(readItems('categorias_recursos', {

    fields: [
      "*", 
    {
      recursos: ["*"]
    }
  ],
  }))

	return {
    conocimientos, recursos
	}
}

export const prerender = true;