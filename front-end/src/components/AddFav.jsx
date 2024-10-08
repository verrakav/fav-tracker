import Button from "./Button";

export default function AddFav({
  onAdd,
  name,
  type,
  notes,
  setName,
  setType,
  setNotes
}) {
  const handleSubmit = e => {
    e.preventDefault();

    const newFav = {
      name,
      type,
      notes
    };

    onAdd(newFav);

    setName("");
    setType("");
    setNotes("");
  };

  return (
    <form className="add-fav" onSubmit={handleSubmit}>
      <h2 className="heading">Add a new fav</h2>
      <div className="mgt-bg">
        <label>
          Name
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label>
          Type
          <input
            type="text"
            placeholder="type"
            value={type}
            onChange={e => setType(e.target.value)}
          />
        </label>

        <label>
          Notes?
          <input
            type="text"
            placeholder="note"
            value={notes}
            onChange={e => setNotes(e.target.value)}
          />
        </label>
      </div>

      <Button>ADD!</Button>
    </form>
  );
}
