import Form from "@/Components/Form";
import Todos from "@/Components/Todos";
import { getTodos } from "@/lib/todos";

const Home = async () => {

    const { todos = [] } = await getTodos();

    return (
        <div className="py-20 flex flex-col items-center gap-16">
            <div className="container md:max-w-2xl">
                <h1 className="mb-10 px-2 text-3xl font-bold">
                    Todos
                </h1>

                <Todos todos={todos} />
            </div>

            <div className="container md:max-w-2xl">
                <h1 className="mb-10 px-2 text-3xl font-bold">
                    Server Actions In Form
                </h1>

                <Form />
            </div>
        </div>
    )
};

export default Home;