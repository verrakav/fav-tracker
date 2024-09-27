import Button from "./Button";

export default function FavsList({onShow, onSelect, onDelete, favs}) {
  return (
    <div className="favs-container">
      <h2 className="heading">Your Favs</h2>
      {favs.length > 0 ? (
        <ul className="favs-list">
          {favs.map((fav, idx) => (
            <li className="favs-item" key={fav[idx]}>
              <h3 className="item-name">
                {fav.name} <p className="type">{`(${fav.type})`}</p>
              </h3>

              <p className="description">{fav.notes}</p>
              <Button styled={"btn-item"} onClick={() => onSelect(fav)}>
                select
              </Button>
              <Button styled={"btn-item"} onClick={onDelete}>
                delete
              </Button>
            </li>
          ))}
          <Button styled="margin-top-l" onClick={onShow}>
            Add a fav!
          </Button>
        </ul>
      ) : (
        <div className="scratch-container">
          <span className="from-scratch">Your list is empty</span>
          <Button onClick={onShow}>Create!</Button>
        </div>
      )}
    </div>
  );
}
