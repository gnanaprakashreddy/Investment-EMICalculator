export default function Button({ name, onClick }) {
  return (
    <button type="button" className="button" onClick={() => onClick(name)}>
      {name}
    </button>
  );
}
