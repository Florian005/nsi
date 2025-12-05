document.addEventListener("DOMContentLoaded", () => {
    const bouton = document.getElementById("envoyer");
    const formulaire = document.getElementById("formulaire");

    bouton.addEventListener("click", (event) => {
        event.preventDefault(); // empêche l'envoi réel du formulaire

        // Récupération des valeurs
        const prenom = formulaire.elements["prenom"].value;
        const nom = formulaire.elements["nom"].value;
        const email = formulaire.elements["email"].value;
        const commentaires = formulaire.elements["commentaires"].value;
