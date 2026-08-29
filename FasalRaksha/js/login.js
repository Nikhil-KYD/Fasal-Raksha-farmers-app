// Get selected language
const language = localStorage.getItem("language") || "en";


// =========================
// LANGUAGE TEXT
// =========================

const translations = {

    en: {

        welcome: "Welcome to Fasal Raksha",

        login: "Login",

        subtitle: "Login to protect your crops",

        mobile: "Mobile Number",

        mobilePlaceholder: "Enter mobile number",

        password: "Password",

        passwordPlaceholder: "Enter password",

        loginButton: "Login",

        signupQuestion: "Don't have an account?",

        signupButton: "Create Account",

        back: "Change Language"

    },


    hi: {

        welcome: "फसल रक्षा में आपका स्वागत है",

        login: "लॉग इन करें",

        subtitle: "अपनी फसलों की सुरक्षा के लिए लॉग इन करें",

        mobile: "मोबाइल नंबर",

        mobilePlaceholder: "मोबाइल नंबर दर्ज करें",

        password: "पासवर्ड",

        passwordPlaceholder: "पासवर्ड दर्ज करें",

        loginButton: "लॉग इन करें",

        signupQuestion: "क्या आपका खाता नहीं है?",

        signupButton: "खाता बनाएं",

        back: "भाषा बदलें"

    }

};


// =========================
// APPLY LANGUAGE
// =========================

const text = translations[language];

document.getElementById("welcome-text").textContent =
    text.welcome;

document.getElementById("login-title").textContent =
    text.login;

document.getElementById("login-subtitle").textContent =
    text.subtitle;

document.getElementById("mobile-label").textContent =
    text.mobile;

document.getElementById("mobile").placeholder =
    text.mobilePlaceholder;

document.getElementById("password-label").textContent =
    text.password;

document.getElementById("password").placeholder =
    text.passwordPlaceholder;

document.getElementById("login-button").textContent =
    text.loginButton;

document.getElementById("signup-question").textContent =
    text.signupQuestion;

document.getElementById("signup-button").textContent =
    text.signupButton;

document.getElementById("back-text").textContent =
    text.back;


// =========================
// LOGIN
// =========================

function loginUser() {

    const mobile =
        document.getElementById("mobile").value;

    const password =
        document.getElementById("password").value;


    if (mobile.length !== 10) {

        if (language === "hi") {

            showAlert(
                       "गलत मोबाइल नंबर",
                        "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।",
                        "⚠️"
                            );
        } else {

                            showAlert(
                        "Invalid Mobile Number",
                        "Please enter a valid 10-digit mobile number.",
                        "⚠️"
                    );

        }

        return;
    }


    if (password.length < 6) {

        if (language === "hi") {

                showAlert(
        "पासवर्ड बहुत छोटा है",
        "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।",
        "🔐"
    );

        } else {

            showAlert(
                "Password Too Short",
                "Password must be at least 6 characters.",
                 "🔐");


        }

        return;
    }


    // Temporary login
    alert(
        language === "hi"
            ? "लॉग इन सफल! "
            : "Login successful! "
    );
}


// =========================
// SIGN UP
// =========================

function showSignup() {

    alert(
        language === "hi"
            ? "खाता बनाने की सुविधा जल्द आ रही है।"
            : "Account creation is coming soon."
    );
}


// =========================
// BACK
// =========================

function goBack() {

    window.location.href = "index.html";
}

// =========================
// CUSTOM ALERT
// =========================

function showAlert(title, message, icon = "⚠️") {

    document.getElementById("alert-title").textContent =
        title;

    document.getElementById("alert-message").textContent =
        message;

    document.getElementById("alert-icon").textContent =
        icon;

    document.getElementById("custom-alert").style.display =
        "flex";
}


function closeAlert() {

    document.getElementById("custom-alert").style.display =
        "none";
}
function closeAlert() {

    document.getElementById("custom-alert").style.display =
        "none";
}
