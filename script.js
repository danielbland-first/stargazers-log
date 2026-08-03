const listElement = document.getElementById('starred-repositories');

fetch('events.json')
  .then((response) => response.json())
  .then((repositories) => {
    repositories.forEach((repo) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <div class="repo-name">${repo.owner}/${repo.repository}</div>
        <div class="repo-meta">${repo.description}</div>
        <div class="repo-meta">⭐ ${repo.stargazers_count.toLocaleString()} · ${repo.language}</div>
      `;
      listElement.appendChild(listItem);
    });
  })
  .catch((error) => {
    listElement.innerHTML = '<li>Unable to load starred repositories.</li>';
    console.error(error);
  });
