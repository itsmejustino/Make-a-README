// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let selectedLicense = license
  if(license === 'Apache 3.0'){
    selectedLicense =`[![Apache License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if(license === 'BSD 3.0'){
    selectedLicense =`[![BSD License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  if(license === 'BSD 2.0'){
    selectedLicense =`[![BSD License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
  if(license === 'GPL v.3'){
    selectedLicense =`[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if(license === 'IPL 1.0'){
    selectedLicense =`[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
  if(license === 'MIT'){
    selectedLicense =`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if(license === 'None'){
    selectedLicense =`No License Selected`
  }
  return selectedLicense;
}

module.exports = renderLicenseBadge;
