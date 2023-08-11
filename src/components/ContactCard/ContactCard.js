export const ContactCard = ({ item: { name, number } }) => {
    return (
        <p>{name}: {number}</p>
    )
}