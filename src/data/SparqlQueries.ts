export const getMostData = () => {
    return `
# SPDX-FileCopyrightText: 2025 Robin Vobruba <hoijui.quaero@gmail.com>
# SPDX-License-Identifier: Unlicense

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ods: <http://w3id.org/oseg/ont/ods#>
PREFIX okh: <http://w3id.org/oseg/ont/okh#>
PREFIX okhkrawl: <http://w3id.org/oseg/ont/okhkrawl#>
PREFIX schema: <https://schema.org/>
PREFIX tsdc: <https://w3id.org/oseg/ont/tsdc/core#>
PREFIX void: <http://rdfs.org/ns/void#>

# All projects, including most of their properties
# Something along these lines would be used when viewing the detail-view
# of a project on a web-UI, for example.
SELECT
  ?name
  ?src_license
  ?src_licensor
  ?src_url
  ?proj_license
  ?proj_licensor
  ?proj_function
  ?proj_documentation_language
  ?proj_version
  ?proj_organization
  ?proj_readme
  ?proj_technology_readiness_level
  ?proj_documentation_readiness_level
  ?proj_attestation
  ?proj_doi
  ?proj_std
  ?proj_cpc
  ?proj_tsdc_id
  ?proj_bom_url
  ?proj_manufacturing_instructions
  ?proj_user_manual
  ?proj_mass
  ?proj_outer_dimensions_width
  ?proj_outer_dimensions_height
  ?proj_outer_dimensions_depth
  ?proj_img_slot
  ?proj_img_tag
  ?proj_img_caption
  ?proj_img_url
  ?proj_release_url
WHERE {
  ?ds
    a ods:Dataset ;
    ods:hasSource ?src ;
    void:rootResource ?proj ;
    .
  ?src
    ods:license ?src_license ;
    ods:licensor ?src_licensor ;
    ods:dataSourcingProcedure okhkrawl:dataSourcingProcedureGeneratedManifest ;
    .
  OPTIONAL { ?src ods:source ?src_url . }
  ?proj
    okh:name ?name ;
    ods:license ?proj_license ;
    ods:licensor ?proj_licensor ;
    okh:function ?proj_function ;
  .
  OPTIONAL { ?proj okh:documentationLanguage ?proj_documentation_language . }
  OPTIONAL { ?proj okh:version ?proj_version . }
  OPTIONAL { ?proj okh:organization ?proj_organization . }
  OPTIONAL { ?proj okh:readme ?proj_readme . }
  OPTIONAL { ?proj okh:technologyReadinessLevel ?proj_technology_readiness_level . }
  OPTIONAL { ?proj okh:documentationReadinessLevel ?proj_documentation_readiness_level . }
  OPTIONAL { ?proj okh:attestation ?proj_attestation . }
  OPTIONAL { ?proj okh:hasPublication [ okh:doi ?proj_doi ] . }
  OPTIONAL { ?proj okh:compliesWith [ okh:standardID ?proj_std ] . }
  OPTIONAL { ?proj okh:cpcPatentClass ?proj_cpc . }
  OPTIONAL { ?proj okh:tsdc [ tsdc:id ?proj_tsdc_id ] . }
  OPTIONAL { ?proj okh:hasBoM [ ods:url ?proj_bom_url ] . }
  OPTIONAL { ?proj okh:hasManufacturingInstructions [ ods:url ?proj_manufacturing_instructions ] . }
  OPTIONAL { ?proj okh:hasUserManual [ ods:url ?proj_user_manual ] . }
  OPTIONAL { ?proj okh:hasMass ?proj_mass . }
  OPTIONAL { ?proj okh:hasOuterDimensions [
      okh:width ?proj_outer_dimensions_width ;
      okh:height ?proj_outer_dimensions_height ;
      okh:depth ?proj_outer_dimensions_depth ;
    ] . }
  OPTIONAL { ?proj okh:hasImage [
      okh:fillsSlot [ schema:termCode ?proj_img_slot ] ;
      okh:hasTag [ schema:termCode ?proj_img_tag ] ;
      okh:depicts ?proj_img_caption ;
      ods:url ?proj_img_url ;
    ] . }
  OPTIONAL { ?proj okh:release ?proj_release_url . }
}
LIMIT 100        
      `;
}

