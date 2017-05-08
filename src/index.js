import getFakeData from './generateFake';

console.log(`Here is some logging`);

const data = getFakeData();

let usersBody = "";
for (var user of data.users) {
  usersBody+= `<tr>
  <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
  <td>${user.id}</td>
  <td>${user.firstName}</td>
  <td>${user.lastName}</td>
  <td>${user.email}</td>
  </tr>`;
}

global.document.getElementById('users').innerHTML = usersBody;
