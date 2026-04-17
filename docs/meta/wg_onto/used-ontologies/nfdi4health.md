---
title: NFDI4Health
---

Source: `/files/meta/Used_Ontologies_at_NFDI.xlsx` (sheet: NFDI4Health)

|Ontology ID|Ontology Name|Domain|License|Modularity|Format|developed / reused / only indexed / only evaluated|Used in|Comments / description|NFDI4Health contributions|File URL|Docs URL|SemLookP / OLS URL|FHIR URL (normative, BfArM, MII, NUM, HiGHmed, ...)|Bioportal|Github|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|NFDI4Health MDS||Medizinische Forschung|CC BY 4.0|reuses: NFDI4Health CS MDS Provenance Data Source, NFDI4Health CS MDS Study Status, NFDI4Health CS MDS Remaining Concepts, DCTERMS, DataCite, Maelstrom, UMLS Metathesaurus, SNOMED CT, LOINC, UCUM, NCI Metathesaurus, ISO Country and Regional Codes, ISO 3166 Part 2 Country Subdivision Codes, IETF language tags, ICD-10, ICD-11, MeSH, HL7 Title Type, HL7 SPDX License, HL7 Administrative Gender, HL7 V3 Participation Type, HL7 V3 Act Relationship Type|xlsx|developed|Central Search Hub, Local Data Hub|Zentrales Metadatenschema von NFDI4Health|yes|https://repository.publisso.de/resource/frl%3A6450625||||||
|NFDI4Health CS MDS Provenance Data Source||Medizinische Forschung|CC BY 4.0||fhir|developed|Central Search Hub, Local Data Hub, NFDI4Health MDS|Code system defining data sources in a Provenance resource.|yes|https://simplifier.net/nfdi4health-metadata-schema/nfdi4health-cs-mds-provenance-data-source||||||
|NFDI4Health CS MDS Study Status||Medizinische Forschung|CC BY 4.0||fhir|developed|Central Search Hub, Local Data Hub, NFDI4Health MDS|Code system defining concepts about different status of a study.|yes|https://simplifier.net/nfdi4health-metadata-schema/nfdi4health-cs-mds-study-status||||||
|NFDI4Health CS MDS Remaining Concepts||Medizinische Forschung|CC BY 4.0||fhir|developed|Central Search Hub, Local Data Hub, NFDI4Health MDS|Code system defining remaining concepts without mapping to concepts from international terminologies, ontologies, classifications, etc.|yes|https://simplifier.net/nfdi4health-metadata-schema/nfdi4health-cs-mds-remaining-concepts||||||
|DCTERMS||Fachübergreifend|CC BY 4.0||rdf|reused|NFDI4Health MDS|Basic metadata terms|no|https://www.dublincore.org/specifications/dublin-core/dcmi-terms/||||||
|DataCite||Fachübergreifend|||xsd|reused|NFDI4Health MDS|Advanced metadata terms|no|https://schema.datacite.org/meta/kernel-4.4/|https://doi.org/10.14454/3w3z-sa82|||||
|Maelstrom||Kohorten|Proprietary||html|reused|NFDI4Health MDS|Classifying variables used in cohorts|no|https://www.maelstrom-research.org/harmonization-search#lists?type=studies&query=study(in(Mica_study.className,HarmonizationStudy),limit(0,20))||||||
|UMLS Metathesaurus|UMLS Metathesaurus|Medizin allgemein|Proprietary||rrf|reused|NFDI4Health MDS|Using UMLS with FHIR|no|https://www.nlm.nih.gov/research/umls/index.html|2.16.840.1.113883.6.86|||||
|SNOMED CT|SNOMED CT|Medizin allgemein|Proprietary||rf2|reused|NFDI4Health MDS|Using SNOMED CT with FHIR|no|http://snomed.info/sct|2.16.840.1.113883.6.96|||||
|LOINC|LOINC|Laborwerte|Proprietary||accdb|reused|NFDI4Health MDS|Using LOINC with FHIR|no|http://loinc.org|2.16.840.1.113883.6.1|||||
|UCUM|UCUM|Maßeinheiten|Proprietary||html|reused|NFDI4Health MDS|Using UCUM with FHIR|no|http://unitsofmeasure.org|2.16.840.1.113883.6.8|||||
|NCI Metathesaurus|NCI Metathesaurus|Fachübergreifend|Proprietary||rrf|reused|NFDI4Health MDS|Using NCI Metathesaurus with FHIR|no|http://ncimeta.nci.nih.gov|2.16.840.1.113883.3.26.1.2|||||
|ISO Country and Regional Codes|ISO Country and Regional Codes|Administrativ|Proprietary|ISOCOUNTRIES|pdf|reused|NFDI4Health MDS|Using ISO 3166 Codes with FHIR|no|urn:iso:std:iso:3166|1.0.3166.1.2.2|||||
|ISO 3166 Part 2 Country Subdivision Codes|ISO 3166 Part 2 Country Subdivision Codes|Administrativ|Proprietary||pdf|reused|NFDI4Health MDS|Two-letter code element from ISO 3166-1 followed by a separator and up to three alphanumeric characters|no|urn:iso:std:iso:3166:-2|1.0.3166.2|||||
|IETF language tags|IETF language tags|Fachübergreifend|Proprietary||txt|reused|NFDI4Health MDS|This is used for identifying language throughout FHIR. Note that usually these codes are in a code and the system is assumed|no|urn:ietf:bcp:47|2.16.840.1.113883.6.121|||||
|ICD-10|ICD-10|Krankheiten|Proprietary||claml|reused|NFDI4Health MDS|WHO and german variant|no|https://www.bfarm.de/DE/Kodiersysteme/Klassifikationen/ICD/ICD-10-GM/_node.html|ICD-10|||||
|ICD-11|ICD-11|Krankheiten|Proprietary||claml|reused|NFDI4Health MDS|Using ICD-x with FHIR|no|https://www.bfarm.de/DE/Kodiersysteme/Klassifikationen/ICD/ICD-11/uebersetzung/_node.html|2.16.840.1.113883.6.347|||||
|MeSH|MeSH|Fachübergreifend|Proprietary||rdf|reused|NFDI4Health MDS|Using MeSH in FHIR|no|https://www.ncbi.nlm.nih.gov/mesh|2.16.840.1.113883.6.177|||||
|HL7 Title Type|HL7 Title Type|Fachübergreifend|Proprietary||fhir|reused|NFDI4Health MDS|Used to express the reason and specific aspect for the variant title, such as language and specific language.|no|http://hl7.org/fhir/title-type|2.16.840.1.113883.6.121|||||
|HL7 SPDX License|HL7 SPDX License|Lizenzen|Proprietary||fhir|reused|NFDI4Health MDS|The license that applies to an Implementation Guide (using an SPDX license Identifiers, or 'not-open-source'). The binding is required but new SPDX license Identifiers are allowed to be used (https://spdx.org/licenses/).|no|http://hl7.org/fhir/spdx-license|2.16.840.1.113883.4.642.4.1027|||||
|HL7 Administrative Gender|HL7 Administrative Gender|Geschlecht|Proprietary||fhir|reused|NFDI4Health MDS|The gender of a person used for administrative purposes."|no|http://hl7.org/fhir/administrative-gender|2.16.840.1.113883.4.642.4.2|||||
|HL7 V3 Participation Type|HL7 V3 Participation Type|Fachübergreifend|Proprietary||fhir|reused|NFDI4Health MDS|A code specifying the meaning and purpose of every Participation instance. Each of its values implies specific constraints on the Roles undertaking the participation.|no|http://terminology.hl7.org/CodeSystem/v3-ParticipationType|2.16.840.1.113883.5.90|||||
|HL7 V3 Act Relationship Type|HL7 V3 Act Relationship Type|Fachübergreifend|Proprietary||fhir|reused|NFDI4Health MDS|Used in combination with NFDI4Health' defined values to express the relationship between two resources in the Value Sets NFDI4Health_VS_MDS_Relation_Type_Ids_Local_HL7V3 and NFDI4Health_VS_MDS_Relation_Type_Ids_Nfdi_Local_HL7V3|no|http://terminology.hl7.org/CodeSystem/v3-ActRelationshipType|2.16.840.1.113883.5.1002|||||
|UNDER REVIEW||||||||||||||||
|AFEO|||||owl|||||||||||
|AGROVOC|||||skos|||||||||||
|AHOL|||||owl|||||||||||
|Alpha-ID||Freitextdiagnosen||||||||||||||
|ATC||Arzneimittelwirkstoffe|||owl|||||||||||
|ATOL|||||owl|||||||||||
|BAO|||||owl|||||||||||
|CHEBI|||||owl|||||||||||
|CL|||||owl|||||||||||
|CLO|||||owl|||||||||||
|CMPO||||CHEBI, GO, PATO|owl|||||||||||
|COVID_VAR||||||||||||||||
|DBSNP||||||||||||||||
|DOID||Krankheiten||CHEBI, FOODON, NCBIT, AXON, RO, HP, UBERON, OIO, SO, DC, GENO, IAO, NCIT, DCTERMS, DISDRIV, OWL, TRANS, SYMP, IDO, OBI, RDFS, ECO, CL, EXO|owl|||||||||||
|DRG||Abrechnung mit Krankenkassen||||||||||||||
|EBQM||||||||||||||||
|EFO||||ORDO, MONDO, CHEBI, GO, NCBITAXON, DC, NCIT, HP, FMA, OIO, OWL, UBERON, RO, PR, FBBT, OBI, OBA, IAO, SKOS, SO, BAO, DCTERMS, CLO, HANCESTRO, OGMS, PO, IDO, ZFA, RDFS, TO, CL, PATO, MPATH, DOID, FBDV, BFO, BTO, MA, MP, OMIT, UO, WBLS|owl|||||||||||
|EOL||||||||||||||||
|EXTRUONT||||||||||||||||
|FOODEX2|||||||MDS Modul Ernährung|||||||||
|FOODON||||NCBITAXON, CARO, CHEBI, GO, FLOPO, NCIT, ENVO, CDNO, OIO, UBERON, DC, OBI, AGRO, IAO, COB, PECO, PR, DCTERMS, HANCESTRO, PCO, PO, RO, MSIO, ONS, ECOCORE, RDFS, DRON, PATO, BFO, SEPIO, UO, BTO, APOLLO_SV, OWL, FAO, CL, SCHEMAORG_HTTP, STATO|owl|||||||||||
|GO||||OIO, DC, IAO, DCTERMS, RDFS, RO, OWL|owl|||||||||||
|HGNC|||||owl|||||||||||
|Hl7 Vocabulary||||||||||||||||
|HPO||Abnormalitäten||BFO aligned, OBO based|owl|||||||||||
|ICD-10 GM||Diagnosen||||||||||||||
|ICD10||Diagnosen|||||MDS (Metadatenschema)|||||||||
|ICDO||Krebserkrankungen||BFO aligned, OBO based||||||||||||
|IDMP||Arzneimittel||||||||||||||
|MAELSTROM|||||||Questionnaire|||||||||
|MedDRA||Unerwünschte Ereignisse||||||||||||||
|MESH||Verschlagwortung von Publikationen|||rdf|||||||||||
|MESHD|||||rdf|||||||||||
|MGI||||||||||||||||
|MIRBASE||||||||||||||||
|NCBIGENE|||||rdf|||||||||||
|NCBITAXON||||OIO, DCTERMS, IAO|owl|||||||||||
|NCIT||||OBO_based|owl||MDS|||||||||
|ONE||||CHEBI, GO, DC, NCBITAXON, OWL, OMRSE, UBERON, OBI, VO, RDFS, IAO, SO, PR, DCTERMS, CLO, OGMS, HP, IDO, SKOS, PATO, ONS, OIO, BFO, RO, APOLLO_SV, ENVO, UO, CHMO, CL|owl||MDS Ernährung|||||||||
|OPS||Prozeduren (chirurgische Eingriffe)||||||||||||||
|OrphaNet||Seltene Erkrankungen||||||||||||||
|RGD||||||||||||||||
|Rote Liste||Arzneimittel||||||||||||||
|SC2V||||||||||||||||
|SDTM||Ergebnisdatensätze||||||||||||||
|SNOMED|||||||MDS, Questionnaire|||||||||
|TNM||Krebserkrankungen||||||||||||||
|UBERON||||CARO, CHEBI, RO, GO, NCBITAXON, DC, PR, OIO, SEMAPV, DCTERMS, IAO, SKOS, SO, NBO, OMO, CL, RDFS, PATO, ENVO, BFO, BSPO, OWL|owl|||||||||||
|UMLS||Metaterminologie|||||MDS|||||||||
|UNIPROT||||||||||||||||
|XDS Value Sets||||||||||||||||
