const interbank = new Proxy({"src":"/_astro/interbank.T31luj-t.webp","width":400,"height":400,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/military-recruitment-web/src/assets/images/interbank.webp";
							}
							
							return target[name];
						}
					});

export { interbank as default };
