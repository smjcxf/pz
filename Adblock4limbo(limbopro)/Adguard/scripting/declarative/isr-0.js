/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

// ruleset: isr-0

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"html\",\"action\":[\"style\",\"height: auto !important; overflow: auto !important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".tien-ads-video > div#player\",\"action\":[\"style\",\"visibility: visible!important;\"]}","{\"selector\":\".tien-ads-video\",\"action\":[\"style\",\"background: none!important;\"]}"]];

const hostnamesMap = new Map([["haaretz.co.il",0],["www-haaretz-co-il.eu1.proxy.openathens.net",0],["bhol.co.il",1],["koozi.info",2]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
