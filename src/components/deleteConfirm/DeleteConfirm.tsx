import React from 'react';
import * as S from './DeleteConfirm.styles';
import { useParams } from 'react-router-dom';

type props = {
  title: string;
  handleDelete: () => void;
  handleCancel: () => void;
};

const DeleteConfirm = ({ title, handleDelete, handleCancel }: props) => {
  const { id } = useParams();
  return (
    <S.StyledForm>
      <S.Header>Delete this {title}?</S.Header>
      <S.Para>
        {`Are you sure you want to delete the ${id && id} ${title}? This action will remove all
        columns and tasks and cannot be reversed.`}
      </S.Para>
      <S.ConfirmBtn type="button" text="Delete" disabled={false} handleClick={handleDelete} />
      <S.CancelBtn type="button" text="Cancel" disabled={false} handleClick={handleCancel} />
    </S.StyledForm>
  );
};

export default DeleteConfirm;
