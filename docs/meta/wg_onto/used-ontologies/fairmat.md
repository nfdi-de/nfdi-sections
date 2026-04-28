---
title: FAIRmat
---

A placeholder collection of ontologies, controlled vocabularies, and schemas
relevant for the FAIRmat Consortium seeded from corresponding the
[TIB OLS collection](https://service.tib.eu/terminology/collections/fairmat).
The
[NFDI Section Metadata WG Ontology Harmonization and Mapping](https://github.com/nfdi-de/section-metadata-wg-onto/)
is in the process of identifying FAIRmat Consortium members appropriate for
maintaining this collection.

## Maintainers

- [Markus Kühbach](https://semantic.farm/orcid:0000-0002-7117-5196)

Suggest a new addition to this collection
[here](https://github.com/biopragmatics/bioregistry/issues/new?template=add-collection-prefix.yml&collection=0000024&title=Add%20prefix%20X%20to%20collection%200000024).

## Ontologies

The following table comes from Semantic Farm collection
[`0000024`](https://semantic.farm/collection/0000024), which is automatically
synced from the TIB Terminology Service collection
[`fairmat`](https://service.tib.eu/terminology/collections/fairmat).

| Prefix                                     | Name                                       | License   |
| ------------------------------------------ | ------------------------------------------ | --------- |
| [`BFO`](https://semantic.farm/bfo)         | Basic Formal Ontology                      | CC-BY-4.0 |
| [`nexus`](https://semantic.farm/nexus)     | NeXusOntology                              |           |
| [`tfsco`](https://semantic.farm/tfsco)     | Thin-film Solar Cells Ontology             |           |
| [`voc4cat`](https://semantic.farm/voc4cat) | A vocabulary for the catalysis disciplines | CC0-1.0   |

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
