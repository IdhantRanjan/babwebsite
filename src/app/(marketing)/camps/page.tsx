import { redirect } from "next/navigation";

// Camps and workshops are now combined into a single Programs page.
const CampsPage = () => redirect("/programs");

export default CampsPage;
