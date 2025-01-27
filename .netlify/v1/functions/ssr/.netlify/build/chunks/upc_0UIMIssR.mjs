const upc = new Proxy({"src":"/_astro/upc.DBi2XKy7.webp","width":500,"height":500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/military-recruitment-web/src/assets/images/upc.webp";
							}
							
							return target[name];
						}
					});

export { upc as default };
