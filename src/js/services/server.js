
async function server(url) {

		 const dataHtml = await fetch(url).then((data) => data.json());

		 return dataHtml;

};

export {server};


