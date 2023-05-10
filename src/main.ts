let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhY2lvbiI6MTE0NDE3ODU4NCwiY29ycmVvIjoibWFiMDE1QGhvdG1haWwuY29tIiwiaWF0IjoxNjgyNTUyMjA0LCJleHAiOjE2ODMxNTcwMDR9.jY5vQ8vJaoHjQXw8mtXLCc4r18CTwBX_XSBS0nawEno");

let raw = JSON.stringify({
  "identificacion": 1144178584,
  "correo": "mab015@hotmail.com"
});

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

fetch("https://apiestudiantes.maosystems.dev/estudiantes", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

function aa(){
  document.body.appendChild('sss')
}

document.querySelector<HTMLTableElement>('#tableStudents')!.innerHTML = `

  <h1>${aa}</h1>

`

  