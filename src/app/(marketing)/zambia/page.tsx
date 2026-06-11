import { ProgramArchivePage } from "@/components/program-archive";
import { PROGRAM_ARCHIVES } from "@/utils";

const data = PROGRAM_ARCHIVES.find((p) => p.slug === "zambia")!;

const ZambiaPage = () => <ProgramArchivePage data={data} />;

export default ZambiaPage;
