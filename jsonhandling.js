fetch('https://api.github.com/users/questionmarcus')
  .then(function(r) {
    return r.json();
  })
  .then(function(j) {
    console.log(j);
    document.getElementById('avatar_url').src = j.avatar_url;
    document.getElementById('username').innerText = j.login;
    document.getElementById('name').innerText = j.name;
    document.getElementById('location').innerText = j.location;
    document.getElementById('bio').innerText = j.bio;
    document.getElementById('followers').innerText = 'Followers: ' + j.followers;
})
