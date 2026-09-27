function selectLanguage(language) {
    console.log("Selected language:", language);

    localStorage.setItem("language", language);

    window.location.href = "login.html";
}

window.selectLanguage = selectLanguage;