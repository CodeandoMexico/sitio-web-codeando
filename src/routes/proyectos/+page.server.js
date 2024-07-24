import client from '$lib/apiClient'
import { readItems } from '@directus/sdk'

export async function load() {

  const projects = await client.request(readItems('projects', {
    filter: {
			status: {
        _eq: "published"
      }
		}
  }))

	return {
    projects
	}
}

export const prerender = true;

