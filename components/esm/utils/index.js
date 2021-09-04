import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
export function getScrollParents(node) {
  var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (node == null) return [];
  if (node.nodeName === "HTML") return [].concat(_toConsumableArray(parents), [window]);
  var isNodeScroll = false;
  var scrollHeight = node.scrollHeight,
      clientHeight = node.clientHeight;
  var overflowRegex = /(auto|scroll)/;

  var _window$getComputedSt = window.getComputedStyle(node, false),
      overflow = _window$getComputedSt.overflow,
      overflowX = _window$getComputedSt.overflowX,
      overflowY = _window$getComputedSt.overflowY;

  if ((scrollHeight > clientHeight || scrollHeight === 0 && clientHeight === 0) && overflowRegex.test(overflow + overflowY + overflowX)) {
    isNodeScroll = true;
  }

  return getScrollParents(node.parentNode, isNodeScroll ? [].concat(_toConsumableArray(parents), [node]) : _toConsumableArray(parents));
}
export function fireEvent(node, eventName) {
  // Make sure we use the ownerDocument from the provided node to avoid cross-window problems
  var doc;

  if (node.ownerDocument) {
    doc = node.ownerDocument;
  } else if (node.nodeType === 9) {
    // the node may be the document itself, nodeType 9 = DOCUMENT_NODE
    doc = node;
  } else {
    throw new Error("Invalid node passed to fireEvent: ".concat(node.id));
  }

  if (node.dispatchEvent) {
    // Gecko-style approach (now the standard) takes more work
    var eventClass = ""; // Different events have different event classes.
    // If this switch statement can't map an eventName to an eventClass,
    // the event firing is going to fail.

    switch (eventName) {
      case "click": // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.

      case "mousedown":
      case "mouseup":
        eventClass = "MouseEvents";
        break;

      case "focus":
      case "change":
      case "blur":
      case "select":
        eventClass = "HTMLEvents";
        break;

      default:
        throw new Error("fireEvent: Couldn't find an event class for event '".concat(eventName, "'."));
    }

    var event = doc.createEvent(eventClass);
    event.initEvent(eventName, true, true); // All events created as bubbling and cancelable.

    event.synthetic = true; // allow detection of synthetic events
    // The second parameter says go ahead with the default action

    node.dispatchEvent(event, true);
  } else if (node.fireEvent) {
    // IE-old school style, you can drop this if you don't need to support IE8 and lower
    var _event = doc.createEventObject();

    _event.synthetic = true; // allow detection of synthetic events

    node.fireEvent("on".concat(eventName), _event);
  }
}