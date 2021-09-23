import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : "I'm ready!"}</div>;
  }
}

export default App;
