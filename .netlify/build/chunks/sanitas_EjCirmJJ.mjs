const sanitas = new Proxy({"src":"/_astro/sanitas.DDhdnNll.webp","width":225,"height":225,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/military-recruitment-web/src/assets/images/sanitas.webp";
							}
							
							return target[name];
						}
					});

export { sanitas as default };
