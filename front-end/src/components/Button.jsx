export default function Button({children, onClick, styled}) {
  return (
    <button className={`button ${styled}`} onClick={onClick}>
      {children}
    </button>
  );
}
