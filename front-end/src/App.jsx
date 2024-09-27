import "./App.css";
import {initialFavs} from "./dummyData";

export default function App() {
  return (
    <div>
      <h1 className="banner">Fav Tracker</h1>
      <div className="app">
        <FavsList />
        <AddFav />
        <EditFav />
      </div>
    </div>
  );
}

///LIST///
function FavsList() {
  return (
    <div className="favs-container">
      <h1 className="heading">Your Favs</h1>
      {initialFavs.length > 0 ? (
        <ul className="favs-list">
          {initialFavs.map((fav, idx) => (
            <li className="favs-item" key={fav[idx]}>
              <h3>{fav.name}</h3>
              <span>{fav.type}</span>
              <p>{fav.notes}</p> <Button>select</Button>
            </li>
          ))}
          <Button>Add a fav!</Button>
        </ul>
      ) : (
        "Create your fav list"
      )}
    </div>
  );
}

///ADD ITEM FORM///
function AddFav() {
  return (
    <form className="add-fav">
      <h1>Add a new fav</h1>
      <label>Name</label>
      <input type="text" />
      <label>Type</label>
      <input type="text" />
      <label>Notes?</label>
      <input type="text" />
      <Button>ADD!</Button>
    </form>
  );
}

///EDIT ITEM FORM///
function EditFav() {
  return (
    <form className="edit-fav">
      <h1>Edit your fav</h1>
      <label>New name</label>
      <input type="text" />
      <label>New type</label>
      <input type="text" />
      <label>New note</label>
      <input type="text" />
      <Button>EDIT!</Button>
    </form>
  );
}

///REUSABLES///
function Button({children, onClick}) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