export const getMostDataTwo = () => {
    return `
# SPDX-FileCopyrightText: 2025 Robin Vobruba <hoijui.quaero@gmail.com>
#
# SPDX-License-Identifier: Unlicense

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ods: <http://w3id.org/oseg/ont/ods#>
PREFIX okh: <http://w3id.org/oseg/ont/okh#>
PREFIX okhkrawl: <http://w3id.org/oseg/ont/okhkrawl#>
PREFIX schema: <https://schema.org/>
PREFIX tsdc: <https://w3id.org/oseg/ont/tsdc/core#>
PREFIX void: <http://rdfs.org/ns/void#>

# All projects, including most of their properties
SELECT
  ?name
  ?src_license
  ?src_licensor
  ?src_url
  ?proj_license
  ?proj_licensor
  ?proj_function
  ?proj_documentation_language
  ?proj_version
  ?proj_organization
  ?proj_readme
  ?proj_technology_readiness_level
  ?proj_documentation_readiness_level
  ?proj_attestation
  ?proj_doi
  ?proj_std
  ?proj_cpc
  ?proj_tsdc_id
  ?proj_bom_url
  ?proj_manufacturing_instructions
  ?proj_user_manual
  ?proj_mass
  ?proj_outer_dimensions_width
  ?proj_outer_dimensions_height
  ?proj_outer_dimensions_depth
  ?proj_img_slot
  ?proj_img_tag
  ?proj_img_caption
  ?proj_img_url
  ?proj_release_url
WHERE {
  ?ds
    a ods:Dataset ;
    ods:hasSource ?src ;
    void:rootResource ?proj ;
    .
  ?src
    ods:license ?src_license ;
    ods:licensor ?src_licensor ;
    ods:dataSourcingProcedure okhkrawl:dataSourcingProcedureGeneratedManifest ;
    .
  OPTIONAL { ?src ods:source ?src_url . }
  ?proj
    okh:name ?name ;
    ods:license ?proj_license ;
    ods:licensor ?proj_licensor ;
    okh:function ?proj_function ;
  .
  OPTIONAL { ?proj okh:documentationLanguage ?proj_documentation_language . }
  OPTIONAL { ?proj okh:version ?proj_version . }
  OPTIONAL { ?proj okh:organization ?proj_organization . }
  OPTIONAL { ?proj okh:readme ?proj_readme . }
  OPTIONAL { ?proj okh:technologyReadinessLevel ?proj_technology_readiness_level . }
  OPTIONAL { ?proj okh:documentationReadinessLevel ?proj_documentation_readiness_level . }
  OPTIONAL { ?proj okh:attestation ?proj_attestation . }
  OPTIONAL { ?proj okh:hasPublication [ okh:doi ?proj_doi ] . }
  OPTIONAL { ?proj okh:compliesWith [ okh:standardID ?proj_std ] . }
  OPTIONAL { ?proj okh:cpcPatentClass ?proj_cpc . }
  OPTIONAL { ?proj okh:tsdc [ tsdc:id ?proj_tsdc_id ] . }
  OPTIONAL { ?proj okh:hasBoM [ ods:url ?proj_bom_url ] . }
  OPTIONAL { ?proj okh:hasManufacturingInstructions [ ods:url ?proj_manufacturing_instructions ] . }
  OPTIONAL { ?proj okh:hasUserManual [ ods:url ?proj_user_manual ] . }
  OPTIONAL { ?proj okh:hasMass ?proj_mass . }
  OPTIONAL { ?proj okh:hasOuterDimensions [
      okh:width ?proj_outer_dimensions_width ;
      okh:height ?proj_outer_dimensions_height ;
      okh:depth ?proj_outer_dimensions_depth ;
    ] . }
  OPTIONAL { ?proj okh:hasImage [
      okh:fillsSlot [ schema:termCode ?proj_img_slot ] ;
      okh:hasTag [ schema:termCode ?proj_img_tag ] ;
      okh:depicts ?proj_img_caption ;
      ods:url ?proj_img_url ;
    ] . }
  OPTIONAL { ?proj okh:release ?proj_release_url . }
}
LIMIT 100
    `;
}

