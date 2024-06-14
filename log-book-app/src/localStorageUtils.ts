export {};

interface Note {
    title: string;
    data: string;
}
export function saveNoteToLocal(note: Note): void {
    localStorage.setItem(note.title, JSON.stringify(note));
}



