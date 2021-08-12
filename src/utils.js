export const pagination=(data)=>{

    const perPage=8;
    const pages=Math.ceil(data.length / perPage);
    const newData=Array.from({length:pages},(_,i)=>{
        const start=i*perPage;
        return data.slice(start,start+perPage);

    });
    return newData;

}