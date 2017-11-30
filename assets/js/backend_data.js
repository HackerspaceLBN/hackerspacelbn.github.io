let members = [],
    repos = [],
    active_users;

$(function() {
  $.get('https://hslbn-spejs-ex.herokuapp.com/api/at_hackerspace', function(data_raw) {
    let data = $.parseJSON(data_raw)
    active_users = data.active;
    $.each(active_users, function(inde, user) {
      console.log('active user', user);
    })
  });
  $.get('https://api.github.com/orgs/HackerspaceLBN/members', function(data_raw) {
    members = data_raw;
    $.each(members, function(inde, member) {
      console.log('member', member);
    })
  });

  $.get('https://api.github.com/orgs/HackerspaceLBN/repos', function(data_raw) {
    repos = data_raw;
    $.each(repos, function(index, repo) {
      console.log('repo', repo);
    })
  });
})