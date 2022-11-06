export const Filter = ({ filter, onFilterChange }) => {
  return (
    <label>
      Фильтр по имени
      <input type="text" value={filter} onChange={onFilterChange} />
    </label>
  );
};
