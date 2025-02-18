+++
title = "Blog"
sort_by = "date"
template = "blog/index.html"
page_template = "blog/single.html"
description = "Thoughts on software development, technology, and building great things."
generate_feeds = true

[extra]
animate = true
header_class = "header--with-pattern"
gradient_title = true

[extra.featured_posts]
title = "Featured Articles"
show = false
count = 3

[extra.categories_section]
title = "Topics"
show = true
description = "Explore articles by category"

[extra.sidebar]
show = true
show_about = true
show_categories = false
show_tags = true
show_recent_posts = false
show_search = false

[extra.newsletter]
show = false
title = "Stay Updated"
description = "Get notified about new articles and tutorials."
button_text = "Subscribe"

[extra.filters]
show = false
categories = [
    "Distributed Systems",
    "Rust",
    "Architecture",
    "Security",
    "Performance"
]
+++
