import { createUser } from "@/utils/actions";

function FormActions() {
  return (
    <form
      action={createUser}
      className="max-w-lg flex flex-col gap-y-4 shadow rounded p-8 mx-auto"
    >
      <h2 className="capitalize mb-4">Create user</h2>
      <input
        type="text"
        name="firstName"
        defaultValue="Shade"
        className="outline-none border shadow rounded py-2 px-3 text-gray-700"
        required
      />
      <input
        type="text"
        name="lastName"
        defaultValue="VI"
        className="outline-none border shadow rounded py-2 px-3 text-gray-700"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize"
      >
        Submit
      </button>
    </form>
  );
}
export default FormActions;
