import { FormEvent, useState } from "react";
import "./App.scss";

interface Tarea {
  name: string;
  done: boolean;
}

function App() {
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const [listTarea, setListTarea] = useState<Tarea[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevaTarea(e.target.value);
  };

  // se crea la tarea en 'handleSubmit' y se lo manda a 'addTask' luego se auto elimina
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    addTask(nuevaTarea);
    setNuevaTarea("");
  };

  // se aguarda la tarea en "addTask"

  const addTask = (tarea: string): void => {
    const nuevaTarea: Tarea[] = [...listTarea, { name: tarea, done: false }];
    setListTarea(nuevaTarea);
  };
  //.....

  return (
    <section>
      <div className="cotainer">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Tarea </h5>
              </div>
              <div className="card-text p-3">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="escribir.."
                    value={nuevaTarea}
                    className="form-control"
                    onChange={onChange}
                  />
                  <br />
                  <button type="button" className="btn btn-primary w-100">
                    Guardar
                  </button>
                  <br/>
                </form>

                {/*de esta forma pademos visualizar las tareas en la pantalla */}
                {listTarea.map((i: Tarea, index: number) => (
                  <div key={index} className="card">
                    <div className="card-body">
                      <h5>{i.name}</h5>
                    </div>
                  </div>
                ))}
                {/*fin de mapear*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
