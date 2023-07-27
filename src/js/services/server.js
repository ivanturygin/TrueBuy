
async function server(url) {

		 const dataHtml = await fetch(url).then((data) => data.text());

		 return dataHtml;

};

export {server};