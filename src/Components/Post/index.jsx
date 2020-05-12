import React from 'react';
import Dialog from '../Dialog';

const Post = ({ messages, loading }) => (
  loading ? ''
    : messages.map((message, index) => (
      <tr key={message.id}>
        <th scope="row">{index + 1}</th>
        <td className="text-center">{`${new Date(message.createdAt).toLocaleDateString()} ${new Date(message.createdAt).toLocaleTimeString()}`}</td>
        <td className="text-center">
          {message.sender}
        </td>
        <td
          className="text-center"
          style={{
            width: '30px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}
        >
          <div
            className="clamp"
            style={{
              width: '400px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}
          >
            {message.text}
          </div>
        </td>
        <th className="text-center">{message.recipient.split(',').length }</th>
        <th className="text-center text-success">
          <Dialog text="Details" type="outline" group="Message" details={message} />
        </th>
      </tr>
    ))
);

export default Post;
