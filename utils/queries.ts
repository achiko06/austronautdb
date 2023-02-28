export const allPersonsQuery = () => {
  const query = `*[_type == "person"] | order(_createdAt desc){
    ...,
  }`;

  return query;
};


export const personDetailQuery = (slug: string | string[]) => {
  const query = `*[_type == "person" && slug.current == '${slug}']{
    ...,
  }`;
  return query;
};


export const singleUserQuery = (email: string | string[]) => {
  const query = `*[_type == "user" && email == '${email}']`;

  return query;
};