---
title: KonsortSWD
---

Source: `/files/meta/Used_Ontologies_at_NFDI.xlsx` (sheet: KonsortSWD)

|Ontology ID|Domain|License|Modularity|Format|developed / reused / only indexed / only evaluated|Used in|Comments|
|---|---|---|---|---|---|---|---|
|MeSH|biomedical and health-related fields||Thesaurus from US National Library of Medicine, also in RDF, SPARQL|rdf|only indexed|PubMed, MEDLINE|Medical Subject Headings (MeSH) thesaurus|
|ISCO|International Standard Classifcation of Occupations|CC0 1.0|ISCED-ISCO, maps_to: "KldB"||only evaluated|International Labour Organization||
|ISCED2011|International Standard Classification of Education||||only indexed|UNESCO, Statistisches Bundesamt|description of national educational systems and a methodology that translates national educational programmes into internationally comparable levels of education: education attainment|
|ISCED-F 2013|Fields of education and training 2013||||only indexed|UNESCO, Statistisches Bundesamt||
|THESOZ|Social Sciences Thesaurus||SKOS (RDF), maps_to: "DBPEDIA, STW"|skos|only indexed|GESIS|(general) concepts, subjects and topics|
|STW|Economics|CC BY 4.0|SKOS (RDF), maps_to: "DBPEDIA, STW"|skos|only indexed|ZBW - Leibniz Information Centre for Economics : portal for economics EconBiz|vocabulary on any economic subject|
|TEI|Textual Documents||XML schema|xsd|only evaluated|internal use for the annotation of interview transcriptions, corpora|standard for the representation of texts in digital form|
|WIKIDATA|generic||||only evaluated||general concepts, subjects and topics|
|ISO-3166|Country codes||||only indexed|Statistisches Bundesamt, libraries, data portals, databases|authority control|
|ISO-639-3|Language codes||||only indexed|Statistisches Bundesamt, libraries, data portals, databases|authority control|
|GND|generic|||rdf|only indexed||authority control, general concepts, subjects and topics|
|Vocabulary of Demography|social sciences, demography, statistics||||only evaluated|IUSSP-CODATA Working Group on FAIR Vocabularies|work in progress|
|CESSDA/DDI Vocabularies|social sciences|CC BY 4.0|RDF: SKOS|skos|reused|CESSDA and DDI data archives|a detailed list will be added here|
|CESSDA|social sciences|CC BY-NC-SA 4.0||skos|reused|||
|Data Documentation Initiative (DDI)|social sciences, survey data|CC BY 4.0|XML schema|xsd|reused||abstract data model: it metadata about both quantitative and qualitative research data in the social, behavioral, economic, and health sciences|
|SDTL|variable-level data tranformation (statistical analysis), social sciences|CC BY 4.0|JSON and XML Schema, RDF/OWL, UML/XMI , DDI integration|owl|reused|statistical analysis processes/packages|integration of provenance metadata in DDI and other metadata standards|
|ELSST|social sciences|CC BY-SA 4.0||skos|only indexed|CESSDA||
|CIDOC CRM|anthropology||XML, RDF|owl|only evaluated|CIDOC|not sure|
|Component Metadata Initiative (CMDI)|language resources||meta-model for the integration of metadata components (schemas)|xsd|only evaluated|CLARIN, AGD|framework to create and use self-defined metadata formats|
|Qualitative Data Model|qualitative data, qualitative methods (social sciences)|draft|abstract data model, UML||only evaluated|DDI qualitative data archives|not implemented yet|
|DDI-CDI|cross-domain|CC BY 4.0|Unified Modeling Language (UML) "Canonical XMI" form for easy use in other technology platforms|xsd|only evaluated|DDI Alliance||
|QuDEx|qualitative data, qualitative methods (social sciences)|draft|XSD Schema|xsd|only evaluated|UK Data Archive|last updated 2014|
|REFI-QDA Standard|qualitative data, qualitative methods (social sciences)|MIT license, Copyright 2019 REFI www.qdasoftware.org|XSD Schema, UML|xsd|only evaluated|QDA-Software companies (Atlas.ti, MaxQDA...)|It enables interoperability between Qualitative Data Analysis Software (QDAS or CAQDAS) programs|
|Kernset Bildungsforschung|educational research|CC BY-SA 4.0|Application Profile for da-ra|xsd|only indexed|VerbundFDB||
|da\|ra Metadata Schema|social sciences|CC0 1.0|XSD Schema|xsd|reused|GESIS, ZWB, DataCite|for DOI registration|
|XKOS|statistical classifications and concept management systems|CC BY 4.0|SKOS extension, RDF/OWL|owl|only evaluated|DDI data centers|an SKOS extension for representing statistical classifications|
|DUO|Data Use Ontology, biomedicine, genomics and health|CC BY 4.0|OBO_based|owl|only evaluated|ELIXIR, Charité|not sure|
|IAO|Information Artifact Ontology|CC BY 4.0|OBO_based|owl|only evaluated||not sure|
|ICO|Informed Consent Ontology, medical field|CC BY 3.0|OBO_based|owl|only evaluated||not sure|
|KonsortSWD Soziodemographische Standardvariablen|Social and health sciences (microdata on region of residence, date of birth, sex, citizenship, country of birth, education, main status, occupation, marital status...)|CC BY 4.0|uses AGS, NUTS, BEV-Codes der deutschen Staats- und Gebietssystematik (states and citizenships), Standard country or area codes for statistical use (M49), International Standard Classification of Occupations 2008 (ISCO) - deutsche Fassung, Klassifikation der Berufe 2010, EU key social variables, Demographische Standards||reused and developed|GESIS - ALLBUS, LIfBi - NEPS, various other national and international surveys and national and international official statistics|KonsortSWD service that reuses and, if necessary, develops and validates, coding schemes for sociodemographic variables in surveys to improve their (semantic/substantive) interoperability. Not sure whether each coding scheme needs to be regarded as an ontology/CV; given the multitude of variables covered, the service builds upon many existing classifications/ontologies. Many of these are available in various formats such as xml, json, markdown but I am not technically familiar with any of the formats mentioned here. There may be better sources than the ones I've found.|
