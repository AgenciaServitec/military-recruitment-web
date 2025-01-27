const britanico = new Proxy({"src":"/_astro/britanico.BOtfVNxY.webp","width":400,"height":400,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/military-recruitment-web/src/assets/images/britanico.webp";
							}
							
							return target[name];
						}
					});

export { britanico as default };
