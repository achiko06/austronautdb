export const allPersonsQuery = () => {
  const query = `*[_type == "person"] | order(_createdAt desc){
    ...,
  }`;

  return query;
};