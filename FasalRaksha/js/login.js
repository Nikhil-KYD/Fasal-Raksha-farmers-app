// =========================
// SUPABASE
// =========================

import { supabase } from "./supabase.js";


// =========================
// GET SELECTED LANGUAGE
// =========================

const language = localStorage.getItem("language") || "en";


// =========================
// LANGUAGE TEXT
// =========================

const translations = {

    en: {
        welcome: "Welcome to Fasal Raksha",
        login: "Login",
        subtitle: "Login to protect your crops",

        email: "Email",
        emailPlaceholder: "Enter email",

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

        email: "ईमेल",
        emailPlaceholder: "ईमेल दर्ज करें",

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

document.getElementById("email-label").textContent =
    text.email;

document.getElementById("email").placeholder =
    text.emailPlaceholder;

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

async function loginUser() {

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;


    // =========================
    // EMAIL VALIDATION
    // =========================

    if (!email) {

        if (language === "hi") {

            showAlert(
                "ईमेल दर्ज करें",
                "कृपया अपना ईमेल दर्ज करें।",
                "⚠️"
            );

        } else {

            showAlert(
                "Enter Email",
                "Please enter your email address.",
                "⚠️"
            );
        }

        return;
    }


    // =========================
    // PASSWORD VALIDATION
    // =========================

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
                "🔐"
            );
        }

        return;
    }


    // =========================
    // LOGIN WITH SUPABASE
    // =========================

    const { data, error } =
        await supabase.auth.signInWithPassword({

            email: email,
            password: password

        });


    // =========================
    // LOGIN ERROR
    // =========================

    // =========================
// LOGIN ERROR
// =========================

if (error) {

    console.error("Login error:", error);

    showAlert(
        language === "hi"
            ? "लॉग इन असफल"
            : "Login Failed",

        error.message,

        "⚠️"
    );

    return;
}


    // =========================
    // LOGIN SUCCESS
    // =========================

    console.log("Logged in user:", data.user);

    window.location.href = "dashboard.html";
}


// =========================
// SIGN UP
// =========================

async function showSignup() {

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;


    // =========================
    // EMAIL VALIDATION
    // =========================

    if (!email) {

        if (language === "hi") {

            showAlert(
                "ईमेल दर्ज करें",
                "खाता बनाने के लिए अपना ईमेल दर्ज करें।",
                "⚠️"
            );

        } else {

            showAlert(
                "Enter Email",
                "Enter your email address to create an account.",
                "⚠️"
            );
        }

        return;
    }


    // =========================
    // PASSWORD VALIDATION
    // =========================

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
                "🔐"
            );
        }

        return;
    }


    // =========================
    // CREATE ACCOUNT
    // =========================

    const { data, error } =
        await supabase.auth.signUp({

            email: email,
            password: password

        });


    // =========================
    // SIGN UP ERROR
    // =========================

    if (error) {

        console.error("Signup error:", error);

        showAlert(

            language === "hi"
                ? "खाता नहीं बन सका"
                : "Account Creation Failed",

            error.message,

            "⚠️"
        );

        return;
    }


    // =========================
    // SIGN UP SUCCESS
    // =========================

    if (language === "hi") {

        showAlert(
            "खाता बन गया",
            "आपका खाता सफलतापूर्वक बन गया। अब आप लॉग इन कर सकते हैं।",
            "✓"
        );

    } else {

        showAlert(
            "Account Created",
            "Your account was created successfully. You can now log in.",
            "✓"
        );
    }
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


// =========================
// MAKE FUNCTIONS AVAILABLE
// TO HTML onclick
// =========================

window.loginUser = loginUser;
window.showSignup = showSignup;
window.goBack = goBack;
window.closeAlert = closeAlert;