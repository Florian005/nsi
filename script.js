import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'URL';
const supabaseKey = 'CLE';
const supabase = createClient(supabaseUrl, supabaseKey);

const form = document.getElementById('formulaire');
const bouton = document.getElementById('envoyer');

bouton.addEventListener('click', async () => {
    const prenom = form.prenom.value;
    const nom = form.nom.value;
    const email = form.email.value;
    const boire_en_cours = form.boire_en_cours.value;
    const cours_interessant = form.cours_interessant.value;
    const charge_travail = form.charge_travail.value;
    const materiel_bon_etat = form.materiel_bon_etat.value;
    const commentaires = form.commentaires.value;

    const { data, error } = await supabase
        .from('retours_nsi')
        .insert([
            {
                prenom,
                nom,
                email,
                boire_en_cours,
                cours_interessant,
                charge_travail,
                materiel_bon_etat,
                commentaires
            }
        ])
});









//flo :

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
    })
})
