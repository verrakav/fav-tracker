import Button from "./Button";

export default function EditFav({selected, setName, setType, setNotes, onShowEdit}) {
  const handleSubmit = e => {
    e.preventDefault();
    onShowEdit();
  };

  return (
    <form className="edit-fav" onSubmit={handleSubmit}>
      <h2 className="heading">Edit your fav</h2>
      <div className="mgt-bg">
        <label>
          Name
          <input
            type="text"
            placeholder="new name"
            value={selected.name}
            onChange={e => setName((selected.name = e.target.value))}
          />
        </label>

        <label>
          Type
          <input
            type="text"
            placeholder="new type"
            value={selected.type}
            onChange={e => setType((selected.type = e.target.value))}
          />
        </label>

        <label>
          Note
          <input
            type="text"
            placeholder="new note"
            value={selected.notes}
            onChange={e => setNotes((selected.notes = e.target.value))}
          />
        </label>
      </div>

      <Button>EDIT!</Button>
    </form>
  );
}
