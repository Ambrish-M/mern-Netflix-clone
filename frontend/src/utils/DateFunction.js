export function formReleaseDate(date){
    return new Date(date).toLocaleDateString("en-US",{
        year:"numeric",
        month:"long",
        day:"numeric"
    })
};
export function formatDate (dataString){
    const date =new Date(dataString);
    const monthNames =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    const month =monthNames[date.getUTCMonth()];
    const day =date.getUTCDate();
    const year =date.getUTCFullYear();

    return `${month} ${day}, ${year}`;
}
