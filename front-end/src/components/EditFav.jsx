import Button from "./Button";

export default function EditFav({selected, favs}) {
  return (
    <form className="edit-fav">
      <h2 className="heading">Edit your fav</h2>
      <div className="mgt-bg">
        <label>
          Name <input type="text" placeholder="new name" value={selected.name} />
        </label>

        <label>
          Type <input type="text" placeholder="new type" value={selected.type} />
        </label>

        <label>
          Note <input type="text" placeholder="new note" value={selected.note} />
        </label>
      </div>

      <Button>EDIT!</Button>
    </form>
  );
}
