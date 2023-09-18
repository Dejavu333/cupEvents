//fires an event on all elements in the DOM, 
//so that all elements can listen at that event directly using addEventListener("eventType", callback) or 
//using on:eventType={functionName} in svelte components
function broadcastEvent(p_eventType, p_detail) {

    const event = new CustomEvent(p_eventType, {
        bubbles: false,
        detail: p_detail,
    });

    const elements = document.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
        elements[i].dispatchEvent(event);
    }
}

//a global emitter and elements can listen at that emitter indirectly using onEvent()
function emitEvent (p_eventType, p_detail) {
    const event = new CustomEvent(p_eventType, {
        bubbles: false,
        detail: p_detail,
    });
    document.dispatchEvent(event);
}

function onEvent(p_eventType, p_callback) {
    document.body.addEventListener(p_eventType, (event) => {
        p_callback(event);
    });
}

export {broadcastEvent, emitEvent, onEvent};