import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/Lacarte", "La carte", "/pages/Lacarte.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
    new Route("/editPassword", "Modifier votre mot de passe", "/pages/auth/editPassword.html"),
    new Route("/reservation", "Vos réservations", "/pages/reservation/allResa.html"),
    new Route("/reserver", "Réserver", "/pages/reservation/reserver.html"),
    new Route("/Annulation", "Annuler une réservation", "/pages/reservation/Annulation.html"),
    new Route("/ModifierResa", "Modifier une réservation", "/pages/reservation/ModifierResa.html"),
    new Route("/validAnnul", "Annulation confirmée", "/pages/reservation/validAnnul.html"),
    new Route("/confirmAnnul", "Confirmer l'annulation", "/pages/reservation/confirmAnnul.html"),



];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";