export const findForProjectName = (projectName: string) => {
    return `
# SPDX-FileCopyrightText: 2025 Robin Vobruba <hoijui.quaero@gmail.com>
#
# SPDX-License-Identifier: Unlicense

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ods: <http://w3id.org/oseg/ont/ods#>
PREFIX okh: <http://w3id.org/oseg/ont/okh#>
PREFIX okhkrawl: <http://w3id.org/oseg/ont/okhkrawl#>
PREFIX schema: <https://schema.org/>
PREFIX tsdc: <https://w3id.org/oseg/ont/tsdc/core#>
PREFIX void: <http://rdfs.org/ns/void#>

# Fetch graph with infos about projects that have the projectName in their name.
CONSTRUCT {
  ?proj
    okh:name ?name ;
    ods:license ?proj_license ;
    ods:license ?src_license ;
    ods:licensor ?proj_licensor ;
    ods:licensor ?src_licensor ;
    okh:function ?proj_function ;
    ods:dataSourcingProcedure ?src_ds_sourcing_procedure ;
    okh:documentationLanguage ?proj_documentation_language ;
    okh:version ?proj_version ;
    okh:organization ?proj_organization ;
    okh:readme ?proj_readme ;
    okh:technologyReadinessLevel ?proj_technology_readiness_level ;
    okh:documentationReadinessLevel ?proj_documentation_readiness_level ;
    okh:attestation ?proj_attestation ;
    okh:hasPublication [ okh:doi ?proj_doi ] ;
    okh:compliesWith [ okh:standardID ?proj_std ] ;
    okh:cpcPatentClass ?proj_cpc ;
    okh:tsdc [ tsdc:id ?proj_tsdc_id ] ;
    okh:hasBoM [ ods:url ?proj_bom_url ] ;
    okh:hasManufacturingInstructions [ ods:url ?proj_manufacturing_instructions ] ;
    okh:hasUserManual [ ods:url ?proj_user_manual ] ;
    okh:hasMass ?proj_mass ;
    okh:hasOuterDimensions [
      okh:width ?proj_outer_dimensions_width ;
      okh:height ?proj_outer_dimensions_height ;
      okh:depth ?proj_outer_dimensions_depth ;
    ] ;
    okh:hasImage [
      okh:fillsSlot [ schema:termCode ?proj_img_slot ] ;
      okh:hasTag [ schema:termCode ?proj_img_tag ] ;
      okh:depicts ?proj_img_caption ;
      ods:url ?proj_img_url ;
    ] ;
    okh:release ?proj_release_url ;
    .
} WHERE {
  ?ds
    a ods:Dataset ;
    ods:hasSource ?src ;
    void:rootResource ?proj ;
    .
  ?src
    ods:license ?src_license ;
    ods:licensor ?src_licensor ;
    ods:dataSourcingProcedure ?src_ds_sourcing_procedure ;
    .
  OPTIONAL { ?src ods:source ?src_url . }
  ?proj
    okh:name ?name ;
    ods:license ?proj_license ;
    ods:licensor ?proj_licensor ;
    okh:function ?proj_function ;
  .
  OPTIONAL { ?proj okh:documentationLanguage ?proj_documentation_language . }
  OPTIONAL { ?proj okh:version ?proj_version . }
  OPTIONAL { ?proj okh:organization ?proj_organization . }
  OPTIONAL { ?proj okh:readme ?proj_readme . }
  OPTIONAL { ?proj okh:technologyReadinessLevel ?proj_technology_readiness_level . }
  OPTIONAL { ?proj okh:documentationReadinessLevel ?proj_documentation_readiness_level . }
  OPTIONAL { ?proj okh:attestation ?proj_attestation . }
  OPTIONAL { ?proj okh:hasPublication [ okh:doi ?proj_doi ] . }
  OPTIONAL { ?proj okh:compliesWith [ okh:standardID ?proj_std ] . }
  OPTIONAL { ?proj okh:cpcPatentClass ?proj_cpc . }
  OPTIONAL { ?proj okh:tsdc [ tsdc:id ?proj_tsdc_id ] . }
  OPTIONAL { ?proj okh:hasBoM [ ods:url ?proj_bom_url ] . }
  OPTIONAL { ?proj okh:hasManufacturingInstructions [ ods:url ?proj_manufacturing_instructions ] . }
  OPTIONAL { ?proj okh:hasUserManual [ ods:url ?proj_user_manual ] . }
  OPTIONAL { ?proj okh:hasMass ?proj_mass . }
  OPTIONAL { ?proj okh:hasOuterDimensions [
      okh:width ?proj_outer_dimensions_width ;
      okh:height ?proj_outer_dimensions_height ;
      okh:depth ?proj_outer_dimensions_depth ;
    ] . }
  OPTIONAL { ?proj okh:hasImage [
      okh:fillsSlot [ schema:termCode ?proj_img_slot ] ;
      okh:hasTag [ schema:termCode ?proj_img_tag ] ;
      okh:depicts ?proj_img_caption ;
      ods:url ?proj_img_url ;
    ] . }
  OPTIONAL { ?proj okh:release ?proj_release_url . }

  FILTER regex(?name, "${projectName}", "i")
}
LIMIT 100
    `;
}

