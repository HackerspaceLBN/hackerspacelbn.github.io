---
title: Zasoby
excerpt: Lista zasobów strony
permalink: /assets
---

{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files %}
  {{ myimage.path }}
{% endfor %}