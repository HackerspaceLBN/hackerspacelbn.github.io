---
title: GitHub
excerpt: Metadane GitHub
permalink: /github/
search: false
---

## HackerspaceLBN members

<figure class='third'>

{% for member in site.github.organization_members %}

<a href="{{ member.html_url }}" title="{{ member.login }}">
  <img src="{{ member.avatar_url }}" alt="{{ member.login }}">
  {{ member.login }}
</a>

{% endfor %}

</figure>


## HackerspaceLBN repositories

{% for repo in site.github.public_repositories %}
### [{{ repo.full_name }}]({{ repo.html_url }})

{{ repo.description }}

    git clone {{ repo.clone_url }}

  ```json
  {{ repo }}
  ```

{% endfor %}