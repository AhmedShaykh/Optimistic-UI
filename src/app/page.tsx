import Todos from "@/Components/Todos";
import { getTodos } from "@/lib/todos";

const Home = async () => {

    const { todos = [] } = await getTodos();

    return (
        <div className="py-20 flex justify-center">
            <div className="container md:max-w-2xl">
                <h1 className="mb-10 px-2 text-3xl font-bold">
                    Todos
                </h1>
                <Todos todos={todos} />
            </div>
        </div>
    )
};

export default Home;