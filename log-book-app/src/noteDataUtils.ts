export {}
let noteData = '';

export const setNoteData = (data: string) => {
    noteData = data;
};

export const getNoteData = (): string => {
    return noteData;
};
