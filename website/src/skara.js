// Skara.js - Core Runtime Framework
// Named after Skara Brae, the Neolithic Pompeii of the Orkney Islands

// Virtual Node structure
function createVNode(tag, props = {}, children = []) {
  return {
    tag,
    props: props || {},
    children: Array.isArray(children) ? children : [children].filter(Boolean)
  };
}

// h() function - creates virtual nodes (like React.createElement)
export function h(tag, props, ...children) {
  // Flatten children array and filter out null/undefined
  const flatChildren = children.flat().filter(child => 
    child !== null && child !== undefined && child !== false
  );
  
  return createVNode(tag, props, flatChildren);
}

// Reactive state management
export function createState(initialValue) {
  let value = initialValue;
  const subscribers = new Set();
  
  const state = {
    get() {
      return value;
    },
    
    set(newValue) {
      if (value !== newValue) {
        value = newValue;
        subscribers.forEach(callback => callback(value));
      }
    },
    
    subscribe(callback) {
      subscribers.add(callback);
      return () => subscribers.delete(callback);
    }
  };
  
  return state;
}

// Simple DOM diffing and rendering
function createElement(vnode) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return document.createTextNode(String(vnode));
  }
  
  if (typeof vnode.tag === 'function') {
    // Component function
    return createElement(vnode.tag(vnode.props));
  }
  
  const element = document.createElement(vnode.tag);
  
  // Set properties
  Object.entries(vnode.props || {}).forEach(([key, value]) => {
    if (key.startsWith('on') && typeof value === 'function') {
      // Event listeners
      const eventName = key.slice(2).toLowerCase();
      element.addEventListener(eventName, value);
    } else if (key === 'className') {
      element.className = value;
    } else if (key === 'style' && typeof value === 'object') {
      Object.assign(element.style, value);
    } else if (key !== 'children') {
      element.setAttribute(key, value);
    }
  });
  
  // Append children
  vnode.children.forEach(child => {
    element.appendChild(createElement(child));
  });
  
  return element;
}

function updateElement(parent, newVNode, oldVNode, index = 0) {
  if (!oldVNode) {
    parent.appendChild(createElement(newVNode));
  } else if (!newVNode) {
    parent.removeChild(parent.childNodes[index]);
  } else if (changed(newVNode, oldVNode)) {
    parent.replaceChild(createElement(newVNode), parent.childNodes[index]);
  } else if (newVNode.tag) {
    const newLength = newVNode.children.length;
    const oldLength = oldVNode.children.length;
    
    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(
        parent.childNodes[index],
        newVNode.children[i],
        oldVNode.children[i],
        i
      );
    }
  }
}

function changed(node1, node2) {
  return typeof node1 !== typeof node2 ||
         typeof node1 === 'string' && node1 !== node2 ||
         node1.tag !== node2.tag;
}

// Mount function - renders component tree into DOM
export function mount(componentFn, container) {
  let currentVNode = null;
  let isScheduled = false;
  
  function render() {
    const newVNode = componentFn();
    
    if (currentVNode) {
      updateElement(container, newVNode, currentVNode);
    } else {
      container.appendChild(createElement(newVNode));
    }
    
    currentVNode = newVNode;
    isScheduled = false;
  }
  
  function scheduleRender() {
    if (!isScheduled) {
      isScheduled = true;
      requestAnimationFrame(render);
    }
  }
  
  // Initial render
  render();
  
  // Return a function to trigger re-renders
  return scheduleRender;
}