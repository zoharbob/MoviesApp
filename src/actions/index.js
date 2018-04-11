export const MOVIES_LIST = 'MOVIES_LIST';
export const DIALOG_DATA = 'DIALOG_DATA';

export const getHttpResponse = (movies) => ({
    type: MOVIES_LIST,
    payload: movies
});

export const dialogSetDataEvent = (dialogData) => ({
    type: DIALOG_DATA,
    payload: dialogData
});

