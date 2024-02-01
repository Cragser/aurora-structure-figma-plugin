import { CreateLayersCommand } from "./CreateLayersCommand";
import { CommandHandler } from "./CommandHandler";

export class CreateLayersCommandHandler implements CommandHandler<CreateLayersCommand>
{
  constructor(private readonly figma: PluginAPI) {}

  handle(command: CreateLayersCommand): Promise<void> | void {
    const message = 'Hello from CreateLayersCommandHandler! 🎉';
    const options = { timeout: 5000 };
    this.figma.notify(message, options);
  }
}
