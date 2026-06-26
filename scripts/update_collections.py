# /// script
# requires-python = ">=3.14"
# dependencies = [
#     "bioregistry>=0.13.59",
#     "click>=8.3.2",
#     "tabulate>=0.10.0",
# ]
# ///

"""Update collections."""

import datetime
import os
from pathlib import Path
from textwrap import dedent

import bioregistry
import bioregistry.version
import click
from bioregistry.constants import NFDI_ROR
from tabulate import tabulate

HERE = Path(__file__).parent.resolve()
ROOT = HERE.parent.resolve()
ONTOLOGIES = ROOT.joinpath("docs", "meta", "wg_onto", "used-ontologies").resolve()

TODAY = datetime.date.today().strftime("%Y-%m-%d")
VERSION = bioregistry.version.get_version()
V_LINK = f"Semantic Farm ([v{VERSION}](https://github.com/biopragmatics/bioregistry/releases/tag/v{VERSION}))"

RENAMES = {"text+": "text-plus", "berd@nfdi": "berd-nfdi"}
COLOPHON = f"""
## Colophon

This page was automatically generated on {TODAY} using {V_LINK} by running the following commands:

```console
$ git clone https://github.com/nfdi-de/nfdi-sections
$ cd nfdi-sections
$ uv run scripts/update_collections.py
$ git commit -am "Update WG Onto collections"
$ git push
```
"""


@click.command()
def main() -> None:
    for path in ONTOLOGIES.glob("*.md"):
        path.unlink()

    index_rows = []
    for collection in bioregistry.read_collections().values():
        if not collection.has_organization_with_ror(NFDI_ROR):
            continue

        name = collection.name.removesuffix(" Collection").strip()
        path = get_collection_path(collection, name)
        text = get_collection_text(collection, name)
        path.write_text(text)

        index_rows.append(
            (
                f"[{name}](/docs/meta/wg_onto/used-ontologies/{path.name})",
                len(collection.resources) if collection_not_stub(collection) else "",
                ", ".join(sorted(m.name for m in collection.maintainers or [])),
            )
        )

    index_text = dedent("""\
    ---
    title: Used Ontologies
    ---

    The NFDI Section Metadata Working Group on Ontology Harmonization and Mapping
    has generated an overview of the ontologies, terminologies, controlled vocabularies,
    and related semantic artifacts used by each consortium.

    We first partnered with members of each consortium to collaboratively construct their
    respective collections in the [Semantic Farm](https://semantic.farm), a comprehensive
    registry of ontologies, terminologies, controlled vocabularies, and related semantic
    artifacts. These collections can be iteratively extended several ways:
    
    1. by following the _suggestion_ link on one of the following pages
    2. by making an issue on the Semantic Farm's [issue tracker](https://github.com/biopragmatics/bioregistry/issues/new)
    3. by editing the underlying
       single source of truth [JSON file](https://github.com/biopragmatics/bioregistry/edit/main/src/bioregistry/data/collections.json)
       on the Semantic Farm's version control system.
    4. in the case where the collection is maintained in a system external to the Semantic
       Farm, by following the link to the external definition and following the external
       system's instructions (see note below)

    :::note

    Some consortia use systems that are external to the Semantic Farm for defining,
    curating, and maintaining their respective ontology collections. For example:

    - NFDI4Chem curates their collection in the [TIB-TS](https://terminology.tib.eu/ts/collections/nfdi4chem).
    - NFDI4Biodiversity has their own [OntoPortal instance](https://biodivportal.gfbio.org/) for which all
      loaded ontologies comprise their collection.
    - NFDI4Objects curates their collection in [BARTOC](https://bartoc.org/en/node/18961).

    In each of these (and similar) cases, the collections are synced from the
    external system into the Semantic Farm. This is beneficial for users
    because the Semantic Farm provides a centralized access point for _all_
    consortia's collections, and the Semantic Farm enriches the collections
    with additional context about the resources contained therein that is not
    available in the external systems. However, for these consortia, the
    external system's definition remains the _single source of truth_.

    The Semantic Farm also enables adding additional resources that would not
    be indexed in the system that are external to the Semantic Farm. For
    example, UniProt isn't an ontology and therefore won't get indexed by the
    TIB-TS, but might be an important addition to the DataPLANT collection,
    which could be captured in the corresponding collection in the Semantic
    Farm.

    :::

    See source data at https://semantic.farm/collection/?ror=05qj6w324.

    ## Consortia

    """)

    index_text += "\n\n"
    index_text += tabulate(
        sorted(index_rows),
        headers=["Consortium", "#", "Collection Maintainers"],
        tablefmt="github",
    )
    index_text += COLOPHON

    ONTOLOGIES.joinpath("index.md").write_text(index_text)

    os.system(
        f"npx --yes prettier --check --prose-wrap always --write '{ONTOLOGIES}/*.md'"
    )


