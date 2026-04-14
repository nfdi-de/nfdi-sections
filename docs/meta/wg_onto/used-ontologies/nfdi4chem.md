---
title: NFDI4Chem
---

The review [The current landscape of author guidelines in chemistry through the lens of research data sharing](https://doi.org/10.1515/pac-2022-1001) provides an overview and usage guidance for ontologies in chemistry.

The table below is from the WG Ontology collection spreadsheet.

Source: `/files/meta/Used_Ontologies_at_NFDI.xlsx` (sheet: NFDI4Chem)

|Ontology ID|Domain|License|Modularity|Format|Used in|Comments|developed / reused / only indexed / only evaluated|NFDI4Chem contributions|
|---|---|---|---|---|---|---|---|---|
|AFO|Chemistry - all chemical domains|CC BY 4.0|BFO 2020, questionable OBO alignment, imports: DCTERMS, CARO, SKOS, DC, OWL, RDFS, NCIT, OBI, NCBITAXON, IAO, PATO, ENVO, BFO, RO, CHEBI, CHMO|owl|Allotrope™||reused||
|ChEBI|Chemistry - chemical entities|CC BY 4.0|OBO_based, BFO_mappable, imports: RO, IAO, RDFS, OWL, OIO|owl|YMDB, HMDB, PubChem, MassBank, KNApSAcK, UM-BBD, GMD, SMID-DB||reused||
|ChemOnt|Chemistry - chemical entities|Custom OA license|BFO_mappable, ChEBI_mappable, OBO_mappable|owl|YMDB, HMDB, T3DB, ECMDB, DrugBank, PubChem, ChEBI, LIPID MAPS, MoNA||only evaluated||
|CHMO|Chemistry - chemical methods|CC BY 4.0|OBO_based, extends OBI, maps_to: "FIX, REX", imports: CHEBI, OIO, DC, IAO, DCTERMS, OBI, MS, RDFS, BFO, OWL, RO, OBCS|owl|Chemotion, Allotrope™||reused|on GitHub|
|CHEMINF|Chemistry - cheminformatics|CC0 1.0|OBO_based, extends IAO, imports: OIO, DC, OBI, RDFS, OWL, IAO, PR, DCTERMS, OMO, PATO, BFO, RO, CHEBI, APOLLO_SV, GO, UO, SKOS|owl|PubChem, Open PHACTS||reused|on GitHub|
|MS|Chemistry - mass spectrometry|CC BY 4.0|OBO_mappable, imports: CARO, CHEBI, RO, GO, NCBITAXON, DC, NCIT, PATO, UBERON, OBI, RDFS, OIO, DCTERMS, PR, IAO, SKOS, SO, NBO, OWL, OGMS, PCO, CL, ENVO, BFO, UO, BSPO, STATO|owl|mzML||reused||
|MOP|Chemistry - molecular reactions|CC BY 4.0|BFO aligned, OBO based, imports: CHEBI, OIO, DC, IAO, DCTERMS, RDFS, BFO, RXNO, RO|owl|RXNO||reused|on GitHub|
|nmrCV|Chemistry - NMR spectroscopy|Public Domain Mark 1.0|BFO aligned, OBO_mappable, imports: DC, RDFS, OIO, DCTERMS, SKOS, IAO, BFO|owl|MetaboLights, HMDB||reused|on GitHub|
|FIX|Chemistry - physico-chemical methods and properties|unkown|orphaned, use discouraged|owl||OUTDATED/ORPHANED; not encurraged for reuse|only indexed||
|REX|Chemistry - physico-chemical processes|unkown|orphaned, use discouraged|owl||OUTDATED/ORPHANED; not encurraged for reuse|only indexed||
|BFO|Upper level (classes only)|CC BY 4.0|BFO version 2.0 classes only, OBO backbone|owl|~300 ontologies & ~50 organizations, PubChem||reused||
|IAO|Information artifacts|CC BY 4.0|BFO aligned, OBO based, imports: DC, OBI, RDFS, DCTERMS, OMO, OIO, PATO, BFO, RO, APOLLO_SV, UO|owl|OBO Foundry, Allotrope™, PubChem, ISA tools||reused|on GitHub|
|OBI|Biomedicine|CC BY 4.0|BFO aligned, OBO based, imports: CHEBI, GO, DC, NCBITAXON, OWL, OMRSE, UBERON, VO, RDFS, IAO, SO, PR, DCTERMS, CLO, OGMS, HP, IDO, OPL, OBA, PATO, CL, OIO, BFO, RO, COB, APOLLO_SV, ENVO, UO, CHMO|owl|OBO Foundry, Allotrope™, PubChem||reused|on GitHub|
|UO|Scientific units|CC BY 3.0|OBO_based|owl|OBO Foundry, UOM, PubChem||reused|on GitHub|
|OM|Scientific units|CC BY 4.0|no mapping/alignment to others known|owl|alignment probably not needed for use case of reusing for units||reused||
|QUDT|Scientific units|CC BY 4.0|OBO_mappable|owl|Open PHACTS||reused||
|PATO|Phenotypic & physical qualities|CC BY 3.0|OBO_based|owl|OBO Foundry, Allotrope™||reused|on GitHub|
|SEPIO|Scientific Evidence and Provenance|CC BY 3.0|BFO aligned, OBO based (imports from OBI, RO, IAO, COB, PATO, STATO), partial PROV-O alignement (e.g. Agent & Activity)|owl|Ga4GH Variant Annotation Model||reused||
|ENVO|environments,environmental processes, ecosystems, habitats, and related entities|CC0 1.0|OBO_based, BFO_aligned|owl|||reused||
|PROV-O|general scientific and provenance|W3C License|W3C_based|owl|||reused||
|SWO|software domain|CC BY 4.0|BFO aligned|owl|||reused||
|SIO|Upper level|CC BY 4.0|BFO aligned|owl|PubChem, Bio2RDF, SADI Semantic Web Services, DisGeNET’s gene-disease associations, EBI’s Gene Expression Atlas, Graph4Code||reused||
|EDAM|Life-sciences & data management|CC BY 4.0|OBO_mappable|owl|EMBOSS, Bio-jETI||reused||
|EFO|experimental variables|Apache License 2.0|BFO aligned|owl|EBI databases, core ontology for OpenTargets.org,  NHGRI GWAS catalogue||reused|on GitHub|
|RO|General science w/focus on life sciences|CC0 1.0|OBO_based, BFO_aligned, DC, OIO, DCTERMS, IAO, SKOS, OBI, OGMS, OMO, UBERON, RDFS, PATO, ENVO, BFO, GO, CL, CHEBI|owl|all OBO ontologies and many others||reused|on GitHub|
|DUO|data use conditions|CC BY 4.0|OBO_based, BFO_aligned|owl|||reused||
|TIME|Time|CC BY 4.0|no mapping/alignment to others known, W3C_based|owl|||reused||
|PROCO|Chemistry - process chemistry|CC BY 4.0|AFO & OBO based, BFO_aligned|owl|Allotrope™||reused||
|SOSA|general scientific domain (Sensor, Observation, Sample, and Actuator)|W3C License|W3C_based (imports FOAF & TIME)|owl|||only indexed||
|SSN|general scientific domain (Sensor, Observation, Sample, and Actuator)|W3C License|W3C_based (imports SOSA, FOAF & TIME)|owl|||only indexed||
|SSN-SYSTEM|SSN extention|W3C License|W3C_based|owl|||only indexed||
|OBOE|general scientific domain (scientific observation and measurement)|CC BY 3.0||owl|||only indexed||
|BTO|Biology - enzyme comprising tissues, cell lines, cell types and cell cultures|CC BY 4.0|no mapping/alignment to others known, slim ontological commitment allows for broad modular reuse|owl||OBO ontology; indexed in NFDI4Chem due to NMRxiv's need for annotating biosogicalsamples|only indexed||
|OntoKin|Chemistry - reaction kinetics|Unknown|based on OntoCAPE upper level & modules, OBO_incompatible|owl|J-Park Simulator||only indexed||
|CHIRO|Chemistry - roles of chemical entities|CC0 1.0|OBO_based, extends ChEBI's role branch, BFO_aligned|owl|Unknown||reused||
|MI|Biology - structured controlled vocabulary for the annotation of experiments concerned with protein-protein interactions|CC BY 4.0|no mapping/alignment to others known|owl||unsure why indexed|only indexed||
|NCIT|Biology - reference terminology that includes broad coverage of the cancer domain, including cancer related diseases, findings and abnormalities|CC BY 4.0|OBO_based|owl||unsure why indexed, not BFO aligned but OBO Edition|only indexed||
|MOD|Biology -  protein chemical modifications|CC BY 4.0|no mapping/alignment to others known|owl||unsure why indexed|only indexed||
|REPRODUCEME|General science|CC BY-NC-SA 2.0|P-PLAN & PROV-O extention|owl|||only indexed||
|OntoCAPE|Upper level & engineering|GNU GPLv2|no mapping/alignment to others known|owl|J-Park Simulator||only evaluated||
|RXNO|Chemistry - synthetic reactions|CC BY 4.0|OBO_based, extends MOP & OBI, BFO_aligned|owl|NameRXN, Wikipedia, Chemotion||reused|on GitHub|
|VIBSO|Chemistry - vibrational spectroscopy|CC BY 4.0|OBO_based, extends CHMO & OBI, BFO_aligned|owl|NFDI4Chem||developed|on GitHub|
|DCTERMS|General|CC BY 4.0|used as module for annotation properties|rdf||used for ontology annotations, e.g contributor, license etc.|reused||
|DCAT|General|W3C License|W3C_based|owl|NFDI4Chem Search service||reused|
|BIOSCHEMA|Biology, Chemistry|CC BY 4.0|SCHEMA_aligned|rdf|NFDI4Chem Search service, and possibly others||reused|yes by TA2 & TA4|
