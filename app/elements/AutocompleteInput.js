'use client';

import { Autocomplete, AutocompleteItem } from '@nextui-org/react';

export default function AutocompleteInput({
  label,
  allOptions,
  placeholder,
  isLoading,
  error,
  ...props
}) {
  // const [value, setValue] = useState('');
  return (
    <div>
      <Autocomplete
        {...props}
        label={label}
        variant="bordered"
        defaultItems={allOptions || []}
        placeholder={placeholder}
        isLoading={isLoading || false}
        onError={error}
        // selectedKey={value}
        // onSelectionChange={setValue}
        size="lg"
      >
        {(item) => (
          <AutocompleteItem key={item?.id}>{item.title}</AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
}
