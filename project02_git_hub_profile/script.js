const url = "https://api.github.com/users";

let profileSection = document.querySelector(".profile-section")
const searchInputEl = document.querySelector("#searchInput")
const searchBtnEl = document.querySelector("#search-btn")
const usernameEl = document.querySelector("#username")
const UserImageEl = document.querySelector("#UserImage")
const bioEl = document.querySelector("#bio")
const FollowrsEl = document.querySelector("#Followrs")
const FollowingEl = document.querySelector("#Following")
const postEl = document.querySelector("#post")
const UrlEl = document.querySelector("#Url")


const fetchProfile = async () => {
    let userIp = searchInputEl.value;
    try {
        let Response = await fetch(`${url}/${userIp}`)
        let data = await Response.json();
        console.log("data", data);

        usernameEl.innerHTML = data.name;
        bio.innerHTML = data.bio;
        FollowrsEl.innerHTML = data.followers;
        FollowingEl.innerHTML = data.following;
        postEl.innerHTML = data.public_repos;
        UrlEl.innerHTML = data.url;
        UserImageEl.innerHTML = `<img id="UserImage" src="${data.avatar_url}" alt="">`
    }
    catch (error) {
        console.log({ error });
    }
}
searchBtnEl.addEventListener("click",
    fetchProfile
)
searchBtnEl.addEventListener("click", () => {
    profileSection.style.display = "flex"
    
    profileSection.addEventListener("click", () => {
        profileSection.style.display = "none"

    })
})