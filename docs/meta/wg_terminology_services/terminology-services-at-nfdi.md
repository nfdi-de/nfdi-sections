---
title: Terminology Services at NFDI
---

This spreadsheet provides an overview of terminology services and registries which are used in the NFDI consortia. For a specific terminology service some information like used software, API location, documentation.			
			
			
Note: The file is still editable since it is not clear if other terminlogy services exist which are unknown for us or will be created in the future. However, in May 2025, a version was named to create a snapshot of the current version(First Version Snapshot). At this point the data was used for the E-Science-Days 2025 proceedings manuscript which is named: "Terminology Services in the DACH region landscape - What are the essential requirements?"			
			
			
## Glossary			

- terminology	controlled:  vocabularies, ontologies, thesauri, classifications, authority files...	
- terminology registry: 	collection of information about terminologies (e.g. a plain list of terminologies)		
- terminology service:	database containing terminologies		
			
## Columns			
- service maintainer:	Organization in charge of running the service (no "community" or "collaboration")		
- type:	Either "service" or "registry"		
- API:	Defined set of HTTP requests to query terminology API		
- Format:	Data format(s) in which terminology data can be retrieved		
	data model	owl, rdf, rdfs, skos, tbx, lexinfo etc.	
	serializations	rdf/xml, ttl, xml etc.	

This page lists terminology services and registries used across NFDI consortia, extracted from the spreadsheet at `/files/meta/Terminology Services_at_NFDI.xlsx`.

:::info Note
Table can be scrolled vertically at bottom of table
:::


