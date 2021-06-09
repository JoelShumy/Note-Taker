const note = document.getElementById('userText')
const noteContainer = document.getElementById('note_container')
const buttonAdd = document.getElementById('submit_note')

function addNote() {
    const userText = note.value;
    const childNote = '<div class="note"><h3>Note (index)</h3> <div>' + userText + '</div> <button>view details<button></div>';
    noteContainer.appendChild += childNote
}

buttonAdd.addEventListener('click', addNote)

