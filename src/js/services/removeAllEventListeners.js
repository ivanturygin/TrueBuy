const removeAllEventListeners = () => { 

const elements = document.getElementsByTagName("*");

const elementsArray = Array.from(elements);

elementsArray.forEach(element => {
			const eventListeners = element.listeners ?.slice() || [];
});

eventListeners.forEach(listener => {
	element.removeEventListener(listener.type, listener.callback, listener.options);
});
};

export{removeAllEventListeners};