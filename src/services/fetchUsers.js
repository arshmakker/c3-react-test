export default async (page = 1, per_page = 10) => {
  const jsonObj = await fetch(
    `https://reqres.in/api/users?page=${page}&per_page=${per_page}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  });
  return jsonObj.data;
};
