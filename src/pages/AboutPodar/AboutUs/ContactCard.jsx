const ContactCard = ({ title, name, role, email }) => {
  return (
    <div className="contact-card">
      <h3 className="card-title">{title}</h3>
      <div className="divider"></div>

      <p className="card-name">{name}</p>
      <p className="card-role">{role}</p>

      <a href={`mailto:${email}`} className="card-email">
        {email}
      </a>
    </div>
  );
};

export default ContactCard;
