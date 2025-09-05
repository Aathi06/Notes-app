
export function deleteById(id,key){

    const retrivedData=localStorage.getItem(key) || []
    const updatedData=JSON.parse(retrivedData).filter((e)=> e.id!=id)
    return updatedData;

}

export function favById(id,key){
    const retrivedData=localStorage.getItem(key) || []
    const updatedData=JSON.parse(retrivedData).map((e)=>{
        return(
            e.id === id? {...e,isFav:!e.isFav} : e
        )
    })
    return updatedData
}