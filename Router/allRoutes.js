import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", []),
    new Route("/Lacarte", "La carte", "/pages/Lacarte.html", []),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/pages/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/pages/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["client","admin"]),
    new Route("/editPassword", "Modifier votre mot de passe", "/pages/auth/editPassword.html", ["client","admin"]),
    new Route("/reservation", "Vos réservations", "/pages/reservation/allResa.html", ["client"]),
    new Route("/reserver", "Réserver", "/pages/reservation/reserver.html", ["client"]),
    new Route("/Annulation", "Annuler une réservation", "/pages/reservation/Annulation.html", ["client"]),
    new Route("/ModifierResa", "Modifier une réservation", "/pages/reservation/ModifierResa.html", ["client"]),
    new Route("/validAnnul", "Annulation confirmée", "/pages/reservation/validAnnul.html", ["client"]),
    new Route("/confirmAnnul", "Confirmer l'annulation", "/pages/reservation/confirmAnnul.html", ["client"]),



];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";