import { Button } from "@/Components/ui/button";
import MailForm from "@/Components/MailForm";
import Todos from "@/Components/Todos";
import Form from "@/Components/Form";
import { getTodos } from "@/lib/todos";
import Link from "next/link";

const Home = async () => {

    const { todos = [] } = await getTodos();

    return (
        <div className="py-20 flex flex-col items-center gap-16">
            <div className="container md:max-w-4xl">
                <h1 className="mb-10 px-2 text-3xl text-center font-bold">
                    Todos
                </h1>

                <Todos todos={todos} />
            </div>

            <div className="container md:max-w-4xl">
                <h1 className="mb-10 px-2 text-3xl text-center font-bold">
                    Server Actions In Form
                </h1>

                <Form />
            </div>

            <div className="container md:max-w-4xl">
                <MailForm />
            </div>

            <Link
                href={"/dashboard"}
            >
                <Button className="px-5 py-6 text-lg font-bold">
                    Dashboard
                </Button>
            </Link>
        </div>
    )
};

export default Home;