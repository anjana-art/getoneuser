import{D as u}from"./constants-DOH9Mr1f.js";var e=(r=>(r.True="true",r.False="false",r.Never="never",r.Always="always",r.Auto="auto",r))(e||{});function m(r){return r==null?void 0:r.replace(/^[`"\[](.+?)[`"\]]$/,"$1")}function A(r,n,c=!0){if(r==null||["MongoDB"].includes(n)||c=="never"||(c==!0&&(c="always"),c==!1&&(c="auto"),n==u.JDBC&&c=="auto"))return r;const s=r.match(/[A-Z]/g)&&![u.SNOWFLAKE,u.ORACLE,u.DM,u.DB2,u.AS400].includes(n),a=/[~!@#$%^&*()/\s\|,.<>?"'();:+\-=\[\]{}]/;return s||r.match(a)||c=="always"||r.match(/^(user|IF|KEY|DESC|LENGTH|GROUP|GROUPS|ORDER|TABLE|FROM|JOIN|INDEX|CONDITION|SYSTEM|TABLE|TYPE|VALUE|BACKUP|BEGIN|ACCOUNT|ACTION|ALL|ANY|CURRENT|DATA|GRANT|character|explain|union|REGEXP|source|primary|date|condition)$/i)?(r=m(r),[u.MYSQL,u.MARIA_DB,u.DORIS,u.NEO4J,u.BIG_QUERY].includes(n)?`\`${r}\``:`"${r}"`):r}function i(r,n,c,s={}){const{nullAsEmptyString:a}=s;if(["MongoDB"].includes(c))return n;if(n===""||n==null)return a&&(r!=null&&r.match(/char|text/i))?"''":"null";if(typeof n=="string"){switch(c){case u.ES:return n;case u.PG:case u.REDSHIFT:if(r!=null&&r.match(/bytea/i))return`E'${n}'`.replace(/\\/g,"\\\\");break;case u.ORACLE:if(r!=null&&r.match(/DATE/))return`TO_DATE('${n}','yyyy/mm/dd hh24:mi:ss')`;if(r!=null&&r.match(/BLOB/i)&&n.match(/^0x/i))return`hextoraw('${n.substring(2)}')`;break;case u.TRINO:if(r!=null&&r.match(/DATE/i)&&n.length==10)return`from_iso8601_timestamp('${n}')`;if(r!=null&&r.match(/json/i))return`json_parse('${n.replace(/'/g,"''").replace(/ /g," ").replace(/\\/g,"\\\\")}')`;break}n=n.replace(/'/g,"''").replace(/ /g," ")}if(t(r))return n;const f=`'${n}'`;return[u.MYSQL,u.MARIA_DB,u.DORIS].includes(c)?f.replace(/\\/g,"\\\\"):f}function E(r,n){return t(n)?r:`'${r}'`}function t(r){if(!r||typeof r=="number"||r.includes("[]")||r=="interval")return!1;const n=["int","number","numeric","serial","float","double","decimal","real","bit","bool","boolean","range"];return!r.match(/point/i)&&r.match(new RegExp(n.join("|"),"i"))}export{e as E,i as a,E as g,t as i,A as w};
