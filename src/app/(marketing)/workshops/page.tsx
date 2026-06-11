import { redirect } from "next/navigation";

// Camps and workshops are now combined into a single Programs page.
const WorkshopsPage = () => redirect("/programs");

export default WorkshopsPage;
