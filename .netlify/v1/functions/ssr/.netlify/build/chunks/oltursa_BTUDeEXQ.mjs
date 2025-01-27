const oltursa = new Proxy({"src":"/_astro/oltursa.Cd6vY8_L.webp","width":240,"height":240,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/military-recruitment-web/src/assets/images/oltursa.webp";
							}
							
							return target[name];
						}
					});

export { oltursa as default };
