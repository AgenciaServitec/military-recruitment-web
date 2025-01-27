const others = new Proxy({"src":"/_astro/others.CgqHAbcA.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pabloaquise/Desktop/AGENCIA SERVITEC/military-recruitment-web/src/assets/images/others.png";
							}
							
							return target[name];
						}
					});

export { others as default };
