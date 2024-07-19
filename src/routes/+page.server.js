import client from '$lib/apiClient'
import { readSingleton, readItems } from '@directus/sdk'

export async function load() {
  const home = await client.request(readSingleton('home'));
  const posts = await client.request(readItems('Blog_Posts', {
    fields: ['*', "user_created.*"],
    filter: {
			status: {
        _eq: "published"
      }
		},
    limit: 3
  }));
  const projects = await client.request(readItems('projects', {
    filter: {
			status: {
        _eq: "published"
      }
		},
    limit: 3
  }))

	return {
    home,
    posts,
    projects
	}
}

export const prerender = true;