|consortia|name of service or registry|URL|service maintainer|type|Software used|API|Formats|documentation|features|weakness|target domains|applications|
|---|---|---|---|---|---|---|---|---|---|---|---|---|
|NFDI4Health|SemLookP|https://semanticlookup.zbmed.de/|ZB MED|service|Ontology Lookup Service (OLS)|OLS||https://semanticlookup.zbmed.de/ols/docs/index|mapping services via OxO|not multilingual<br/>no versioning|health, biology, epidemilogy||
|NFDI4Biodiversity|BiodivPortal|https://biodivportal.gfbio.org|InfAI|service|OntoPortal technology|JSON-LD|OWL, SKOS|https://terminologies.gfbio.org/api/|mapping, versionning (metadata), annotation|no terminology editing, no user interface|biodiversity, biology, ecology||
|NDFI4Objects|DANTE|https://dante.gbv.de/search|VZG|service|own dev, compatible with JSKOS-Server|JSKOS-API|JSKOS|https://github.com/gbv/jskos-server#api|terminology editing with user management||humanities||
|NDFI4Objects|coli-conc KOS registry|https://coli-conc.gbv.de/api/|VZG|service|JSKOS Server|JSKOS-API|JSKOS|https://github.com/gbv/jskos-server#api|mapping, annotation|no user interface|humanities||
|NDFI4Chem|NFDI4Chem Terminology Service|https://terminology.nfdi4chem.de/|TIB|service|Ontology Lookup Service (OLS)|OLS||https://terminology.nfdi4chem.de/ts/docs/api|GitHub issue list & filing, Notes feature|not multilingual|chemistry||
|NFDI4Ing|NFDI4Ing Terminology Service|https://terminology.nfdi4ing.de/ts/|TIB|service|Ontology Lookup Service (OLS)|OLS||https://terminology.nfdi4ing.de/ts4ing/documentation|Collection management|not multilingual|engineering|application profiles (SHACL) Base Services S3-1/AIMS at NFDI4Ing; ORKG|
|DataPLANT|SwateOntology DB / Swobup|https://github.com/nfdi4plants/Swobup|?|?|own dev||OBO|https://nfdi4plants.org/content/service.html|||||
|KonsortSWD|GESIS-Dienst Kontrolliertes Vokabular|https://lod.gesis.org/de/|GESIS|service|Skosmos|Skosmos|JSON-LD|https://api.finto.fi/doc/||looks like prototype|||
|KonsortSWD|CESSDA Vocabulary Service|https://vocabularies.cessda.eu/|CESSDA Main Office|service|own dev|own|SKOS|https://api.tech.cessda.eu/|||||
|KonsortSWD|Metadata and Vocabulary Verbund FDB (Metadata Redigstry, MDR)|https://mdr.iqb.hu-berlin.de/#/catalogs|CESSDA Main Office|service|||||||||
|NFDI4Cat|Ontology overview for catalysis (entry point for newcomers)|https://nfdi4cat.org/services/ontologie-sammlung/|DECHEMA|registry|own dev|-|HTML||||||
|NFDI4Cat|BioPortal|https://bioportal.bioontology.org/|NCBO (US)|service|bioportal|yes|OWL, SKOS|https://www.bioontology.org/wiki/BioPortal_Help||partial SKOS support|science|lookup, some partners in NFDI4Cat have temporary local biobortal-setups for experimentation (and non-rate limited API access)|
|NFDI4Culture|GND (as terminology backbone)|https://gnd.network|DNB / GND Cooperative|service||||||only GND terminology|literature, people, subjects||
|Text+|GND (as terminology backbone)|https://gnd.network|DNB / GND Cooperative|service||||||only GND terminology|literature, people, subjects||
|BERD@NFDI|-|||||||https://www.berd-nfdi.de/servicestools/|||||
|FAIRmat|NOMAD Metainfo|https://nomad-lab.eu/prod/v1/gui/analyze/metainfo|HUB|registry|own dev|own dev|JSON|https://nomad-lab.eu/prod/v1/gui/analyze/metainfo|||||
|FAIRmat|NOMAD Laboratory|https://nomad-lab.eu/prod/v1/gui/about/information|HUB|service|own dev|own dev||https://nomad-lab.eu/prod/v1/docs/index.html|||||
|NFDI-MatWerk|MATPortal|https://matportal.org/|?|service|Ontoportal|Ontoportal|||||||
|NFDI4Health|OntoServer|https://terminology-highmed.medic.medfak.uni-koeln.de/|Maybe Faculty of Medicine at University of Cologne?|service|CSIRO Ontoserver|?|FHIR-JSON|https://ontoserver.csiro.au/site/|Support for OWL2 EL, support for ECL, versioning|commercial, no open access|health, social science, epidemiology||
|NFDI4Health|Snowstorm||?|service|IHTSDO Snowstorm|?|FHIR-JSON|https://github.com/IHTSDO/snowstorm/blob/master/docs/using-the-fhir-api.md|Versioning, value set expansion|SNOMED CT needs to be licensed in some countries|health, social science, epidemiology||
|NFDI4Health|LOINC|https://loinc.org/fhir/|Regenstrief Institute|service|?|?|FHIR-JSON|https://fhir.loinc.org|versioning, LOINC parts|central instance|health||
|NFDI4Immuno<br/>NFDI4BIOIMAGE<br/>NFDI4Cat|EBI Ontology Lookup Service (OLS)|https://www.ebi.ac.uk/ols|EBI|service|Ontology Lookup Service (OLS)|OLS||https://www.ebi.ac.uk/ols/docs/developer|||biology||
|NFDI4Earth|GEMET - GEneral Multilingual Environmental Thesaurus|https://www.eionet.europa.eu/gemet/|EEA and Eionet|service||REST - see https://www.eionet.europa.eu/gemet/en/webservices/|JSON|https://www.eionet.europa.eu/gemet|support 37 languages!||environment||
|NFDI4Earth|Webdienst für geographische Namendaten|https://sgx.geodatenzentrum.de/wfs_gnde|BKG|service|custom dev (third party)|Web Feature Service||https://gdz.bkg.bund.de/index.php/default/webdienste/sonstige-digitale-geodaten/wfs-geographische-namen-gn-de-wfs-gnde.html|provides a taxonomy for placenames and translates places names in geographic coordinates|german only|all whoch require geocoding via place names||
|NFDI4Earth|NERC Vocabulary Server (NVS)|https://vocab.nerc.ac.uk/|National Oceanography Centre - British Oceanographic Data Centre (BODC)|service|own dev (third party)|SPARQL + own|SKOS||mappings, open source https://github.com/nvs-vocabs||||
|NFDI4Earth|BARTOC Skosmos|https://bartoc-skosmos.unibas.ch/|not maintained anymore, may be move to VZG|service|Skosmos|Skosmos||||not mained anymore|||
|NFDI4Culture|Getty Vocabularies (AAT, ULAN, TGN)|https://www.getty.edu/research/tools/vocabularies/lod/|J. Paul Getty Trust|service||SPARQL|RDF/XML, JSON-LD, Turtle, N-Triples, RDF/JSON|http://vocab.getty.edu/doc/|multilingual|only partially in German|cultural studies, humanities, heritage collections, architectural history, art history||
|NFDI4Culture|Iconclass|https://iconclass.org/|Henry van de Waal Foundation|service|?|https://iconclass.org/help/api|RDF, JSON|https://iconclass.org/help/lod|multilingual, also in German||art history, cultural studies, heritage collections||
|NFDI4Culture|TIB annotationService ANTELOPE|https://service.tib.eu/annotation/|TIB|service|FALCON2, ICONCLASS API, own dev|REST|JSON||Entity search with class tree visualization. planned focus is easy integration and personaization|only english language currently|||
|NFDI4Culture|xTree.public|http://xtree-public.digicult-verbund.de/vocnet/|DigiCULT Verbund eG|service|own dev|REST, SPARQL (one vocab)|JSON, RDF/XML, TriG|https://xtree-public.digicult-verbund.de/vocnet/docs/xTree_rest_0.86.pdf|web-based vocab development platform in accordance with ISO 25964; editing, mapping, publication; multilingual|German, partially multilingual (but patchy)|general concepts for cultural heritage collections, preservation of monuments, art history||
|NFDI4Culture|md:term Vokabularbrowser|https://term.museum-digital.de/|museum-digital.de|service|own dev|REST|JSON, SKOS|https://nat.museum-digital.de/?t=text&st=api, https://de.handbook.museum-digital.info/||German only|cultural heritage and art collections||
||SkoHub|https://skohub.io|Hochschulbibliothekszentrum des Landes NRW|service|SkoHub Vocabs, SkoHub Reconcile|Data is the API|SKOS, JSON|https://skohub.io|web-based, reconciliation, git-based workflow||controlled vocabularies (SKOS)|
