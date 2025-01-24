function Modal({ message, handleClose }) {
  const {
    id,
    recipientId,
    sender,
    profileImageURL,
    relationship,
    content,
    font,
    createdAt,
  } = message;

  return (
    <div className="Container">
      <header className="header">
        <img src={profileImageURL} className="profileImage" />
        <div className="Container2">
          <div className="sender">From. {sender}</div>
          <div className="relationship">{relationship}</div>
        </div>
        <div className="date">{createdAt}</div>
      </header>
      <div
        className="content"
        style={{
          fontFamily: font.includes(" ") ? `"${font}"` : font,
        }}
      >
        {content}
      </div>
      <button onClick={handleClose}>확인</button>
    </div>
  );
}

export default Modal;
