import { defineQuery } from 'next-sanity';

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
*[_type == "user" && id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
}
`);
