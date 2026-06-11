import { ProgramArchivePage } from "@/components/program-archive";
import { PROGRAM_ARCHIVES } from "@/utils";

const data = PROGRAM_ARCHIVES.find((p) => p.slug === "xilin")!;

const XilinPage = () => <ProgramArchivePage data={data} />;

export default XilinPage;
