+++
title = "Projects"
template = "projects.html"
description = "A showcase of my open-source projects and professional work in systems programming and distributed architecture."

[extra]
animate = true
header_class = "header--with-pattern"
gradient_title = true

[[extra.projects]]
title = "Distributed System Framework"
description = "High-performance distributed computing framework designed for scalability and fault tolerance."
image = "http://fakeimg.pl/1920x1080/?text=Distributed%20System%20Framework"
category = "Backend Development"
tags = ["Rust", "WebAssembly", "Kubernetes"]
github = "https://github.com/username/distributed-framework"
url = "https://framework.example.com"
# featured = true
stats = [
    { label = "Performance Improvement", value = "40%" },
    { label = "Scale Factor", value = "100x" },
    { label = "Active Users", value = "1000+" }
]
technologies = [
    { name = "Rust", icon = "rust-icon.svg" },
    { name = "WebAssembly", icon = "wasm-icon.svg" },
    { name = "Kubernetes", icon = "k8s-icon.svg" }
]

[[extra.projects]]
title = "Zero-Knowledge Auth"
description = "Authentication system using zero-knowledge proofs for privacy-preserving identity verification."
image = "http://fakeimg.pl/1920x1080/?text=Zero-Knowledge%20Auth"
category = "Security"
tags = ["Zero-Knowledge", "Rust", "WebAssembly"]
github = "https://github.com/username/zk-auth"
stats = [
    { label = "Security Score", value = "A+" },
    { label = "Response Time", value = "<50ms" },
    { label = "Implementations", value = "10+" }
]
technologies = [
    { name = "Rust", icon = "rust-icon.svg" },
    { name = "WebAssembly", icon = "wasm-icon.svg" },
    { name = "TypeScript", icon = "typescript-icon.svg" }
]

# [extra.filters]
# categories = [
#     "Backend Development",
#     "Infrastructure",
#     "Security",
#     "Frontend"
# ]

[extra.sidebar]
show_toc = true
show_categories = true
show_stats = true

[extra.cta]
enabled = true
title = "Want to Collaborate?"
description = "I'm always open to discussing new projects and opportunities."
button_text = "Get in Touch"
button_url = "/contact"
+++
