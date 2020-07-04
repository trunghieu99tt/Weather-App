export const convertDate = (date) => {
    const d = new Date(date);
    const dateString = d.toString().split(" ");
    return `${dateString[0]}, ${dateString[2]} ${dateString[1]}`;
};

export const convertToF = (CDegree) => (CDegree * 9) / 5 + 32;

export const convertToC = (FDegree) => ((FDegree - 32) * 5) / 9;
