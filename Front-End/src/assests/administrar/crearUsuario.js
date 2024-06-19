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
  asignaRol(data);
  return data;
}

async function asignaRol(id_usuario) {
  const response = await fetch('http://localhost:8000/api/usuarios-roles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id_usuario: parseInt(id_usuario),
    }),
  });
}

export { crearUsuario };
