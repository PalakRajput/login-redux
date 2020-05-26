export const increment=(nmber)=>{
    return{
        type:'INCREMENT',
        payload:nmber
    }
}
export const decrement=()=>{
    return{
        type:'DECREMENT'
    }
}