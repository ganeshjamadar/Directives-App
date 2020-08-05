import { Directive, ElementRef, OnInit, Renderer2 , HostListener, HostBinding, Input} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

    @Input() defaultColor: string = 'transparent';
    @Input("appBetterHighlight") highlightColor: string = 'blue';
    constructor(private elementRef: ElementRef, private rendereer: Renderer2){

    }
    ngOnInit(){
        this.backgroundColor = this.defaultColor;
        //this.rendereer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
    }
    @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor; 

    @HostListener('mouseover') mouseover(eventData: Event)
    {
        //this.rendereer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event)
    {
       // this.rendereer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
       this.backgroundColor = this.defaultColor;
    }

    
    
}