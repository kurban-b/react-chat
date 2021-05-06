import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/ducks/contacts';

function Search(props) {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value))
  }

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={e => handleChange(e)}
      />
    </div>
  );
}

export default Search;
