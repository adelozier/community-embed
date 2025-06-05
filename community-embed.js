// Create the container div
const container = document.createElement("div");
container.id = "community-embed";
document.body.appendChild(container);

// Create the embed script tag
const script = document.createElement("script");
script.async = true;
script.src = "https://mgu-embed.community.com/embed.js";
script.setAttribute("data-community-embed-id", "bfe84cf7-0a2c-4568-a2a7-eef21b390fdd");

// Append to document
document.body.appendChild(script);
