---
title: Zasoby
excerpt: Lista zasobów strony
permalink: /assets
---

### Images

```
{% assign image_files = site.static_files | where: "image", true %}
{% for img_file in image_files %}
  {{ img_file.path }}
{% endfor %}
```

### Javascripts

```
{% assign js_files = site.static_files | where: "js", true %}
{% for js_file in js_files %}
  {{ js_file.path }}
{% endfor %}
```
