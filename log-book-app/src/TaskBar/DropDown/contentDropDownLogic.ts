export const fetchNoteTitles = (): string[] => {
    // Retrieval of items from localStorage
    const notes: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('note_')) {
            let noteTitle = key.substring(5); // Remove 'note_' prefix
            notes.push(noteTitle);
        }
    }
    return notes;
};