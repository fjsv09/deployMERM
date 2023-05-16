import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setTask({
          title: task[0].title,
          description: task[0].description,
        });
      }
    };
    loadTask();
  }, []);
  return (
    <div className="mx-auto">
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values, actions);

          if (params.id) {
            await updateTask(params.id, values);
            navigate("/");
          } else {
            await createTask(values);
          }
          navigate("/");
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit Task" : "Create Task"}
            </h1>

            <div>
              <label htmlFor="title" className="block">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Write a title"
                className="px-2 py-1 rounded-sm w-full"
                onChange={handleChange}
                value={values.title}
              />
            </div>
            <div>
              <label htmlFor="description" className="block">
                Description
              </label>
              <textarea
                name="description"
                rows="3"
                placeholder="Write a description"
                className="px-2 py-1 rounded-sm w-full"
                onChange={handleChange}
                value={values.description}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="block bg-indigo-500 px-2 py-1 rounded-md text-white w-full"
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
