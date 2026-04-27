---
title: NFDI-MatWerk
---

## Important Links

- See this collection in the
  [Semantic Farm](https://semantic.farm/collection/0000031).
- Suggest a new addition to this collection
  [here](https://github.com/biopragmatics/bioregistry/issues/new?template=add-collection-prefix.yml&collection=0000031&title=Add%20prefix%20X%20to%20collection%200000031).

## Description

A collection of ontologies, controlled vocabularies, and schemas relevant for
the NFDI-MatWerk Consortium created in cooperation with the
[NFDI Section Metadata WG Ontology Harmonization and Mapping](https://github.com/nfdi-de/section-metadata-wg-onto/).

## Maintainers

- [Ebrahim Nourouzi](https://semantic.farm/orcid:0000-0002-2691-6995)
- [Heike Fliegl](https://semantic.farm/orcid:0000-0002-7541-115X)

## Ontologies

| Prefix                                         | Name                                                  | License   | Comment                           |
| ---------------------------------------------- | ----------------------------------------------------- | --------- | --------------------------------- |
| [`BFO`](https://semantic.farm/bfo)             | Basic Formal Ontology                                 | CC-BY-4.0 |                                   |
| [`CHEBI`](https://semantic.farm/chebi)         | Chemical Entities of Biological Interest              | CC-BY-4.0 |                                   |
| [`mwo`](https://semantic.farm/mwo)             | NFDI MatWerk Ontology                                 | CC0-1.0   |                                   |
| [`nfdi.core`](https://semantic.farm/nfdi.core) | NFDI Core Ontology                                    | CC0-1.0   |                                   |
| [`pmdco`](https://semantic.farm/pmdco)         | Platform Material Digital Core Ontology               | CC-BY-4.0 |                                   |
| [`prima`](https://semantic.farm/prima)         | Provenance Information for Materials Science Ontology | CC-BY-3.0 | used by JL MDMC, NEP, EOSC-Pillar |

## Colophon

This page was automatically generated on 2026-04-27 using Semantic Farm
([v0.13.45](https://github.com/biopragmatics/bioregistry/releases/tag/v0.13.45))
by running the following commands:

```console
$ git clone https://github.com/nfdi-de/nfdi-sections
$ cd nfdi-sections
$ uv run scripts/update_collections.py
$ git commit -am "Update WG Onto collections"
$ git push
```
