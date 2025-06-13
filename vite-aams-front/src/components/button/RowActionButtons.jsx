import React from 'react';
import { Button } from 'antd';

/**
 * Row 추가 버튼 컴포넌트
 */
export const AddRowButton = ({ handleAdd }) => (
  <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
    + Add Row
  </Button>
);

/**
 * Row 삭제 버튼 컴포넌트 (다중 선택 삭제용)
 */
export const DeleteRowButton = ({ handleDelete, disabled }) => (
  <Button
    onClick={handleDelete}
    type="primary"
    danger
    disabled={disabled}
    style={{ marginLeft: 8, marginBottom: 16 }}
  >
    - Delete Selected
  </Button>
);
