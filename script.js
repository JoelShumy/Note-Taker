const note = document.getElementById('userText')
const noteContainer = document.getElementById('note_container')
const buttonAdd = document.getElementById('submit_note')
const textNoContent = document.getElementById('note_container__noText')
const backgroundFocusNote = document.getElementById('background_note')
const zoomNote = document.getElementById('zoom_note')


// Fonction pour ajouter une note
function addNote(e) {

    const userText = note.value;
    const newNote = document.createElement('div');
    newNote.classList.add('note')
    newNote.innerHTML = '<h3>Note (index)</h3> <p class="noteText">' + userText + '</p> <button onclick="focusNote(this)" class="buttonNote">view details</button>';

    const enfant = noteContainer.children;

    function createTextBox () {
        noteContainer.appendChild(newNote);
        note.value = "";
        console.log(newNote)
    }

    if (enfant[0].classList.contains('delete')){
        enfant[0].remove(); 
        createTextBox ();
    } else {
        createTextBox ();
    }
    e.preventDefault();
}

// fonction pour activer le focus et lire la note dans son intégralité
function focusNote(element){
    const textContainer = element.previousElementSibling.innerText;
    backgroundFocusNote.classList.remove('invisible');
    backgroundFocusNote.classList.add('center_note');
    zoomNote.classList.add('center_note');
    zoomNote.innerHTML = '<p>' + textContainer + '</p>';
}



// fonction pour enlever  le focus et revenir à l'écran normal
function focusNoteOff() {
    if (backgroundFocusNote.classList.contains('invisible')) {
        return
    } else {
    backgroundFocusNote.classList.add('invisible');
    backgroundFocusNote.classList.remove('center_note');
    zoomNote.classList.remove('center_note');
    }
}

backgroundFocusNote.addEventListener('click', focusNoteOff)
buttonAdd.addEventListener('click', addNote)

