import React from 'react';
import Dialog from '../Dialog';

const Groups = ({ groups, loading }) => (
  loading ? ''
    : groups.map((group, index) => (
      <tr key={group.id}>
        <th scope="row">{index + 1}</th>
        <td>{group.name}</td>
        <td className="text-center">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '160px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}
            >
              {group.contacts}
            </div>
            {' '}
            {' '}
            <Dialog text="Edit" type="outline" group="Church" phone details={group.contacts[0]} />
            {' '}
          </div>
        </td>
        <td className="text-center">
          <div className="buut">
            <button type="button" className="btn btn-outline-info">Export Group</button>
            <button type="button" className="btn btn-outline-danger">Delete Group</button>
          </div>

        </td>
      </tr>
    ))
);

export default Groups;
