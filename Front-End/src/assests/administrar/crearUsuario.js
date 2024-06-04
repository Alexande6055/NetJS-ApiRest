const apiUrl = 'http://localhost:8000/api/auth/register';
async function crearUsuario(username1, password1) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username1 + '',
      password: password1 + '',
    }),
  });

  const data = await response.json();
  return data;
}

export { crearUsuario };
