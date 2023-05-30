import Select from 'react-select';
import { useEffect, useState } from 'react';
import { FilterData, Store } from '../../types';
import { makeRequest } from '../../utils/request';

import './styles.css';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [selectStores, setSelectStores] = useState<Store[]>([]);

  useEffect(() => {
    makeRequest.get('/stores').then((response) => {
      setSelectStores(response.data);
    });
  }, []);

  const onStoreChange = (selected: Store | null) => {
    if (selected === null) {
      onFilterChange({ store: { id: 0, name: '' } });
    } else {
      onFilterChange({ store: selected });
    }
  };

  return (
    <div className="filter-container base-card">
      <Select
        options={selectStores}
        classNamePrefix="filter-select"
        isClearable
        getOptionLabel={(store: Store) => store.name}
        getOptionValue={(store: Store) => String(store.id)}
        placeholder="Selecione uma loja..."
        onChange={onStoreChange}
      />
    </div>
  );
}

export default Filter;
