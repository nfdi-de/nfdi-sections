import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const firstRow = [
  {
    title: 'Ethical, Legal and Social Aspects (ELSA)',
    img: require('@site/static/img/Icon-section-ELSA.png').default,
    alt: 'Section Ethical, Legal and Social Aspects (ELSA)',
    description:
      'Cross-cutting ethical, legal and social aspects across the NFDI community.',
    link: '/docs/elsa/intro',
  },
  {
    title: 'Common Infrastructures (INFRA)',
    img: require('@site/static/img/Icon-section-infra.png').default,
    alt: 'Section Common Infrastructure (INFRA)',
    description:
      'Shared services and technical building blocks enabling FAIR data.',
    link: '/docs/infra/intro',
  },
  {
    title: '(Meta)data, Terminologies, Provenance (METADATA)',
    img: require('@site/static/img/Icon-section-meta.png').default,
    alt: 'Section (Meta)data, Terminologies, Provenance',
    description:
      'Governance, metadata, terminology, and provenance across sections.',
    link: '/docs/meta/intro',
  },
];

const secondRow = [
  {
    title: 'Training & Education (EDUTRAIN)',
    img: require('@site/static/img/Icon-section-edutrain.png').default,
    alt: 'Section Training & Education',
    description:
      'Skills, training materials, and community capacity building.',
    link: '/docs/edutrain/intro',
  },
  {
    title: 'Industry Engagement (INDUSTRY)',
    img: require('@site/static/img/Icon-section-industry.png').default,
    alt: 'Industry Engagement section',
    description:
      'Interfaces with industry partners and knowledge transfer.',
    link: '/docs/industry/intro',
  },
  {
    title: 'International Engagement (INT)',
    img: require('@site/static/img/Icon-section-international.png').default,
    alt: 'Section International Engagement',
    description:
      'Alignment with international initiatives and best practices.',
    link: '/docs/internationalisation/intro',
  },
];

function Card({title, img, alt, description, link}) {
  return (
    <div className={clsx('col col--4', styles.cardCol)}>
      <div className={clsx('text--center', styles.card)}>
        {/* Image */}
        <img src={img} alt={alt} className={styles.cardImg} />
        {/* Text */}
        <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
        <p className={styles.cardText}>
          {description}
        </p>
        <Link className={styles.cardLink} to={link}>
          Learn more
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {firstRow.map((props, idx) => (
            <Card key={`row1-${idx}`} {...props} />
          ))}
        </div>
        <div className="row">
          {secondRow.map((props, idx) => (
            <Card key={`row2-${idx}`} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
