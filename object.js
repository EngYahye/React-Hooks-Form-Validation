export default function ListOfObject(){
    const myobject=[{
        Id:12,
        Name:'Ahmed'
    },

    {
        Id:20,
        Name: 'Mohamed'
    },
    {
        Id:21,
       Name: 'Aisha'
    }

];

const objectItems=myobject.map((std)=>
<li key={std.Id}>
    ID: {std.Id}  Name: {std.Name}

</li>
)

return<ul>

    {objectItems}
    </ul>

// const objectItems=myobject.map((std)=>
// <li key={std.Id}>
//    {std.Id}

// </li>
// )
// return(
//     {objectItems}
//   )
}