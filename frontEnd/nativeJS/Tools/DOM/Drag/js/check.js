export const isExistData = e => !!e.dataTransfer.types.length;

export const isExistFileData = e => e.dataTransfer.types.includes('Files');
