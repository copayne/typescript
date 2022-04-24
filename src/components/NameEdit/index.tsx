import React, {
  useState,
} from 'react';

interface Props {
  editingName: string,
  initialUserName: string,
  onEditingNameUpdated: (newEditingName: string) => any;
  onNameUpdated: () => any;
}

const NameEdit = (props: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => props.onEditingNameUpdated(e.target.value);

  const onNameSubmit = (event: any): any => {
    props.onNameUpdated();
  }

  return (
    <>
      <input value={props.editingName} onChange={onChange} />
      <button onClick={onNameSubmit}>Change</button>
    </>
  )
}

export default NameEdit;
