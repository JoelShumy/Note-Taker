const note = document.getElementById('userText')
const noteContainer = document.getElementById('note_container')
const buttonAdd = document.getElementById('submit_note')
const textNoContent = document.getElementById('note_container__noText');

function addNote(e) {

    const userText = note.value;
    const newNote = document.createElement('div');
    newNote.classList.add('note')
    newNote.innerHTML = '<h3>Note (index)</h3> <p class="noteText">' + userText + '</p> <button class="buttonNote">view details</button>';

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

buttonAdd.addEventListener('click', addNote)

