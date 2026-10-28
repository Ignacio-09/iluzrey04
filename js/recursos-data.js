/* ===========================================
   RECURSOS — CATÁLOGO DE DATOS
   Mantén aquí las tecnologías y sus temas.
   La lógica de presentación está en recursos.js.
=========================================== */

window.RECURSOS_DATA = {

    // 1. Tecnologías disponibles
    technologies: [
        {
            id: "COBOL",
            label: "COBOL",
            description: "Lenguaje y lógica de programas"
        },
   //     {
 //           id: "Unisys MCP",
  ///          label: "Unisys MCP",
   //         description: "Entorno mainframe y herramientas operativas"
  //      },
        {
            id: "JCL",
            label: "JCL",
            description: "Control de trabajos batch en IBM z/OS"
        },
        {
            id: "DB2",
            label: "DB2",
            description: "Base de datos IBM y SQL embebido"
        },
        {
            id: "SQL",
            label: "SQL",
            description: "Consultas y manipulación de datos relacionales"
        },
        {
            id: "CICS",
            label: "CICS",
            description: "Procesamiento de transacciones en IBM mainframe"
        },
        {
            id: "Codigo Seguro",
            label: "Código Seguro",
            description: "Prácticas y estándares de desarrollo seguro"
        },
        {
            id: "Git",
            label: "Git",
            description: "Control de versiones y colaboración"
        }
    ],

    // 2. Temas agrupados por tecnología
    resources: {

        // ===========================================
        // COBOL
        // ===========================================
        "COBOL": [
            {
                id: "cobol-if",
                title: "Estructura IF / ELSE",
                description: "Evalúa una condición y ejecuta una alternativa según el resultado.",
                dialect: "COBOL · Ejemplo ilustrativo",
                keywords: ["if", "else", "condiciones", "lógica"],
                code: [
                    "IF WS-IMPORTE > ZERO",
                    "    DISPLAY 'IMPORTE POSITIVO'",
                    "ELSE",
                    "    DISPLAY 'IMPORTE NO POSITIVO'",
                    "END-IF."
                ].join("\n"),
                notes: [
                    "La condición determina qué bloque se ejecuta.",
                    "Verifica la sintaxis admitida por el compilador y dialecto utilizado."
                ]
            },
            {
                id: "cobol-table-search",
                title: "Recorrido de una tabla",
                description: "Usa un índice para recorrer elementos definidos mediante OCCURS.",
                dialect: "COBOL · Ejemplo conceptual",
                keywords: ["tabla", "búsqueda", "occurs", "índice", "subíndice"],
                code: [
                    "01 WS-TABLA.",
                    "   05 WS-ELEMENTO OCCURS 5 TIMES PIC X(10).",
                    "01 WS-I PIC 9 VALUE 1.",
                    "",
                    "PERFORM VARYING WS-I FROM 1 BY 1",
                    "    UNTIL WS-I > 5",
                    "    DISPLAY WS-ELEMENTO(WS-I)",
                    "END-PERFORM."
                ].join("\n"),
                notes: [
                    "El ejemplo ilustra el recorrido de una tabla; la declaración debe ajustarse a la sintaxis del compilador.",
                    "En COBOL74 y entornos específicos, valida la forma de declarar y referenciar tablas antes de utilizarlo."
                ]
            },
            {
                id: "cobol-program-structure",
                title: "Estructura de un programa",
                description: "Identifica las divisiones principales y la sección de ejecución.",
                dialect: "COBOL · Referencia conceptual",
                keywords: ["divisions", "identification", "environment", "data", "procedure"],
                code: [
                    "IDENTIFICATION DIVISION.",
                    "PROGRAM-ID. EJEMPLO.",
                    "",
                    "DATA DIVISION.",
                    "WORKING-STORAGE SECTION.",
                    "01 WS-MENSAJE PIC X(30).",
                    "",
                    "PROCEDURE DIVISION.",
                    "    MOVE 'HOLA MUNDO' TO WS-MENSAJE",
                    "    DISPLAY WS-MENSAJE",
                    "    STOP RUN."
                ].join("\n"),
                notes: [
                    "La estructura y las cláusulas admitidas pueden variar según el dialecto.",
                    "Compila el ejemplo en el entorno objetivo antes de reutilizarlo."
                ]
            },
            {
                id: "cobol-move",
                title: "Asignación con MOVE",
                description: "Transfiere un valor a una variable compatible con su definición.",
                dialect: "COBOL · Ejemplo ilustrativo",
                keywords: ["move", "asignación", "variables", "pic", "datos"],
                code: [
                    "01 WS-NOMBRE PIC X(20).",
                    "01 WS-IMPORTE PIC 9(5)V99.",
                    "",
                    "MOVE 'ANA LOPEZ' TO WS-NOMBRE",
                    "MOVE 1250.50 TO WS-IMPORTE",
                    "",
                    "DISPLAY WS-NOMBRE",
                    "DISPLAY WS-IMPORTE."
                ].join("\n"),
                notes: [
                    "Las definiciones PIC determinan el formato y tamaño de los datos.",
                    "Revisa las reglas de representación numérica y decimales de tu compilador."
                ]
            },
            {
                id: "cobol-evaluate",
                title: "Evaluación de múltiples condiciones",
                description: "Organiza decisiones según distintos valores de una variable.",
                dialect: "COBOL · Ejemplo conceptual",
                keywords: ["evaluate", "when", "condiciones", "decisiones", "case"],
                code: [
                    "EVALUATE WS-ESTADO",
                    "    WHEN 'A'",
                    "        DISPLAY 'ACTIVO'",
                    "    WHEN 'I'",
                    "        DISPLAY 'INACTIVO'",
                    "    WHEN OTHER",
                    "        DISPLAY 'DESCONOCIDO'",
                    "END-EVALUATE."
                ].join("\n"),
                notes: [
                    "EVALUATE permite expresar decisiones con múltiples alternativas.",
                    "Verifica que la instrucción y su sintaxis sean compatibles con el compilador COBOL utilizado."
                ]
            },
            {
                id: "cobol-perform",
                title: "Repetición con PERFORM",
                description: "Ejecuta una operación varias veces mediante un ciclo controlado.",
                dialect: "COBOL · Ejemplo ilustrativo",
                keywords: ["perform", "ciclo", "loop", "iteración", "contador"],
                code: [
                    "01 WS-CONTADOR PIC 9 VALUE 1.",
                    "",
                    "PERFORM 5 TIMES",
                    "    DISPLAY WS-CONTADOR",
                    "    ADD 1 TO WS-CONTADOR",
                    "END-PERFORM."
                ].join("\n"),
                notes: [
                    "PERFORM 5 TIMES ejecuta el bloque cinco veces.",
                    "Comprueba la compatibilidad de la forma de PERFORM con el dialecto y compilador objetivo."
                ]
            },
            {
                id: "cobol-read-file",
                title: "Lectura secuencial de registros",
                description: "Procesa registros de un archivo hasta detectar el fin de archivo.",
                dialect: "COBOL · Plantilla conceptual",
                keywords: ["read", "archivo", "secuencial", "at end", "eof", "file status"],
                code: [
                    "PERFORM UNTIL WS-FIN = 'S'",
                    "    READ ARCHIVO-ENTRADA",
                    "        AT END",
                    "            MOVE 'S' TO WS-FIN",
                    "        NOT AT END",
                    "            PERFORM PROCESAR-REGISTRO",
                    "    END-READ",
                    "END-PERFORM."
                ].join("\n"),
                notes: [
                    "WS-FIN y PROCESAR-REGISTRO son nombres ilustrativos que deben declararse o implementarse.",
                    "El archivo debe contar con su definición FD y SELECT correspondientes; valida la sintaxis con tu compilador."
                ]
            },
            {
                id: "cobol-numeric-validation",
                title: "Validación de datos numéricos",
                description: "Comprueba que un campo contenga datos numéricos antes de procesarlo.",
                dialect: "COBOL · Ejemplo ilustrativo",
                keywords: ["numeric", "is numeric", "validación", "datos", "cláusula"],
                code: [
                    "IF WS-IMPORTE IS NUMERIC",
                    "    DISPLAY 'DATO NUMERICO'",
                    "ELSE",
                    "    DISPLAY 'DATO INVALIDO'",
                    "END-IF."
                ].join("\n"),
                notes: [
                    "La condición IS NUMERIC comprueba si el contenido cumple las reglas numéricas aplicables al elemento.",
                    "El resultado depende de la definición PIC y del tipo de dato; valida su comportamiento con el compilador objetivo."
                ]
            }
        ],

        // ===========================================
        // UNISYS MCP
        // ===========================================

        "Unisys MCP": [
            {
                id: "unisys-wfl",
                title: "Introducción a WFL",
                description: "Conceptos básicos para organizar y ejecutar trabajos batch.",
                dialect: "Unisys MCP · Conceptual",
                keywords: ["wfl", "batch", "jobs", "procesos"],
                code: [
                    "% ESTRUCTURA CONCEPTUAL DE UN PROCESO",
                    "% 1. Identificar los programas requeridos",
                    "% 2. Definir parámetros y dependencias",
                    "% 3. Establecer condiciones de ejecución",
                    "% 4. Verificar resultados y terminación"
                ].join("\n"),
                notes: [
                    "WFL permite definir y controlar flujos de trabajo en entornos Unisys.",
                    "El contenido es conceptual y no representa un WFL completo ejecutable.",
                    "La sintaxis debe verificarse con la versión de MCP utilizada."
                ]
            },
            {
                id: "unisys-cobol-batch",
                title: "Flujo de un proceso batch",
                description: "Identifica entradas, procesamiento, salidas y validaciones de un proceso.",
                dialect: "Unisys MCP · Diseño de flujo",
                keywords: ["batch", "entrada", "salida", "proceso", "archivo"],
                code: [
                    "/* ESQUEMA CONCEPTUAL */",
                    "/* 1. Validar parámetros de entrada */",
                    "/* 2. Procesar registros */",
                    "/* 3. Generar resultados */",
                    "/* 4. Registrar errores */",
                    "/* 5. Verificar la terminación */"
                ].join("\n"),
                notes: [
                    "Es una guía de análisis, no un programa COBOL ejecutable.",
                    "Define las condiciones de terminación y el tratamiento de errores según el proceso real."
                ]
            },
            {
                id: "unisys-dmsii",
                title: "Conceptos de DMSII",
                description: "Introduce las estructuras de datos y las consideraciones de acceso a una base de datos DMSII.",
                dialect: "DMSII · Conceptual",
                keywords: ["dmsii", "database", "dataset", "set", "esquema"],
                code: [
                    "/* GUÍA CONCEPTUAL */",
                    "/* 1. Identificar la base de datos */",
                    "/* 2. Revisar el esquema */",
                    "/* 3. Identificar DATA SET y SET */",
                    "/* 4. Revisar las relaciones */",
                    "/* 5. Validar el acceso a los datos */"
                ].join("\n"),
                notes: [
                    "DMSII es el sistema de gestión de bases de datos asociado a entornos Unisys MCP.",
                    "Este ejemplo es una lista de revisión, no sintaxis ejecutable.",
                    "Las operaciones concretas dependen del esquema y las herramientas disponibles."
                ]
            },
            {
                id: "unisys-odt",
                title: "Diagnóstico con ODT",
                description: "Organiza la revisión de una ejecución y la identificación de errores.",
                dialect: "Unisys MCP · Guía de diagnóstico",
                keywords: ["odt", "diagnóstico", "depuración", "mensajes", "errores"],
                code: [
                    "/* RUTINA DE DIAGNÓSTICO */",
                    "/* 1. Identificar el proceso afectado */",
                    "/* 2. Revisar mensajes y estado */",
                    "/* 3. Localizar el punto del error */",
                    "/* 4. Registrar evidencia */",
                    "/* 5. Validar la corrección */"
                ].join("\n"),
                notes: [
                    "Es una guía de trabajo, no comandos ODT ejecutables.",
                    "Utiliza los comandos autorizados para la versión de MCP y sigue los procedimientos del entorno."
                ]
            },
            {
                id: "unisys-cande",
                title: "CANDE: comandos y edición",
                description: "Documenta el uso de comandos de CANDE para consultar, editar y gestionar elementos del entorno.",
                dialect: "Unisys MCP · CANDE",
                keywords: ["cande", "comandos", "edición", "archivos", "list"],
                code: [
                    "% EJEMPLO DE REFERENCIA DE TUS NOTAS",
                    "G ILR/SXXX/WFL/INACS097",
                    "SAME",
                    "SAVE",
                    "REM",
                    "LIST"
                ].join("\n"),
                notes: [
                    "La secuencia procede de tus notas de trabajo para consultar y editar un WFL.",
                    "Se conserva como referencia contextual; valida el significado y el orden de los comandos en tu entorno CANDE.",
                    "Sustituye la ruta de ejemplo por la referencia correcta.",
                    "Verifica los cambios antes de guardar un objeto."
                ]
            },
            {
                id: "unisys-copy-environments",
                title: "Copiar objetos entre ambientes",
                description: "Documenta el procedimiento de copia de objetos entre ambientes mediante referencias de origen y destino.",
                dialect: "Unisys MCP · COPY",
                keywords: ["copy", "ambientes", "objetos", "pack", "hostname"],
                code: [
                    "% EJEMPLO BASADO EN NOTAS DE TRABAJO",
                    "COPY ILR/SXXX/OBJECT/P7XX/INACS000/A25MTP001 AS",
                    "     ILR/SXXX/OBJECT/P7XX/INACS000/A25MTP001 TO",
                    "     CLIENTES (PACK, HOSTNAME=VDMBETA)"
                ].join("\n"),
                notes: [
                    "La ruta y el hostname provienen de tus notas y son específicos del entorno.",
                    "Verifica la sintaxis completa de COPY y el sentido de la transferencia antes de ejecutar.",
                    "Sustituye SXXX, P7XX y los nombres del ejemplo por los valores autorizados.",
                    "No ejecutes copias entre ambientes sin confirmar el objeto y el destino."
                ]
            },
            {
                id: "unisys-run-database",
                title: "Ejecución de base de datos",
                description: "Registra una secuencia de ejecución utilizada en tu entorno de trabajo.",
                dialect: "Unisys MCP · Procedimiento contextual",
                keywords: ["base de datos", "ejecución", "objeto", "comandos"],
                code: [
                    "R $SXXX/OBJECT/P751/S016...",
                    "",
                    "T F T",
                    "Q"
                ].join("\n"),
                notes: [
                    "La secuencia se conserva de las notas originales.",
                    "El nombre del objeto está incompleto y no se ha confirmado el significado de cada entrada.",
                    "Completa la referencia y valida cada paso en el entorno correspondiente antes de utilizarlo."
                ]
            },
            {
                id: "unisys-wfl-execute",
                title: "Ejecutar un WFL especial",
                description: "Registra el inicio de un WFL especial mediante una referencia de ejecución.",
                dialect: "Unisys MCP · Ejecución WFL",
                keywords: ["wfl", "ejecutar", "especial", "st", "job"],
                code: [
                    "ST ILR/SXXX/WFL/ESPECIAL/INACS087"
                ].join("\n"),
                notes: [
                    "La instrucción se conserva de las notas de trabajo.",
                    "El nombre y la ruta del WFL son ejemplos específicos del entorno.",
                    "Verifica parámetros, dependencias y ambiente antes de ejecutar el proceso."
                ]
            },
            {
                id: "unisys-extbase",
                title: "Buscar y consultar archivos EXTBASE",
                description: "Documenta la localización y consulta de archivos identificados como EXTBASE.",
                dialect: "Unisys MCP · Gestión de archivos",
                keywords: ["extbase", "file", "list", "archivo", "consulta"],
                code: [
                    "FILE SXXX/FILE/I01/EXTBASE/VDM/20250914/B04 ON S016MEN",
                    "",
                    "LIST SXXX/FILE/I01/EXTBASE/VDM/20250914/B04 ON S016MEN"
                ].join("\n"),
                notes: [
                    "Las rutas y los identificadores provienen de tus notas.",
                    "FILE y LIST aparecen como pasos para localizar y consultar el archivo.",
                    "Verifica la ruta, fecha y ambiente antes de utilizar el ejemplo."
                ]
            },
            {
                id: "unisys-listings",
                title: "Consultar y copiar listados",
                description: "Documenta la localización, consulta y copia de listados generados durante el procesamiento.",
                dialect: "Unisys MCP · Gestión de listados",
                keywords: ["listado", "file", "back", "copy", "pack"],
                code: [
                    "% LOCALIZAR EL LISTADO",
                    "FILE SXXX/LIST/P294/1000/R000/250914/0000123/012CIFRASB06 ON PACK",
                    "",
                    "% CONSULTAR EL LISTADO",
                    "BACK SXXX/LIST/P294/1000/R000/250914/0000123/012CIFRASB06 ON PACK",
                    "",
                    "% COPIAR EL ARCHIVO",
                    "COPY ### AS SXXX/LIST/P294/1000/R000/250914/0000123/012CIFRASB06"
                ].join("\n"),
                notes: [
                    "Las referencias se conservaron de tus notas originales.",
                    "### representa un valor que debe identificarse durante el procedimiento.",
                    "Confirma el origen y el destino de la copia antes de ejecutarla."
                ]
            },
            {
                id: "unisys-cobol-logs",
                title: "Generar y recuperar logs COBOL",
                description: "Resume el procedimiento para localizar una mezcla de procesos, generar un log y copiarlo para su análisis.",
                dialect: "Unisys MCP · Diagnóstico COBOL",
                keywords: ["cobol", "log", "mix", "back", "copy", "procesos"],
                code: [
                    "% 1. LOCALIZAR LA MEZCLA EN ?ON PROCESOS",
                    "",
                    "% 2. GENERAR EL LOG",
                    "LOG P MIX ####",
                    "### 123",
                    "",
                    "% 3. RECUPERAR Y BUSCAR EL NUMERO GENERADO",
                    "BACK *",
                    "",
                    "% 4. COPIAR EL ARCHIVO",
                    "COPY #? AS ILR/LOG/...",
                    "",
                    "% 5. SALIR",
                    "Q"
                ].join("\n"),
                notes: [
                    "El orden de los pasos procede de tus notas de trabajo.",
                    "Los marcadores ####, ### 123 y #? requieren el contexto de la herramienta.",
                    "La ruta ILR/LOG/... es ilustrativa y debe sustituirse por el destino correcto.",
                    "Revisa los logs antes de compartirlos, ya que pueden contener datos operativos."
                ]
            },
            {
                id: "unisys-sumlogs",
                title: "Buscar logs mediante SUMLOGS",
                description: "Documenta la búsqueda de registros relacionados con una fecha y una mezcla de procesos.",
                dialect: "Unisys MCP · Consulta de logs",
                keywords: ["sumlogs", "file", "log", "fecha", "mix"],
                code: [
                    "% BUSCAR EL DIRECTORIO",
                    "FILE *SUMLOG ON SUMLOGS:S",
                    "",
                    "% REVISAR LOS REGISTROS",
                    "% Identificar la fecha y la mezcla buscadas"
                ].join("\n"),
                notes: [
                    "El comando se conserva de las notas originales.",
                    "La búsqueda requiere identificar el registro correspondiente a la fecha y mezcla.",
                    "El procedimiento no detalla todos los pasos de filtrado o apertura del registro."
                ]
            },
            {
                id: "unisys-wfl-logs",
                title: "Generar y recuperar logs WFL",
                description: "Resume el flujo para identificar un trabajo WFL, generar su log y recuperar el archivo.",
                dialect: "Unisys MCP · Diagnóstico WFL",
                keywords: ["wfl", "log", "job", "espe", "line", "lote", "back"],
                code: [
                    "% 1. LOCALIZAR LA MEZCLA EN ?ON PROCESOS",
                    "% Referencias: ESPE, LINE, LOTE",
                    "",
                    "% 2. GENERAR EL LOG",
                    "LOG P JOB ####",
                    "### 123",
                    "",
                    "% 3. RECUPERAR Y BUSCAR EL NUMERO GENERADO",
                    "BACK *",
                    "",
                    "% 4. COPIAR EL ARCHIVO",
                    "COPY #? AS ILR/LOG/...",
                    "",
                    "% 5. SALIR",
                    "1"
                ].join("\n"),
                notes: [
                    "El orden de los pasos procede de tus notas originales.",
                    "ESPE, LINE y LOTE aparecen como referencias para localizar la mezcla.",
                    "Los marcadores de entrada requieren confirmación en el entorno real.",
                    "La nota original indica 1 como salida; confirma su significado antes de utilizarlo."
                ]
            }
        ],

        // ===========================================
        // JCL
        // ===========================================
        "JCL": [
            {
                id: "jcl-basics",
                title: "Estructura básica de un JOB",
                description: "Reconoce las sentencias JOB, EXEC y DD en un flujo batch.",
                dialect: "IBM z/OS · Ejemplo ilustrativo",
                keywords: ["job", "exec", "dd", "batch"],
                code: [
                    "//MIJOB    JOB (ACCT),'EJEMPLO'",
                    "//PASO1    EXEC PGM=IEFBR14",
                    "//SALIDA   DD SYSOUT=*"
                ].join("\n"),
                notes: [
                    "Los parámetros del JOB dependen del entorno y sus convenciones.",
                    "JCL pertenece al entorno IBM z/OS y no sustituye a WFL en Unisys MCP."
                ]
            },
            {
                id: "jcl-dataset",
                title: "Definición de un archivo DD",
                description: "Asocia un nombre lógico con un conjunto de datos utilizado por un paso.",
                dialect: "IBM z/OS · Ejemplo ilustrativo",
                keywords: ["dd", "dataset", "archivo", "disp", "dsn"],
                code: [
                    "//LECTURA  DD DSN=MI.ARCHIVO.ENTRADA,",
                    "//            DISP=SHR"
                ].join("\n"),
                notes: [
                    "DISP=SHR solicita acceso compartido al conjunto de datos existente.",
                    "Ajusta el DSN y las condiciones de disposición al proceso real."
                ]
            },
            {
                id: "jcl-exec",
                title: "Ejecución de un programa",
                description: "Define un paso que invoca un programa mediante EXEC PGM.",
                dialect: "IBM z/OS · Ejemplo ilustrativo",
                keywords: ["exec", "pgm", "programa", "paso", "job"],
                code: [
                    "//PASO01   EXEC PGM=MIprograma"
                ].join("\n"),
                notes: [
                    "El nombre del programa debe corresponder a un módulo disponible para ejecución.",
                    "En un JOB real, agrega las definiciones DD y parámetros requeridos por el programa."
                ]
            },
            {
                id: "jcl-if-cond",
                title: "Condiciones de ejecución",
                description: "Ilustra el control de pasos según el código de retorno previo.",
                dialect: "IBM z/OS · Ejemplo ilustrativo",
                keywords: ["cond", "return code", "rc", "if", "ejecución"],
                code: [
                    "//PASO01   EXEC PGM=PROGRAMA1",
                    "//PASO02   EXEC PGM=PROGRAMA2,COND=(4,LT,PASO01)"
                ].join("\n"),
                notes: [
                    "COND evalúa códigos de retorno para determinar si se omite un paso.",
                    "Verifica cuidadosamente el operador y la condición según el resultado que quieras controlar."
                ]
            }
        ],

        // ===========================================
        // DB2
        // ===========================================
        "DB2": [
            {
                id: "db2-select",
                title: "Consulta SELECT",
                description: "Obtiene columnas específicas de una tabla aplicando un filtro.",
                dialect: "SQL · Ejemplo ilustrativo",
                keywords: ["select", "where", "sql", "consulta"],
                code: [
                    "SELECT CUSTOMER_ID, CUSTOMER_STATUS",
                    "FROM CUSTOMER_TABLE",
                    "WHERE CUSTOMER_STATUS = 'ACTIVE';"
                ].join("\n"),
                notes: [
                    "Ajusta los nombres de tabla y columnas al esquema real.",
                    "Consulta los permisos y convenciones de acceso antes de ejecutar consultas corporativas."
                ]
            },
            {
                id: "db2-order-by",
                title: "Ordenar resultados",
                description: "Ordena los registros devueltos por una o más columnas.",
                dialect: "Db2 SQL · Ejemplo ilustrativo",
                keywords: ["order by", "orden", "asc", "desc", "consulta"],
                code: [
                    "SELECT CUSTOMER_ID, CUSTOMER_STATUS",
                    "FROM CUSTOMER_TABLE",
                    "ORDER BY CUSTOMER_ID ASC;"
                ].join("\n"),
                notes: [
                    "ASC ordena de forma ascendente y DESC de forma descendente.",
                    "Si no se especifica ORDER BY, no debe asumirse un orden concreto de los resultados."
                ]
            },
            {
                id: "db2-aggregate",
                title: "Agrupar registros con GROUP BY",
                description: "Resume datos por grupo mediante funciones de agregación.",
                dialect: "Db2 SQL · Ejemplo ilustrativo",
                keywords: ["group by", "count", "sum", "agrupación", "agregación"],
                code: [
                    "SELECT CUSTOMER_STATUS, COUNT(*) AS TOTAL",
                    "FROM CUSTOMER_TABLE",
                    "GROUP BY CUSTOMER_STATUS;"
                ].join("\n"),
                notes: [
                    "COUNT(*) cuenta los registros de cada grupo.",
                    "Las columnas seleccionadas que no sean agregaciones normalmente deben formar parte de GROUP BY."
                ]
            },
            {
                id: "db2-cursor",
                title: "Ciclo de vida de un cursor",
                description: "Resume los pasos habituales para recorrer resultados en SQL embebido.",
                dialect: "Db2 · SQL embebido conceptual",
                keywords: ["cursor", "declare", "open", "fetch", "close", "cobol"],
                code: [
                    "/* ESQUEMA CONCEPTUAL */",
                    "/* DECLARE CURSOR */",
                    "/* OPEN CURSOR */",
                    "/* FETCH dentro del ciclo */",
                    "/* Verificar SQLCODE */",
                    "/* CLOSE CURSOR */"
                ].join("\n"),
                notes: [
                    "Es un resumen del flujo, no un bloque completo compilable de SQL embebido.",
                    "En COBOL con Db2, la declaración, el área host y el tratamiento de SQLCODE deben ajustarse al entorno."
                ]
            },
            {
                id: "db2-update",
                title: "Actualizar registros con UPDATE",
                description: "Modifica los valores de las filas que cumplen una condición.",
                dialect: "Db2 SQL · Ejemplo ilustrativo",
                keywords: ["update", "set", "where", "actualizar", "sql"],
                code: [
                    "UPDATE CUSTOMER_TABLE",
                    "SET CUSTOMER_STATUS = 'INACTIVE'",
                    "WHERE CUSTOMER_ID = 1001;"
                ].join("\n"),
                notes: [
                    "La cláusula WHERE limita qué registros se modifican.",
                    "Sin WHERE, la actualización puede afectar todas las filas. Revisa los permisos y las transacciones antes de ejecutar."
                ]
            },
            {
                id: "db2-insert",
                title: "Insertar registros con INSERT",
                description: "Agrega una nueva fila especificando las columnas y sus valores.",
                dialect: "Db2 SQL · Ejemplo ilustrativo",
                keywords: ["insert", "values", "alta", "registro", "sql"],
                code: [
                    "INSERT INTO CUSTOMER_TABLE",
                    "    (CUSTOMER_ID, CUSTOMER_STATUS)",
                    "VALUES",
                    "    (1002, 'ACTIVE');"
                ].join("\n"),
                notes: [
                    "Los valores deben ser compatibles con los tipos de datos de las columnas.",
                    "Verifica las restricciones de unicidad, claves y columnas obligatorias."
                ]
            },
            {
                id: "db2-delete",
                title: "Eliminar registros con DELETE",
                description: "Elimina las filas que coinciden con un criterio de búsqueda.",
                dialect: "Db2 SQL · Ejemplo ilustrativo",
                keywords: ["delete", "where", "eliminar", "borrado", "sql"],
                code: [
                    "DELETE FROM CUSTOMER_TABLE",
                    "WHERE CUSTOMER_ID = 1002;"
                ].join("\n"),
                notes: [
                    "Comprueba el criterio con un SELECT antes de ejecutar el DELETE.",
                    "Sin WHERE, se pueden eliminar todas las filas de la tabla. Sigue el procedimiento transaccional de tu entorno."
                ]
            },
            {
                id: "db2-case",
                title: "Clasificar resultados con CASE",
                description: "Devuelve un valor calculado según las condiciones de cada registro.",
                dialect: "Db2 SQL · Ejemplo ilustrativo",
                keywords: ["case", "when", "then", "else", "clasificación", "sql"],
                code: [
                    "SELECT CUSTOMER_ID,",
                    "       CASE",
                    "           WHEN CUSTOMER_STATUS = 'ACTIVE'",
                    "               THEN 'HABILITADO'",
                    "           ELSE 'NO HABILITADO'",
                    "       END AS STATUS_DESCRIPTION",
                    "FROM CUSTOMER_TABLE;"
                ].join("\n"),
                notes: [
                    "CASE permite construir expresiones condicionales dentro de una consulta.",
                    "El alias STATUS_DESCRIPTION identifica la columna calculada en el resultado."
                ]
            }
        ],

        "SQL": [
            {
                id: "sql-select-where",
                title: "Consultas SELECT y filtros WHERE",
                description: "Consulta columnas específicas y filtra filas según una condición.",
                dialect: "SQL · Ejemplo ilustrativo",
                keywords: ["select", "where", "sql", "consulta", "filtros"],
                code: [
                    "SELECT CUSTOMER_ID, CUSTOMER_STATUS",
                    "FROM CUSTOMER_TABLE",
                    "WHERE CUSTOMER_STATUS = 'ACTIVE';"
                ].join("\n"),
                notes: [
                    "SELECT define las columnas que se consultan.",
                    "WHERE filtra las filas según la condición indicada.",
                    "Adapta los nombres de tabla y columnas al esquema real."
                ]
            },
            {
                id: "sql-joins",
                title: "Relacionar tablas con JOIN",
                description: "Combina registros de dos tablas mediante una condición de relación.",
                dialect: "SQL · Ejemplo ilustrativo",
                keywords: ["join", "inner join", "left join", "tablas", "relaciones"],
                code: [
                    "SELECT C.CUSTOMER_ID, O.ORDER_ID",
                    "FROM CUSTOMERS C",
                    "INNER JOIN ORDERS O",
                    "    ON O.CUSTOMER_ID = C.CUSTOMER_ID;"
                ].join("\n"),
                notes: [
                    "INNER JOIN devuelve las filas que cumplen la condición de unión.",
                    "La calidad de los resultados depende de la relación entre las tablas.",
                    "LEFT JOIN puede utilizarse cuando se necesitan conservar todas las filas de la tabla izquierda."
                ]
            },
            {
                id: "sql-aggregates",
                title: "Agrupaciones y funciones de agregación",
                description: "Resume conjuntos de registros con COUNT, SUM, AVG y GROUP BY.",
                dialect: "SQL · Ejemplo ilustrativo",
                keywords: ["group by", "count", "sum", "avg", "having"],
                code: [
                    "SELECT CUSTOMER_STATUS, COUNT(*) AS TOTAL",
                    "FROM CUSTOMERS",
                    "GROUP BY CUSTOMER_STATUS",
                    "HAVING COUNT(*) > 1;"
                ].join("\n"),
                notes: [
                    "GROUP BY crea grupos según los valores de las columnas indicadas.",
                    "HAVING filtra los grupos después de la agregación.",
                    "Las funciones y reglas específicas pueden variar entre gestores de bases de datos."
                ]
            },
            {
                id: "sql-subqueries",
                title: "Subconsultas con EXISTS",
                description: "Filtra registros cuando existe una fila relacionada que cumple una condición.",
                dialect: "SQL · Ejemplo ilustrativo",
                keywords: ["subquery", "exists", "correlated", "consulta", "relaciones"],
                code: [
                    "SELECT C.CUSTOMER_ID",
                    "FROM CUSTOMERS C",
                    "WHERE EXISTS (",
                    "    SELECT 1",
                    "    FROM ORDERS O",
                    "    WHERE O.CUSTOMER_ID = C.CUSTOMER_ID",
                    ");"
                ].join("\n"),
                notes: [
                    "EXISTS comprueba si la subconsulta devuelve al menos una fila.",
                    "La subconsulta del ejemplo está relacionada con la fila externa mediante CUSTOMER_ID."
                ]
            }
        ],

        "CICS": [
            {
                id: "cics-overview",
                title: "Conceptos de CICS",
                description: "Introduce el papel de CICS en la ejecución de aplicaciones transaccionales en IBM z/OS.",
                dialect: "IBM CICS · Introducción conceptual",
                keywords: ["cics", "transacciones", "mainframe", "online", "z/os"],
                code: [
                    "/* FLUJO CONCEPTUAL */",
                    "/* 1. Recibir una solicitud transaccional */",
                    "/* 2. Ejecutar la lógica de aplicación */",
                    "/* 3. Consultar o actualizar datos */",
                    "/* 4. Devolver una respuesta */"
                ].join("\n"),
                notes: [
                    "CICS proporciona servicios para aplicaciones transaccionales.",
                    "Este esquema no es un programa CICS ejecutable.",
                    "Los detalles dependen de la configuración y versión del entorno."
                ]
            },
            {
                id: "cics-commarea",
                title: "Intercambio de datos con COMMAREA",
                description: "Explica conceptualmente el uso de COMMAREA para pasar datos entre programas CICS.",
                dialect: "IBM CICS · COBOL conceptual",
                keywords: ["commarea", "link", "programas", "datos", "cics"],
                code: [
                    "EXEC CICS LINK",
                    "    PROGRAM('PROGDEST')",
                    "    COMMAREA(WS-COMMAREA)",
                    "    LENGTH(WS-LONGITUD)",
                    "END-EXEC"
                ].join("\n"),
                notes: [
                    "Ejemplo ilustrativo de una instrucción EXEC CICS LINK.",
                    "WS-COMMAREA y WS-LONGITUD deben declararse correctamente en el programa.",
                    "El programa destino debe existir y aceptar el formato de datos enviado.",
                    "Verifica la sintaxis y las definiciones con la versión de CICS y el compilador utilizados."
                ]
            },
            {
                id: "cics-link-xctl",
                title: "Transferencia de control con LINK y XCTL",
                description: "Compara dos formas de transferir el control entre programas CICS.",
                dialect: "IBM CICS · Referencia conceptual",
                keywords: ["link", "xctl", "control", "programas", "cics"],
                code: [
                    "/* LINK: INVOCACION DE OTRO PROGRAMA */",
                    "EXEC CICS LINK",
                    "    PROGRAM('PROGDEST')",
                    "END-EXEC",
                    "",
                    "/* XCTL: TRANSFERENCIA DE CONTROL */",
                    "EXEC CICS XCTL",
                    "    PROGRAM('PROGDEST')",
                    "END-EXEC"
                ].join("\n"),
                notes: [
                    "LINK permite invocar otro programa y retornar al programa invocador.",
                    "XCTL transfiere el control al programa destino sin regresar al punto siguiente del invocador.",
                    "El ejemplo omite parámetros que podrían ser necesarios en una aplicación real."
                ]
            },
            {
                id: "cics-resp",
                title: "Manejo de RESP y RESP2",
                description: "Introduce la revisión de resultados de comandos CICS mediante códigos de respuesta.",
                dialect: "IBM CICS · Manejo de errores",
                keywords: ["resp", "resp2", "errores", "validación", "cics"],
                code: [
                    "EXEC CICS LINK",
                    "    PROGRAM('PROGDEST')",
                    "    RESP(WS-RESP)",
                    "    RESP2(WS-RESP2)",
                    "END-EXEC",
                    "",
                    "IF WS-RESP NOT = DFHRESP(NORMAL)",
                    "    DISPLAY 'ERROR EN COMANDO CICS'",
                    "END-IF"
                ].join("\n"),
                notes: [
                    "WS-RESP y WS-RESP2 requieren definiciones compatibles con las convenciones de CICS.",
                    "DFHRESP es una forma habitual de comparar valores de respuesta CICS en COBOL.",
                    "El manejo de errores debe adaptarse a las reglas de la aplicación y del entorno."
                ]
            }
        ],

        "Codigo Seguro": [
            {
                id: "secure-input-validation",
                title: "Validación de entradas",
                description: "Valida los datos antes de utilizarlos en operaciones de negocio o consultas.",
                dialect: "Código Seguro · Ejemplo conceptual",
                keywords: ["validación", "entrada", "datos", "seguridad", "controles"],
                code: [
                    "IF WS-IMPORTE IS NUMERIC",
                    "    PERFORM PROCESAR-IMPORTE",
                    "ELSE",
                    "    PERFORM REGISTRAR-ERROR",
                    "END-IF"
                ].join("\n"),
                notes: [
                    "El ejemplo ilustra una validación básica en COBOL.",
                    "La validación IS NUMERIC depende de la definición del campo y no reemplaza todos los controles de negocio.",
                    "Los datos externos deben validarse de acuerdo con su formato y las reglas del sistema."
                ]
            },
            {
                id: "secure-sql",
                title: "Consultas SQL seguras",
                description: "Explica por qué deben evitarse las consultas construidas mediante concatenación de datos externos.",
                dialect: "Código Seguro · SQL conceptual",
                keywords: ["sql injection", "sql", "consultas", "parámetros", "seguridad"],
                code: [
                    "/* PATRON RECOMENDADO: CONSULTA PARAMETRIZADA */",
                    "SELECT CUSTOMER_ID",
                    "FROM CUSTOMERS",
                    "WHERE CUSTOMER_ID = ?"
                ].join("\n"),
                notes: [
                    "El marcador ? es ilustrativo; el mecanismo de parámetros depende de la API o del entorno SQL utilizado.",
                    "En SQL embebido en COBOL, utiliza variables host y los mecanismos de vinculación admitidos.",
                    "No construyas consultas concatenando directamente valores proporcionados por usuarios."
                ]
            },
            {
                id: "secure-sensitive-data",
                title: "Protección de datos sensibles",
                description: "Establece precauciones para evitar exponer datos confidenciales en logs y mensajes de error.",
                dialect: "Código Seguro · Buenas prácticas",
                keywords: ["datos sensibles", "logs", "privacidad", "errores", "acceso"],
                code: [
                    "/* EVITAR REGISTRAR DATOS CONFIDENCIALES */",
                    "DISPLAY 'ERROR EN PROCESAMIENTO'",
                    "DISPLAY 'CODIGO DE ERROR: ' WS-COD-ERROR"
                ].join("\n"),
                notes: [
                    "Registra información suficiente para diagnosticar errores sin exponer datos sensibles.",
                    "Limita el acceso a logs y aplica las políticas de retención de la organización.",
                    "Evita incluir contraseñas, credenciales, números completos de cuenta u otros datos confidenciales."
                ]
            },
            {
                id: "secure-code-review",
                title: "Lista de revisión de código seguro",
                description: "Resume comprobaciones para detectar riesgos antes de integrar un cambio.",
                dialect: "Código Seguro · Lista de verificación",
                keywords: ["code review", "vulnerabilidades", "secretos", "permisos", "validación"],
                code: [
                    "/* LISTA DE VERIFICACION */",
                    "/* Validar entradas */",
                    "/* Revisar permisos */",
                    "/* Evitar secretos en el código */",
                    "/* Manejar errores de forma segura */",
                    "/* Revisar logs y datos sensibles */"
                ].join("\n"),
                notes: [
                    "Esta lista sirve como punto de partida, no como auditoría completa.",
                    "Adapta las comprobaciones al lenguaje, la arquitectura y las políticas de seguridad aplicables."
                ]
            }
        ],

        "Git": [
            {
                id: "git-basics",
                title: "Flujo básico de Git",
                description: "Registra cambios y crea commits para mantener un historial de desarrollo.",
                dialect: "Git · Comandos básicos",
                keywords: ["git", "status", "add", "commit", "historial"],
                code: [
                    "git status",
                    "git add archivo.cbl",
                    "git commit -m \"Agrega validacion de datos\"",
                    "git log --oneline"
                ].join("\n"),
                notes: [
                    "git status muestra el estado del directorio de trabajo.",
                    "git add prepara los cambios para el siguiente commit.",
                    "git commit registra los cambios preparados en el historial local."
                ]
            },
            {
                id: "git-branches",
                title: "Crear y cambiar ramas",
                description: "Utiliza ramas para desarrollar cambios de forma aislada.",
                dialect: "Git · Ramas",
                keywords: ["branch", "switch", "ramas", "desarrollo", "aislamiento"],
                code: [
                    "git switch -c feature/validacion-clientes",
                    "git status",
                    "git add archivo.cbl",
                    "git commit -m \"Agrega validacion de clientes\""
                ].join("\n"),
                notes: [
                    "git switch -c crea una rama y cambia a ella.",
                    "Utiliza nombres de rama coherentes con las convenciones del equipo.",
                    "El nombre archivo.cbl es ilustrativo."
                ]
            },
            {
                id: "git-merge",
                title: "Integrar cambios con merge",
                description: "Integra los cambios de una rama en otra y reconoce los conflictos que pueden surgir.",
                dialect: "Git · Integración",
                keywords: ["merge", "conflictos", "integración", "ramas"],
                code: [
                    "git switch main",
                    "git merge feature/validacion-clientes",
                    "git status"
                ].join("\n"),
                notes: [
                    "El ejemplo supone que main es la rama de destino.",
                    "Resuelve los conflictos manualmente cuando Git no puede integrar los cambios automáticamente.",
                    "Confirma que las pruebas pasen antes de compartir la integración."
                ]
            },
            {
                id: "git-undo",
                title: "Revisar y revertir cambios",
                description: "Consulta diferencias y utiliza revert para generar un commit que revierta otro.",
                dialect: "Git · Historial y recuperación",
                keywords: ["diff", "show", "revert", "historial", "recuperación"],
                code: [
                    "git diff",
                    "git show --stat",
                    "git log --oneline",
                    "git revert HASH_DEL_COMMIT"
                ].join("\n"),
                notes: [
                    "git diff muestra cambios que aún no se han registrado en un commit, según el contexto.",
                    "git show permite inspeccionar un commit.",
                    "Sustituye HASH_DEL_COMMIT por el identificador real.",
                    "git revert crea un nuevo commit que revierte los cambios de otro; no elimina el historial."
                ]
            }
        ]


    }
};