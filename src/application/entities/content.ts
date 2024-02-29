export class Content {
    private readonly content:string;

    get valeu(): string{
        return this.content;
    }

    private validadeContentLength(content: string):boolean {
        return content.length >= 5 && content.length <= 240;
    }
    constructor(content: string){
        const isContentLengthValid = this.validadeContentLength(content);

        if (!isContentLengthValid) {
            throw new Error('Content length error.');
        }

        this.content = content

    }
}