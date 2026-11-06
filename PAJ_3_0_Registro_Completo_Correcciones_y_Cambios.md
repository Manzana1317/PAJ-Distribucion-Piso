# PAJ 3.0 | Registro de correcciones y cambios

**Fecha de consolidación:** 06-11-2026  
**Base de código:** `PAJ_3_0_Planos_Alineados_Check_v2.zip`  
**Estado:** documento de requisitos y seguimiento. **No equivale a una certificación de implementación.**

Este registro reúne las correcciones solicitadas para PAJ 3.0. Las funciones descritas a continuación
son requisitos confirmados; su presencia y funcionamiento deben comprobarse individualmente en el código
y en un entorno de pruebas antes de declarar la versión lista.

# PAJ 3.0 — Registro consolidado de cambios
Fecha: 2026-11-05
Estado: requisitos confirmados, pendientes de implementación y pruebas. NO modificar PAJ 2.0 hasta validar PAJ 3.0.

## Estabilidad y horarios
- Investigar y corregir cierres de sesión inesperados aproximadamente cada 30 minutos, incluso con actividad, en ambos usuarios/dispositivos.
- Eliminar botón «Exportar distribución».
- Sustituir planos vertical y horizontal por «Piso Vertical corregido.pptx» y «Piso horizontal corregido.pptx»; alinear individualmente las posiciones interactivas a cada plano, no superponer coordenadas antiguas; conservar arrastre, zoom y sincronización.
- Corregir importación/publicación de PDF semanal (lunes a domingo), especialmente la pérdida del lunes en semana 09–15 noviembre 2026, y la aparición de «Sin resultados» aun con turnos almacenados.
- Mostrar vista previa fiable y confirmar antes de publicar; evitar duplicados y preservar consistencia.
- Admin puede editar horarios publicados: modificar turnos individuales (agregar, quitar, cambiar horas) o reemplazar semana completa mediante PDF, con confirmación y respaldo.
- Formato visual de todos los nombres: inicial mayúscula en cada nombre/apellido, resto minúscula, respetando acentos/Ñ; sin alterar el nombre original en base de datos. Aplicar a planos, listas y edición.

## Menús y permisos
- «Subir horarios» contendrá importar PDF semanal, vista previa y publicar. NO incluir «Editar horarios» dentro de este submenú.
- Añadir botón «Opciones», solo admin, con «Editar horarios» y «Licencias médicas».
- Admin: registrar licencia médica por trabajador y fechas de inicio/fin inclusivas, consultar, modificar y finalizar anticipadamente con confirmación. No recopilar diagnósticos innecesarios; proteger acceso.
- En el menú individual de trabajador, añadir botón «🩺 Licencia médica» accesible para admin y Lcl.paj, con marca temporal SOLO del turno seleccionado.

## Licencias médicas: distinguir dos modalidades
### Licencia por fechas (Opciones, solo admin)
- Trabajador con turno programado y licencia vigente aparece al final de la lista de trabajadores, con etiqueta «Licencia médica», no disponible para asignación durante las fechas.
- No borrar horario original; reincorporación automática al finalizar período. Resolver asignaciones incompatibles durante licencia sin borrar el historial.
- Excluir de Trabajadores activos y Líder de Experiencia; sumar una vez a Licencias si tiene turno seleccionado.
### Etiqueta temporal (menú individual, cualquier usuario)
- Botón «🩺 Licencia médica» aplica estado temporal solo al turno seleccionado, reversible.
- En plano mostrar etiqueta roja «LICENCIA» encima del nombre, visualmente idéntica a «INASISTENTE» salvo texto.
- IMPORTANTE: NO libera puesto, NO bloquea movimientos ni reasignación, NO cambia posición.
- Excluir de Trabajadores activos; sumar una vez a Licencias. Sincronizar entre dispositivos.
- No confundir marca temporal con licencia administrativa por fechas.

## Contadores: cinco
1. «Trabajadores activos»: personal general programado para día/turno, excluyendo INASISTENTES, licencias y Líderes de Experiencia.
2. «Puestos asignados»: cuenta independiente; no disminuir simplemente por marca temporal INASISTENTE o LICENCIA si la asignación permanece.
3. «BREAK»: personas presentes con estado BREAK; no contar ausentes/licencias.
4. «Líder de Experiencia»: personal de categoría «Crew Líder de experiencia» programado en el turno, excluyendo inasistentes y licencias; no sumarlo a Trabajadores activos.
5. «Licencias»: personas programadas en el turno con licencia por fechas activa o marca temporal LICENCIA; sin doble conteo.
- Todos los contadores se actualizan con fecha/turno/estado y se sincronizan entre dispositivos.

## Etiquetas en plano
- El estado BREAK sigue existiendo, pero no mostrar check verde ni texto «Break» sobre el mapa.
- Corregir desalineación de etiqueta roja «INASISTENTE» en plano vertical (captura del 05/11/2026): centrada horizontalmente sobre la ficha del trabajador, anclada a su posición, acompaña arrastre y zoom; verificar ambos planos.
- Aplicar idéntico anclaje a «LICENCIA».
- La marca temporal LICENCIA no libera ni bloquea el puesto. Mantener asignación y permitir movimientos.

## Control de versiones
- Producción PAJ 2.0 en https://dibujopiso.pages.dev debe permanecer intacta.
- Implementar, probar en despliegue de pruebas y solo luego evaluar publicación.


## Hallazgos y pruebas obligatorias

- **PDF semanal:** en la semana del 09 al 15-11-2026 se observó un registro publicado con turnos desde
  el martes 10, omitiendo el lunes 09. Verificar parser, zona horaria, vista previa, publicación y consulta.
- **Sesiones:** reproducir el cierre inesperado alrededor de 30 minutos con ambos perfiles y dispositivos.
- **Planos:** comparar visualmente contra ambos PPT corregidos y probar arrastre, zoom y ubicación de etiquetas.
- **Licencias:** probar separadamente licencia administrativa por fechas y etiqueta temporal de turno.
- **Permisos:** verificar que `Lcl.paj` no pueda entrar en opciones administrativas, pero sí aplicar la
  etiqueta temporal de licencia en el menú de trabajador.
- **Sincronización:** validar contadores y cambios simultáneos en dos dispositivos.
- **Regresión:** comprobar que la distribución de piso, importación y publicación, estados y asignaciones
  existentes no pierdan funcionalidad.

## Estado de esta entrega

| Entregable | Estado |
|---|---|
| Registro consolidado de cambios | Preparado |
| Copia de la última base ZIP disponible | Incluida en el paquete |
| Correcciones implementadas y probadas | **No verificadas** |
| Nueva versión lista para producción | **No** |
| PAJ 2.0 modificada | **No** |

## Procedimiento de actualización acordado

Antes de publicar, solicitar selección expresa: **PAJ 2.0**, **PAJ 3.0** o **ambas**.
Presentar los cambios y solicitar confirmación antes de desplegar.
Mantener producción y pruebas independientes.
