import React from 'react';

export const RenderJson = ({data, field}) => {
  return (
    <div>
      {data.map((item) => {
        const tempItem = {...item};
        if (tempItem.password) {
          tempItem.password = '******';
        }
        const strigToRender = JSON.stringify(field ? tempItem[field] : tempItem);
        return (
        <div>
            {strigToRender}
        </div>
        )
      })}
    </div>
  )
};