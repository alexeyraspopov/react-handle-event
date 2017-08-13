module.exports = function initEventHandler(context) {
  function delegate(event) {
    const state = context.handleEvent(event);
    if (state !== undefined && state !== null) {
      context.setState(function() { return state });
    }
  }

  Object.setPrototypeOf(delegate, context);
  delegate.bind = Function.prototype.bind;
  context.render = context.render.bind(delegate);
};
