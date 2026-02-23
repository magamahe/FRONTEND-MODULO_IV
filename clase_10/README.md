# Actividad 1: Básico: Mensaje compartido
Objetivo: Practicar elevar estado simple: InputMensaje actualiza, MostrarMensaje muestra.
Estructura de archivos sugerida:
• Padre.jsx
• InputMensaje.jsx
• MostrarMensaje.jsx
Consigna:
1. Crear Padre.jsx. Dentro usar useState.
2. Crear componente InputMensaje que reciba mensaje y setMensaje como props:
3. Debe renderizar un <input /> controlado: value={mensaje} y onChange={e =>
setMensaje(e.target.value)}.
4. Crear MostrarMensaje que reciba mensaje y lo muestre en un <p>.
5. Renderizar Padre en App y verificar que al escribir en el input el párrafo se actualiza en tiempo
real.
Pistas:
• Input controlado = value + onChange.
• Pasar setMensaje al hijo que escribe.

---

# Actividad 2: Intermedio: Contador compartido con botones
Objetivo: Elevar un contador al padre y permitir que dos hijos (Sumar, Restar) lo modifiquen; un tercer hijo
MostrarContador lo muestre.
Estructura de archivos sugerida:
• PadreContador.jsx
• BotonSumar.jsx
• BotonRestar.jsx
• MostrarContador.jsx
Consigna:
1. En PadreContador definir: const [contador, setContador] = useState(0).
2. Crear BotonSumar: recibe setContador y al hacer click hace setContador(c => c + 1).
3. Crear BotonRestar: similar con setContador(c => c - 1).
4. Crear MostrarContador: recibe contador y lo muestra.
5. Integrar todo y comprobar que ambos botones afectan el mismo contador.
Pistas:
• Usar la forma con callback c => c + 1 para evitar problemas si se hacen varias actualizaciones seguidas.
• Evitar hacer setContador(contador + 1) directamente si la variable contador puede estar desactualizada en closures
(aunque en este ejemplo funciona, es buena práctica).

----

Actividad 3: Avanzado: Lista de tareas colaborativa
Objetivo: Crear lista de tareas donde PadreTareas mantiene tareas y la función para agregar/eliminar; hijo AgregarTarea
agrega; ListaTareas muestra y permite eliminar.
Estructura de archivos sugerida:
• PadreTareas.jsx
• AgregarTarea.jsx
• ListaTareas.jsx
• Tarea.jsx (opcional: componente presentacional)
Consigna:
1. En PadreTareas inicializar: const [tareas, setTareas] = useState([]);
2. AgregarTarea debe recibir setTareas. Tiene un input local (o controlado) y al submit hace: setTareas(prev =>
[...prev, { id: Date.now(), texto: nuevaTarea }]);
3. ListaTareas recibe tareas y setTareas. Mapea y renderiza cada Tarea.
4. Implementar función de eliminación en PadreTareas y pasarla a ListaTareas: const eliminarTarea = id =>
setTareas(prev => prev.filter(t => t.id !== id));
5. Tarea recibe tarea y onEliminar, muestra texto y botón eliminar.
Pistas:
• Usar id único para cada tarea (Date.now() es suficiente para práctica).
• Mantener inmutabilidad al agregar o eliminar.
