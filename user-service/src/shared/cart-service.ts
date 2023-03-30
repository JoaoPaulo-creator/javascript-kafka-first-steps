export async function getUsers() {
  return await fetch("http://localhost:3002/users-from-user-service")
    .then((response) => response.json())
    .then((data) => {
      const { id } = data[1];
      console.log(id);
    })
    .catch((e) => console.log(e));
}

export async function saveOnCartService(user: any) {
  return await fetch("http://localhost:3002/cart-users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: user.id,
      name: user.name,
      email: user.email,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
