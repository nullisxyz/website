+++
title = "Contact"
template = "contact.html"
description = "Get in touch with me about projects, consulting, or speaking opportunities."

[extra]
animate = true
header_class = "header--with-pattern"
gradient_title = true

[extra.contact_form]
endpoint = "https://api.example.com/contact"
success_message = "Thanks for reaching out! I'll get back to you within 24 hours."
error_message = "Oops! Something went wrong. Please try again or use email."

[[extra.contact_methods]]
title = "Email"
icon = """<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>"""
value = "john.doe@example.com"
link = "mailto:john.doe@example.com"
description = "Best for professional inquiries and longer discussions"
response_time = "24 hours"

[[extra.contact_methods]]
title = "GitHub"
icon = """<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>"""
value = "@johncitizen"
link = "https://github.com/johncitizen"
description = "For code-related discussions and open source collaboration"

# [[extra.contact_methods]]
# title = "LinkedIn"
# icon = """<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/></svg>"""
# value = "John Citizen"
# link = "https://linkedin.com/in/johndoe"
# description = "For professional networking and opportunities"

[extra.availability]
timezone = "UTC-5"
working_hours = "9:00 AM - 5:00 PM"
response_time = "24 hours"
current_status = "Available for projects"

[extra.meetings]
calendar_link = "https://calendly.com/johncitizen"
available_for = [
    "Project Consultation",
    "Technical Architecture Review",
    "Speaking Engagements",
    "Mentoring Sessions"
]

[extra.faq]
title = "Frequently Asked Questions"
[[extra.faq.items]]
question = "What types of projects do you take on?"
answer = "I specialize in distributed systems, high-performance applications, and complex architectural challenges."

[[extra.faq.items]]
question = "What are your rates?"
answer = "Rates vary depending on project scope and requirements. Let's discuss your needs to determine the best approach."

[extra.cta]
enabled = true
title = "Ready to Start?"
description = "Have a project in mind? Let's discuss how we can work together."
button_text = "Schedule a Call"
button_url = "https://calendly.com/johncitizen"
+++
