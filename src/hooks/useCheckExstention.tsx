const pdf = 'application/pdf'
const image = ['image/jpeg', 'image/png', 'image/jpg']
const video = ['video/mp4', 'video/mov']

const useCheckExstention = (e: any,type:string) => {
    let valid = true;
    if (Object.keys(e).length !== 0) {
        if ((e.type !== pdf && type === 'proposal') || (!image.includes(e.type) && type === 'image') || (!video.includes(e.type) && type === 'video')) {
            valid = false;
        }
    }
    return valid;
};


export { useCheckExstention }