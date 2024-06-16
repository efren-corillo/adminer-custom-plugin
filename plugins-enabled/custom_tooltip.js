document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("#tables a");
  console.log(links);
  links.forEach(link => {
    console.log(link);
    const tableName = link.textContent.trim();
    console.log(tableName);
    link.setAttribute('title', tableName);
  });
});
