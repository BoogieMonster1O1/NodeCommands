class LiteralMessage implements Message {
    private readonly message: string;

    constructor(message: string) {
        this.message = message;
    }

    getString(): string {
        return this.message;
    }
}
