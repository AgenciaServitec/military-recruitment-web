const footloose = new Proxy({"src":"/_astro/footloose.4TZa68qi.webp","width":1024,"height":747,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/military-recruitment-web/src/assets/images/footloose.webp";
							}
							
							return target[name];
						}
					});

export { footloose as default };
