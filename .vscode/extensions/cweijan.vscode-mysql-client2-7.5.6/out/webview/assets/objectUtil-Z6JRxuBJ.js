function t(e){if(e==null)return null;if(Array.isArray(e))return e.map(r=>t(r));if(typeof e=="object"){const r={};for(const n in e)typeof e[n]=="object"?r[n]=t(e[n]):r[n]=e[n];return r}return e}export{t as d};
