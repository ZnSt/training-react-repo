export const FilterContacts = ({ value, filterChange }) => {
  return (
    <>
      <label>
        <input type="text" placeholder="Please, turn name" value={value} onChange={filterChange} />
      </label>
    </>
  );
};
