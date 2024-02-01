import { CommandHandler } from "../CommandHandler";
import { CreateLayersCommand } from "./CreateLayersCommand";

export class CreateLayersCommandHandler
  implements CommandHandler<CreateLayersCommand>
{
  constructor(private readonly figma: PluginAPI) {}

  handle(command: CreateLayersCommand): Promise<void> | void {
    this.createPages();
    this.notifySuccess();
  }

  private notifySuccess() {
    const message = "Layers created successfully!";
    const options = { timeout: 5000 };
    this.figma.notify(message, options);
  }

  private createPages() {
    this.renameCurrentPageToCover();
    const pages = ["---", "Desktop", "Tablet", "Mobile", "---", "Graveyard"];
    pages.forEach((name) => this.createPage(name));
  }

  private renameCurrentPageToCover() {
    this.figma.currentPage.name = "Cover";
  }

  private createPage(name: string) {
    const page = this.figma.createPage();
    page.name = name;
  }
}
