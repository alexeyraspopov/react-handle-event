# react-handle-event

Event handler for your React components inspired [DOM EventListener Interface](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener).

```
npm install --save react-handle-event
```

```javascript
import React, { Component } from 'react';
import initEventHandler from 'react-handle-event';

class Counter extends Component {
  constructor(props) {
    super(props);
    initEventHandler(this);
    this.state = { counter: 0 };
  }

  handleEvent(event) {
    switch (event.target.name) {
    case 'increment':
      return { counter: this.state.counter + 1 };
    case 'decrement':
      return { counter: this.state.counter - 1 };
    };
  }

  render() {
    return (
      <section>
        <p>{this.state.counter}</p>
        <button onClick={this} name="increment">Increment</button>
        <button onClick={this} name="decrement">Decrement</button>
      </section>
    );
  }
}
```
