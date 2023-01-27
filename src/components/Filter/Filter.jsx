import PropTypes from 'prop-types';
import { FilterWrp, FilterInput } from './Filter.styled';
const Filter = ({ value, onChange }) => (
  <FilterWrp>
    <label htmlFor="filter">Find contacts by name</label>

    <FilterInput
      name="filter"
      id="filter"
      type="text"
      value={value}
      onChange={onChange}
    />
  </FilterWrp>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