export const fetchGraphOld = (selectedSearchColumn: string, projectName: string) => {
    return `
# SPDX-FileCopyrightText: 2025 Robin Vobruba <hoijui.quaero@gmail.com>
#
# SPDX-License-Identifier: Unlicense

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ods: <http://w3id.org/oseg/ont/ods#>
PREFIX okh: <http://w3id.org/oseg/ont/okh#>
PREFIX okhkrawl: <http://w3id.org/oseg/ont/okhkrawl#>
PREFIX schema: <https://schema.org/>
PREFIX text: <http://jena.apache.org/text#>
PREFIX tsdc: <https://w3id.org/oseg/ont/tsdc/core#>
PREFIX void: <http://rdfs.org/ns/void#>

# Fetch graph with infos about projects that have the projectName in their name.
# Returns the first 10 finds only.
SELECT DISTINCT
  ?name
  ?src_license
  ?src_licensor
  ?src_url
  ?proj_license
  ?proj_licensor
  ?proj_function
  ?proj_documentation_language
  ?proj_version
  ?proj_organization
  ?proj_readme
  ?proj_technology_readiness_level
  ?proj_documentation_readiness_level
  ?proj_attestation
  ?proj_doi
  ?proj_std
  ?proj_cpc
  ?proj_tsdc_id
  ?proj_bom_url
  ?proj_manufacturing_instructions
  ?proj_user_manual
  ?proj_mass
  ?proj_outer_dimensions_width
  ?proj_outer_dimensions_height
  ?proj_outer_dimensions_depth
  ?proj_img_slot
  ?proj_img_tag
  ?proj_img_caption
  ?proj_img_url
  ?proj_release_url
WHERE {
  ?ds
    a ods:Dataset ;
    ods:hasSource ?src ;
    void:rootResource ?proj ;
    .
  ?src
    ods:license ?src_license ;
    ods:licensor ?src_licensor ;
    ods:dataSourcingProcedure ?src_ds_sourcing_procedure ;
    .
  OPTIONAL { ?src ods:source ?src_url . }
  ?proj
    okh:name ?name ;
    ods:license ?proj_license ;
    ods:licensor ?proj_licensor ;
    okh:function ?proj_function ;
  .
  OPTIONAL { ?proj okh:documentationLanguage ?proj_documentation_language . }
  OPTIONAL { ?proj okh:version ?proj_version . }
  OPTIONAL { ?proj okh:organization ?proj_organization . }
  OPTIONAL { ?proj okh:readme ?proj_readme . }
  OPTIONAL { ?proj okh:technologyReadinessLevel ?proj_technology_readiness_level . }
  OPTIONAL { ?proj okh:documentationReadinessLevel ?proj_documentation_readiness_level . }
  OPTIONAL { ?proj okh:attestation ?proj_attestation . }
  OPTIONAL { ?proj okh:hasPublication [ okh:doi ?proj_doi ] . }
  OPTIONAL { ?proj okh:compliesWith [ okh:standardID ?proj_std ] . }
  OPTIONAL { ?proj okh:cpcPatentClass ?proj_cpc . }
  OPTIONAL { ?proj okh:tsdc [ tsdc:id ?proj_tsdc_id ] . }
  OPTIONAL { ?proj okh:hasBoM [ ods:url ?proj_bom_url ] . }
  OPTIONAL { ?proj okh:hasManufacturingInstructions [ ods:url ?proj_manufacturing_instructions ] . }
  OPTIONAL { ?proj okh:hasUserManual [ ods:url ?proj_user_manual ] . }
  OPTIONAL { ?proj okh:hasMass ?proj_mass . }
  OPTIONAL { ?proj okh:hasOuterDimensions [
      okh:width ?proj_outer_dimensions_width ;
      okh:height ?proj_outer_dimensions_height ;
      okh:depth ?proj_outer_dimensions_depth ;
    ] . }
  OPTIONAL { ?proj okh:hasImage [
      okh:fillsSlot [ schema:termCode ?proj_img_slot ] ;
      okh:hasTag [ schema:termCode ?proj_img_tag ] ;
      okh:depicts ?proj_img_caption ;
      ods:url ?proj_img_url ;
    ] . }
  OPTIONAL { ?proj okh:release ?proj_release_url . }

#  ?proj text:query (okh:name "${projectName}") .
#  FILTER regex(?name, "${projectName}", "i")
  FILTER CONTAINS(STR(?${selectedSearchColumn}), "${projectName}")
}
LIMIT 100
    `;
}

