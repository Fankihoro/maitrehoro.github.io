
document.getElementById('bouton').addEventListener('click', function(event) {
    event.preventDefault();

    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let email = document.getElementById('email').value;
    let commentaire = document.getElementById('comment').value;

    if (nom !== '' && prenom !== '' && email !== '' && commentaire !== '') {
        alert('Formulaire envoyé avec succès !');
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});
