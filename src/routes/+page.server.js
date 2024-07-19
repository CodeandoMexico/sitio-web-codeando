import client from '$lib/apiClient'
import { readSingleton, readItems } from '@directus/sdk'

export async function load() {
  const home = await client.request(readSingleton('home'));
  const posts = await client.request(readItems('Blog_Posts', {
    fields: ['*', "user_created.*"],
  }))

	return {
    home,
    posts
	}
}

export const prerender = true;

