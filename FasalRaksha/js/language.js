function selectLanguage(language) {

    // Save the selected language
    localStorage.setItem("language", language);

    // Move to the login page
    window.location.href = "login.html";
}