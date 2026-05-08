---
title: Used Ontologies
---

The NFDI Section Metadata Working Group on Ontology Harmonization and Mapping
has generated an overview of the ontologies, terminologies, controlled
vocabularies, and related semantic artifacts used by each consortium.

We first partnered with members of each consortium to collaboratively construct
their respective collections in the [Semantic Farm](https://semantic.farm), a
comprehensive registry of ontologies, terminologies, controlled vocabularies,
and related semantic artifacts. These collections can be iteratively extended by
following the "suggestion" link on one of the following pages, by making an
issue on the Semantic Farm's issue tracker, or by editing the underlying
[single source of truth JSON file](https://github.com/biopragmatics/bioregistry/blob/main/src/bioregistry/data/collections.json).

:::note

Some consortia use external systems for curating their ontology lists. For
example, NFDI4Chem curates their collection directly in the TIB-TS,
NFDI4Biodiversity has their own OntoPortal instance for which all loaded
ontologies comprise their collection, and NFDI4Objects curates their collection
in BARTOC. In these cases, the collections are synced into the Semantic Farm.
Each consortia's collection page gives additional context if it is maintained on
an external system.

:::

See source data at https://semantic.farm/collection/?ror=05qj6w324.

## Consortia

| Consortium                                                                   | #   | Collection Maintainers                                   |
| ---------------------------------------------------------------------------- | --- | -------------------------------------------------------- |
| [BERD@NFDI](/docs/meta/wg_onto/used-ontologies/berd-nfdi.md)                 | 3   | Atif Latif, Fidan Limani                                 |
| [DAPHNE4NFDI](/docs/meta/wg_onto/used-ontologies/daphne4nfdi.md)             | 1   | Heike Görzig, Rolf Krahl                                 |
| [DataPLANT](/docs/meta/wg_onto/used-ontologies/dataplant.md)                 | 39  | Angela Kranz, Hannah Dörpholz, Kathryn Dumschott         |
| [FAIRagro](/docs/meta/wg_onto/used-ontologies/fairagro.md)                   | 23  | Gabriel Schneider                                        |
| [FAIRmat](/docs/meta/wg_onto/used-ontologies/fairmat.md)                     | 4   | Markus Kühbach                                           |
| [GHGA](/docs/meta/wg_onto/used-ontologies/ghga.md)                           | 12  | Karoline Mauer                                           |
| [KonsortSWD](/docs/meta/wg_onto/used-ontologies/konsortswd.md)               | 37  | Noemi Betancort                                          |
| [MaRDI](/docs/meta/wg_onto/used-ontologies/mardi.md)                         | 8   | Björn Schembera                                          |
| [NFDI-MatWerk](/docs/meta/wg_onto/used-ontologies/nfdi-matwerk.md)           | 6   | Ebrahim Nourouzi, Heike Fliegl                           |
| [NFDI4BIOIMAGE](/docs/meta/wg_onto/used-ontologies/nfdi4bioimage.md)         | 22  | Damien Goutte-Gattat                                     |
| [NFDI4Biodiversity](/docs/meta/wg_onto/used-ontologies/nfdi4biodiversity.md) | 65  | Naouel Karam, Ralph Schäfermeier                         |
| [NFDI4Cat](/docs/meta/wg_onto/used-ontologies/nfdi4cat.md)                   | 26  | Hendrik Borgelt, Alexander Behr, David Linke             |
| [NFDI4Chem](/docs/meta/wg_onto/used-ontologies/nfdi4chem.md)                 | 46  | Philip Strömert                                          |
| [NFDI4Culture](/docs/meta/wg_onto/used-ontologies/nfdi4culture.md)           | 30  | Tabea Tietz                                              |
| [NFDI4DataScience](/docs/meta/wg_onto/used-ontologies/nfdi4datascience.md)   | 3   | Benjamin Zapilko                                         |
| [NFDI4Earth](/docs/meta/wg_onto/used-ontologies/nfdi4earth.md)               | 27  | Auriol Degbelo                                           |
| [NFDI4Energy](/docs/meta/wg_onto/used-ontologies/nfdi4energy.md)             | 17  | Amanda Wein                                              |
| [NFDI4Health](/docs/meta/wg_onto/used-ontologies/nfdi4health.md)             | 38  | Matthias Löbe                                            |
| [NFDI4Immuno](/docs/meta/wg_onto/used-ontologies/nfdi4immuno.md)             |     | Sebastian Böhm, Ulrik Stervbo                            |
| [NFDI4Ing](/docs/meta/wg_onto/used-ontologies/nfdi4ing.md)                   | 103 | Dorothea Iglezakis, Giacomo Lanza, Susanne Arndt         |
| [NFDI4Memory](/docs/meta/wg_onto/used-ontologies/nfdi4memory.md)             | 21  | Tabea Tietz                                              |
| [NFDI4Microbiota](/docs/meta/wg_onto/used-ontologies/nfdi4microbiota.md)     |     | Anandhi Iyappan, Maja Magel, Noriko Cassman              |
| [NFDI4Objects](/docs/meta/wg_onto/used-ontologies/nfdi4objects.md)           | 47  | Anja Gerber, Florian Thiery, Jakob Voß, Kristina Fischer |
| [NFDIxCS](/docs/meta/wg_onto/used-ontologies/nfdixcs.md)                     | 18  | Fabian Huch                                              |
| [PUNCH4NFDI](/docs/meta/wg_onto/used-ontologies/punch4nfdi.md)               |     | Harry Enke                                               |
| [Text+](/docs/meta/wg_onto/used-ontologies/text-plus.md)                     | 15  | Thorsten Trippel                                         |

## Colophon

This page was automatically generated on 2026-05-08 using Semantic Farm
([v0.13.51](https://github.com/biopragmatics/bioregistry/releases/tag/v0.13.51))
by running the following commands:

```console
$ git clone https://github.com/nfdi-de/nfdi-sections
$ cd nfdi-sections
$ uv run scripts/update_collections.py
$ git commit -am "Update WG Onto collections"
$ git push
```
