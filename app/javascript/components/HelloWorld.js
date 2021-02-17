import React from 'react';
import PropTypes from 'prop-types';
import { Button, DatePicker } from 'antd';

class HelloWorld extends React.Component {
  handleClick() {
    alert('Ahihi');
  }

  render () {
    return (
      <React.Fragment>
        <div>
          Greeting: {this.props.greeting}
        </div>
        <DatePicker />
        <Button type='primary' style={{ marginLeft: 8 }} onClick={this.handleClick}>
          Primary Button
        </Button>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
