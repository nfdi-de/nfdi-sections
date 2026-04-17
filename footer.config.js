// Footer configuration extracted for clarity and reuse
// Edit links, titles, and text here.

const footer = {
  style: 'dark',
  links: [
    {
      title: 'Docusaurus',
      items: [{ label: 'Documentation', href: 'https://docusaurus.io/docs' }],
    },
    {
      title: 'Community',
      items: [
        { label: 'NFDI e.V.', to: 'https://www.nfdi.de/' },
        { label: 'Base4NFDI', to: 'https://base4nfdi.de/' },
      ],
    },
    {
      title: 'About',
      items: [
        { label: 'About this web site', to: '/about' },
        { label: 'Imprint', href: '/imprint' },
      ],
    },
  ],
  copyright: `Licensed under Creative Commons BY-SA 4.0 license, unless stated differently. Built with Docusaurus.`,
};

export default footer;
