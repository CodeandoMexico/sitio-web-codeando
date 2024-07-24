import client from '$lib/apiClient'
import { readItems } from '@directus/sdk'

export async function load() {

  const comunidad = await client.request(readItems('comunidad', {
    filter: {
			status: {
        _eq: "published"
      }
		}
  }))

	return {
    comunidad
	}
}

export const prerender = true;
