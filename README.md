# Xin Liu — Diego-like home layout (static, multi-page)

Home page matches the structure you pointed out:
- pill navigation
- centered photo + name + title
- 3 city cards
- contact block with circular icons

Edit:
- `index.html` for Home
- `about.html`, `projects.html`, ... for other sections
- `assets/css/style.css` for styling

Replace images:
- Profile: put your photo at `assets/images/profile.jpg` and change `index.html` from `profile.svg` to `profile.jpg`
- Cities: replace the files in `assets/images/cities/` with your own photos (keep names or update `<img src>`)

Deploy:
GitHub repo → Settings → Pages → Deploy from branch → main → /(root)
