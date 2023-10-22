export const ContactsList = ({ key, id, name, number, handleDeleteContact}) => {
    return (
    <li>
            <p>{name}: {number}</p>
            <button type="button" onClick={() => handleDeleteContact(id)}>Delete</button>
    </li>
  );
};
