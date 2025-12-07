import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://hzrmxqqdkeyhfwxtcfwf.supabase.co';
const supabaseKey = 'ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

const form = document.getElementById('formulaire');
const bouton = document.getElementById('envoyer');

bouton.addEventListener('click', async (e) => {

     e.preventDefault();
    
    const first_name = form.prenom.value;
    const name = form.nom.value;
    const email = form.email.value;

    const choice_1 = form.boire_en_cours.value === "oui";
    const choice_2 = form.cours_interessant.value === "oui";
    const choice_3 = form.charge_travail.value === "oui";
    const choice_4 = form.materiel_bon_etat.value === "oui";

    const remarques = form.commentaires.value;

    const { data, error } = await supabase
        .from('NSI_formulaire')
        .insert([
            {
                first_name,
                name,
                email,
                choice_1,
                choice_2,
                choice_3,
                choice_4,
                remarques
            }
        ]);
    
    if (error) {
        console.error("Erreur Supabase :", error);
    } else {
        console.log("Insertion OK :", data);
        alert("Merci pour votre réponse !");
        form.reset();
    }
});



