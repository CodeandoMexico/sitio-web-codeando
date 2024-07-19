import { createDirectus, rest, staticToken } from '@directus/sdk'
import { DIRECTUS_TOKEN } from '$env/static/private'

const client = createDirectus('https://content.codeandomexico.org').with(rest()).with(staticToken(DIRECTUS_TOKEN))

export default client