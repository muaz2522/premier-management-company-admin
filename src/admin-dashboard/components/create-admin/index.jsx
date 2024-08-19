import BreadCrumb from "../../ui/breadCrumb";
import CreateAdminForm from "./CreateAdminForm";

export default function Admin() {
    return (
        <section className="p-4">
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">Create a new User</span>
                <BreadCrumb to="/admin/create-admin" text="create-admin" />
            </div>
            <div className="text-lg py-8 px-12 rounded">
                <CreateAdminForm/>
            </div>
        </section>
    );
}