def collection_not_stub(collection: bioregistry.Collection) -> bool:
    prefixes = set(collection.get_prefixes())
    return prefixes and prefixes != {"bioregistry"}


def get_collection_text(collection: bioregistry.Collection, name: str) -> str:
    text = dedent(f"""\
        ---
        title: {name}
        ---
    """)

    if collection_not_stub(collection):
        text += collection.description + "\n"
    else:
        text += "This consortia has not yet created an ontology list.\n"

    if collection.maintainers:
        text += "## Maintainers\n\n"
        for maintainer in collection.maintainers:
            text += f"- [{maintainer.name.strip()}](https://semantic.farm/orcid:{maintainer.orcid})\n"
        text += "\n"
    else:
        text += "## Maintainers\n\nThis collection does not yet have maintainers.\n\n"
    text += (
        f"\nSuggest a new addition to this collection [here](https://github.com/biopragmatics/bioregistry/"
        f"issues/new?template=add-collection-prefix.yml&collection={collection.identifier}&title=Add%20prefix"
        f"%20X%20to%20collection%20{collection.identifier}).\n\n"
    )

    rows = []

    if collection_not_stub(collection):
        has_comments = any(
            annotation.comment for annotation in collection.get_annotated_prefixes()
        )
        for annotation in collection.get_annotated_prefixes():
            resource = bioregistry.get_resource(annotation.prefix, strict=True)

            license = resource.get_license()
            if license and license.startswith("http"):
                license = f"[Custom]({license})"

            parts = [
                f"[`{resource.get_preferred_prefix() or resource.prefix}`](https://semantic.farm/{resource.prefix})",
                resource.get_name(),
                license,
            ]
            if has_comments:
                parts.append(annotation.comment)
            rows.append(tuple(parts))

        headers = ["Prefix", "Name", "License"]
        if has_comments:
            headers.append("Comment")
        text += dedent(f"""
            ## Ontologies

            The following table comes from Semantic Farm collection
            [`{collection.identifier}`](https://semantic.farm/collection/{collection.identifier})
        """).rstrip()
        references = {r.prefix: r.identifier for r in collection.mappings or []}
        if tib_collection := references.get("tib.collection"):
            text += dedent(f"""\
                , which is automatically synced from the TIB Terminology Service
                collection [`{tib_collection}`](https://service.tib.eu/terminology/collections/{tib_collection}).
            """)
        elif bartoc_collection := references.get("bartoc"):
            text += dedent(f"""\
                , which is automatically synced from the BARTOC
                collection [`{bartoc_collection}`](https://bartoc.org/vocabularies/?sort=relevance&order=desc&limit=10&filter=in%3Ahttp%3A%2F%2Fbartoc.org%2Fen%2Fnode%2F{bartoc_collection}).
            """)
        else:
            text += "."

        text += "\n\n" + tabulate(rows, headers=headers, tablefmt="github") + "\n"

    # TODO add a "how to edit" section that either
    #  says to make a suggestion on Semantic Farm or to update
    #  upstream lists on TIB/BARTOC

    text += COLOPHON
    return text


def get_collection_path(collection: bioregistry.Collection, name: str) -> Path:
    key = RENAMES.get(name.lower(), name.lower())
    path = ONTOLOGIES.joinpath(key).with_suffix(".md")
    return path


if __name__ == "__main__":
    main()