export const fetchGraph = (selectedSearchColumn: string, projectName: string) => {
    return `
    # SPDX-FileCopyrightText: 2025 Robin Vobruba <hoijui.quaero@gmail.com>
#
# SPDX-License-Identifier: Unlicense

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ods: <http://w3id.org/oseg/ont/ods#>
PREFIX okh: <http://w3id.org/oseg/ont/okh#>
PREFIX okhkrawl: <http://w3id.org/oseg/ont/okhkrawl#>
PREFIX schema: <https://schema.org/>
PREFIX spdx: <http://spdx.org/rdf/terms#>
PREFIX text: <http://jena.apache.org/text#>
PREFIX tsdc: <https://w3id.org/oseg/ont/tsdc/core#>
PREFIX void: <http://rdfs.org/ns/void#>

# Fetch graph with infos about projects that have "loom" in their name.
# Returns the first 10 finds only.
SELECT DISTINCT
  ?name
  ?src_license
  ?src_license_name
  ?src_license_osi
  ?src_licensor
  ?src_url
  ?proj_license
  ?proj_license_name
  ?proj_license_osi
  ?proj_licensor
  ?proj_function
  ?proj_documentation_language
  ?proj_version
  ?proj_organization
  ?proj_readme
  ?proj_technology_readiness_level
  ?proj_documentation_readiness_level
  ?proj_attestation
  ?proj_doi
  ?proj_std
  ?proj_cpc
  ?proj_tsdc_id
  ?proj_bom_url
  ?proj_manufacturing_instructions
  ?proj_user_manual
  ?proj_mass
  ?proj_outer_dimensions_width
  ?proj_outer_dimensions_height
  ?proj_outer_dimensions_depth
#  ?proj_img_slot
#  ?proj_img_tag
#  ?proj_img_caption
  ?proj_img_url
  ?proj_release_url
WHERE {
  ?ds
    a ods:Dataset ;
    ods:hasSource ?src ;
    void:rootResource ?proj ;
    .
  ?src
    ods:license ?src_license ;
    ods:licensor ?src_licensor ;
    ods:dataSourcingProcedure ?src_ds_sourcing_procedure ;
    .

  OPTIONAL {
    ?src_license
      spdx:name ?src_license_name ;
      spdx:isOsiApproved ?src_license_osi ;
      .
  }
  OPTIONAL { ?src ods:source ?src_url . }
  ?proj
    okh:name ?name ;
    ods:license ?proj_license ;
    ods:licensor ?proj_licensor ;
    okh:function ?proj_function ;
  .
  OPTIONAL {
    ?proj_license
      spdx:name ?proj_license_name ;
      spdx:isOsiApproved ?proj_license_osi ;
      .
  }
  OPTIONAL { ?proj okh:documentationLanguage ?proj_documentation_language . }
  OPTIONAL { ?proj okh:version ?proj_version . }
  OPTIONAL { ?proj okh:organization ?proj_organization . }
  OPTIONAL { ?proj okh:readme ?proj_readme . }
  OPTIONAL { ?proj okh:technologyReadinessLevel ?proj_technology_readiness_level . }
  OPTIONAL { ?proj okh:documentationReadinessLevel ?proj_documentation_readiness_level . }
  OPTIONAL { ?proj okh:attestation ?proj_attestation . }
  OPTIONAL { ?proj okh:hasPublication [ okh:doi ?proj_doi ] . }
  OPTIONAL { ?proj okh:compliesWith [ okh:standardID ?proj_std ] . }
  OPTIONAL { ?proj okh:cpcPatentClass ?proj_cpc . }
  OPTIONAL { ?proj okh:tsdc [ tsdc:id ?proj_tsdc_id ] . }
  OPTIONAL { ?proj okh:hasBoM [ ods:url ?proj_bom_url ] . }
  OPTIONAL { ?proj okh:hasManufacturingInstructions [ ods:url ?proj_manufacturing_instructions ] . }
  OPTIONAL { ?proj okh:hasUserManual [ ods:url ?proj_user_manual ] . }
  OPTIONAL { ?proj okh:hasMass ?proj_mass . }
  OPTIONAL { ?proj okh:hasOuterDimensions [
      okh:width ?proj_outer_dimensions_width ;
      okh:height ?proj_outer_dimensions_height ;
      okh:depth ?proj_outer_dimensions_depth ;
    ] . }
  OPTIONAL { ?proj okh:hasImage [
      ods:url ?proj_img_url ;
#      OPTIONAL { okh:fillsSlot [ schema:termCode ?proj_img_slot ] } ;
#      OPTIONAL { okh:hasTag [ schema:termCode ?proj_img_tag ] } ;
#      OPTIONAL { okh:depicts ?proj_img_caption } ;
    ] . }
  OPTIONAL { ?proj okh:release ?proj_release_url . }

  FILTER CONTAINS(STR(?${selectedSearchColumn}), "${projectName}")
}
LIMIT 10
    `;
}