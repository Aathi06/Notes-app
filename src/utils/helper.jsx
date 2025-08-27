
export function deleteById(id,key){

    const retrivedData=localStorage.getItem(key) || []
    const updatedData=JSON.parse(retrivedData).filter((e)=> e.id!=id)
    return updatedData;

}