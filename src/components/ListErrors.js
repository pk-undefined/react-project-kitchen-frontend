import React from 'react';

class ListErrors extends React.PureComponent {
  render() {
    const { errors } = this.props;
    if (errors) {
      return (
        <ul className="error-messages">
          {
            Object.keys(errors).map((key) => (
              <li key={key}>
                {key}
                {' '}
                {errors[key]}
              </li>
            ))
          }
        </ul>
      );
    }
    return null;
  }
}

export default ListErrors;
