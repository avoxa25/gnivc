interface Point {
    x: number,
    y: number
}

class Draw {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly context: CanvasRenderingContext2D;
    private readonly window: Window;

    constructor() {
        this.canvasElement = document.querySelector(`#myCanvas`) as HTMLCanvasElement;
        this.context = this.canvasElement.getContext(`2d`) as CanvasRenderingContext2D;
        this.window = globalThis.window;

        this.canvasElement.addEventListener(`mousedown`, (event) => {
            this.draw(event);
            this.isDrawing = true;
            this.context.beginPath();
        });
        this.canvasElement.addEventListener(`mousemove`, (event) => this.draw(event, this.isDrawing));
        this.canvasElement.addEventListener(`mouseup`, (event) => {
            this.drawRectangle(event);
            this.isDrawing = false;
        });
        this.window.addEventListener('load', () => {
            this.canvasElement.width = this.window.innerWidth;
            this.canvasElement.height = this.window.innerHeight;
        }, false);
    }

    private mouseCoords: Point = { x: 0, y: 0 };
    private topRight: Point = { x: 0, y: 0 };
    private bottomLeft: Point = { x: 0, y: 0 };
    private pointsX: Array<number> = [];
    private pointsY: Array<number> = [];
    private isDrawing: boolean = false;

    private draw(event: MouseEvent, isDrawing: boolean = false): void {
        if (isDrawing) {
            this.mouseCoords.x = event.pageX - this.canvasElement.offsetLeft;
            this.mouseCoords.y = event.pageY - this.canvasElement.offsetTop;
            this.pointsX.push(this.mouseCoords.x);
            this.pointsY.push(this.mouseCoords.y);

            this.context.lineTo(this.mouseCoords.x, this.mouseCoords.y);
            this.context.stroke();
        }
    }

    private drawRectangle(event: MouseEvent): void {
        this.draw(event);
        this.isDrawing = false;

        this.topRight = {
            x: Math.max(...this.pointsX),
            y: Math.max(...this.pointsY)
        }
        this.bottomLeft = {
            x: Math.min(...this.pointsX),
            y: Math.min(...this.pointsY)
        }

        this.context.rect(this.bottomLeft.x, this.bottomLeft.y,
            this.topRight.x - this.bottomLeft.x, this.topRight.y - this.bottomLeft.y);
        this.context.stroke();

        this.pointsX.length = 0;
        this.pointsY.length = 0;
    }
}

(window as any).Draw = new Draw();