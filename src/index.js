import {getUsers} from './api/userApi';

console.log(`Here is some logging`);

getUsers().then(result => {

  let usersBody = "";
  for (var user of result) {
    console.log(user);
    usersBody+= `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`;
  };

  global.document.getElementById('users').innerHTML = usersBody;
});
