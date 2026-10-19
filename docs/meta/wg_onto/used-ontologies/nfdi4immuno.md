---
title: NFDI4Immuno
---

A placeholder collection of ontologies, controlled vocabularies, and schemas
relevant for the NFDI4Immuno Consortium created by the
[NFDI Section Metadata WG Ontology Harmonization and Mapping](https://github.com/nfdi-de/section-metadata-wg-onto/).
The working group is in the process of identifying NFDI4Immuno Consortium
members appropriate for maintaining this collection.

## Maintainers

- [Ulrik Stervbo](https://semantic.farm/orcid:0000-0002-2831-8868)
- [Sebastian Böhm](https://semantic.farm/orcid:0009-0006-4599-6309)

Suggest a new addition to this collection
[here](https://github.com/biopragmatics/bioregistry/issues/new?template=add-collection-prefix.yml&collection=0000043&title=Add%20prefix%20X%20to%20collection%200000043).

## Ontologies

The following table comes from Semantic Farm collection
[`0000043`](https://semantic.farm/collection/0000043).

| Prefix                                         | Name                                                   | License                                                           | Comment                                                                                                                                                |
| ---------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`CLO`](https://semantic.farm/clo)             | Cell Line Ontology                                     | CC-BY-3.0                                                         | Recommended for entities of type: cell_lin_name                                                                                                        |
| [`DOID`](https://semantic.farm/doid)           | Human Disease Ontology                                 | CC0-1.0                                                           | Disease ontology used to describe patients disease / disease of research focus. Recommended for entities of type: disease                              |
| [`HANCESTRO`](https://semantic.farm/hancestro) | Human Ancestry Ontology                                | CC-BY-4.0                                                         | Recommended for entities of type: ancestry                                                                                                             |
| [`NCIT`](https://semantic.farm/ncit)           | National Cancer Institute Thesaurus                    | CC-BY-4.0                                                         | Only a subclass of NCIT is used to describe the medication used within the study / individual patient. Recommended for entities of type: medication    |
| [`OBI`](https://semantic.farm/obi)             | Ontology for Biomedical Investigations                 | CC-BY-4.0                                                         | Only a subclass of OBI is used to describe the data processing steps before the analysis part. Recommended for entities of type: data_processing_steps |
| [`snomedct`](https://semantic.farm/snomedct)   | Systematized Nomenclature of Medicine - Clinical Terms | [Custom](https://uts.nlm.nih.gov/uts/assets/LicenseAgreement.pdf) | Only a subclass of SNOMED CT is used to describe the Ethnicity of human patients. Recommended for entities of type: Ethnicity                          |
| [`UBERON`](https://semantic.farm/uberon)       | Uber Anatomy Ontology                                  | CC-BY-3.0                                                         | Only a subclass of Uberon is used to describe the tissue where the sample was taken from. Recommended for entities of type: tissue                     |

## Colophon

This page was automatically generated on 2026-10-19 using Semantic Farm
([v0.15.5](https://github.com/biopragmatics/bioregistry/releases/tag/v0.15.5))
by running the following commands:

```console
$ git clone https://github.com/nfdi-de/nfdi-sections
$ cd nfdi-sections
$ uv run scripts/update_collections.py
$ git commit -am "Update WG Onto collections"
$ git push
```
