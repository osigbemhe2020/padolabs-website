// projectData/index.ts

import { clientDashboardProjects } from "./clientdashboard";
import { javascriptProjects } from "./javascriptProjects";
import { konnectuProjects } from "./konnectu";
import { landingPageProjects } from "./landingpage";
import { phineglowhairProjects } from "./phineglowhair";

export const Projects = [
  ...javascriptProjects,
  ...konnectuProjects,
  ...landingPageProjects,
  ...clientDashboardProjects,
  ...phineglowhairProjects
];