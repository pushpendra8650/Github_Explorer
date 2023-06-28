const searchBtn = document.getElementById("searchBtn");
const repositoriesDiv = document.getElementById("repositories");

searchBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    if (username) {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then((response) => response.json())
            .then((data) => {
                repositoriesDiv.innerHTML = "";
                data.forEach((repo) => {
                    const repoDiv = document.createElement("div");
                    repoDiv.classList.add("repository");

                    const repoName = document.createElement("h3");
                    repoName.innerText = repo.name;

                    const repoDescription = document.createElement("p");
                    repoDescription.innerText = repo.description;

                    repoDiv.appendChild(repoName);
                    repoDiv.appendChild(repoDescription);

                    repositoriesDiv.appendChild(repoDiv);
                });
            })
            .catch((error) => {
                console.log("Error fetching repositories:", error);
            });
    }
});
