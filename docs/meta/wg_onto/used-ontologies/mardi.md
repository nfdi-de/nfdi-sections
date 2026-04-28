---
title: MaRDI
---

## Important Links

- See this collection in the
  [Semantic Farm](https://semantic.farm/collection/0000027).
- Suggest a new addition to this collection
  [here](https://github.com/biopragmatics/bioregistry/issues/new?template=add-collection-prefix.yml&collection=0000027&title=Add%20prefix%20X%20to%20collection%200000027).

## Description

A placeholder collection of ontologies, controlled vocabularies, and schemas
relevant for the MaRDI Consortium created by the
[NFDI Section Metadata WG Ontology Harmonization and Mapping](https://github.com/nfdi-de/section-metadata-wg-onto/).
The working group is in the process of identifying MaRDI Consortium members
appropriate for maintaining this collection.

## Maintainers

- [Björn Schembera](https://semantic.farm/orcid:0000-0003-2860-6621)

## Ontologies

| Prefix                                           | Name                                                           | License         |
| ------------------------------------------------ | -------------------------------------------------------------- | --------------- |
| [`amv`](https://semantic.farm/amv)               | Algorithm Metadata Vocabulary                                  | CC0-1.0         |
| [`codemeta`](https://semantic.farm/codemeta)     | CodeMeta                                                       | Apache-2.0      |
| [`mathalgodb`](https://semantic.farm/mathalgodb) | Algorithm Knowledge Graph Ontology                             | CC-BY-4.0       |
| [`mathmoddb`](https://semantic.farm/mathmoddb)   | MathModDB Ontology and Knowledge Graph for Mathematical Models | CC-BY-4.0       |
| [`msc`](https://semantic.farm/msc)               | Mathematics Subject Classification                             | CC BY-NC-SA 3.0 |
| [`physh`](https://semantic.farm/physh)           | Physics Subject Headings                                       | CC0-1.0         |
| [`qudt`](https://semantic.farm/qudt)             | Quantities, Units, Dimensions, and Types Ontology              | CC-BY-4.0       |
| [`tib.bk`](https://semantic.farm/tib.bk)         | Basic Classification                                           | CC0-1.0         |

## Colophon

This page was automatically generated on 2026-04-28 using Semantic Farm
([v0.13.46-dev](https://github.com/biopragmatics/bioregistry/releases/tag/v0.13.46-dev))
by running the following commands:

```console
$ git clone https://github.com/nfdi-de/nfdi-sections
$ cd nfdi-sections
$ uv run scripts/update_collections.py
$ git commit -am "Update WG Onto collections"
$ git push
```
