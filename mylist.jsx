export default function List({numbers}){
    

    const listitem=numbers.map((number)=><li key={number.toString()}>
        {number}

    </li>)


    return <ol>
        {listitem}
    </ol>
    
}