const fakeState = {
  users: [
    {
      id: 4,
      first_name: "Dona",
      last_name: "Holt",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
    },
    {
      id: 5,
      first_name: "Bona",
      last_name: "Morris",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
    },
    {
      id: 6,
      first_name: "Mona",
      last_name: "Ramos",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
    }
  ]
};

export default async (page = 1, per_page = 10) => {
  const jsonObj = await new Promise(resolve => {
    process.nextTick(() => resolve(fakeState));
  });
  return jsonObj.users;
};
