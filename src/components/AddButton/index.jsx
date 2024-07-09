"use client";
import { useRouter } from "next/navigation";

const AddButton = ({ url }) => {
  const router = useRouter();

  return (
    <button
      className="mx-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => router.push(url)}
    >
      Añadir
    </button>
  );
};

export default AddButton;
