const rimac = new Proxy({"src":"/_astro/rimac.Cwzel-3Y.webp","width":512,"height":512,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/military-recruitment-web/src/assets/images/rimac.webp";
							}
							
							return target[name];
						}
					});

export { rimac as default };
