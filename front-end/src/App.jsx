import "./App.css";
import FavsList from "./components/FavsList";
import AddFav from "./components/AddFav";
import EditFav from "./components/EditFav";
import {useState} from "react";
import {initialFavs} from "./dummyData";

export default function App() {
  //states for showing/hiding side forms
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  //
  const [selected, setSelected] = useState(null);
  //
  const [favs, setFavs] = useState(initialFavs);

  //handlers
  const handleShowAdd = () => setShowAdd(showAdd => !showAdd);

  const handleSelect = fav => {
    setSelected(cur => (cur?.id === fav.id ? null : fav));
    setShowAdd(false);
    console.log("works");
  };

  const handleShowEdit = fav => {
    setShowEdit(showEdit => !showEdit);
    handleSelect(fav);
  };

  const handleAddFav = fav => setFavs(favs => [...favs, fav]);

  const handleDeleteFav = fav =>
    setFavs(favs => favs.filter(fav => fav.name !== selected.name));

  return (
    <div className="app">
      <h2 className="app-banner">Fav Tracker</h2>
      <div className="app-main">
        <FavsList
          favs={favs}
          onShow={handleShowAdd}
          onShowEdit={handleShowEdit}
          onDelete={handleDeleteFav}
          onSelect={handleSelect}
        />
        {showAdd && <AddFav onAdd={handleAddFav} />}
        {showEdit && <EditFav selected={selected} favs={favs} />}
      </div>
    </div>
  );
}
