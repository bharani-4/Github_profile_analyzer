function getProfile(){

const username = document.getElementById("username").value;

fetch(`https://api.github.com/users/${username}`)
.then(response => response.json())
.then(data => {

const profile = `
<div class="profile-card">
<img src="${data.avatar_url}">
<h2>${data.name}</h2>
<p>${data.bio}</p>

<p style="font-weight: bold; font-family:arial;font-size:15px;">Followers: ${data.followers}</p>
<p style="font-weight: bold; font-family:arial;font-size:15px;">Following: ${data.following}</p>
<p style="font-weight: bold; font-family:arial;font-size:15px;">Public Repositories: ${data.public_repos}</p><br>

<a href="${data.html_url}" target="_blank" style="background-color: green; color: white; padding: 10px; text-decoration: none; border-radius: 5px;margin-top:30px;">View Profile</a>
</div>
`;

document.getElementById("profile").innerHTML = profile;

getRepos(username);

});

}
function getRepos(username){

fetch(`https://api.github.com/users/${username}/repos`)
.then(response => response.json())
.then(data => {

let repoHTML = "<h2>Repositories</h2>";

data.forEach(repo => {

repoHTML += `
<div class="repo">
<h3>${repo.name}</h3>
<a href="${repo.html_url}" target="_blank" style="background-color: green; color: white; padding: 10px; text-decoration: none; border-radius: 5px;">Open Repo</a>
</div>
`;

});

document.getElementById("repos").innerHTML = repoHTML;

});

}