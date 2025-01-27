export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Beneficios',
      href: '#benefits',
    },
    {
      text: 'Requerimientos',
      href: '#requirements',
    },
    {
      text: 'Convenios',
      href: '#agreements',
    },
    {
      text: 'Contacto',
      href: '#contact',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Servicio Militar',
      links: [
        { text: 'Beneficios', href: '#benefits' },
        { text: 'Requerimientos', href: '#requirements' },
        { text: 'Contacto', href: '#contact' },
      ],
    },
    {
      title: 'Sobre el Ejército del Perú',
      links: [
        { text: 'Página Oficial', href: 'https://www.gob.pe/ejercito' },
        {
          text: 'Convenios y Alianzas',
          href: 'https://cdn.www.gob.pe/uploads/document/file/2621712/COMPENDIO%20CONVENIOS%20DE%20BIENESTAR%202021.pdf.pdf?v=1661532090',
        },
        { text: 'Trámites y Servicios', href: 'https://www.gob.pe/institucion/ejercito/tramites-y-servicios' },
        { text: 'Normas y Documentos', href: 'https://www.gob.pe/institucion/ejercito/normas-y-documentos' },
      ],
    },
  ],
  secondaryLinks: [
    {
      text: 'Políticas de Privacidad',
      href: 'https://cdn.www.gob.pe/uploads/document/file/1412572/Poli%CC%81tica%20de%20Privacidad%20GOB.PE..pdf?v=1604081033',
    },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/ejercitoperu/?hl=es' },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/ejercitodelperuoficial/?locale=es_LA',
    },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="/assets/favicons/servitec.png" alt="onWidget logo" loading="lazy"/>
    Desarrollado por <a class="text-blue-600 underline dark:text-muted" href="https://servitec.site"> Servitec Perú</a> · Todos los derechos reservados.
  `,
};
