const army = new Proxy({"src":"/_astro/army.DU6uYHTD.webp","width":992,"height":558,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/military-recruitment-web/src/assets/images/army.webp";
							}
							
							return target[name];
						}
					});

export { army as default };
