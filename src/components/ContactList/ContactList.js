import { ContactCard } from "components/ContactCard/ContactCard"

export const ContactList = ({listFilter}) => {
    return (
        <ul>
            {listFilter.map(el => (
                <li key={el.id}>
                    <ContactCard item={el} />
                </li>
            ))}
        </ul>
    )
}