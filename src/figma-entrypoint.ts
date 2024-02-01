import { CreateLayersCommand } from "./commands-setup/CreateLayersCommand";
import { CreateLayersCommandHandler } from "./commands-setup/CreateLayersCommandHandler";
import { handleCommand } from "./commands-setup/handleCommand";

createInvisibleUiForBrowerApiAccess();

await handleCommand(new CreateLayersCommand());

function createInvisibleUiForBrowerApiAccess() {
  const html = "<body></body>";
  figma.showUI(html, { visible: false });
}
