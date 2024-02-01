import { handleCommand } from "./commands-setup/handleCommand";
import { CreateLayersCommand } from "./commands-setup/layers-command/CreateLayersCommand";
import { CreateLayersCommandHandler } from "./commands-setup/layers-command/CreateLayersCommandHandler";

createInvisibleUiForBrowerApiAccess();

await handleCommand(new CreateLayersCommand());

function createInvisibleUiForBrowerApiAccess() {
  const html = "<body></body>";
  figma.showUI(html, { visible: false });
}
