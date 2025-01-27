const logoEjercito = new Proxy({"src":"/_astro/logoEjercito.nDxA89w1.webp","width":200,"height":240,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/military-recruitment-web/src/assets/images/logoEjercito.webp";
							}
							
							return target[name];
						}
					});

export { logoEjercito as default };
