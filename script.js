const note = document.getElementById('userText')
const noteContainer = document.getElementById('note_container')
const buttonAdd = document.getElementById('submit_note')
const textNoContent = document.getElementById('note_container__noText')
const backgroundFocusNote = document.getElementById('background_note')
const zoomNote = document.getElementById('zoom_note')

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

function focusNote(element){
    const textContainer = element.target;
    thisText = textContainer.closest("p").value;
    backgroundFocusNote.classList.remove('invisible');
    backgroundFocusNote.classList.add('center_note');
    zoomNote.innerHTML = '<p>' + thisText + '</p>';
    alert(thisText);
}

buttonAdd.addEventListener('click', addNote)

