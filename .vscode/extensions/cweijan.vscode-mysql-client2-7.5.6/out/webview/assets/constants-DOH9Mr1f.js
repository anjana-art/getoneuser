var r=(i=>(i.MYSQL="MySQL",i.MARIA_DB="MariaDB",i.DORIS="Doris",i.PG="PostgreSQL",i.REDSHIFT="Redshift",i.CASSANDRA="Cassandra",i.SQLServer="SqlServer",i.ORACLE="Oracle",i.DB2="Db2",i.AS400="Db2 for i",i.SQLITE="SQLite",i.DUCK_DB="DuckDB",i.libSQL="libSQL",i.DM="达梦",i.TDengine="TDengine",i.TRINO="Trino",i.PRESTO="PrestoDB",i.HIVE="Hive",i.CLICKHOUSE="ClickHouse",i.SNOWFLAKE="Snowflake",i.ATHENA="Athena",i.BIG_QUERY="BigQuery",i.JDBC="JDBC",i.COMMON="Common",i.MONGO_DB="MongoDB",i.ES="ElasticSearch",i.REDIS="Redis",i.KAFKA="Kafka",i.RabbitMQ="RabbitMQ",i.SSH="SSH",i.FTP="FTP",i.S3="S3",i.DOCKER="Docker",i.NEO4J="Neo4j",i.RDP="RDP",i.LOKI="Loki",i.etcd="etcd",i.ZOOKEEPER="Zookeeper",i))(r||{});function c(i){return["Trino","PrestoDB","libSQL","TDengine","ElasticSearch","RabbitMQ","Loki","etcd"].includes(i)}function E(i){return["SSH","RDP","Docker","Redis","ElasticSearch","MongoDB","S3","FTP","Neo4j","Kafka","Zookeeper","Loki","RabbitMQ","etcd"].includes(i)}function L(i){return["TDengine","Athena","BigQuery","DuckDB","PrestoDB","Trino","ClickHouse","Hive","Cassandra"].includes(i)}function R(i){return["PostgreSQL","Redshift","MongoDB","MySQL","MariaDB"].includes(i)}const S=class S{};S.QUERY_TYPE=/\.(es|sql|dbclient-js)/i,S.CUSTOM_COMMENT_PATTERN=/--\s+(SQLBook|Active):/i;let o=S;var n=(i=>(i.NONE="none",i.STRING="string",i.REJSON="ReJSON-RL",i.HASH="hash",i.LIST="list",i.ZSET="zset",i.SET="set",i.STREAM="stream",i))(n||{});export{r as D,n as R,L as a,c as b,E as i,R as s};
