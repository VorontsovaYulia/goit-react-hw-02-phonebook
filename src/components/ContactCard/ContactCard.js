export const ContactCard = ({ item: { id, name, number }, onDelete }) => {
    return (
        <div>
            <p>{name}: {number}</p>
            <button onClick={()=> onDelete(id)}>Delete</button>
        </div>
    )
}